import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';

export const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const target = 184720;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-primary/5">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <Users className="w-7 h-7 text-primary" />
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">
              {count.toLocaleString()}+
            </p>
            <p className="text-muted-foreground text-sm">Happy users trust Vidify Calculators for daily calculations</p>
          </div>
        </div>
      </div>
    </section>
  );
};