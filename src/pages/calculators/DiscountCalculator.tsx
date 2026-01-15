import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tag } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercent, setDiscountPercent] = useState('');
  const [result, setResult] = useState<{ discountAmount: number; finalPrice: number } | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercent);
    if (isNaN(price) || price <= 0) { setError('Please enter a valid price.'); setResult(null); return; }
    if (isNaN(discount) || discount < 0 || discount > 100) { setError('Discount must be 0-100%.'); setResult(null); return; }

    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;

    setResult({ discountAmount: Math.round(discountAmount * 100) / 100, finalPrice: Math.round(finalPrice * 100) / 100 });
  };

  const reset = () => { setOriginalPrice(''); setDiscountPercent(''); setResult(null); setError(''); };
  const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

  return (
    <CalculatorLayout title="Discount Calculator" description="Calculate discounts and sale prices quickly." breadcrumbs={[{ label: 'Daily Routine', href: '/daily-routine' }, { label: 'Discount Calculator' }]}>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader><CardTitle className="flex items-center gap-2 text-foreground"><Tag className="w-5 h-5 text-primary" />Calculate Your Discount</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="originalPrice" className="text-foreground">Original Price ($)</Label><Input id="originalPrice" type="number" step="0.01" value={originalPrice} onChange={(e) => setOriginalPrice(e.target.value)} placeholder="e.g., 99.99" className="mt-2" /></div>
                <div><Label htmlFor="discountPercent" className="text-foreground">Discount Percentage (%)</Label><Input id="discountPercent" type="number" value={discountPercent} onChange={(e) => setDiscountPercent(e.target.value)} placeholder="e.g., 25" className="mt-2" /></div>
              </div>
              {error && <p className="text-destructive text-sm">{error}</p>}
              <div className="flex gap-3"><Button onClick={calculate} className="flex-1">Calculate</Button><Button variant="outline" onClick={reset}>Reset</Button></div>
              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center mb-6"><p className="text-muted-foreground mb-2">Final Price</p><p className="text-5xl font-bold text-primary">{formatCurrency(result.finalPrice)}</p><p className="text-sm text-muted-foreground mt-2 line-through">Original: {formatCurrency(parseFloat(originalPrice))}</p></div>
                  <div className="p-4 bg-background rounded-lg text-center"><p className="text-muted-foreground text-sm">You Save</p><p className="text-2xl font-semibold text-green-500">{formatCurrency(result.discountAmount)}</p></div>
                </div>
              )}
            </CardContent>
          </Card>
          <CalculatorContent example={{ title: 'Example', scenario: '$120 jacket, 30% off', calculation: 'Discount: $36, Final: $84', result: 'You pay $84 and save $36.' }} tips={['Compare final price to alternatives.', 'Stack coupons for max savings.']} faqs={[{ question: 'How do stacked discounts work?', answer: 'Applied sequentially: 20% off + 10% off = 28% total, not 30%.' }]} relatedCalculators={[{ title: 'Percentage Calculator', href: '/math/percentage-calculator' }]} />
        </div>
        <div className="space-y-6"><Card className="bg-card border-border"><CardHeader><CardTitle className="text-foreground text-lg">Quick Math</CardTitle></CardHeader><CardContent className="space-y-3 text-sm text-muted-foreground"><p>10% off: Divide by 10</p><p>25% off: Divide by 4</p><p>50% off: Divide by 2</p></CardContent></Card></div>
      </div>
    </CalculatorLayout>
  );
};

export default DiscountCalculator;
