import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { categories } from '@/data/calculatorCategories';
import { useEffect, useRef, useState } from 'react';

const allTools = categories.flatMap(cat =>
  cat.calculators.map(calc => ({
    ...calc,
    categoryIcon: cat.icon,
    categoryTitle: cat.title,
  }))
);

// Split into two rows
const mid = Math.ceil(allTools.length / 2);
const row1 = allTools.slice(0, mid);
const row2 = allTools.slice(mid);

const ScrollRow = ({ tools, direction = 'left', speed = 30 }: { tools: typeof allTools; direction?: 'left' | 'right'; speed?: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(0);
  const animRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;
    let lastTime = performance.now();

    const animate = (now: number) => {
      if (!isPaused) {
        const delta = (now - lastTime) / 1000;
        const px = delta * speed;
        scrollRef.current += direction === 'left' ? px : -px;

        if (direction === 'left' && scrollRef.current >= totalWidth) {
          scrollRef.current -= totalWidth;
        } else if (direction === 'right' && scrollRef.current <= -totalWidth) {
          scrollRef.current += totalWidth;
        }

        container.style.transform = `translateX(${-scrollRef.current}px)`;
      }
      lastTime = now;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [isPaused, direction, speed]);

  // Duplicate items for seamless loop
  const items = [...tools, ...tools];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={containerRef} className="flex gap-4 w-max will-change-transform">
        {items.map((calc, i) => {
          const Icon = calc.icon;
          return (
            <Link
              key={`${calc.href}-${i}`}
              to={calc.href}
              className="flex-shrink-0 w-[220px] group"
            >
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                  {calc.title}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const CalculatorGrid = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4 inline-flex items-center gap-1">
            <Star className="w-3 h-3" />
            All Tools
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Calculators
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {allTools.length}+ free, accurate calculators for finance, math, health, and more.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <ScrollRow tools={row1} direction="left" speed={35} />
        <ScrollRow tools={row2} direction="right" speed={28} />
      </div>
    </section>
  );
};
