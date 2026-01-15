import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Radical } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const SquareRootCalculator = () => {
  const [number, setNumber] = useState('');
  const [nthRoot, setNthRoot] = useState('2');
  const [result, setResult] = useState<{ root: number; squared: number; isPerfect: boolean } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const num = parseFloat(number);
    const n = parseFloat(nthRoot);

    if (isNaN(num) || isNaN(n)) { setError('Please enter valid numbers.'); setResult(null); return; }
    if (n <= 0 || n !== Math.floor(n)) { setError('Root index must be a positive integer.'); setResult(null); return; }
    if (num < 0 && n % 2 === 0) { setError('Cannot calculate even root of negative number.'); setResult(null); return; }

    let rootValue: number;
    if (num < 0) { rootValue = -Math.pow(Math.abs(num), 1 / n); }
    else { rootValue = Math.pow(num, 1 / n); }

    const rounded = Math.round(rootValue);
    const isPerfect = Math.abs(Math.pow(rounded, n) - num) < 0.0001;

    setResult({
      root: Math.round(rootValue * 1000000) / 1000000,
      squared: Math.round(rootValue * rootValue * 1000000) / 1000000,
      isPerfect,
    });
  };

  const reset = () => { setNumber(''); setNthRoot('2'); setResult(null); setError(''); };

  const getRootSymbol = () => {
    const n = parseInt(nthRoot);
    if (n === 2) return '√';
    if (n === 3) return '∛';
    if (n === 4) return '∜';
    return `${n}√`;
  };

  return (
    <CalculatorLayout
      title="Square Root Calculator"
      description="Calculate square roots, cube roots, and nth roots of any number."
      breadcrumbs={[{ label: 'Math', href: '/math' }, { label: 'Square Root Calculator' }]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Radical className="w-5 h-5 text-primary" />
                Calculate Roots
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="number" className="text-foreground">Number</Label>
                  <Input id="number" type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="e.g., 25" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="nthRoot" className="text-foreground">Root Index (n)</Label>
                  <Input id="nthRoot" type="number" min="1" value={nthRoot} onChange={(e) => setNthRoot(e.target.value)} placeholder="2 for square root" className="mt-2" />
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
                    <p className="text-muted-foreground mb-2">{getRootSymbol()}{number} =</p>
                    <p className="text-5xl font-bold text-primary">{result.root}</p>
                    {result.isPerfect && (
                      <span className="inline-block mt-2 px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">
                        Perfect {nthRoot === '2' ? 'Square' : nthRoot === '3' ? 'Cube' : `${nthRoot}th Power`}
                      </span>
                    )}
                  </div>
                  <div className="p-4 bg-background rounded-lg text-center">
                    <p className="text-muted-foreground text-sm">Result²</p>
                    <p className="text-xl font-semibold text-foreground">{result.squared}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{ title: 'Example', scenario: 'Find √144', calculation: '√144 = 12 (12 × 12 = 144)', result: 'Each side of a 144 sq ft garden is 12 feet.' }}
            tips={['Perfect squares: 1, 4, 9, 16, 25, 36...', 'Use n=3 for cube root.']}
            faqs={[{ question: 'What is a perfect square?', answer: 'An integer that is the square of another integer (e.g., 9 = 3²).' }]}
            relatedCalculators={[{ title: 'Power Calculator', href: '/math/power-calculator' }, { title: 'Percentage Calculator', href: '/math/percentage-calculator' }]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader><CardTitle className="text-foreground text-lg">Common Roots</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>√2 ≈ 1.414</p>
              <p>√3 ≈ 1.732</p>
              <p>√5 ≈ 2.236</p>
              <p>∛2 ≈ 1.260</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default SquareRootCalculator;
