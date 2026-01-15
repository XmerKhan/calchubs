import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, DollarSign, Percent, Calendar } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [frequency, setFrequency] = useState('12');
  const [result, setResult] = useState<{ finalAmount: number; interest: number; effectiveRate: number } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(frequency);

    if (isNaN(p) || isNaN(r) || isNaN(t) || isNaN(n) || p <= 0 || r < 0 || t <= 0 || n <= 0) {
      setError('Please enter valid positive numbers.');
      setResult(null);
      return;
    }

    // Compound Interest: A = P(1 + r/n)^(nt)
    const finalAmount = p * Math.pow(1 + r / n, n * t);
    const interest = finalAmount - p;
    const effectiveRate = (Math.pow(1 + r / n, n) - 1) * 100;

    setResult({
      finalAmount: Math.round(finalAmount * 100) / 100,
      interest: Math.round(interest * 100) / 100,
      effectiveRate: Math.round(effectiveRate * 1000) / 1000,
    });
  };

  const reset = () => {
    setPrincipal('');
    setRate('');
    setTime('');
    setFrequency('12');
    setResult(null);
    setError('');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <CalculatorLayout
      title="Compound Interest Calculator"
      description="Calculate compound interest with different compounding frequencies."
      breadcrumbs={[
        { label: 'Finance', href: '/finance' },
        { label: 'Compound Interest Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <LineChart className="w-5 h-5 text-primary" />
                Calculate Compound Interest
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="principal" className="text-foreground flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Principal Amount ($)
                </Label>
                <Input id="principal" type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} placeholder="e.g., 10000" className="mt-2" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="rate" className="text-foreground flex items-center gap-2">
                    <Percent className="w-4 h-4" />
                    Annual Interest Rate (%)
                  </Label>
                  <Input id="rate" type="number" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="e.g., 7" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="time" className="text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Time Period (years)
                  </Label>
                  <Input id="time" type="number" step="0.5" value={time} onChange={(e) => setTime(e.target.value)} placeholder="e.g., 10" className="mt-2" />
                </div>
              </div>

              <div>
                <Label htmlFor="frequency" className="text-foreground">Compounding Frequency</Label>
                <Select value={frequency} onValueChange={setFrequency}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Annually (1x/year)</SelectItem>
                    <SelectItem value="2">Semi-Annually (2x/year)</SelectItem>
                    <SelectItem value="4">Quarterly (4x/year)</SelectItem>
                    <SelectItem value="12">Monthly (12x/year)</SelectItem>
                    <SelectItem value="365">Daily (365x/year)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {error && <p className="text-destructive text-sm">{error}</p>}

              <div className="flex gap-3">
                <Button onClick={calculate} className="flex-1">Calculate</Button>
                <Button variant="outline" onClick={reset}>Reset</Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground mb-2">Final Amount</p>
                    <p className="text-5xl font-bold text-primary">{formatCurrency(result.finalAmount)}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Total Interest Earned</p>
                      <p className="text-xl font-semibold text-green-500">{formatCurrency(result.interest)}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Effective Annual Rate</p>
                      <p className="text-xl font-semibold text-foreground">{result.effectiveRate}%</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground"><strong>Formula:</strong> A = P(1 + r/n)^(n×t)</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'You invest $10,000 at 7% annual interest, compounded monthly for 10 years.',
              calculation: 'A = 10000(1 + 0.07/12)^(12×10) = $20,096.61',
              result: 'Your investment grows to $20,096.61. Total interest earned: $10,096.61',
            }}
            tips={[
              'More frequent compounding leads to higher returns.',
              'Start investing early to maximize compound growth.',
              'Reinvest dividends for additional compounding.',
            ]}
            faqs={[
              { question: 'What is compound interest?', answer: 'Interest calculated on both initial principal and accumulated interest from previous periods.' },
              { question: 'What is the Rule of 72?', answer: 'Divide 72 by your interest rate to estimate years to double your money.' },
            ]}
            relatedCalculators={[
              { title: 'Simple Interest Calculator', href: '/finance/simple-interest-calculator' },
              { title: 'Investment Calculator', href: '/finance/investment-calculator' },
            ]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Formula</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>📈 A = P(1 + r/n)^(nt)</p>
              <p>💵 P = Principal amount</p>
              <p>📊 r = Annual interest rate (decimal)</p>
              <p>🔄 n = Compounding frequency/year</p>
              <p>⏰ t = Time in years</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default CompoundInterestCalculator;
