import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Building2, DollarSign, Percent, Calendar } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { FinanceExplainer } from '@/components/calculator/FinanceExplainer';
import { LoanCharts } from '@/components/calculator/FinanceCharts';
import { financeExplainerContent } from '@/data/financeExplainerContent';

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalInterest: number;
    totalPayment: number;
    schedule: { month: number; principal: number; interest: number; balance: number }[];
  } | null>(null);
  const [error, setError] = useState('');

  const calculateLoan = () => {
    setError('');

    const p = parseFloat(principal);
    const annualRate = parseFloat(rate);
    const y = parseFloat(years);

    if (isNaN(p) || isNaN(annualRate) || isNaN(y) || p <= 0 || annualRate <= 0 || y <= 0) {
      setError('Please enter valid positive numbers for all fields.');
      setResult(null);
      return;
    }

    const r = annualRate / 12 / 100;
    const n = y * 12;

    const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - p;

    // Generate amortization schedule (first 12 months)
    const schedule = [];
    let balance = p;
    for (let i = 1; i <= Math.min(12, n); i++) {
      const interestPayment = balance * r;
      const principalPayment = monthlyPayment - interestPayment;
      balance -= principalPayment;
      schedule.push({
        month: i,
        principal: Math.round(principalPayment * 100) / 100,
        interest: Math.round(interestPayment * 100) / 100,
        balance: Math.max(0, Math.round(balance * 100) / 100),
      });
    }

    setResult({
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      totalPayment: Math.round(totalPayment * 100) / 100,
      schedule,
    });
  };

  const reset = () => {
    setPrincipal('');
    setRate('');
    setYears('');
    setResult(null);
    setError('');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <CalculatorLayout
      title="Loan Calculator"
      description="Calculate monthly payments, total interest, and amortization schedule for any loan."
      breadcrumbs={[
        { label: 'Finance', href: '/finance' },
        { label: 'Loan Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Building2 className="w-5 h-5 text-primary" />
                Calculate Your Loan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="principal" className="text-foreground flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Loan Amount ($)
                </Label>
                <Input
                  id="principal"
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  placeholder="e.g., 250000"
                  className="mt-2"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="rate" className="text-foreground flex items-center gap-2">
                    <Percent className="w-4 h-4" />
                    Annual Interest Rate (%)
                  </Label>
                  <Input
                    id="rate"
                    type="number"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    placeholder="e.g., 6.5"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="years" className="text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Loan Term (years)
                  </Label>
                  <Input
                    id="years"
                    type="number"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    placeholder="e.g., 30"
                    className="mt-2"
                  />
                </div>
              </div>

              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}

              <div className="flex gap-3">
                <Button onClick={calculateLoan} className="flex-1">
                  Calculate Loan
                </Button>
                <Button variant="outline" onClick={reset}>
                  Reset
                </Button>
              </div>

              {result && (
                <div className="space-y-6 animate-scale-in">
                  <div className="p-6 bg-secondary/50 rounded-lg">
                    <div className="text-center mb-6">
                      <p className="text-muted-foreground mb-2">Monthly Payment</p>
                      <p className="text-5xl font-bold text-primary">{formatCurrency(result.monthlyPayment)}</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-background rounded-lg text-center">
                        <p className="text-muted-foreground text-sm">Total Interest</p>
                        <p className="text-xl font-semibold text-destructive">{formatCurrency(result.totalInterest)}</p>
                      </div>
                      <div className="p-4 bg-background rounded-lg text-center">
                        <p className="text-muted-foreground text-sm">Total Payment</p>
                        <p className="text-xl font-semibold text-foreground">{formatCurrency(result.totalPayment)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Amortization Schedule */}
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">Amortization Schedule (First Year)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="py-2 px-2 text-left text-muted-foreground">Month</th>
                              <th className="py-2 px-2 text-right text-muted-foreground">Principal</th>
                              <th className="py-2 px-2 text-right text-muted-foreground">Interest</th>
                              <th className="py-2 px-2 text-right text-muted-foreground">Balance</th>
                            </tr>
                          </thead>
                          <tbody>
                            {result.schedule.map((row) => (
                              <tr key={row.month} className="border-b border-border/50">
                                <td className="py-2 px-2 text-foreground">{row.month}</td>
                                <td className="py-2 px-2 text-right text-accent">{formatCurrency(row.principal)}</td>
                                <td className="py-2 px-2 text-right text-destructive">{formatCurrency(row.interest)}</td>
                                <td className="py-2 px-2 text-right text-foreground">{formatCurrency(row.balance)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>

          {result && (
            <LoanCharts
              principal={parseFloat(principal)}
              annualRatePct={parseFloat(rate)}
              years={parseFloat(years)}
            />
          )}

          <FinanceExplainer
            title="Understanding the Loan Calculator"
            content={financeExplainerContent['loan']}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Loan Terms Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p><strong className="text-foreground">Principal:</strong> The original loan amount borrowed.</p>
              <p><strong className="text-foreground">Interest:</strong> The cost of borrowing, expressed as a percentage.</p>
              <p><strong className="text-foreground">Term:</strong> The length of time to repay the loan.</p>
              <p><strong className="text-foreground">APR:</strong> Annual Percentage Rate including all fees.</p>
            </CardContent>
          </Card>

          <div className="p-4 bg-secondary/50 rounded-lg text-center text-muted-foreground text-sm border border-dashed border-border">
            Advertisement Space
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default LoanCalculator;
