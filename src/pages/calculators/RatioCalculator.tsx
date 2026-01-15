import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BarChart3 } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const RatioCalculator = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [d, setD] = useState('');
  const [result, setResult] = useState<{ missingValue: number; simplifiedRatio: string; equivalent: boolean } | null>(null);
  const [error, setError] = useState('');

  const gcd = (x: number, y: number): number => {
    x = Math.abs(x); y = Math.abs(y);
    while (y) { const t = y; y = x % y; x = t; }
    return x;
  };

  const calculate = () => {
    setError('');
    const aVal = parseFloat(a);
    const bVal = parseFloat(b);
    const cVal = parseFloat(c);
    const dVal = parseFloat(d);

    const empty = [a, b, c, d].filter(v => v === '').length;
    
    if (empty > 1) {
      setError('Please fill in at least 3 values.');
      setResult(null);
      return;
    }

    if (empty === 0) {
      if (bVal === 0 || dVal === 0) { setError('B and D cannot be zero.'); setResult(null); return; }
      const ratio1 = aVal / bVal;
      const ratio2 = cVal / dVal;
      const equivalent = Math.abs(ratio1 - ratio2) < 0.0001;
      const divisor = gcd(Math.round(aVal), Math.round(bVal));
      setResult({ missingValue: 0, simplifiedRatio: `${Math.round(aVal / divisor)}:${Math.round(bVal / divisor)}`, equivalent });
      return;
    }

    let missing: number;
    let simplified: string;
    
    if (a === '') {
      if (bVal === 0 || dVal === 0) { setError('B and D cannot be zero.'); setResult(null); return; }
      missing = (bVal * cVal) / dVal;
      const div = gcd(Math.round(missing), Math.round(bVal));
      simplified = `${Math.round(missing / div)}:${Math.round(bVal / div)}`;
    } else if (b === '') {
      if (cVal === 0) { setError('C cannot be zero.'); setResult(null); return; }
      missing = (aVal * dVal) / cVal;
      const div = gcd(Math.round(aVal), Math.round(missing));
      simplified = `${Math.round(aVal / div)}:${Math.round(missing / div)}`;
    } else if (c === '') {
      if (bVal === 0) { setError('B cannot be zero.'); setResult(null); return; }
      missing = (aVal * dVal) / bVal;
      const div = gcd(Math.round(aVal), Math.round(bVal));
      simplified = `${Math.round(aVal / div)}:${Math.round(bVal / div)}`;
    } else {
      if (bVal === 0 || cVal === 0) { setError('B and C cannot be zero.'); setResult(null); return; }
      missing = (bVal * cVal) / aVal;
      const div = gcd(Math.round(aVal), Math.round(bVal));
      simplified = `${Math.round(aVal / div)}:${Math.round(bVal / div)}`;
    }

    setResult({ missingValue: Math.round(missing * 10000) / 10000, simplifiedRatio: simplified, equivalent: true });
  };

  const reset = () => { setA(''); setB(''); setC(''); setD(''); setResult(null); setError(''); };

  return (
    <CalculatorLayout
      title="Ratio Calculator"
      description="Calculate and simplify ratios, find missing values in proportions."
      breadcrumbs={[{ label: 'Math', href: '/math' }, { label: 'Ratio Calculator' }]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <BarChart3 className="w-5 h-5 text-primary" />
                Calculate Ratios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-sm">Enter values to find a missing number or check equivalence. Leave one field empty to solve.</p>
              
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <div className="flex items-center gap-2">
                  <div>
                    <Label htmlFor="a" className="text-xs text-muted-foreground">A</Label>
                    <Input id="a" type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="A" className="w-20 text-center" />
                  </div>
                  <span className="text-2xl font-bold text-muted-foreground mt-5">:</span>
                  <div>
                    <Label htmlFor="b" className="text-xs text-muted-foreground">B</Label>
                    <Input id="b" type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="B" className="w-20 text-center" />
                  </div>
                </div>
                <span className="text-2xl font-bold text-primary mt-5">=</span>
                <div className="flex items-center gap-2">
                  <div>
                    <Label htmlFor="c" className="text-xs text-muted-foreground">C</Label>
                    <Input id="c" type="number" value={c} onChange={(e) => setC(e.target.value)} placeholder="C" className="w-20 text-center" />
                  </div>
                  <span className="text-2xl font-bold text-muted-foreground mt-5">:</span>
                  <div>
                    <Label htmlFor="d" className="text-xs text-muted-foreground">D</Label>
                    <Input id="d" type="number" value={d} onChange={(e) => setD(e.target.value)} placeholder="D" className="w-20 text-center" />
                  </div>
                </div>
              </div>

              {error && <p className="text-destructive text-sm">{error}</p>}

              <div className="flex gap-3">
                <Button onClick={calculate} className="flex-1">Calculate</Button>
                <Button variant="outline" onClick={reset}>Reset</Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  {result.missingValue !== 0 && (
                    <div className="text-center mb-6">
                      <p className="text-muted-foreground mb-2">Missing Value</p>
                      <p className="text-5xl font-bold text-primary">{result.missingValue}</p>
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Simplified Ratio</p>
                      <p className="text-xl font-semibold text-foreground">{result.simplifiedRatio}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Equivalent?</p>
                      <p className={`text-xl font-semibold ${result.equivalent ? 'text-green-500' : 'text-destructive'}`}>
                        {result.equivalent ? 'Yes ✓' : 'No ✗'}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{ title: 'Example', scenario: '2:3 = ?:9', calculation: '2 × 9 = 3 × ? → ? = 6', result: 'The missing value is 6.' }}
            tips={['Cross multiply: A×D = B×C', 'To simplify, divide by GCD.']}
            faqs={[{ question: 'Ratio vs proportion?', answer: 'Ratio compares two values; proportion states two ratios are equal.' }]}
            relatedCalculators={[{ title: 'Fraction Calculator', href: '/math/fraction-calculator' }, { title: 'Percentage Calculator', href: '/math/percentage-calculator' }]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader><CardTitle className="text-foreground text-lg">Tips</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>📐 A:B = C:D means A×D = B×C</p>
              <p>🔢 To simplify, divide by GCD.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default RatioCalculator;
