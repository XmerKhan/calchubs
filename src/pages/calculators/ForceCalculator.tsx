import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Atom } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const ForceCalculator = () => {
  const [solveFor, setSolveFor] = useState('force');
  const [mass, setMass] = useState('');
  const [acceleration, setAcceleration] = useState('');
  const [force, setForce] = useState('');
  const [result, setResult] = useState<{ value: number; unit: string } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const m = parseFloat(mass);
    const a = parseFloat(acceleration);
    const f = parseFloat(force);
    let calculatedValue: number;
    let unit: string;

    switch (solveFor) {
      case 'force':
        if (isNaN(m) || isNaN(a) || m <= 0) { setError('Enter valid mass and acceleration.'); setResult(null); return; }
        calculatedValue = m * a; unit = 'N (Newtons)'; break;
      case 'mass':
        if (isNaN(f) || isNaN(a) || a === 0) { setError('Acceleration cannot be zero.'); setResult(null); return; }
        calculatedValue = f / a; unit = 'kg'; break;
      case 'acceleration':
        if (isNaN(f) || isNaN(m) || m === 0) { setError('Mass cannot be zero.'); setResult(null); return; }
        calculatedValue = f / m; unit = 'm/s²'; break;
      default: return;
    }
    setResult({ value: Math.round(calculatedValue * 10000) / 10000, unit });
  };

  const reset = () => { setMass(''); setAcceleration(''); setForce(''); setResult(null); setError(''); };

  return (
    <CalculatorLayout title="Force Calculator" description="Calculate force, mass, or acceleration using F = ma." breadcrumbs={[{ label: 'Advanced', href: '/advanced' }, { label: 'Force Calculator' }]}>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader><CardTitle className="flex items-center gap-2 text-foreground"><Atom className="w-5 h-5 text-primary" />Newton's Second Law</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div><Label className="text-foreground">Solve For</Label><Select value={solveFor} onValueChange={setSolveFor}><SelectTrigger className="mt-2"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="force">Force</SelectItem><SelectItem value="mass">Mass</SelectItem><SelectItem value="acceleration">Acceleration</SelectItem></SelectContent></Select></div>
              {solveFor !== 'mass' && <div><Label htmlFor="mass" className="text-foreground">Mass (kg)</Label><Input id="mass" type="number" value={mass} onChange={(e) => setMass(e.target.value)} placeholder="e.g., 10" className="mt-2" /></div>}
              {solveFor !== 'acceleration' && <div><Label htmlFor="acceleration" className="text-foreground">Acceleration (m/s²)</Label><Input id="acceleration" type="number" step="0.1" value={acceleration} onChange={(e) => setAcceleration(e.target.value)} placeholder="e.g., 9.81" className="mt-2" /></div>}
              {solveFor !== 'force' && <div><Label htmlFor="force" className="text-foreground">Force (N)</Label><Input id="force" type="number" value={force} onChange={(e) => setForce(e.target.value)} placeholder="e.g., 100" className="mt-2" /></div>}
              {error && <p className="text-destructive text-sm">{error}</p>}
              <div className="flex gap-3"><Button onClick={calculate} className="flex-1">Calculate</Button><Button variant="outline" onClick={reset}>Reset</Button></div>
              {result && <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in text-center"><p className="text-muted-foreground mb-2 capitalize">{solveFor}</p><p className="text-5xl font-bold text-primary">{result.value}</p><p className="text-lg text-muted-foreground">{result.unit}</p><p className="text-sm text-muted-foreground mt-4"><strong>Formula:</strong> F = m × a</p></div>}
            </CardContent>
          </Card>
          <CalculatorContent example={{ title: 'Example', scenario: '1,500 kg car accelerates at 3 m/s²', calculation: 'F = 1500 × 3 = 4,500 N', result: 'The engine exerts 4,500 Newtons.' }} tips={['Weight = mass × gravity (9.81 m/s²)', '1 Newton accelerates 1 kg by 1 m/s²']} faqs={[{ question: 'Mass vs weight?', answer: 'Mass is matter (kg); weight is gravitational force (N).' }]} relatedCalculators={[{ title: 'Speed Calculator', href: '/advanced/speed-calculator' }]} />
        </div>
        <div className="space-y-6"><Card className="bg-card border-border"><CardHeader><CardTitle className="text-foreground text-lg">Formulas</CardTitle></CardHeader><CardContent className="space-y-3 text-sm text-muted-foreground"><p>F = m × a</p><p>m = F / a</p><p>a = F / m</p></CardContent></Card></div>
      </div>
    </CalculatorLayout>
  );
};

export default ForceCalculator;
