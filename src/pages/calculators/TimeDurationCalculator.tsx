import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Timer } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const TimeDurationCalculator = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [result, setResult] = useState<{ hours: number; minutes: number; totalMinutes: number; decimal: number } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    if (!startTime || !endTime) { setError('Please enter both times.'); setResult(null); return; }

    const [startHour, startMin] = startTime.split(':').map(Number);
    const [endHour, endMin] = endTime.split(':').map(Number);

    let startTotalMinutes = startHour * 60 + startMin;
    let endTotalMinutes = endHour * 60 + endMin;
    if (endTotalMinutes < startTotalMinutes) { endTotalMinutes += 24 * 60; }

    const diffMinutes = endTotalMinutes - startTotalMinutes;
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;
    const decimal = Math.round((diffMinutes / 60) * 100) / 100;

    setResult({ hours, minutes, totalMinutes: diffMinutes, decimal });
  };

  const reset = () => { setStartTime(''); setEndTime(''); setResult(null); setError(''); };

  return (
    <CalculatorLayout title="Time Duration Calculator" description="Calculate the exact duration between two times." breadcrumbs={[{ label: 'Daily Routine', href: '/daily-routine' }, { label: 'Time Duration Calculator' }]}>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader><CardTitle className="flex items-center gap-2 text-foreground"><Timer className="w-5 h-5 text-primary" />Calculate Time Duration</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="startTime" className="text-foreground">Start Time</Label><Input id="startTime" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="mt-2" /></div>
                <div><Label htmlFor="endTime" className="text-foreground">End Time</Label><Input id="endTime" type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="mt-2" /></div>
              </div>
              {error && <p className="text-destructive text-sm">{error}</p>}
              <div className="flex gap-3"><Button onClick={calculate} className="flex-1">Calculate Duration</Button><Button variant="outline" onClick={reset}>Reset</Button></div>
              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center mb-6"><p className="text-muted-foreground mb-2">Duration</p><p className="text-5xl font-bold text-primary">{result.hours}h {result.minutes}m</p></div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded-lg text-center"><p className="text-muted-foreground text-sm">Total Minutes</p><p className="text-xl font-semibold text-foreground">{result.totalMinutes}</p></div>
                    <div className="p-4 bg-background rounded-lg text-center"><p className="text-muted-foreground text-sm">Decimal Hours</p><p className="text-xl font-semibold text-foreground">{result.decimal}</p></div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          <CalculatorContent example={{ title: 'Example', scenario: '9:00 AM to 5:30 PM', calculation: '8 hours 30 minutes = 8.5 decimal hours', result: 'You worked 8.5 hours.' }} tips={['Use decimal hours for payroll.', 'Handles overnight shifts.']} faqs={[{ question: 'What are decimal hours?', answer: '30 min = 0.5 hours, 15 min = 0.25 hours.' }]} relatedCalculators={[{ title: 'Date Difference Calculator', href: '/daily-routine/date-difference-calculator' }]} />
        </div>
        <div className="space-y-6"><Card className="bg-card border-border"><CardHeader><CardTitle className="text-foreground text-lg">Conversions</CardTitle></CardHeader><CardContent className="space-y-3 text-sm text-muted-foreground"><p>15 min = 0.25 hours</p><p>30 min = 0.50 hours</p><p>45 min = 0.75 hours</p></CardContent></Card></div>
      </div>
    </CalculatorLayout>
  );
};

export default TimeDurationCalculator;
