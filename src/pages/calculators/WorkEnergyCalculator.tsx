import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Battery } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const WorkEnergyCalculator = () => {
  const [force, setForce] = useState('');
  const [distance, setDistance] = useState('');
  const [result, setResult] = useState<{ work: number; kineticExample: string } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const f = parseFloat(force);
    const d = parseFloat(distance);
    if (isNaN(f) || isNaN(d)) { setError('Enter valid force and distance.'); setResult(null); return; }
    const work = f * d;
    setResult({ work: Math.round(work * 100) / 100, kineticExample: `KE = ½mv² (use mass and velocity)` });
  };

  const reset = () => { setForce(''); setDistance(''); setResult(null); setError(''); };

  return (
    <CalculatorLayout title="Work & Energy Calculator" description="Calculate work done using force and distance." breadcrumbs={[{ label: 'Advanced', href: '/advanced' }, { label: 'Work & Energy Calculator' }]}>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader><CardTitle className="flex items-center gap-2 text-foreground"><Battery className="w-5 h-5 text-primary" />Work Calculator</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="force" className="text-foreground">Force (N)</Label><Input id="force" type="number" value={force} onChange={(e) => setForce(e.target.value)} placeholder="e.g., 100" className="mt-2" /></div>
                <div><Label htmlFor="distance" className="text-foreground">Distance (m)</Label><Input id="distance" type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="e.g., 10" className="mt-2" /></div>
              </div>
              {error && <p className="text-destructive text-sm">{error}</p>}
              <div className="flex gap-3"><Button onClick={calculate} className="flex-1">Calculate Work</Button><Button variant="outline" onClick={reset}>Reset</Button></div>
              {result && <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in text-center"><p className="text-muted-foreground mb-2">Work Done</p><p className="text-5xl font-bold text-primary">{result.work} J</p><p className="text-sm text-muted-foreground mt-4"><strong>Formula:</strong> W = F × d</p></div>}
            </CardContent>
          </Card>
          <CalculatorContent example={{ title: 'Example', scenario: 'Push with 100N force over 10m', calculation: 'W = 100 × 10 = 1,000 J', result: 'You did 1,000 Joules of work.' }} tips={['1 Joule = 1 Newton × 1 meter', 'Energy is conserved: PE + KE = constant']} faqs={[{ question: 'Work vs energy?', answer: 'Work is energy transfer; energy is capacity to do work.' }]} relatedCalculators={[{ title: 'Force Calculator', href: '/advanced/force-calculator' }]} />
        </div>
        <div className="space-y-6"><Card className="bg-card border-border"><CardHeader><CardTitle className="text-foreground text-lg">Formulas</CardTitle></CardHeader><CardContent className="space-y-3 text-sm text-muted-foreground"><p>Work: W = F × d</p><p>Kinetic: KE = ½mv²</p><p>Potential: PE = mgh</p></CardContent></Card></div>
      </div>
    </CalculatorLayout>
  );
};

export default WorkEnergyCalculator;
