import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Building2, DollarSign, Percent, Calendar } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

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
      breadcrumbs={[{ label: 'Loan Calculator' }]}
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

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'The Smiths are buying a home for $300,000 with a 20% down payment, resulting in a $240,000 mortgage at 6.5% for 30 years.',
              calculation: 'P = $240,000, R = 6.5%/12 = 0.542%, N = 360 months\nMonthly = [240000 × 0.00542 × (1.00542)^360] / [(1.00542)^360 - 1] = $1,517',
              result: 'Monthly payment: $1,517. Over 30 years, they will pay $306,108 in interest, totaling $546,108.',
            }}
            tips={[
              'A 15-year loan has higher monthly payments but saves significantly on interest.',
              'Even small extra payments can reduce your loan term substantially.',
              'Consider refinancing if interest rates drop significantly.',
              'Keep your total housing costs below 28% of gross monthly income.',
            ]}
            faqs={[
              {
                question: 'What is amortization?',
                answer: 'Amortization is the process of paying off debt over time through regular payments. Each payment covers both interest and principal, with the interest portion decreasing over time.',
              },
              {
                question: 'Should I choose a 15-year or 30-year loan?',
                answer: '15-year loans have higher monthly payments but lower interest rates and much less total interest. 30-year loans offer lower monthly payments but cost more overall.',
              },
              {
                question: 'How do extra payments affect my loan?',
                answer: 'Extra payments go directly toward principal, reducing the balance faster and saving interest. Even one extra payment per year can cut years off your loan.',
              },
            ]}
            relatedCalculators={[
              { title: 'EMI Calculator', href: '/emi-calculator' },
              { title: 'Percentage Calculator', href: '/percentage-calculator' },
            ]}
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
