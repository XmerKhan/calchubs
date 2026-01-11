import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Percent, ArrowRight } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const PercentageCalculator = () => {
  // Type 1: What is X% of Y?
  const [percent1, setPercent1] = useState('');
  const [value1, setValue1] = useState('');
  const [result1, setResult1] = useState<number | null>(null);

  // Type 2: X is what percent of Y?
  const [value2a, setValue2a] = useState('');
  const [value2b, setValue2b] = useState('');
  const [result2, setResult2] = useState<number | null>(null);

  // Type 3: Percentage change
  const [oldValue, setOldValue] = useState('');
  const [newValue, setNewValue] = useState('');
  const [result3, setResult3] = useState<{ change: number; type: string } | null>(null);

  const [error, setError] = useState('');

  const calculate1 = () => {
    setError('');
    const p = parseFloat(percent1);
    const v = parseFloat(value1);
    if (isNaN(p) || isNaN(v)) {
      setError('Please enter valid numbers.');
      setResult1(null);
      return;
    }
    setResult1(Math.round((p / 100) * v * 100) / 100);
  };

  const calculate2 = () => {
    setError('');
    const a = parseFloat(value2a);
    const b = parseFloat(value2b);
    if (isNaN(a) || isNaN(b) || b === 0) {
      setError('Please enter valid numbers. Denominator cannot be zero.');
      setResult2(null);
      return;
    }
    setResult2(Math.round((a / b) * 100 * 100) / 100);
  };

  const calculate3 = () => {
    setError('');
    const old = parseFloat(oldValue);
    const newVal = parseFloat(newValue);
    if (isNaN(old) || isNaN(newVal) || old === 0) {
      setError('Please enter valid numbers. Original value cannot be zero.');
      setResult3(null);
      return;
    }
    const change = ((newVal - old) / old) * 100;
    setResult3({
      change: Math.round(change * 100) / 100,
      type: change >= 0 ? 'increase' : 'decrease',
    });
  };

  const reset = () => {
    setPercent1('');
    setValue1('');
    setValue2a('');
    setValue2b('');
    setOldValue('');
    setNewValue('');
    setResult1(null);
    setResult2(null);
    setResult3(null);
    setError('');
  };

  return (
    <CalculatorLayout
      title="Percentage Calculator"
      description="Calculate percentages quickly and accurately for any scenario - discounts, tips, increases, and more."
      breadcrumbs={[
        { label: 'Math Calculators', href: '/math-calculators' },
        { label: 'Percentage Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Percent className="w-5 h-5 text-accent" />
                Percentage Calculations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="basic">Basic</TabsTrigger>
                  <TabsTrigger value="find">Find %</TabsTrigger>
                  <TabsTrigger value="change">% Change</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-6 mt-6">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-muted-foreground">What is</span>
                    <Input
                      type="number"
                      value={percent1}
                      onChange={(e) => setPercent1(e.target.value)}
                      placeholder="X"
                      className="w-24"
                    />
                    <span className="text-muted-foreground">% of</span>
                    <Input
                      type="number"
                      value={value1}
                      onChange={(e) => setValue1(e.target.value)}
                      placeholder="Y"
                      className="w-32"
                    />
                    <span className="text-muted-foreground">?</span>
                  </div>

                  <div className="flex gap-3">
                    <Button onClick={calculate1} className="flex-1">
                      Calculate
                    </Button>
                    <Button variant="outline" onClick={reset}>
                      Reset
                    </Button>
                  </div>

                  {result1 !== null && (
                    <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in text-center">
                      <p className="text-muted-foreground mb-2">Result</p>
                      <p className="text-4xl font-bold text-primary">{result1}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {percent1}% of {value1} = {result1}
                      </p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="find" className="space-y-6 mt-6">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Input
                      type="number"
                      value={value2a}
                      onChange={(e) => setValue2a(e.target.value)}
                      placeholder="X"
                      className="w-32"
                    />
                    <span className="text-muted-foreground">is what % of</span>
                    <Input
                      type="number"
                      value={value2b}
                      onChange={(e) => setValue2b(e.target.value)}
                      placeholder="Y"
                      className="w-32"
                    />
                    <span className="text-muted-foreground">?</span>
                  </div>

                  <div className="flex gap-3">
                    <Button onClick={calculate2} className="flex-1">
                      Calculate
                    </Button>
                    <Button variant="outline" onClick={reset}>
                      Reset
                    </Button>
                  </div>

                  {result2 !== null && (
                    <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in text-center">
                      <p className="text-muted-foreground mb-2">Result</p>
                      <p className="text-4xl font-bold text-primary">{result2}%</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {value2a} is {result2}% of {value2b}
                      </p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="change" className="space-y-6 mt-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-foreground">Original Value</Label>
                      <Input
                        type="number"
                        value={oldValue}
                        onChange={(e) => setOldValue(e.target.value)}
                        placeholder="e.g., 100"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-foreground">New Value</Label>
                      <Input
                        type="number"
                        value={newValue}
                        onChange={(e) => setNewValue(e.target.value)}
                        placeholder="e.g., 125"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button onClick={calculate3} className="flex-1">
                      Calculate Change
                    </Button>
                    <Button variant="outline" onClick={reset}>
                      Reset
                    </Button>
                  </div>

                  {result3 && (
                    <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in text-center">
                      <p className="text-muted-foreground mb-2">Percentage Change</p>
                      <p className={`text-4xl font-bold ${result3.change >= 0 ? 'text-accent' : 'text-destructive'}`}>
                        {result3.change >= 0 ? '+' : ''}{result3.change}%
                      </p>
                      <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-2">
                        {oldValue} <ArrowRight className="w-4 h-4" /> {newValue} ({result3.type})
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>

              {error && (
                <p className="text-destructive text-sm mt-4">{error}</p>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'A jacket originally costs $80. The store offers a 25% discount. How much will you save, and what is the final price?',
              calculation: 'Discount amount = 25% of $80 = (25/100) × 80 = $20\nFinal price = $80 - $20 = $60',
              result: 'You save $20 on the jacket, and the final price is $60.',
            }}
            tips={[
              'To find 10% of any number, simply move the decimal point one place to the left.',
              'To find 5%, calculate 10% and divide by 2.',
              'For percentage increase, use: (New - Old) / Old × 100.',
              'Double-check by working backwards: if 25% of 80 is 20, then 20/80 should equal 0.25.',
            ]}
            faqs={[
              {
                question: 'How do I calculate a tip?',
                answer: 'To calculate a 20% tip, find 10% of the bill and double it. For example, 20% of $50 is $10 (10% = $5, doubled = $10).',
              },
              {
                question: 'How do I calculate percentage off a price?',
                answer: 'Multiply the original price by the percentage as a decimal, then subtract from the original. For 30% off $100: $100 × 0.30 = $30 off, so $70 final.',
              },
              {
                question: 'What is the difference between percent and percentage points?',
                answer: 'Percent is relative (going from 10% to 12% is a 20% increase), while percentage points is absolute (going from 10% to 12% is 2 percentage points).',
              },
            ]}
            relatedCalculators={[
              { title: 'EMI Calculator', href: '/emi-calculator' },
              { title: 'Loan Calculator', href: '/loan-calculator' },
            ]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Quick Reference</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="p-2 bg-secondary/50 rounded text-center">
                  <p className="font-medium text-foreground">10%</p>
                  <p className="text-muted-foreground">÷ 10</p>
                </div>
                <div className="p-2 bg-secondary/50 rounded text-center">
                  <p className="font-medium text-foreground">25%</p>
                  <p className="text-muted-foreground">÷ 4</p>
                </div>
                <div className="p-2 bg-secondary/50 rounded text-center">
                  <p className="font-medium text-foreground">50%</p>
                  <p className="text-muted-foreground">÷ 2</p>
                </div>
                <div className="p-2 bg-secondary/50 rounded text-center">
                  <p className="font-medium text-foreground">75%</p>
                  <p className="text-muted-foreground">× 0.75</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Common Uses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>💰 Calculating discounts</p>
              <p>🧾 Figuring out tips</p>
              <p>📈 Measuring growth rates</p>
              <p>📊 Analyzing data</p>
              <p>🏷️ Price markups</p>
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

export default PercentageCalculator;
