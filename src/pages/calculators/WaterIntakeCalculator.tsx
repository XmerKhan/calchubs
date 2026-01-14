import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Droplets, Scale, Activity } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const WaterIntakeCalculator = () => {
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('metric');
  const [activity, setActivity] = useState('moderate');
  const [climate, setClimate] = useState('temperate');
  const [result, setResult] = useState<{ liters: number; glasses: number; ounces: number } | null>(null);
  const [error, setError] = useState('');

  const calculateWaterIntake = () => {
    setError('');
    
    const w = parseFloat(weight);

    if (isNaN(w) || w <= 0) {
      setError('Please enter a valid positive weight.');
      setResult(null);
      return;
    }

    // Convert to kg if imperial
    const weightKg = unit === 'metric' ? w : w * 0.453592;

    // Base calculation: 30-35ml per kg of body weight
    let baseWater = weightKg * 0.033; // liters

    // Activity multiplier
    const activityMultipliers: Record<string, number> = {
      sedentary: 0.9,
      light: 1.0,
      moderate: 1.1,
      active: 1.2,
      athlete: 1.4,
    };

    // Climate multiplier
    const climateMultipliers: Record<string, number> = {
      cold: 0.9,
      temperate: 1.0,
      hot: 1.2,
      humid: 1.3,
    };

    const totalWater = baseWater * activityMultipliers[activity] * climateMultipliers[climate];
    const liters = Math.round(totalWater * 10) / 10;
    const glasses = Math.round(totalWater / 0.25); // 250ml per glass
    const ounces = Math.round(totalWater * 33.814);

    setResult({ liters, glasses, ounces });
  };

  const reset = () => {
    setWeight('');
    setActivity('moderate');
    setClimate('temperate');
    setResult(null);
    setError('');
  };

  return (
    <CalculatorLayout
      title="Daily Water Intake Calculator"
      description="Calculate your recommended daily water intake based on your weight, activity level, and climate conditions."
      breadcrumbs={[
        { label: 'Health & Fitness', href: '/health-fitness' },
        { label: 'Water Intake Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Droplets className="w-5 h-5 text-primary" />
                Calculate Your Daily Water Intake
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
                      <SelectItem value="metric">Metric (kg)</SelectItem>
                      <SelectItem value="imperial">Imperial (lbs)</SelectItem>
                    </SelectContent>
                  </Select>
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

              <div className="grid sm:grid-cols-2 gap-4">
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
                      <SelectItem value="sedentary">Sedentary (little/no exercise)</SelectItem>
                      <SelectItem value="light">Light (1-2 days/week)</SelectItem>
                      <SelectItem value="moderate">Moderate (3-5 days/week)</SelectItem>
                      <SelectItem value="active">Active (6-7 days/week)</SelectItem>
                      <SelectItem value="athlete">Athlete (intense training)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-foreground">Climate</Label>
                  <Select value={climate} onValueChange={setClimate}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cold">Cold</SelectItem>
                      <SelectItem value="temperate">Temperate</SelectItem>
                      <SelectItem value="hot">Hot</SelectItem>
                      <SelectItem value="humid">Hot & Humid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {error && <p className="text-destructive text-sm">{error}</p>}

              <div className="flex gap-3">
                <Button onClick={calculateWaterIntake} className="flex-1">
                  Calculate Water Intake
                </Button>
                <Button variant="outline" onClick={reset}>
                  Reset
                </Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground mb-2">Daily Water Intake</p>
                    <p className="text-5xl font-bold text-primary">{result.liters}L</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div className="text-center p-3 bg-background rounded-lg">
                      <p className="text-2xl font-bold text-foreground">{result.glasses}</p>
                      <p className="text-sm text-muted-foreground">glasses (250ml)</p>
                    </div>
                    <div className="text-center p-3 bg-background rounded-lg">
                      <p className="text-2xl font-bold text-foreground">{result.ounces}</p>
                      <p className="text-sm text-muted-foreground">fl oz</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'Emma weighs 65 kg, exercises moderately, and lives in a temperate climate.',
              calculation: 'Base: 65 × 0.033 = 2.15L | Activity (×1.1): 2.37L | Climate (×1.0): 2.4L',
              result: 'Emma should drink approximately 2.4 liters (about 10 glasses) of water daily.',
            }}
            tips={[
              'Start your day with a glass of water to kickstart hydration.',
              'Carry a water bottle to track intake throughout the day.',
              'Drink more during exercise - about 500ml per hour of activity.',
              'Foods like fruits and vegetables also contribute to hydration.',
              'Urine color is a good indicator - pale yellow means well-hydrated.',
            ]}
            faqs={[
              {
                question: 'Can I drink too much water?',
                answer: 'Yes, overhydration (hyponatremia) is possible but rare. Spread intake throughout the day and listen to your body\'s thirst signals.',
              },
              {
                question: 'Do coffee and tea count toward water intake?',
                answer: 'Yes, caffeinated beverages contribute to hydration despite mild diuretic effects. However, water remains the best choice.',
              },
              {
                question: 'How do I know if I\'m drinking enough water?',
                answer: 'Check your urine color (pale yellow is ideal), monitor energy levels, and pay attention to thirst signals.',
              },
            ]}
            relatedCalculators={[
              { title: 'Calorie Calculator', href: '/health-fitness/calorie-calculator' },
              { title: 'BMI Calculator', href: '/health-fitness/bmi-calculator' },
              { title: 'TDEE Calculator', href: '/health-fitness/tdee-calculator' },
            ]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Hydration Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="font-medium text-foreground">🌅 Morning</p>
                <p>Drink 1-2 glasses upon waking</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="font-medium text-foreground">🍽️ Before Meals</p>
                <p>1 glass 30 minutes before eating</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="font-medium text-foreground">🏃 During Exercise</p>
                <p>500ml per hour of activity</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <p className="font-medium text-foreground">🌙 Evening</p>
                <p>Reduce intake 2 hours before bed</p>
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

export default WaterIntakeCalculator;
