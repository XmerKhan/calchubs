import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Target, DollarSign, Percent, Calendar } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState('');
  const [retirementAge, setRetirementAge] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [result, setResult] = useState<{ retirementBalance: number; totalContributions: number; totalReturns: number; monthlyWithdrawal: number } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const age = parseFloat(currentAge);
    const retAge = parseFloat(retirementAge);
    const savings = parseFloat(currentSavings) || 0;
    const monthly = parseFloat(monthlyContribution) || 0;
    const returnRate = parseFloat(expectedReturn) / 100 / 12;

    if (age >= retAge || age < 18 || retAge > 100) {
      setError('Please enter valid ages. Retirement age must be greater than current age.');
      setResult(null);
      return;
    }

    const monthsToRetirement = (retAge - age) * 12;
    let retirementBalance: number;
    
    if (returnRate === 0) {
      retirementBalance = savings + (monthly * monthsToRetirement);
    } else {
      const compoundFactor = Math.pow(1 + returnRate, monthsToRetirement);
      retirementBalance = savings * compoundFactor + monthly * ((compoundFactor - 1) / returnRate);
    }

    const totalContributions = savings + (monthly * monthsToRetirement);
    const totalReturns = retirementBalance - totalContributions;
    const monthlyWithdrawal = (retirementBalance * 0.04) / 12; // 4% rule

    setResult({
      retirementBalance: Math.round(retirementBalance * 100) / 100,
      totalContributions: Math.round(totalContributions * 100) / 100,
      totalReturns: Math.round(totalReturns * 100) / 100,
      monthlyWithdrawal: Math.round(monthlyWithdrawal * 100) / 100,
    });
  };

  const reset = () => {
    setCurrentAge('');
    setRetirementAge('');
    setCurrentSavings('');
    setMonthlyContribution('');
    setExpectedReturn('');
    setResult(null);
    setError('');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <CalculatorLayout
      title="Retirement Calculator"
      description="Plan for retirement with savings projections and withdrawal estimates."
      breadcrumbs={[
        { label: 'Finance', href: '/finance' },
        { label: 'Retirement Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Target className="w-5 h-5 text-primary" />
                Plan Your Retirement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currentAge" className="text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Current Age
                  </Label>
                  <Input id="currentAge" type="number" value={currentAge} onChange={(e) => setCurrentAge(e.target.value)} placeholder="e.g., 30" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="retirementAge" className="text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Retirement Age
                  </Label>
                  <Input id="retirementAge" type="number" value={retirementAge} onChange={(e) => setRetirementAge(e.target.value)} placeholder="e.g., 65" className="mt-2" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currentSavings" className="text-foreground flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Current Savings ($)
                  </Label>
                  <Input id="currentSavings" type="number" value={currentSavings} onChange={(e) => setCurrentSavings(e.target.value)} placeholder="e.g., 50000" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="monthlyContribution" className="text-foreground flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Monthly Contribution ($)
                  </Label>
                  <Input id="monthlyContribution" type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} placeholder="e.g., 1000" className="mt-2" />
                </div>
              </div>

              <div>
                <Label htmlFor="expectedReturn" className="text-foreground flex items-center gap-2">
                  <Percent className="w-4 h-4" />
                  Expected Annual Return (%)
                </Label>
                <Input id="expectedReturn" type="number" step="0.1" value={expectedReturn} onChange={(e) => setExpectedReturn(e.target.value)} placeholder="e.g., 7" className="mt-2" />
              </div>

              {error && <p className="text-destructive text-sm">{error}</p>}

              <div className="flex gap-3">
                <Button onClick={calculate} className="flex-1">Calculate</Button>
                <Button variant="outline" onClick={reset}>Reset</Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground mb-2">Retirement Balance</p>
                    <p className="text-5xl font-bold text-primary">{formatCurrency(result.retirementBalance)}</p>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Contributions</p>
                      <p className="text-lg font-semibold text-foreground">{formatCurrency(result.totalContributions)}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Returns</p>
                      <p className="text-lg font-semibold text-green-500">{formatCurrency(result.totalReturns)}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Monthly (4% rule)</p>
                      <p className="text-lg font-semibold text-foreground">{formatCurrency(result.monthlyWithdrawal)}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'A 30-year-old with $50,000 saved contributes $1,000/month at 7% until 65.',
              calculation: '35 years of saving. With compound growth: $1,847,520',
              result: 'At 65, you have $1.85M. Using 4% rule: $6,158/month withdrawal.',
            }}
            tips={[
              'Start early - compound growth is powerful.',
              'Maximize employer 401k matching.',
              'Increase contributions with raises.',
            ]}
            faqs={[
              { question: 'What is the 4% rule?', answer: 'Withdraw 4% annually to make savings last 30 years.' },
              { question: 'How much do I need?', answer: 'Common rule: 25x your annual expenses.' },
            ]}
            relatedCalculators={[
              { title: 'Investment Calculator', href: '/finance/investment-calculator' },
              { title: 'Savings Calculator', href: '/finance/savings-calculator' },
            ]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>🎯 Save 15% of income for retirement.</p>
              <p>💰 Max out tax-advantaged accounts.</p>
              <p>📈 Adjust allocation as you age.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default RetirementCalculator;
