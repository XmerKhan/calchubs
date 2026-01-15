import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Lightbulb } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const OhmsLawCalculator = () => {
  const [solveFor, setSolveFor] = useState('current');
  const [voltage, setVoltage] = useState('');
  const [current, setCurrent] = useState('');
  const [resistance, setResistance] = useState('');
  const [result, setResult] = useState<{ value: number; unit: string; power: number } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const v = parseFloat(voltage);
    const i = parseFloat(current);
    const r = parseFloat(resistance);
    let calculatedValue: number, unit: string, power: number;

    switch (solveFor) {
      case 'voltage':
        if (isNaN(i) || isNaN(r)) { setError('Enter valid current and resistance.'); setResult(null); return; }
        calculatedValue = i * r; unit = 'V'; power = calculatedValue * i; break;
      case 'current':
        if (isNaN(v) || isNaN(r) || r === 0) { setError('Resistance cannot be zero.'); setResult(null); return; }
        calculatedValue = v / r; unit = 'A'; power = v * calculatedValue; break;
      case 'resistance':
        if (isNaN(v) || isNaN(i) || i === 0) { setError('Current cannot be zero.'); setResult(null); return; }
        calculatedValue = v / i; unit = 'Ω'; power = v * i; break;
      default: return;
    }
    setResult({ value: Math.round(calculatedValue * 10000) / 10000, unit, power: Math.round(power * 10000) / 10000 });
  };

  const reset = () => { setVoltage(''); setCurrent(''); setResistance(''); setResult(null); setError(''); };

  return (
    <CalculatorLayout title="Ohm's Law Calculator" description="Calculate voltage, current, or resistance using V = IR." breadcrumbs={[{ label: 'Advanced', href: '/advanced' }, { label: "Ohm's Law Calculator" }]}>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader><CardTitle className="flex items-center gap-2 text-foreground"><Lightbulb className="w-5 h-5 text-primary" />Ohm's Law Calculator</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div><Label className="text-foreground">Solve For</Label><Select value={solveFor} onValueChange={setSolveFor}><SelectTrigger className="mt-2"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="voltage">Voltage</SelectItem><SelectItem value="current">Current</SelectItem><SelectItem value="resistance">Resistance</SelectItem></SelectContent></Select></div>
              {solveFor !== 'voltage' && <div><Label htmlFor="voltage" className="text-foreground">Voltage (V)</Label><Input id="voltage" type="number" value={voltage} onChange={(e) => setVoltage(e.target.value)} placeholder="e.g., 12" className="mt-2" /></div>}
              {solveFor !== 'current' && <div><Label htmlFor="current" className="text-foreground">Current (A)</Label><Input id="current" type="number" step="0.1" value={current} onChange={(e) => setCurrent(e.target.value)} placeholder="e.g., 2" className="mt-2" /></div>}
              {solveFor !== 'resistance' && <div><Label htmlFor="resistance" className="text-foreground">Resistance (Ω)</Label><Input id="resistance" type="number" value={resistance} onChange={(e) => setResistance(e.target.value)} placeholder="e.g., 6" className="mt-2" /></div>}
              {error && <p className="text-destructive text-sm">{error}</p>}
              <div className="flex gap-3"><Button onClick={calculate} className="flex-1">Calculate</Button><Button variant="outline" onClick={reset}>Reset</Button></div>
              {result && <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in"><div className="text-center mb-4"><p className="text-muted-foreground mb-2 capitalize">{solveFor}</p><p className="text-5xl font-bold text-primary">{result.value} {result.unit}</p></div><div className="p-4 bg-background rounded-lg text-center"><p className="text-muted-foreground text-sm">Power (P = VI)</p><p className="text-xl font-semibold text-foreground">{result.power} W</p></div></div>}
            </CardContent>
          </Card>
          <CalculatorContent example={{ title: 'Example', scenario: '12V battery, 6Ω resistance', calculation: 'I = 12 / 6 = 2A, Power = 24W', result: 'Current is 2 Amperes, power is 24 Watts.' }} tips={['V = I × R', 'Power = V × I']} faqs={[{ question: "What is Ohm's Law?", answer: 'V = IR, relating voltage, current, and resistance.' }]} relatedCalculators={[{ title: 'Force Calculator', href: '/advanced/force-calculator' }]} />
        </div>
        <div className="space-y-6"><Card className="bg-card border-border"><CardHeader><CardTitle className="text-foreground text-lg">Formulas</CardTitle></CardHeader><CardContent className="space-y-3 text-sm text-muted-foreground"><p>V = I × R</p><p>I = V / R</p><p>R = V / I</p><p>P = V × I</p></CardContent></Card></div>
      </div>
    </CalculatorLayout>
  );
};

export default OhmsLawCalculator;
