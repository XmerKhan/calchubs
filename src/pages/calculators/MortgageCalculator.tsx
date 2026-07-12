import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Home, DollarSign, Percent, Calendar } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { FinanceExplainer } from '@/components/calculator/FinanceExplainer';
import { MortgageCharts } from '@/components/calculator/FinanceCharts';
import { financeExplainerContent } from '@/data/financeExplainerContent';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState<{
    monthlyPayment: number;
    loanAmount: number;
    totalPayment: number;
    totalInterest: number;
  } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const price = parseFloat(homePrice);
    const down = parseFloat(downPayment) || 0;
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(years) * 12;

    if (isNaN(price) || price <= 0 || isNaN(r) || r <= 0 || isNaN(n) || n <= 0) {
      setError('Please enter valid positive numbers.');
      setResult(null);
      return;
    }

    if (down >= price) {
      setError('Down payment cannot exceed home price.');
      setResult(null);
      return;
    }

    const principal = price - down;
    const monthlyPayment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - principal;

    setResult({
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      loanAmount: Math.round(principal * 100) / 100,
      totalPayment: Math.round(totalPayment * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
    });
  };

  const reset = () => {
    setHomePrice('');
    setDownPayment('');
    setRate('');
    setYears('');
    setResult(null);
    setError('');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <CalculatorLayout
      title="Mortgage Calculator"
      description="Calculate your monthly mortgage payments including principal and interest."
      breadcrumbs={[
        { label: 'Finance', href: '/finance' },
        { label: 'Mortgage Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Home className="w-5 h-5 text-primary" />
                Calculate Your Mortgage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="homePrice" className="text-foreground flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Home Price ($)
                  </Label>
                  <Input id="homePrice" type="number" value={homePrice} onChange={(e) => setHomePrice(e.target.value)} placeholder="e.g., 350000" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="downPayment" className="text-foreground flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Down Payment ($)
                  </Label>
                  <Input id="downPayment" type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} placeholder="e.g., 70000" className="mt-2" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="rate" className="text-foreground flex items-center gap-2">
                    <Percent className="w-4 h-4" />
                    Interest Rate (% per year)
                  </Label>
                  <Input id="rate" type="number" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="e.g., 6.5" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="years" className="text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Loan Term (years)
                  </Label>
                  <Input id="years" type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="e.g., 30" className="mt-2" />
                </div>
              </div>

              {error && <p className="text-destructive text-sm">{error}</p>}

              <div className="flex gap-3">
                <Button onClick={calculate} className="flex-1">Calculate Mortgage</Button>
                <Button variant="outline" onClick={reset}>Reset</Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground mb-2">Monthly Payment</p>
                    <p className="text-5xl font-bold text-primary">{formatCurrency(result.monthlyPayment)}</p>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Loan Amount</p>
                      <p className="text-lg font-semibold text-foreground">{formatCurrency(result.loanAmount)}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Total Interest</p>
                      <p className="text-lg font-semibold text-destructive">{formatCurrency(result.totalInterest)}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Total Payment</p>
                      <p className="text-lg font-semibold text-foreground">{formatCurrency(result.totalPayment)}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {result && (
            <MortgageCharts
              loanAmount={result.loanAmount}
              annualRatePct={parseFloat(rate)}
              years={parseFloat(years)}
            />
          )}

          <FinanceExplainer
            title="Understanding the Mortgage Calculator"
            content={financeExplainerContent['mortgage']}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Quick Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>🏠 Keep housing costs under 28% of income.</p>
              <p>💰 Larger down payment = better rates.</p>
              <p>📝 Get pre-approved before house hunting.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default MortgageCalculator;
