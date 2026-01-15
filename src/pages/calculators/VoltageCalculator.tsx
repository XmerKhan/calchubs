import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Cpu } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const VoltageCalculator = () => {
  const [current, setCurrent] = useState('');
  const [resistance, setResistance] = useState('');
  const [result, setResult] = useState<{ voltage: number; power: number } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const i = parseFloat(current);
    const r = parseFloat(resistance);
    if (isNaN(i) || isNaN(r)) { setError('Enter valid current and resistance.'); setResult(null); return; }
    const voltage = i * r;
    const power = voltage * i;
    setResult({ voltage: Math.round(voltage * 10000) / 10000, power: Math.round(power * 10000) / 10000 });
  };

  const reset = () => { setCurrent(''); setResistance(''); setResult(null); setError(''); };

  return (
    <CalculatorLayout title="Voltage Calculator" description="Calculate voltage in electrical circuits using V = IR." breadcrumbs={[{ label: 'Advanced', href: '/advanced' }, { label: 'Voltage Calculator' }]}>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader><CardTitle className="flex items-center gap-2 text-foreground"><Cpu className="w-5 h-5 text-primary" />Voltage Calculator</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="current" className="text-foreground">Current (A)</Label><Input id="current" type="number" step="0.1" value={current} onChange={(e) => setCurrent(e.target.value)} placeholder="e.g., 2" className="mt-2" /></div>
                <div><Label htmlFor="resistance" className="text-foreground">Resistance (Ω)</Label><Input id="resistance" type="number" value={resistance} onChange={(e) => setResistance(e.target.value)} placeholder="e.g., 6" className="mt-2" /></div>
              </div>
              {error && <p className="text-destructive text-sm">{error}</p>}
              <div className="flex gap-3"><Button onClick={calculate} className="flex-1">Calculate Voltage</Button><Button variant="outline" onClick={reset}>Reset</Button></div>
              {result && <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in"><div className="text-center mb-4"><p className="text-muted-foreground mb-2">Voltage</p><p className="text-5xl font-bold text-primary">{result.voltage} V</p></div><div className="p-4 bg-background rounded-lg text-center"><p className="text-muted-foreground text-sm">Power</p><p className="text-xl font-semibold text-foreground">{result.power} W</p></div></div>}
            </CardContent>
          </Card>
          <CalculatorContent example={{ title: 'Example', scenario: '2A current through 6Ω resistor', calculation: 'V = 2 × 6 = 12V', result: 'Voltage is 12 Volts.' }} tips={['V = I × R (Ohm\'s Law)', 'Power = V × I']} faqs={[{ question: 'What is voltage?', answer: 'Electrical pressure that pushes current through a circuit.' }]} relatedCalculators={[{ title: "Ohm's Law Calculator", href: '/advanced/ohms-law-calculator' }]} />
        </div>
        <div className="space-y-6"><Card className="bg-card border-border"><CardHeader><CardTitle className="text-foreground text-lg">Common Voltages</CardTitle></CardHeader><CardContent className="space-y-3 text-sm text-muted-foreground"><p>🔋 AA Battery: 1.5V</p><p>🚗 Car Battery: 12V</p><p>🏠 US Outlet: 120V</p><p>🇪🇺 EU Outlet: 230V</p></CardContent></Card></div>
      </div>
    </CalculatorLayout>
  );
};

export default VoltageCalculator;
