import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Divide } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const FractionCalculator = () => {
  const [num1, setNum1] = useState('');
  const [den1, setDen1] = useState('');
  const [num2, setNum2] = useState('');
  const [den2, setDen2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState<{ numerator: number; denominator: number; decimal: number; simplified: string } | null>(null);
  const [error, setError] = useState('');

  const gcd = (a: number, b: number): number => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) { const t = b; b = a % b; a = t; }
    return a;
  };

  const simplify = (num: number, den: number): string => {
    if (den === 0) return 'undefined';
    const divisor = gcd(num, den);
    const sNum = num / divisor;
    const sDen = den / divisor;
    if (sDen === 1) return `${sNum}`;
    if (sDen < 0) return `${-sNum}/${-sDen}`;
    return `${sNum}/${sDen}`;
  };

  const calculate = () => {
    setError('');
    const n1 = parseInt(num1);
    const d1 = parseInt(den1);
    const n2 = parseInt(num2);
    const d2 = parseInt(den2);

    if (isNaN(n1) || isNaN(d1) || isNaN(n2) || isNaN(d2)) {
      setError('Please enter valid integers.');
      setResult(null);
      return;
    }

    if (d1 === 0 || d2 === 0) {
      setError('Denominators cannot be zero.');
      setResult(null);
      return;
    }

    if (operation === 'divide' && n2 === 0) {
      setError('Cannot divide by zero.');
      setResult(null);
      return;
    }

    let resNum: number, resDen: number;

    switch (operation) {
      case 'add': resNum = n1 * d2 + n2 * d1; resDen = d1 * d2; break;
      case 'subtract': resNum = n1 * d2 - n2 * d1; resDen = d1 * d2; break;
      case 'multiply': resNum = n1 * n2; resDen = d1 * d2; break;
      case 'divide': resNum = n1 * d2; resDen = d1 * n2; break;
      default: resNum = 0; resDen = 1;
    }

    setResult({
      numerator: resNum,
      denominator: resDen,
      decimal: Math.round((resNum / resDen) * 10000) / 10000,
      simplified: simplify(resNum, resDen),
    });
  };

  const reset = () => {
    setNum1(''); setDen1(''); setNum2(''); setDen2('');
    setOperation('add'); setResult(null); setError('');
  };

  const operationSymbol = { add: '+', subtract: '−', multiply: '×', divide: '÷' };

  return (
    <CalculatorLayout
      title="Fraction Calculator"
      description="Add, subtract, multiply, and divide fractions with step-by-step solutions."
      breadcrumbs={[
        { label: 'Math', href: '/math' },
        { label: 'Fraction Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Divide className="w-5 h-5 text-primary" />
                Calculate Fractions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex flex-col items-center">
                  <Input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Num" className="w-20 text-center" />
                  <div className="w-20 h-0.5 bg-foreground my-1"></div>
                  <Input type="number" value={den1} onChange={(e) => setDen1(e.target.value)} placeholder="Den" className="w-20 text-center" />
                </div>

                <Select value={operation} onValueChange={setOperation}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="add">+ Add</SelectItem>
                    <SelectItem value="subtract">− Subtract</SelectItem>
                    <SelectItem value="multiply">× Multiply</SelectItem>
                    <SelectItem value="divide">÷ Divide</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex flex-col items-center">
                  <Input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Num" className="w-20 text-center" />
                  <div className="w-20 h-0.5 bg-foreground my-1"></div>
                  <Input type="number" value={den2} onChange={(e) => setDen2(e.target.value)} placeholder="Den" className="w-20 text-center" />
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
                    <p className="text-muted-foreground mb-2">
                      {num1}/{den1} {operationSymbol[operation as keyof typeof operationSymbol]} {num2}/{den2} =
                    </p>
                    <p className="text-5xl font-bold text-primary">{result.simplified}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Unsimplified</p>
                      <p className="text-xl font-semibold text-foreground">{result.numerator}/{result.denominator}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Decimal</p>
                      <p className="text-xl font-semibold text-foreground">{result.decimal}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'You eat 1/4 of a pizza, then 2/8 more.',
              calculation: '1/4 + 2/8 = 8/32 + 8/32 = 16/32 = 1/2',
              result: 'You ate 1/2 of the pizza.',
            }}
            tips={[
              'To add/subtract: find common denominator.',
              'To multiply: multiply numerators, then denominators.',
              'To divide: multiply by reciprocal.',
            ]}
            faqs={[
              { question: 'How to simplify?', answer: 'Divide both by their GCD (Greatest Common Divisor).' },
              { question: 'What is a reciprocal?', answer: 'Flip the fraction: reciprocal of 3/4 is 4/3.' },
            ]}
            relatedCalculators={[
              { title: 'Ratio Calculator', href: '/math/ratio-calculator' },
              { title: 'Percentage Calculator', href: '/math/percentage-calculator' },
            ]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Rules</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p><strong>Add:</strong> a/b + c/d = (ad + bc) / bd</p>
              <p><strong>Subtract:</strong> a/b − c/d = (ad − bc) / bd</p>
              <p><strong>Multiply:</strong> a/b × c/d = ac / bd</p>
              <p><strong>Divide:</strong> a/b ÷ c/d = ad / bc</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default FractionCalculator;
