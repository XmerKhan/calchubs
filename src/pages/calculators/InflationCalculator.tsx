import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BarChart3, DollarSign, Percent, Calendar } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const InflationCalculator = () => {
  const [currentAmount, setCurrentAmount] = useState('');
  const [inflationRate, setInflationRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState<{ futureValue: number; purchasingPower: number; totalInflation: number } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const amount = parseFloat(currentAmount);
    const rate = parseFloat(inflationRate) / 100;
    const y = parseFloat(years);

    if (isNaN(amount) || amount <= 0 || isNaN(rate) || rate < 0 || isNaN(y) || y <= 0) {
      setError('Please enter valid positive numbers.');
      setResult(null);
      return;
    }

    // Future value needed to maintain purchasing power
    const futureValue = amount * Math.pow(1 + rate, y);
    // Purchasing power of current amount in future
    const purchasingPower = amount / Math.pow(1 + rate, y);
    const totalInflation = ((futureValue - amount) / amount) * 100;

    setResult({
      futureValue: Math.round(futureValue * 100) / 100,
      purchasingPower: Math.round(purchasingPower * 100) / 100,
      totalInflation: Math.round(totalInflation * 100) / 100,
    });
  };

  const reset = () => {
    setCurrentAmount('');
    setInflationRate('');
    setYears('');
    setResult(null);
    setError('');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <CalculatorLayout
      title="Inflation Calculator"
      description="Calculate the impact of inflation on your money's purchasing power over time."
      breadcrumbs={[
        { label: 'Finance', href: '/finance' },
        { label: 'Inflation Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <BarChart3 className="w-5 h-5 text-primary" />
                Calculate Inflation Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="currentAmount" className="text-foreground flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Current Amount ($)
                </Label>
                <Input id="currentAmount" type="number" value={currentAmount} onChange={(e) => setCurrentAmount(e.target.value)} placeholder="e.g., 100000" className="mt-2" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="inflationRate" className="text-foreground flex items-center gap-2">
                    <Percent className="w-4 h-4" />
                    Annual Inflation Rate (%)
                  </Label>
                  <Input id="inflationRate" type="number" step="0.1" value={inflationRate} onChange={(e) => setInflationRate(e.target.value)} placeholder="e.g., 3" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="years" className="text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Time Period (years)
                  </Label>
                  <Input id="years" type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="e.g., 10" className="mt-2" />
                </div>
              </div>

              {error && <p className="text-destructive text-sm">{error}</p>}

              <div className="flex gap-3">
                <Button onClick={calculate} className="flex-1">Calculate</Button>
                <Button variant="outline" onClick={reset}>Reset</Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div className="text-center p-4 bg-background rounded-lg">
                      <p className="text-muted-foreground mb-2">You'll Need</p>
                      <p className="text-3xl font-bold text-primary">{formatCurrency(result.futureValue)}</p>
                      <p className="text-sm text-muted-foreground mt-1">to match today's value</p>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <p className="text-muted-foreground mb-2">Today's Money Worth</p>
                      <p className="text-3xl font-bold text-destructive">{formatCurrency(result.purchasingPower)}</p>
                      <p className="text-sm text-muted-foreground mt-1">in {years} years</p>
                    </div>
                  </div>
                  <div className="p-4 bg-background rounded-lg text-center">
                    <p className="text-muted-foreground text-sm">Total Inflation</p>
                    <p className="text-xl font-semibold text-foreground">{result.totalInflation}%</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'You have $100,000 today with 3% annual inflation over 10 years.',
              calculation: 'Future Value needed = $134,392. Purchasing power drops to $74,409',
              result: 'You need $134,392 in 10 years to buy what $100,000 buys today.',
            }}
            tips={[
              'Historical US inflation averages 2-3% annually.',
              'Investments should outpace inflation.',
              'Consider inflation when planning retirement.',
            ]}
            faqs={[
              { question: 'What causes inflation?', answer: 'Money supply growth, demand exceeding supply, rising costs.' },
              { question: 'How to protect against inflation?', answer: 'Invest in stocks, real estate, TIPS, and I-Bonds.' },
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
              <CardTitle className="text-foreground text-lg">Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>📊 US Fed targets 2% annual inflation.</p>
              <p>💰 Money loses ~25% value over 10 years at 3%.</p>
              <p>📈 Stocks return ~7% after inflation.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default InflationCalculator;
