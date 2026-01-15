import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Gauge } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const SpeedCalculator = () => {
  const [solveFor, setSolveFor] = useState('speed');
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [speed, setSpeed] = useState('');
  const [result, setResult] = useState<{ value: number; unit: string } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const d = parseFloat(distance);
    const t = parseFloat(time);
    const s = parseFloat(speed);
    let calculatedValue: number;
    let unit: string;

    switch (solveFor) {
      case 'speed':
        if (isNaN(d) || isNaN(t) || d < 0 || t <= 0) { setError('Enter valid distance and time.'); setResult(null); return; }
        calculatedValue = d / t; unit = 'km/h'; break;
      case 'distance':
        if (isNaN(s) || isNaN(t) || s < 0 || t < 0) { setError('Enter valid speed and time.'); setResult(null); return; }
        calculatedValue = s * t; unit = 'km'; break;
      case 'time':
        if (isNaN(d) || isNaN(s) || d < 0 || s <= 0) { setError('Enter valid distance and speed.'); setResult(null); return; }
        calculatedValue = d / s; unit = 'hours'; break;
      default: return;
    }
    setResult({ value: Math.round(calculatedValue * 10000) / 10000, unit });
  };

  const reset = () => { setDistance(''); setTime(''); setSpeed(''); setResult(null); setError(''); };

  return (
    <CalculatorLayout title="Speed Calculator" description="Calculate speed, distance, or time using physics formula." breadcrumbs={[{ label: 'Advanced', href: '/advanced' }, { label: 'Speed Calculator' }]}>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader><CardTitle className="flex items-center gap-2 text-foreground"><Gauge className="w-5 h-5 text-primary" />Speed Calculator</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div><Label className="text-foreground">Solve For</Label><Select value={solveFor} onValueChange={setSolveFor}><SelectTrigger className="mt-2"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="speed">Speed</SelectItem><SelectItem value="distance">Distance</SelectItem><SelectItem value="time">Time</SelectItem></SelectContent></Select></div>
              {solveFor !== 'distance' && <div><Label htmlFor="distance" className="text-foreground">Distance (km)</Label><Input id="distance" type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="e.g., 100" className="mt-2" /></div>}
              {solveFor !== 'time' && <div><Label htmlFor="time" className="text-foreground">Time (hours)</Label><Input id="time" type="number" step="0.1" value={time} onChange={(e) => setTime(e.target.value)} placeholder="e.g., 2" className="mt-2" /></div>}
              {solveFor !== 'speed' && <div><Label htmlFor="speed" className="text-foreground">Speed (km/h)</Label><Input id="speed" type="number" value={speed} onChange={(e) => setSpeed(e.target.value)} placeholder="e.g., 60" className="mt-2" /></div>}
              {error && <p className="text-destructive text-sm">{error}</p>}
              <div className="flex gap-3"><Button onClick={calculate} className="flex-1">Calculate</Button><Button variant="outline" onClick={reset}>Reset</Button></div>
              {result && <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in text-center"><p className="text-muted-foreground mb-2 capitalize">{solveFor}</p><p className="text-5xl font-bold text-primary">{result.value} <span className="text-2xl">{result.unit}</span></p><p className="text-sm text-muted-foreground mt-4"><strong>Formula:</strong> Speed = Distance / Time</p></div>}
            </CardContent>
          </Card>
          <CalculatorContent example={{ title: 'Example', scenario: 'Drive 150 km in 2.5 hours', calculation: 'Speed = 150 / 2.5 = 60 km/h', result: 'Average speed is 60 km/h.' }} tips={['Speed = Distance / Time', '1 km/h ≈ 0.62 mph']} faqs={[{ question: 'Speed vs velocity?', answer: 'Speed is magnitude only; velocity includes direction.' }]} relatedCalculators={[{ title: 'Force Calculator', href: '/advanced/force-calculator' }]} />
        </div>
        <div className="space-y-6"><Card className="bg-card border-border"><CardHeader><CardTitle className="text-foreground text-lg">Formulas</CardTitle></CardHeader><CardContent className="space-y-3 text-sm text-muted-foreground"><p>Speed = Distance / Time</p><p>Distance = Speed × Time</p><p>Time = Distance / Speed</p></CardContent></Card></div>
      </div>
    </CalculatorLayout>
  );
};

export default SpeedCalculator;
