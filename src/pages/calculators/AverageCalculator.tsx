import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BarChart3 } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const AverageCalculator = () => {
  const [numbers, setNumbers] = useState('');
  const [result, setResult] = useState<{ mean: number; median: number; mode: string; range: number; sum: number; count: number } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const numArray = numbers.split(/[,\s]+/).map(n => parseFloat(n.trim())).filter(n => !isNaN(n));

    if (numArray.length === 0) {
      setError('Please enter valid numbers separated by commas or spaces.');
      setResult(null);
      return;
    }

    // Mean
    const sum = numArray.reduce((a, b) => a + b, 0);
    const mean = sum / numArray.length;

    // Median
    const sorted = [...numArray].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

    // Mode
    const frequency: { [key: number]: number } = {};
    numArray.forEach(n => { frequency[n] = (frequency[n] || 0) + 1; });
    const maxFreq = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency).filter(key => frequency[parseFloat(key)] === maxFreq).map(k => parseFloat(k));
    const modeStr = maxFreq === 1 ? 'No mode' : modes.join(', ');

    // Range
    const range = Math.max(...numArray) - Math.min(...numArray);

    setResult({
      mean: Math.round(mean * 10000) / 10000,
      median: Math.round(median * 10000) / 10000,
      mode: modeStr,
      range: Math.round(range * 10000) / 10000,
      sum: Math.round(sum * 10000) / 10000,
      count: numArray.length,
    });
  };

  const reset = () => {
    setNumbers('');
    setResult(null);
    setError('');
  };

  return (
    <CalculatorLayout
      title="Average Calculator"
      description="Calculate mean, median, mode, and range for a set of numbers."
      breadcrumbs={[
        { label: 'Math', href: '/math' },
        { label: 'Average Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <BarChart3 className="w-5 h-5 text-primary" />
                Calculate Averages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="numbers" className="text-foreground">Enter Numbers (comma or space separated)</Label>
                <Input id="numbers" type="text" value={numbers} onChange={(e) => setNumbers(e.target.value)} placeholder="e.g., 10, 20, 30, 40, 50" className="mt-2" />
              </div>

              {error && <p className="text-destructive text-sm">{error}</p>}

              <div className="flex gap-3">
                <Button onClick={calculate} className="flex-1">Calculate</Button>
                <Button variant="outline" onClick={reset}>Reset</Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground mb-2">Mean (Average)</p>
                    <p className="text-5xl font-bold text-primary">{result.mean}</p>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 mb-4">
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Median</p>
                      <p className="text-xl font-semibold text-foreground">{result.median}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Mode</p>
                      <p className="text-xl font-semibold text-foreground">{result.mode}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Range</p>
                      <p className="text-xl font-semibold text-foreground">{result.range}</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Sum</p>
                      <p className="text-lg font-semibold text-foreground">{result.sum}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Count</p>
                      <p className="text-lg font-semibold text-foreground">{result.count}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'Your test scores are: 85, 90, 78, 92, 88',
              calculation: 'Mean = (85+90+78+92+88) / 5 = 86.6',
              result: 'Average score is 86.6, Median is 88, Range is 14.',
            }}
            tips={[
              'Use mean for general averages.',
              'Use median when data has outliers.',
              'Mode is useful for categorical data.',
            ]}
            faqs={[
              { question: 'When to use median vs mean?', answer: 'Use median when data has extreme outliers (like income data).' },
              { question: 'Can there be multiple modes?', answer: 'Yes! Data can be bimodal or multimodal.' },
            ]}
            relatedCalculators={[
              { title: 'Percentage Calculator', href: '/math/percentage-calculator' },
              { title: 'Fraction Calculator', href: '/math/fraction-calculator' },
            ]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Definitions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p><strong>Mean:</strong> Sum ÷ Count</p>
              <p><strong>Median:</strong> Middle value when sorted</p>
              <p><strong>Mode:</strong> Most frequent value</p>
              <p><strong>Range:</strong> Max - Min</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default AverageCalculator;
