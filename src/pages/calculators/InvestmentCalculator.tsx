import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign, Percent, Calendar } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const InvestmentCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState<{ futureValue: number; totalContributions: number; totalReturns: number } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const p = parseFloat(initialInvestment) || 0;
    const pmt = parseFloat(monthlyContribution) || 0;
    const r = parseFloat(expectedReturn) / 100 / 12;
    const n = parseFloat(years) * 12;

    if (r < 0 || n <= 0 || (p <= 0 && pmt <= 0)) {
      setError('Please enter valid values.');
      setResult(null);
      return;
    }

    let futureValue: number;
    if (r === 0) {
      futureValue = p + (pmt * n);
    } else {
      const compoundFactor = Math.pow(1 + r, n);
      futureValue = p * compoundFactor + pmt * ((compoundFactor - 1) / r);
    }

    const totalContributions = p + (pmt * n);
    const totalReturns = futureValue - totalContributions;

    setResult({
      futureValue: Math.round(futureValue * 100) / 100,
      totalContributions: Math.round(totalContributions * 100) / 100,
      totalReturns: Math.round(totalReturns * 100) / 100,
    });
  };

  const reset = () => {
    setInitialInvestment('');
    setMonthlyContribution('');
    setExpectedReturn('');
    setYears('');
    setResult(null);
    setError('');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <CalculatorLayout
      title="Investment Calculator"
      description="Calculate the future value of your investments with compound growth."
      breadcrumbs={[
        { label: 'Finance', href: '/finance' },
        { label: 'Investment Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <TrendingUp className="w-5 h-5 text-primary" />
                Calculate Investment Growth
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="initialInvestment" className="text-foreground flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Initial Investment ($)
                  </Label>
                  <Input id="initialInvestment" type="number" value={initialInvestment} onChange={(e) => setInitialInvestment(e.target.value)} placeholder="e.g., 10000" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="monthlyContribution" className="text-foreground flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Monthly Contribution ($)
                  </Label>
                  <Input id="monthlyContribution" type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} placeholder="e.g., 500" className="mt-2" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expectedReturn" className="text-foreground flex items-center gap-2">
                    <Percent className="w-4 h-4" />
                    Expected Annual Return (%)
                  </Label>
                  <Input id="expectedReturn" type="number" step="0.1" value={expectedReturn} onChange={(e) => setExpectedReturn(e.target.value)} placeholder="e.g., 8" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="years" className="text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Investment Period (years)
                  </Label>
                  <Input id="years" type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="e.g., 20" className="mt-2" />
                </div>
              </div>

              {error && <p className="text-destructive text-sm">{error}</p>}

              <div className="flex gap-3">
                <Button onClick={calculate} className="flex-1">Calculate</Button>
                <Button variant="outline" onClick={reset}>Reset</Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground mb-2">Future Value</p>
                    <p className="text-5xl font-bold text-primary">{formatCurrency(result.futureValue)}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Total Contributions</p>
                      <p className="text-xl font-semibold text-foreground">{formatCurrency(result.totalContributions)}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Investment Returns</p>
                      <p className="text-xl font-semibold text-green-500">{formatCurrency(result.totalReturns)}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'You invest $10,000 initially and add $500/month at 8% return for 20 years.',
              calculation: 'Total invested: $130,000. With compound growth: $344,392',
              result: 'After 20 years, your portfolio is worth $344,392. Returns: $214,392',
            }}
            tips={[
              'Start investing early - time in market beats timing.',
              'Diversify across asset classes.',
              'Consider low-cost index funds.',
            ]}
            faqs={[
              { question: 'What is a realistic return?', answer: 'S&P 500 historically returns about 10% annually before inflation.' },
              { question: 'Lump sum or monthly?', answer: 'Lump sum often outperforms, but monthly reduces timing risk.' },
            ]}
            relatedCalculators={[
              { title: 'Retirement Calculator', href: '/finance/retirement-calculator' },
              { title: 'Compound Interest Calculator', href: '/finance/compound-interest-calculator' },
            ]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>📊 Diversify to reduce risk.</p>
              <p>⏰ Time in market beats timing.</p>
              <p>💵 Maximize employer 401k match.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default InvestmentCalculator;
