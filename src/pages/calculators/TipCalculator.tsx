import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Receipt } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercent, setTipPercent] = useState('18');
  const [splitCount, setSplitCount] = useState('1');
  const [result, setResult] = useState<{ tipAmount: number; totalAmount: number; perPerson: number } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercent);
    const split = parseInt(splitCount);
    if (isNaN(bill) || bill <= 0) { setError('Please enter a valid bill amount.'); setResult(null); return; }
    if (isNaN(tip) || tip < 0) { setError('Please enter a valid tip percentage.'); setResult(null); return; }
    if (isNaN(split) || split < 1) { setError('Split count must be at least 1.'); setResult(null); return; }

    const tipAmount = (bill * tip) / 100;
    const totalAmount = bill + tipAmount;
    const perPerson = totalAmount / split;

    setResult({ tipAmount: Math.round(tipAmount * 100) / 100, totalAmount: Math.round(totalAmount * 100) / 100, perPerson: Math.round(perPerson * 100) / 100 });
  };

  const reset = () => { setBillAmount(''); setTipPercent('18'); setSplitCount('1'); setResult(null); setError(''); };
  const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

  return (
    <CalculatorLayout title="Tip Calculator" description="Calculate tips and split bills easily." breadcrumbs={[{ label: 'Daily Routine', href: '/daily-routine' }, { label: 'Tip Calculator' }]}>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader><CardTitle className="flex items-center gap-2 text-foreground"><Receipt className="w-5 h-5 text-primary" />Calculate Your Tip</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div><Label htmlFor="billAmount" className="text-foreground">Bill Amount ($)</Label><Input id="billAmount" type="number" step="0.01" value={billAmount} onChange={(e) => setBillAmount(e.target.value)} placeholder="e.g., 50.00" className="mt-2" /></div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="tipPercent" className="text-foreground">Tip Percentage (%)</Label><Input id="tipPercent" type="number" value={tipPercent} onChange={(e) => setTipPercent(e.target.value)} placeholder="e.g., 18" className="mt-2" /></div>
                <div><Label htmlFor="splitCount" className="text-foreground">Split Between (people)</Label><Input id="splitCount" type="number" min="1" value={splitCount} onChange={(e) => setSplitCount(e.target.value)} placeholder="1" className="mt-2" /></div>
              </div>
              {error && <p className="text-destructive text-sm">{error}</p>}
              <div className="flex gap-3"><Button onClick={calculate} className="flex-1">Calculate</Button><Button variant="outline" onClick={reset}>Reset</Button></div>
              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-background rounded-lg text-center"><p className="text-muted-foreground text-sm">Tip Amount</p><p className="text-2xl font-bold text-primary">{formatCurrency(result.tipAmount)}</p></div>
                    <div className="p-4 bg-background rounded-lg text-center"><p className="text-muted-foreground text-sm">Total</p><p className="text-2xl font-bold text-foreground">{formatCurrency(result.totalAmount)}</p></div>
                    <div className="p-4 bg-background rounded-lg text-center"><p className="text-muted-foreground text-sm">Per Person</p><p className="text-2xl font-bold text-foreground">{formatCurrency(result.perPerson)}</p></div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          <CalculatorContent example={{ title: 'Example', scenario: '$85 bill with 4 friends, 20% tip', calculation: 'Tip: $17, Total: $102, Per person: $25.50', result: 'Each person pays $25.50.' }} tips={['15-20% is standard in the US.', '18-20% for excellent service.']} faqs={[{ question: 'How much should I tip?', answer: '15-20% for restaurants, 20%+ for excellent service.' }]} relatedCalculators={[{ title: 'Discount Calculator', href: '/daily-routine/discount-calculator' }]} />
        </div>
        <div className="space-y-6"><Card className="bg-card border-border"><CardHeader><CardTitle className="text-foreground text-lg">Tipping Guide</CardTitle></CardHeader><CardContent className="space-y-3 text-sm text-muted-foreground"><p>🍽️ Restaurant: 15-20%</p><p>💇 Salon: 15-20%</p><p>🚕 Taxi: 15-20%</p></CardContent></Card></div>
      </div>
    </CalculatorLayout>
  );
};

export default TipCalculator;
