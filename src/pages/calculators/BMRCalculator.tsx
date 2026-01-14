import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Flame, User, Ruler, Scale, Calendar } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const BMRCalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('metric');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const calculateBMR = () => {
    setError('');
    
    const a = parseFloat(age);
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (isNaN(a) || isNaN(h) || isNaN(w) || a <= 0 || h <= 0 || w <= 0) {
      setError('Please enter valid positive numbers for all fields.');
      setResult(null);
      return;
    }

    if (a < 15 || a > 120) {
      setError('Please enter an age between 15 and 120 years.');
      setResult(null);
      return;
    }

    let heightCm = h;
    let weightKg = w;

    if (unit === 'imperial') {
      heightCm = h * 2.54;
      weightKg = w * 0.453592;
    }

    // Mifflin-St Jeor Equation
    let bmr: number;
    if (gender === 'male') {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * a + 5;
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * a - 161;
    }

    setResult(Math.round(bmr));
  };

  const reset = () => {
    setAge('');
    setGender('male');
    setHeight('');
    setWeight('');
    setResult(null);
    setError('');
  };

  return (
    <CalculatorLayout
      title="BMR Calculator"
      description="Calculate your Basal Metabolic Rate using the Mifflin-St Jeor equation to understand your daily calorie needs at rest."
      breadcrumbs={[
        { label: 'Health & Fitness', href: '/health-fitness-calculators' },
        { label: 'BMR Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Flame className="w-5 h-5 text-primary" />
                Calculate Your BMR
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
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
                <div>
                  <Label className="text-foreground flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Gender
                  </Label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="age" className="text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Age (years)
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="e.g., 30"
                    className="mt-2"
                  />
                </div>
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

              {error && <p className="text-destructive text-sm">{error}</p>}

              <div className="flex gap-3">
                <Button onClick={calculateBMR} className="flex-1">
                  Calculate BMR
                </Button>
                <Button variant="outline" onClick={reset}>
                  Reset
                </Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-2">Your Basal Metabolic Rate is</p>
                    <p className="text-5xl font-bold text-primary">{result.toLocaleString()}</p>
                    <p className="text-xl font-medium mt-2 text-muted-foreground">calories/day</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Formula used (Mifflin-St Jeor):</strong><br />
                      {gender === 'male' 
                        ? 'BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age + 5'
                        : 'BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age - 161'}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'Sarah is a 30-year-old female, 165 cm tall and weighs 60 kg. She wants to know her BMR.',
              calculation: 'BMR = 10 × 60 + 6.25 × 165 - 5 × 30 - 161 = 600 + 1031.25 - 150 - 161 = 1,320 calories/day',
              result: 'Sarah\'s body burns approximately 1,320 calories per day at complete rest.',
            }}
            tips={[
              'BMR represents calories burned at complete rest - your body needs this just to survive.',
              'To find total daily calories, multiply BMR by your activity factor (TDEE).',
              'BMR decreases with age, which is why weight management becomes harder as we age.',
              'Building muscle can increase your BMR since muscle burns more calories than fat.',
            ]}
            faqs={[
              {
                question: 'What is the difference between BMR and TDEE?',
                answer: 'BMR is the calories burned at rest, while TDEE (Total Daily Energy Expenditure) includes BMR plus calories burned through daily activities and exercise.',
              },
              {
                question: 'Why is the Mifflin-St Jeor formula considered accurate?',
                answer: 'Studies show that the Mifflin-St Jeor equation is the most accurate for estimating BMR, predicting actual metabolic rate within 10% for most people.',
              },
              {
                question: 'Does BMR change over time?',
                answer: 'Yes, BMR decreases as you age and can be affected by muscle mass, hormones, and overall health.',
              },
            ]}
            relatedCalculators={[
              { title: 'TDEE Calculator', href: '/tdee-calculator' },
              { title: 'Calorie Calculator', href: '/calorie-calculator' },
              { title: 'BMI Calculator', href: '/bmi-calculator' },
            ]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Activity Multipliers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-secondary/50 rounded-lg">
                <span className="font-medium text-foreground">Sedentary</span>
                <p className="text-sm text-muted-foreground">BMR × 1.2</p>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg">
                <span className="font-medium text-foreground">Light Activity</span>
                <p className="text-sm text-muted-foreground">BMR × 1.375</p>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg">
                <span className="font-medium text-foreground">Moderate Activity</span>
                <p className="text-sm text-muted-foreground">BMR × 1.55</p>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg">
                <span className="font-medium text-foreground">Very Active</span>
                <p className="text-sm text-muted-foreground">BMR × 1.725</p>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg">
                <span className="font-medium text-foreground">Extra Active</span>
                <p className="text-sm text-muted-foreground">BMR × 1.9</p>
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

export default BMRCalculator;
