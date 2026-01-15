import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { PiggyBank, DollarSign, Percent, Calendar } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const SavingsCalculator = () => {
  const [initialDeposit, setInitialDeposit] = useState('');
  const [monthlyDeposit, setMonthlyDeposit] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState<{ finalBalance: number; totalDeposits: number; totalInterest: number } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const p = parseFloat(initialDeposit) || 0;
    const pmt = parseFloat(monthlyDeposit) || 0;
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;

    if (r < 0 || n <= 0 || (p <= 0 && pmt <= 0)) {
      setError('Please enter valid values. Either initial deposit or monthly deposit is required.');
      setResult(null);
      return;
    }

    let finalBalance: number;
    if (r === 0) {
      finalBalance = p + (pmt * n);
    } else {
      const compoundFactor = Math.pow(1 + r, n);
      finalBalance = p * compoundFactor + pmt * ((compoundFactor - 1) / r);
    }

    const totalDeposits = p + (pmt * n);
    const totalInterest = finalBalance - totalDeposits;

    setResult({
      finalBalance: Math.round(finalBalance * 100) / 100,
      totalDeposits: Math.round(totalDeposits * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
    });
  };

  const reset = () => {
    setInitialDeposit('');
    setMonthlyDeposit('');
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
      title="Savings Calculator"
      description="Plan your savings goals with regular deposits and compound interest."
      breadcrumbs={[
        { label: 'Finance', href: '/finance' },
        { label: 'Savings Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <PiggyBank className="w-5 h-5 text-primary" />
                Calculate Your Savings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="initialDeposit" className="text-foreground flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Initial Deposit ($)
                  </Label>
                  <Input id="initialDeposit" type="number" value={initialDeposit} onChange={(e) => setInitialDeposit(e.target.value)} placeholder="e.g., 5000" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="monthlyDeposit" className="text-foreground flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Monthly Deposit ($)
                  </Label>
                  <Input id="monthlyDeposit" type="number" value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(e.target.value)} placeholder="e.g., 500" className="mt-2" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="rate" className="text-foreground flex items-center gap-2">
                    <Percent className="w-4 h-4" />
                    Annual Interest Rate (%)
                  </Label>
                  <Input id="rate" type="number" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="e.g., 4.5" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="years" className="text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Time Period (years)
                  </Label>
                  <Input id="years" type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="e.g., 5" className="mt-2" />
                </div>
              </div>

              {error && <p className="text-destructive text-sm">{error}</p>}

              <div className="flex gap-3">
                <Button onClick={calculate} className="flex-1">Calculate Savings</Button>
                <Button variant="outline" onClick={reset}>Reset</Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground mb-2">Final Balance</p>
                    <p className="text-5xl font-bold text-primary">{formatCurrency(result.finalBalance)}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Total Deposits</p>
                      <p className="text-xl font-semibold text-foreground">{formatCurrency(result.totalDeposits)}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Interest Earned</p>
                      <p className="text-xl font-semibold text-green-500">{formatCurrency(result.totalInterest)}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'You start with $5,000 and save $500/month at 4.5% APY for 5 years.',
              calculation: 'Total deposits: $35,000. With compound interest: Final = $39,847',
              result: 'After 5 years, you have $39,847. Interest earned: $4,847',
            }}
            tips={[
              'Set up automatic transfers to ensure consistent saving.',
              'Even small regular deposits add up over time.',
              'Look for high-yield savings accounts.',
            ]}
            faqs={[
              { question: 'What is APY?', answer: 'Annual Percentage Yield includes compound interest effects.' },
              { question: 'How much should I save?', answer: 'The 50/30/20 rule suggests 20% for savings and debt.' },
            ]}
            relatedCalculators={[
              { title: 'Compound Interest Calculator', href: '/finance/compound-interest-calculator' },
              { title: 'Retirement Calculator', href: '/finance/retirement-calculator' },
            ]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>💰 Pay yourself first - save before spending.</p>
              <p>🏦 Maintain 3-6 months emergency fund.</p>
              <p>📈 Increase savings when you get a raise.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SavingsCalculator;
