import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Flame, User, Activity as ActivityIcon, Target } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const CalorieCalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('moderate');
  const [goal, setGoal] = useState('maintain');
  const [result, setResult] = useState<{
    bmr: number;
    maintenance: number;
    goal: number;
  } | null>(null);
  const [error, setError] = useState('');

  const activityLevels = {
    sedentary: { label: 'Sedentary (little or no exercise)', factor: 1.2 },
    light: { label: 'Lightly active (1-3 days/week)', factor: 1.375 },
    moderate: { label: 'Moderately active (3-5 days/week)', factor: 1.55 },
    active: { label: 'Very active (6-7 days/week)', factor: 1.725 },
    extra: { label: 'Extra active (physical job)', factor: 1.9 },
  };

  const calculateCalories = () => {
    setError('');

    const a = parseFloat(age);
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (isNaN(a) || isNaN(h) || isNaN(w) || a <= 0 || h <= 0 || w <= 0) {
      setError('Please enter valid positive numbers for all fields.');
      setResult(null);
      return;
    }

    // Mifflin-St Jeor Equation
    let bmr: number;
    if (gender === 'male') {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    const activityFactor = activityLevels[activity as keyof typeof activityLevels].factor;
    const maintenance = bmr * activityFactor;

    let goalCalories: number;
    switch (goal) {
      case 'lose':
        goalCalories = maintenance - 500;
        break;
      case 'gain':
        goalCalories = maintenance + 500;
        break;
      default:
        goalCalories = maintenance;
    }

    setResult({
      bmr: Math.round(bmr),
      maintenance: Math.round(maintenance),
      goal: Math.round(goalCalories),
    });
  };

  const reset = () => {
    setAge('');
    setHeight('');
    setWeight('');
    setGender('male');
    setActivity('moderate');
    setGoal('maintain');
    setResult(null);
    setError('');
  };

  return (
    <CalculatorLayout
      title="Calorie Calculator"
      description="Calculate your daily calorie needs based on your age, gender, activity level, and fitness goals."
      breadcrumbs={[
        { label: 'Health & Fitness', href: '/health-fitness-calculators' },
        { label: 'Calorie Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Flame className="w-5 h-5 text-destructive" />
                Calculate Your Daily Calories
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age" className="text-foreground">Age (years)</Label>
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
                  <Label className="text-foreground">Gender</Label>
                  <RadioGroup value={gender} onValueChange={setGender} className="flex gap-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="cursor-pointer">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="cursor-pointer">Female</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="height" className="text-foreground">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g., 175"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="weight" className="text-foreground">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g., 70"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label className="text-foreground flex items-center gap-2">
                  <ActivityIcon className="w-4 h-4" />
                  Activity Level
                </Label>
                <Select value={activity} onValueChange={setActivity}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(activityLevels).map(([key, value]) => (
                      <SelectItem key={key} value={key}>
                        {value.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-foreground flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Goal
                </Label>
                <RadioGroup value={goal} onValueChange={setGoal} className="flex flex-wrap gap-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="lose" id="lose" />
                    <Label htmlFor="lose" className="cursor-pointer">Lose Weight</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maintain" id="maintain" />
                    <Label htmlFor="maintain" className="cursor-pointer">Maintain</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="gain" id="gain" />
                    <Label htmlFor="gain" className="cursor-pointer">Gain Weight</Label>
                  </div>
                </RadioGroup>
              </div>

              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}

              <div className="flex gap-3">
                <Button onClick={calculateCalories} className="flex-1">
                  Calculate Calories
                </Button>
                <Button variant="outline" onClick={reset}>
                  Reset
                </Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground mb-2">Daily Calories for Your Goal</p>
                    <p className="text-5xl font-bold text-primary">{result.goal.toLocaleString()}</p>
                    <p className="text-muted-foreground">calories/day</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Basal Metabolic Rate</p>
                      <p className="text-xl font-semibold text-foreground">{result.bmr.toLocaleString()} cal</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Maintenance Calories</p>
                      <p className="text-xl font-semibold text-foreground">{result.maintenance.toLocaleString()} cal</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Formula used:</strong> Mifflin-St Jeor Equation
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'Mike is a 30-year-old male, 180 cm tall, weighs 80 kg, and exercises 3-5 days per week. He wants to lose weight.',
              calculation: 'BMR = 10×80 + 6.25×180 - 5×30 + 5 = 1,780 cal\nMaintenance = 1,780 × 1.55 = 2,759 cal\nWeight loss = 2,759 - 500 = 2,259 cal',
              result: 'Mike should consume approximately 2,259 calories daily to lose about 0.5 kg per week.',
            }}
            tips={[
              'Do not go below 1,200 calories (women) or 1,500 calories (men) without medical supervision.',
              'Combine calorie tracking with regular exercise for best results.',
              'Drink plenty of water - sometimes thirst is mistaken for hunger.',
              'Focus on nutrient-dense foods rather than just counting calories.',
            ]}
            faqs={[
              {
                question: 'What is BMR?',
                answer: 'Basal Metabolic Rate (BMR) is the number of calories your body needs to maintain basic functions like breathing and circulation while at rest.',
              },
              {
                question: 'How accurate is this calculator?',
                answer: 'This calculator uses the Mifflin-St Jeor equation, which is considered one of the most accurate formulas. However, individual metabolism can vary.',
              },
              {
                question: 'How much weight can I lose per week?',
                answer: 'A calorie deficit of 500 calories per day typically results in losing about 0.5 kg (1 lb) per week, which is considered a healthy rate.',
              },
            ]}
            relatedCalculators={[
              { title: 'BMI Calculator', href: '/bmi-calculator' },
              { title: 'Percentage Calculator', href: '/percentage-calculator' },
            ]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Macro Split Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="p-3 bg-secondary/50 rounded-lg">
                <p className="font-medium text-foreground">Protein</p>
                <p className="text-muted-foreground">25-35% of calories</p>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg">
                <p className="font-medium text-foreground">Carbohydrates</p>
                <p className="text-muted-foreground">45-55% of calories</p>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg">
                <p className="font-medium text-foreground">Fats</p>
                <p className="text-muted-foreground">20-30% of calories</p>
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

export default CalorieCalculator;
