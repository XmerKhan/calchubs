import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Zap, User, Ruler, Scale, Calendar, Activity } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const TDEECalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('metric');
  const [activity, setActivity] = useState('moderate');
  const [result, setResult] = useState<{
    bmr: number;
    tdee: number;
    maintain: number;
    mildLoss: number;
    weightLoss: number;
    mildGain: number;
    weightGain: number;
  } | null>(null);
  const [error, setError] = useState('');

  const calculateTDEE = () => {
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

    // Mifflin-St Jeor Equation for BMR
    let bmr: number;
    if (gender === 'male') {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * a + 5;
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * a - 161;
    }

    // Activity multipliers
    const multipliers: Record<string, number> = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    const tdee = Math.round(bmr * multipliers[activity]);

    setResult({
      bmr: Math.round(bmr),
      tdee,
      maintain: tdee,
      mildLoss: Math.round(tdee * 0.9), // -10%
      weightLoss: Math.round(tdee * 0.8), // -20%
      mildGain: Math.round(tdee * 1.1), // +10%
      weightGain: Math.round(tdee * 1.2), // +20%
    });
  };

  const reset = () => {
    setAge('');
    setGender('male');
    setHeight('');
    setWeight('');
    setActivity('moderate');
    setResult(null);
    setError('');
  };

  return (
    <CalculatorLayout
      title="TDEE Calculator"
      description="Calculate your Total Daily Energy Expenditure to understand how many calories you burn per day including all activities."
      breadcrumbs={[
        { label: 'Health & Fitness', href: '/health-fitness-calculators' },
        { label: 'TDEE Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Zap className="w-5 h-5 text-primary" />
                Calculate Your TDEE
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
                    Height ({unit === 'metric' ? 'cm' : 'in'})
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

              <div>
                <Label className="text-foreground flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Activity Level
                </Label>
                <Select value={activity} onValueChange={setActivity}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Sedentary (office job, little exercise)</SelectItem>
                    <SelectItem value="light">Light (light exercise 1-3 days/week)</SelectItem>
                    <SelectItem value="moderate">Moderate (moderate exercise 3-5 days/week)</SelectItem>
                    <SelectItem value="active">Active (hard exercise 6-7 days/week)</SelectItem>
                    <SelectItem value="veryActive">Very Active (physical job + hard exercise)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {error && <p className="text-destructive text-sm">{error}</p>}

              <div className="flex gap-3">
                <Button onClick={calculateTDEE} className="flex-1">
                  Calculate TDEE
                </Button>
                <Button variant="outline" onClick={reset}>
                  Reset
                </Button>
              </div>

              {result && (
                <div className="space-y-4 animate-scale-in">
                  <div className="p-6 bg-secondary/50 rounded-lg">
                    <div className="grid sm:grid-cols-2 gap-4 text-center">
                      <div className="p-4 bg-background rounded-lg">
                        <p className="text-sm text-muted-foreground">BMR</p>
                        <p className="text-3xl font-bold text-foreground">{result.bmr.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">calories/day at rest</p>
                      </div>
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <p className="text-sm text-muted-foreground">TDEE</p>
                        <p className="text-3xl font-bold text-primary">{result.tdee.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">calories/day total</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <p className="font-medium text-foreground mb-3">Calorie Goals</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between p-2 bg-destructive/10 rounded">
                        <span>Lose weight (-20%)</span>
                        <span className="font-semibold">{result.weightLoss.toLocaleString()} cal</span>
                      </div>
                      <div className="flex justify-between p-2 bg-destructive/5 rounded">
                        <span>Mild loss (-10%)</span>
                        <span className="font-semibold">{result.mildLoss.toLocaleString()} cal</span>
                      </div>
                      <div className="flex justify-between p-2 bg-accent/10 rounded">
                        <span>Maintain weight</span>
                        <span className="font-semibold">{result.maintain.toLocaleString()} cal</span>
                      </div>
                      <div className="flex justify-between p-2 bg-primary/5 rounded">
                        <span>Mild gain (+10%)</span>
                        <span className="font-semibold">{result.mildGain.toLocaleString()} cal</span>
                      </div>
                      <div className="flex justify-between p-2 bg-primary/10 rounded">
                        <span>Gain weight (+20%)</span>
                        <span className="font-semibold">{result.weightGain.toLocaleString()} cal</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'Mike is a 35-year-old male, 180 cm tall, weighing 80 kg with moderate activity.',
              calculation: 'BMR = 10×80 + 6.25×180 - 5×35 + 5 = 1,780 cal | TDEE = 1,780 × 1.55 = 2,759 calories',
              result: 'Mike burns approximately 2,759 calories per day with his current activity level.',
            }}
            tips={[
              'Be honest about your activity level for accurate results.',
              'TDEE changes as your weight, age, and activity level change.',
              'For weight loss, aim for a deficit of 500 calories/day to lose ~0.5 kg/week.',
              'Don\'t go below 1,200 (women) or 1,500 (men) calories without medical supervision.',
            ]}
            faqs={[
              {
                question: 'What is TDEE?',
                answer: 'TDEE (Total Daily Energy Expenditure) is the total number of calories you burn per day, including your basal metabolic rate plus all physical activities.',
              },
              {
                question: 'How often should I recalculate my TDEE?',
                answer: 'Recalculate every 2-4 weeks if you\'re actively losing or gaining weight, or whenever your activity level changes significantly.',
              },
              {
                question: 'Why is my TDEE different from my BMR?',
                answer: 'BMR is calories burned at complete rest. TDEE includes BMR plus calories burned through daily activities, exercise, and the thermic effect of food.',
              },
            ]}
            relatedCalculators={[
              { title: 'BMR Calculator', href: '/bmr-calculator' },
              { title: 'Calorie Calculator', href: '/calorie-calculator' },
              { title: 'BMI Calculator', href: '/bmi-calculator' },
            ]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Activity Levels Explained</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="p-3 bg-secondary/50 rounded-lg">
                <p className="font-medium text-foreground">Sedentary (×1.2)</p>
                <p className="text-muted-foreground">Desk job, minimal movement</p>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg">
                <p className="font-medium text-foreground">Light (×1.375)</p>
                <p className="text-muted-foreground">Light walks, 1-3 workouts/week</p>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg">
                <p className="font-medium text-foreground">Moderate (×1.55)</p>
                <p className="text-muted-foreground">3-5 workouts/week, active lifestyle</p>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg">
                <p className="font-medium text-foreground">Active (×1.725)</p>
                <p className="text-muted-foreground">Daily intense exercise</p>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg">
                <p className="font-medium text-foreground">Very Active (×1.9)</p>
                <p className="text-muted-foreground">Athletes, physical labor jobs</p>
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

export default TDEECalculator;
