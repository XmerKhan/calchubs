import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Target, User, Ruler } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const IdealWeightCalculator = () => {
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [unit, setUnit] = useState('metric');
  const [result, setResult] = useState<{
    robinson: number;
    miller: number;
    devine: number;
    hamwi: number;
    average: number;
  } | null>(null);
  const [error, setError] = useState('');

  const calculateIdealWeight = () => {
    setError('');
    
    const h = parseFloat(height);

    if (isNaN(h) || h <= 0) {
      setError('Please enter a valid positive height.');
      setResult(null);
      return;
    }

    // Convert to inches for calculation
    let heightInches = unit === 'metric' ? h / 2.54 : h;
    
    if (heightInches < 60) {
      setError('Height must be at least 60 inches (152 cm) for accurate calculation.');
      setResult(null);
      return;
    }

    const inchesOver5Feet = heightInches - 60;

    let robinson: number, miller: number, devine: number, hamwi: number;

    if (gender === 'male') {
      // Robinson Formula (1983)
      robinson = 52 + 1.9 * inchesOver5Feet;
      // Miller Formula (1983)
      miller = 56.2 + 1.41 * inchesOver5Feet;
      // Devine Formula (1974)
      devine = 50 + 2.3 * inchesOver5Feet;
      // Hamwi Formula (1964)
      hamwi = 48 + 2.7 * inchesOver5Feet;
    } else {
      // Robinson Formula
      robinson = 49 + 1.7 * inchesOver5Feet;
      // Miller Formula
      miller = 53.1 + 1.36 * inchesOver5Feet;
      // Devine Formula
      devine = 45.5 + 2.3 * inchesOver5Feet;
      // Hamwi Formula
      hamwi = 45.5 + 2.2 * inchesOver5Feet;
    }

    const average = (robinson + miller + devine + hamwi) / 4;

    setResult({
      robinson: Math.round(robinson * 10) / 10,
      miller: Math.round(miller * 10) / 10,
      devine: Math.round(devine * 10) / 10,
      hamwi: Math.round(hamwi * 10) / 10,
      average: Math.round(average * 10) / 10,
    });
  };

  const reset = () => {
    setHeight('');
    setGender('male');
    setResult(null);
    setError('');
  };

  return (
    <CalculatorLayout
      title="Ideal Weight Calculator"
      description="Calculate your ideal body weight using multiple scientific formulas including Robinson, Miller, Devine, and Hamwi equations."
      breadcrumbs={[
        { label: 'Health & Fitness', href: '/health-fitness' },
        { label: 'Ideal Weight Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Target className="w-5 h-5 text-primary" />
                Calculate Your Ideal Weight
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

              {error && <p className="text-destructive text-sm">{error}</p>}

              <div className="flex gap-3">
                <Button onClick={calculateIdealWeight} className="flex-1">
                  Calculate Ideal Weight
                </Button>
                <Button variant="outline" onClick={reset}>
                  Reset
                </Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground mb-2">Average Ideal Weight</p>
                    <p className="text-5xl font-bold text-primary">{result.average} kg</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div className="p-3 bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground">Robinson Formula</p>
                      <p className="text-lg font-semibold text-foreground">{result.robinson} kg</p>
                    </div>
                    <div className="p-3 bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground">Miller Formula</p>
                      <p className="text-lg font-semibold text-foreground">{result.miller} kg</p>
                    </div>
                    <div className="p-3 bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground">Devine Formula</p>
                      <p className="text-lg font-semibold text-foreground">{result.devine} kg</p>
                    </div>
                    <div className="p-3 bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground">Hamwi Formula</p>
                      <p className="text-lg font-semibold text-foreground">{result.hamwi} kg</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'Mike is a 6 feet (72 inches / 183 cm) tall male wanting to find his ideal weight.',
              calculation: 'Robinson: 52 + 1.9 × 12 = 74.8 kg | Miller: 56.2 + 1.41 × 12 = 73.1 kg | Average: ~74 kg',
              result: 'Mike\'s ideal weight range is approximately 71-77 kg (156-170 lbs).',
            }}
            tips={[
              'Ideal weight formulas provide estimates - individual variation is normal.',
              'Consider your body frame size (small, medium, large) for a more accurate range.',
              'Athletes may have higher ideal weights due to muscle mass.',
              'Consult a healthcare provider for personalized weight recommendations.',
            ]}
            faqs={[
              {
                question: 'Which ideal weight formula is most accurate?',
                answer: 'The Robinson formula is generally considered most accurate for the general population. However, averaging multiple formulas provides a better estimate.',
              },
              {
                question: 'Why are there different ideal weight formulas?',
                answer: 'Different researchers developed these formulas at different times using different population samples, leading to slight variations in results.',
              },
              {
                question: 'Does ideal weight account for muscle mass?',
                answer: 'No, these formulas are based on height and gender only. Athletes or those with significant muscle mass may have a higher healthy weight.',
              },
            ]}
            relatedCalculators={[
              { title: 'BMI Calculator', href: '/health-fitness/bmi-calculator' },
              { title: 'Body Fat Calculator', href: '/health-fitness/body-fat-calculator' },
              { title: 'TDEE Calculator', href: '/health-fitness/tdee-calculator' },
            ]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">About the Formulas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p><strong className="text-foreground">Robinson (1983):</strong> Most commonly used in medical practice.</p>
              <p><strong className="text-foreground">Miller (1983):</strong> More recent refinement of earlier formulas.</p>
              <p><strong className="text-foreground">Devine (1974):</strong> Originally developed for drug dosing calculations.</p>
              <p><strong className="text-foreground">Hamwi (1964):</strong> One of the earliest ideal weight formulas.</p>
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

export default IdealWeightCalculator;
