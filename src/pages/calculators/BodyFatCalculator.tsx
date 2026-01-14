import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Activity, User, Ruler } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const BodyFatCalculator = () => {
  const [gender, setGender] = useState('male');
  const [unit, setUnit] = useState('metric');
  const [height, setHeight] = useState('');
  const [waist, setWaist] = useState('');
  const [neck, setNeck] = useState('');
  const [hip, setHip] = useState('');
  const [result, setResult] = useState<{ percentage: number; category: string; color: string } | null>(null);
  const [error, setError] = useState('');

  const calculateBodyFat = () => {
    setError('');
    
    const h = parseFloat(height);
    const w = parseFloat(waist);
    const n = parseFloat(neck);
    const hipValue = parseFloat(hip);

    if (isNaN(h) || isNaN(w) || isNaN(n) || h <= 0 || w <= 0 || n <= 0) {
      setError('Please enter valid positive numbers for all required fields.');
      setResult(null);
      return;
    }

    if (gender === 'female' && (isNaN(hipValue) || hipValue <= 0)) {
      setError('Hip measurement is required for female body fat calculation.');
      setResult(null);
      return;
    }

    // Convert to cm if imperial
    let heightCm = unit === 'metric' ? h : h * 2.54;
    let waistCm = unit === 'metric' ? w : w * 2.54;
    let neckCm = unit === 'metric' ? n : n * 2.54;
    let hipCm = unit === 'metric' ? hipValue : hipValue * 2.54;

    // US Navy Body Fat Formula
    let bodyFat: number;
    if (gender === 'male') {
      // Male: 86.010 × log10(waist - neck) - 70.041 × log10(height) + 36.76
      if (waistCm <= neckCm) {
        setError('Waist measurement must be greater than neck measurement.');
        setResult(null);
        return;
      }
      bodyFat = 86.010 * Math.log10(waistCm - neckCm) - 70.041 * Math.log10(heightCm) + 36.76;
    } else {
      // Female: 163.205 × log10(waist + hip - neck) - 97.684 × log10(height) - 78.387
      if (waistCm + hipCm <= neckCm) {
        setError('Waist + hip must be greater than neck measurement.');
        setResult(null);
        return;
      }
      bodyFat = 163.205 * Math.log10(waistCm + hipCm - neckCm) - 97.684 * Math.log10(heightCm) - 78.387;
    }

    bodyFat = Math.max(0, Math.round(bodyFat * 10) / 10);

    let category: string;
    let color: string;
    if (gender === 'male') {
      if (bodyFat < 6) { category = 'Essential Fat'; color = 'text-primary'; }
      else if (bodyFat < 14) { category = 'Athletes'; color = 'text-accent'; }
      else if (bodyFat < 18) { category = 'Fitness'; color = 'text-accent'; }
      else if (bodyFat < 25) { category = 'Average'; color = 'text-foreground'; }
      else { category = 'Obese'; color = 'text-destructive'; }
    } else {
      if (bodyFat < 14) { category = 'Essential Fat'; color = 'text-primary'; }
      else if (bodyFat < 21) { category = 'Athletes'; color = 'text-accent'; }
      else if (bodyFat < 25) { category = 'Fitness'; color = 'text-accent'; }
      else if (bodyFat < 32) { category = 'Average'; color = 'text-foreground'; }
      else { category = 'Obese'; color = 'text-destructive'; }
    }

    setResult({ percentage: bodyFat, category, color });
  };

  const reset = () => {
    setHeight('');
    setWaist('');
    setNeck('');
    setHip('');
    setResult(null);
    setError('');
  };

  return (
    <CalculatorLayout
      title="Body Fat Percentage Calculator"
      description="Calculate your body fat percentage using the US Navy method with waist, neck, and hip measurements."
      breadcrumbs={[
        { label: 'Health & Fitness', href: '/health-fitness-calculators' },
        { label: 'Body Fat Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Activity className="w-5 h-5 text-primary" />
                Calculate Your Body Fat
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
                      <SelectItem value="metric">Metric (cm)</SelectItem>
                      <SelectItem value="imperial">Imperial (inches)</SelectItem>
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
                  <Label htmlFor="waist" className="text-foreground">
                    Waist ({unit === 'metric' ? 'cm' : 'inches'})
                  </Label>
                  <Input
                    id="waist"
                    type="number"
                    value={waist}
                    onChange={(e) => setWaist(e.target.value)}
                    placeholder={unit === 'metric' ? 'e.g., 85' : 'e.g., 33'}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="neck" className="text-foreground">
                    Neck ({unit === 'metric' ? 'cm' : 'inches'})
                  </Label>
                  <Input
                    id="neck"
                    type="number"
                    value={neck}
                    onChange={(e) => setNeck(e.target.value)}
                    placeholder={unit === 'metric' ? 'e.g., 38' : 'e.g., 15'}
                    className="mt-2"
                  />
                </div>
                {gender === 'female' && (
                  <div>
                    <Label htmlFor="hip" className="text-foreground">
                      Hip ({unit === 'metric' ? 'cm' : 'inches'})
                    </Label>
                    <Input
                      id="hip"
                      type="number"
                      value={hip}
                      onChange={(e) => setHip(e.target.value)}
                      placeholder={unit === 'metric' ? 'e.g., 100' : 'e.g., 39'}
                      className="mt-2"
                    />
                  </div>
                )}
              </div>

              {error && <p className="text-destructive text-sm">{error}</p>}

              <div className="flex gap-3">
                <Button onClick={calculateBodyFat} className="flex-1">
                  Calculate Body Fat
                </Button>
                <Button variant="outline" onClick={reset}>
                  Reset
                </Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-2">Your Body Fat Percentage</p>
                    <p className={`text-5xl font-bold ${result.color}`}>{result.percentage}%</p>
                    <p className={`text-xl font-medium mt-2 ${result.color}`}>{result.category}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Method:</strong> US Navy Body Fat Formula
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'John is a male, 175 cm tall, with a 85 cm waist and 38 cm neck.',
              calculation: 'Body Fat = 86.010 × log10(85-38) - 70.041 × log10(175) + 36.76 = 18.5%',
              result: 'John has approximately 18.5% body fat, which falls in the "Average" category for males.',
            }}
            tips={[
              'Measure at the narrowest point of the waist for accuracy.',
              'Neck should be measured at the narrowest point below the Adam\'s apple.',
              'For women, measure hips at the widest point.',
              'Take measurements in the morning before eating for consistency.',
            ]}
            faqs={[
              {
                question: 'How accurate is the US Navy method?',
                answer: 'The US Navy method has an accuracy of about ±3-4% when measurements are taken correctly. It\'s more accurate than BMI for assessing body composition.',
              },
              {
                question: 'What is a healthy body fat percentage?',
                answer: 'For men, 10-20% is considered healthy. For women, 18-28% is healthy. Athletes typically have lower percentages.',
              },
              {
                question: 'Can I reduce body fat percentage?',
                answer: 'Yes, through a combination of strength training, cardiovascular exercise, and a balanced diet with a moderate calorie deficit.',
              },
            ]}
            relatedCalculators={[
              { title: 'BMI Calculator', href: '/bmi-calculator' },
              { title: 'Ideal Weight Calculator', href: '/ideal-weight-calculator' },
              { title: 'Calorie Calculator', href: '/calorie-calculator' },
            ]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Body Fat Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground mb-2">Men</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>Essential</span><span>2-5%</span></div>
                    <div className="flex justify-between"><span>Athletes</span><span>6-13%</span></div>
                    <div className="flex justify-between"><span>Fitness</span><span>14-17%</span></div>
                    <div className="flex justify-between"><span>Average</span><span>18-24%</span></div>
                    <div className="flex justify-between"><span>Obese</span><span>25%+</span></div>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="font-medium text-foreground mb-2">Women</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>Essential</span><span>10-13%</span></div>
                    <div className="flex justify-between"><span>Athletes</span><span>14-20%</span></div>
                    <div className="flex justify-between"><span>Fitness</span><span>21-24%</span></div>
                    <div className="flex justify-between"><span>Average</span><span>25-31%</span></div>
                    <div className="flex justify-between"><span>Obese</span><span>32%+</span></div>
                  </div>
                </div>
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

export default BodyFatCalculator;
