import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Superscript } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const PowerCalculator = () => {
  const [base, setBase] = useState('');
  const [exponent, setExponent] = useState('');
  const [result, setResult] = useState<{ power: number; scientific: string } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const b = parseFloat(base);
    const e = parseFloat(exponent);

    if (isNaN(b) || isNaN(e)) { setError('Please enter valid numbers.'); setResult(null); return; }
    if (b === 0 && e < 0) { setError('Cannot raise 0 to negative power.'); setResult(null); return; }

    const power = Math.pow(b, e);
    if (!isFinite(power)) { setError('Result is too large or small.'); setResult(null); return; }

    setResult({
      power: Math.round(power * 1000000) / 1000000,
      scientific: power.toExponential(6),
    });
  };

  const reset = () => { setBase(''); setExponent(''); setResult(null); setError(''); };

  return (
    <CalculatorLayout
      title="Power Calculator"
      description="Calculate powers and exponents for any base and exponent values."
      breadcrumbs={[{ label: 'Math', href: '/math' }, { label: 'Power Calculator' }]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Superscript className="w-5 h-5 text-primary" />
                Calculate Powers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="base" className="text-foreground">Base Number</Label>
                  <Input id="base" type="number" value={base} onChange={(e) => setBase(e.target.value)} placeholder="e.g., 2" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="exponent" className="text-foreground">Exponent (Power)</Label>
                  <Input id="exponent" type="number" value={exponent} onChange={(e) => setExponent(e.target.value)} placeholder="e.g., 8" className="mt-2" />
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
                    <p className="text-muted-foreground mb-2">{base}<sup>{exponent}</sup> =</p>
                    <p className="text-5xl font-bold text-primary">{result.power}</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg text-center">
                    <p className="text-muted-foreground text-sm">Scientific Notation</p>
                    <p className="text-xl font-semibold text-foreground">{result.scientific}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{ title: 'Example', scenario: '2^10 = ?', calculation: '2^10 = 1,024 (1 KB in computing)', result: '2 raised to power 10 equals 1,024.' }}
            tips={['Any number^0 = 1', 'Negative exponents give fractions: x^(-n) = 1/x^n']}
            faqs={[{ question: 'What is a negative exponent?', answer: '2^(-3) = 1/(2^3) = 1/8 = 0.125' }]}
            relatedCalculators={[{ title: 'Square Root Calculator', href: '/math/square-root-calculator' }, { title: 'Percentage Calculator', href: '/math/percentage-calculator' }]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader><CardTitle className="text-foreground text-lg">Power Rules</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>x^0 = 1</p>
              <p>x^1 = x</p>
              <p>x^(-n) = 1/x^n</p>
              <p>x^a × x^b = x^(a+b)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default PowerCalculator;
