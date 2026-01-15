import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const DateDifferenceCalculator = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState<{ days: number; weeks: number; months: number; years: number; workdays: number } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    if (!startDate || !endDate) { setError('Please enter both dates.'); setResult(null); return; }

    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start > end) { setError('Start date must be before end date.'); setResult(null); return; }

    const diffTime = Math.abs(end.getTime() - start.getTime());
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    if (months < 0) { years--; months += 12; }
    const totalMonths = years * 12 + months;

    let workdays = 0;
    const current = new Date(start);
    while (current <= end) {
      const day = current.getDay();
      if (day !== 0 && day !== 6) { workdays++; }
      current.setDate(current.getDate() + 1);
    }

    setResult({ days, weeks, months: totalMonths, years, workdays });
  };

  const reset = () => { setStartDate(''); setEndDate(''); setResult(null); setError(''); };

  return (
    <CalculatorLayout
      title="Date Difference Calculator"
      description="Calculate the exact number of days, weeks, months, and years between two dates."
      breadcrumbs={[{ label: 'Daily Routine', href: '/daily-routine' }, { label: 'Date Difference Calculator' }]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                Calculate Date Difference
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate" className="text-foreground">Start Date</Label>
                  <Input id="startDate" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="endDate" className="text-foreground">End Date</Label>
                  <Input id="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="mt-2" />
                </div>
              </div>

              {error && <p className="text-destructive text-sm">{error}</p>}

              <div className="flex gap-3">
                <Button onClick={calculate} className="flex-1">Calculate Difference</Button>
                <Button variant="outline" onClick={reset}>Reset</Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground mb-2">Total Days</p>
                    <p className="text-5xl font-bold text-primary">{result.days.toLocaleString()}</p>
                  </div>
                  <div className="grid sm:grid-cols-4 gap-4">
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Years</p>
                      <p className="text-xl font-semibold text-foreground">{result.years}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Months</p>
                      <p className="text-xl font-semibold text-foreground">{result.months}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Weeks</p>
                      <p className="text-xl font-semibold text-foreground">{result.weeks}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Work Days</p>
                      <p className="text-xl font-semibold text-foreground">{result.workdays}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{ title: 'Example', scenario: 'July 1 to July 14, 2025', calculation: '13 days, 1 week 6 days, 9 work days', result: 'Your vacation spans 13 days with 9 work days off.' }}
            tips={['Use for project planning and deadlines.', 'Track elapsed time for contracts.']}
            faqs={[{ question: 'Does this include end date?', answer: 'Yes, both start and end dates are included.' }]}
            relatedCalculators={[{ title: 'Age Calculator', href: '/daily-routine/age-calculator' }, { title: 'Time Duration Calculator', href: '/daily-routine/time-duration-calculator' }]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader><CardTitle className="text-foreground text-lg">References</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>📅 1 year = 365 days (366 leap)</p>
              <p>📆 1 month ≈ 30.44 days avg</p>
              <p>📅 1 week = 7 days</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default DateDifferenceCalculator;
