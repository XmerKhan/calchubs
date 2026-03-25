import { Zap, Shield, Smartphone, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Get accurate calculations in real-time without any page reloads.',
  },
  {
    icon: Shield,
    title: '100% Accurate',
    description: 'All formulas are verified and tested for mathematical precision.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Works perfectly on all devices - phone, tablet, or desktop.',
  },
  {
    icon: Globe,
    title: 'Free Forever',
    description: 'All calculators are completely free to use with no hidden costs.',
  },
];

export const Features = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Vidify Calculators?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by millions for accurate calculations every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-soft transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};