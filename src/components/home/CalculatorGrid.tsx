import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Wallet, Flame, CreditCard, Percent, Calendar, LineChart, ArrowRight, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const calculators = [
  { title: 'BMI Calculator', description: 'Calculate Body Mass Index to understand if you are at a healthy weight.', icon: Activity, href: '/health-fitness/bmi-calculator', color: 'text-primary', bg: 'bg-primary/10' },
  { title: 'EMI Calculator', description: 'Calculate monthly installments for your loans with interest breakdown.', icon: Wallet, href: '/finance/emi-calculator', color: 'text-accent', bg: 'bg-accent/10' },
  { title: 'Loan Calculator', description: 'Calculate total payments and interest for any loan type.', icon: CreditCard, href: '/finance/loan-calculator', color: 'text-primary', bg: 'bg-primary/10' },
  { title: 'Calorie Calculator', description: 'Find your daily calorie needs based on your fitness goals.', icon: Flame, href: '/health-fitness/calorie-calculator', color: 'text-destructive', bg: 'bg-destructive/10' },
  { title: 'Percentage Calculator', description: 'Quick percentage calculations for discounts, tips, and more.', icon: Percent, href: '/math/percentage-calculator', color: 'text-accent', bg: 'bg-accent/10' },
  { title: 'Age Calculator', description: 'Calculate your exact age in years, months, and days.', icon: Calendar, href: '/daily-routine/age-calculator', color: 'text-primary', bg: 'bg-primary/10' },
  { title: 'Compound Interest', description: 'See how your investments grow with compound interest.', icon: LineChart, href: '/finance/compound-interest-calculator', color: 'text-accent', bg: 'bg-accent/10' },
];

export const CalculatorGrid = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 inline-flex items-center gap-1">
            <Star className="w-3 h-3" />
            Most Used
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Calculators
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Free, accurate, and easy-to-use online calculators for your everyday needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc) => {
            const Icon = calc.icon;
            return (
              <Link key={calc.href} to={calc.href}>
                <Card className="h-full bg-card hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 border-border group">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl ${calc.bg} flex items-center justify-center mb-2`}>
                      <Icon className={`w-6 h-6 ${calc.color}`} />
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {calc.title}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-base">
                      {calc.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
