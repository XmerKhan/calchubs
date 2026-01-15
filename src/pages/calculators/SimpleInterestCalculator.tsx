import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign, Percent, Calendar } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState<{ interest: number; totalAmount: number } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);

    if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || r < 0 || t <= 0) {
      setError('Please enter valid positive numbers.');
      setResult(null);
      return;
    }

    // Simple Interest: SI = (P × R × T) / 100
    const interest = (p * r * t) / 100;
    const totalAmount = p + interest;

    setResult({
      interest: Math.round(interest * 100) / 100,
      totalAmount: Math.round(totalAmount * 100) / 100,
    });
  };

  const reset = () => {
    setPrincipal('');
    setRate('');
    setTime('');
    setResult(null);
    setError('');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <CalculatorLayout
      title="Simple Interest Calculator"
      description="Calculate simple interest on your principal amount over time."
      breadcrumbs={[
        { label: 'Finance', href: '/finance' },
        { label: 'Simple Interest Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <TrendingUp className="w-5 h-5 text-primary" />
                Calculate Simple Interest
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
                    Interest Rate (% per year)
                  </Label>
                  <Input id="rate" type="number" step="0.1" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="e.g., 5" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="time" className="text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Time Period (years)
                  </Label>
                  <Input id="time" type="number" step="0.5" value={time} onChange={(e) => setTime(e.target.value)} placeholder="e.g., 3" className="mt-2" />
                </div>
              </div>

              {error && <p className="text-destructive text-sm">{error}</p>}

              <div className="flex gap-3">
                <Button onClick={calculate} className="flex-1">Calculate Interest</Button>
                <Button variant="outline" onClick={reset}>Reset</Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground mb-2">Simple Interest Earned</p>
                    <p className="text-5xl font-bold text-primary">{formatCurrency(result.interest)}</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg text-center">
                    <p className="text-muted-foreground text-sm">Total Amount (Principal + Interest)</p>
                    <p className="text-2xl font-semibold text-foreground">{formatCurrency(result.totalAmount)}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground"><strong>Formula:</strong> SI = (P × R × T) / 100</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'You deposit $10,000 at 5% simple interest for 3 years.',
              calculation: 'SI = (10000 × 5 × 3) / 100 = $1,500',
              result: 'You earn $1,500 in interest. Total: $11,500',
            }}
            tips={[
              'Simple interest is best for short-term loans.',
              'Interest is calculated only on the original principal.',
              'Compare with compound interest for long-term investments.',
            ]}
            faqs={[
              { question: 'What is simple interest?', answer: 'Interest calculated only on the initial principal, not on accumulated interest.' },
              { question: 'When is simple interest used?', answer: 'Common for short-term loans, auto loans, and some personal loans.' },
            ]}
            relatedCalculators={[
              { title: 'Compound Interest Calculator', href: '/finance/compound-interest-calculator' },
              { title: 'Savings Calculator', href: '/finance/savings-calculator' },
            ]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Formula</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>📐 SI = (P × R × T) / 100</p>
              <p>💵 P = Principal amount</p>
              <p>📊 R = Rate of interest per year</p>
              <p>⏰ T = Time period in years</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SimpleInterestCalculator;
