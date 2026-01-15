import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [toDate, setToDate] = useState(new Date().toISOString().split('T')[0]);
  const [result, setResult] = useState<{ years: number; months: number; days: number; totalDays: number; nextBirthday: string; daysUntilBirthday: number } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    if (!birthDate) { setError('Please enter your birth date.'); setResult(null); return; }

    const birth = new Date(birthDate);
    const today = new Date(toDate);

    if (birth > today) { setError('Birth date cannot be in the future.'); setResult(null); return; }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) { years--; months += 12; }

    const diffTime = Math.abs(today.getTime() - birth.getTime());
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    let nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday <= today) { nextBirthday = new Date(today.getFullYear() + 1, birth.getMonth(), birth.getDate()); }
    const daysUntilBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    setResult({
      years, months, days, totalDays,
      nextBirthday: nextBirthday.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      daysUntilBirthday,
    });
  };

  const reset = () => { setBirthDate(''); setToDate(new Date().toISOString().split('T')[0]); setResult(null); setError(''); };

  return (
    <CalculatorLayout
      title="Age Calculator"
      description="Calculate your exact age in years, months, days, and find your next birthday."
      breadcrumbs={[{ label: 'Daily Routine', href: '/daily-routine' }, { label: 'Age Calculator' }]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                Calculate Your Age
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="birthDate" className="text-foreground">Date of Birth</Label>
                  <Input id="birthDate" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="toDate" className="text-foreground">Age at Date (default: today)</Label>
                  <Input id="toDate" type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="mt-2" />
                </div>
              </div>

              {error && <p className="text-destructive text-sm">{error}</p>}

              <div className="flex gap-3">
                <Button onClick={calculate} className="flex-1">Calculate Age</Button>
                <Button variant="outline" onClick={reset}>Reset</Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground mb-2">Your Age</p>
                    <p className="text-4xl font-bold text-primary">{result.years} years, {result.months} months, {result.days} days</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Total Days Lived</p>
                      <p className="text-xl font-semibold text-foreground">{result.totalDays.toLocaleString()}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Days Until Birthday</p>
                      <p className="text-xl font-semibold text-primary">{result.daysUntilBirthday}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-background rounded-lg text-center">
                    <p className="text-muted-foreground text-sm">Next Birthday</p>
                    <p className="text-lg font-semibold text-foreground">{result.nextBirthday}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{ title: 'Example', scenario: 'Born March 15, 1990. Today is January 15, 2025.', calculation: '34 years, 10 months, 0 days', result: 'You are 34 years and 10 months old.' }}
            tips={['Use for legal documents requiring exact age.', 'Calculate age at any past or future date.']}
            faqs={[{ question: 'How is age calculated?', answer: 'Counting complete years, then remaining months, then remaining days.' }]}
            relatedCalculators={[{ title: 'Date Difference Calculator', href: '/daily-routine/date-difference-calculator' }, { title: 'Time Duration Calculator', href: '/daily-routine/time-duration-calculator' }]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader><CardTitle className="text-foreground text-lg">Fun Facts</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>🎂 Average person has about 80 birthdays.</p>
              <p>❤️ Your heart beats ~100,000 times daily.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default AgeCalculator;
