import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Activity, Scale, Ruler } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('metric');
  const [result, setResult] = useState<{ bmi: number; category: string; color: string } | null>(null);
  const [error, setError] = useState('');

  const calculateBMI = () => {
    setError('');
    
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      setError('Please enter valid positive numbers for height and weight.');
      setResult(null);
      return;
    }

    let bmi: number;
    if (unit === 'metric') {
      const heightInMeters = h / 100;
      bmi = w / (heightInMeters * heightInMeters);
    } else {
      bmi = (w / (h * h)) * 703;
    }

    let category: string;
    let color: string;
    if (bmi < 18.5) {
      category = 'Underweight';
      color = 'text-primary';
    } else if (bmi < 25) {
      category = 'Normal weight';
      color = 'text-accent';
    } else if (bmi < 30) {
      category = 'Overweight';
      color = 'text-warning';
    } else {
      category = 'Obese';
      color = 'text-destructive';
    }

    setResult({ bmi: Math.round(bmi * 10) / 10, category, color });
  };

  const reset = () => {
    setHeight('');
    setWeight('');
    setResult(null);
    setError('');
  };

  return (
    <CalculatorLayout
      title="BMI Calculator"
      description="Calculate your Body Mass Index to understand if you are at a healthy weight for your height."
      breadcrumbs={[{ label: 'BMI Calculator' }]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Activity className="w-5 h-5 text-primary" />
                Calculate Your BMI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-foreground">Unit System</Label>
                <Select value={unit} onValueChange={setUnit}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="metric">Metric (cm, kg)</SelectItem>
                    <SelectItem value="imperial">Imperial (in, lbs)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="height" className="text-foreground flex items-center gap-2">
                    <Ruler className="w-4 h-4" />
                    Height ({unit === 'metric' ? 'cm' : 'inches'})
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder={unit === 'metric' ? 'e.g., 175' : 'e.g., 69'}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="weight" className="text-foreground flex items-center gap-2">
                    <Scale className="w-4 h-4" />
                    Weight ({unit === 'metric' ? 'kg' : 'lbs'})
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder={unit === 'metric' ? 'e.g., 70' : 'e.g., 154'}
                    className="mt-2"
                  />
                </div>
              </div>

              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}

              <div className="flex gap-3">
                <Button onClick={calculateBMI} className="flex-1">
                  Calculate BMI
                </Button>
                <Button variant="outline" onClick={reset}>
                  Reset
                </Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-2">Your BMI is</p>
                    <p className={`text-5xl font-bold ${result.color}`}>{result.bmi}</p>
                    <p className={`text-xl font-medium mt-2 ${result.color}`}>{result.category}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Formula used:</strong> BMI = weight (kg) / height² (m²)
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'John is 175 cm tall and weighs 70 kg. He wants to know if he is at a healthy weight.',
              calculation: 'BMI = 70 / (1.75 × 1.75) = 70 / 3.0625 = 22.9',
              result: 'With a BMI of 22.9, John falls in the "Normal weight" category, which is considered healthy.',
            }}
            tips={[
              'Measure your height without shoes for accuracy.',
              'Weigh yourself in the morning before eating for consistent results.',
              'BMI is a screening tool and may not apply to athletes with high muscle mass.',
              'Consult a healthcare provider for a complete health assessment.',
            ]}
            faqs={[
              {
                question: 'What is a healthy BMI range?',
                answer: 'A BMI between 18.5 and 24.9 is considered normal weight. Below 18.5 is underweight, 25-29.9 is overweight, and 30 or above is obese.',
              },
              {
                question: 'Is BMI accurate for everyone?',
                answer: 'BMI may not be accurate for athletes, elderly people, or pregnant women. It does not distinguish between muscle and fat mass.',
              },
              {
                question: 'How often should I check my BMI?',
                answer: 'Checking your BMI once a month or when you notice significant weight changes is sufficient for most people.',
              },
            ]}
            relatedCalculators={[
              { title: 'Calorie Calculator', href: '/calorie-calculator' },
              { title: 'Percentage Calculator', href: '/percentage-calculator' },
            ]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">BMI Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                <span className="text-foreground">Underweight</span>
                <span className="text-primary font-medium">&lt; 18.5</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg">
                <span className="text-foreground">Normal</span>
                <span className="text-accent font-medium">18.5 - 24.9</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-warning/10 rounded-lg">
                <span className="text-foreground">Overweight</span>
                <span className="text-foreground font-medium">25 - 29.9</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-destructive/10 rounded-lg">
                <span className="text-foreground">Obese</span>
                <span className="text-destructive font-medium">&gt; 30</span>
              </div>
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

export default BMICalculator;
