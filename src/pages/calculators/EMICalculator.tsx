import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Wallet, DollarSign, Percent, Calendar } from 'lucide-react';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorContent } from '@/components/calculator/CalculatorContent';

const EMICalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [result, setResult] = useState<{
    emi: number;
    totalInterest: number;
    totalPayment: number;
  } | null>(null);
  const [error, setError] = useState('');

  const calculateEMI = () => {
    setError('');

    const p = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(tenure);

    if (isNaN(p) || isNaN(r) || isNaN(n) || p <= 0 || r <= 0 || n <= 0) {
      setError('Please enter valid positive numbers for all fields.');
      setResult(null);
      return;
    }

    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - p;

    setResult({
      emi: Math.round(emi * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      totalPayment: Math.round(totalPayment * 100) / 100,
    });
  };

  const reset = () => {
    setPrincipal('');
    setRate('');
    setTenure('');
    setResult(null);
    setError('');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <CalculatorLayout
      title="EMI Calculator"
      description="Calculate your Equated Monthly Installment for loans with interest breakdown."
      breadcrumbs={[
        { label: 'Finance', href: '/finance' },
        { label: 'EMI Calculator' }
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Wallet className="w-5 h-5 text-primary" />
                Calculate Your EMI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="principal" className="text-foreground flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Loan Amount ($)
                </Label>
                <Input
                  id="principal"
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  placeholder="e.g., 100000"
                  className="mt-2"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="rate" className="text-foreground flex items-center gap-2">
                    <Percent className="w-4 h-4" />
                    Interest Rate (% per year)
                  </Label>
                  <Input
                    id="rate"
                    type="number"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    placeholder="e.g., 8.5"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="tenure" className="text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Loan Tenure (months)
                  </Label>
                  <Input
                    id="tenure"
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    placeholder="e.g., 60"
                    className="mt-2"
                  />
                </div>
              </div>

              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}

              <div className="flex gap-3">
                <Button onClick={calculateEMI} className="flex-1">
                  Calculate EMI
                </Button>
                <Button variant="outline" onClick={reset}>
                  Reset
                </Button>
              </div>

              {result && (
                <div className="p-6 bg-secondary/50 rounded-lg animate-scale-in">
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground mb-2">Monthly EMI</p>
                    <p className="text-5xl font-bold text-primary">{formatCurrency(result.emi)}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Total Interest</p>
                      <p className="text-xl font-semibold text-destructive">{formatCurrency(result.totalInterest)}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-muted-foreground text-sm">Total Payment</p>
                      <p className="text-xl font-semibold text-foreground">{formatCurrency(result.totalPayment)}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Formula:</strong> EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <CalculatorContent
            example={{
              title: 'Real-Life Example',
              scenario: 'Sarah takes a car loan of $25,000 at 7% annual interest for 5 years (60 months).',
              calculation: 'P = $25,000, R = 7%/12 = 0.583%, N = 60 months\nEMI = [25000 × 0.00583 × (1.00583)^60] / [(1.00583)^60 - 1] = $495.03',
              result: 'Sarah will pay $495.03 monthly. Total interest: $4,702, Total payment: $29,702',
            }}
            tips={[
              'A longer tenure reduces EMI but increases total interest paid.',
              'Consider making prepayments to reduce your total interest burden.',
              'Compare interest rates from multiple lenders before taking a loan.',
              'Factor in processing fees and other charges in your total cost calculation.',
            ]}
            faqs={[
              {
                question: 'What does EMI stand for?',
                answer: 'EMI stands for Equated Monthly Installment. It is a fixed payment amount made by a borrower to a lender at a specified date each calendar month.',
              },
              {
                question: 'Does EMI include interest?',
                answer: 'Yes, EMI includes both principal repayment and interest. Initially, a larger portion goes toward interest, gradually shifting to principal over time.',
              },
              {
                question: 'Can I reduce my EMI amount?',
                answer: 'You can reduce EMI by increasing the loan tenure, making a larger down payment, or negotiating a lower interest rate.',
              },
            ]}
            relatedCalculators={[
              { title: 'Loan Calculator', href: '/finance/loan-calculator' },
              { title: 'Compound Interest Calculator', href: '/finance/compound-interest-calculator' },
            ]}
          />
        </div>

        <div className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Quick Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>💡 Keep EMI below 40% of your monthly income.</p>
              <p>💡 Higher down payment = Lower EMI.</p>
              <p>💡 Check your credit score before applying.</p>
              <p>💡 Read all terms and conditions carefully.</p>
            </CardContent>
          </Card>

          <div className="p-4 bg-secondary/50 rounded-lg text-center text-muted-foreground text-sm border border-dashed border-border">
            Advertisement Space
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default EMICalculator;
