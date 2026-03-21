import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Activity, Wallet, Flame, CreditCard, Percent, Calendar, LineChart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

import heroFinance from '@/assets/hero-finance.jpg';
import heroHealth from '@/assets/hero-health.jpg';
import heroMath from '@/assets/hero-math.jpg';
import heroDaily from '@/assets/hero-daily.jpg';
import heroAdvanced from '@/assets/hero-advanced.jpg';

const slides = [
  { id: 1, title: 'BMI Calculator', description: 'Calculate your Body Mass Index and understand your health status instantly.', icon: Activity, href: '/health-fitness/bmi-calculator', bg: heroHealth },
  { id: 2, title: 'EMI Calculator', description: 'Plan your loans better with accurate monthly payment calculations.', icon: Wallet, href: '/finance/emi-calculator', bg: heroFinance },
  { id: 3, title: 'Loan Calculator', description: 'Calculate total interest and payment schedules for any loan type.', icon: CreditCard, href: '/finance/loan-calculator', bg: heroFinance },
  { id: 4, title: 'Calorie Calculator', description: 'Find your daily caloric needs based on your goals and activity level.', icon: Flame, href: '/health-fitness/calorie-calculator', bg: heroHealth },
  { id: 5, title: 'Percentage Calculator', description: 'Quick and easy percentage calculations for any scenario.', icon: Percent, href: '/math/percentage-calculator', bg: heroMath },
  { id: 6, title: 'Age Calculator', description: 'Calculate your exact age in years, months, and days.', icon: Calendar, href: '/daily-routine/age-calculator', bg: heroDaily },
  { id: 7, title: 'Compound Interest', description: 'See how your money grows with compound interest over time.', icon: LineChart, href: '/finance/compound-interest-calculator', bg: heroAdvanced },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }, 300);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((currentSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentSlide, goTo]);

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <section className="relative h-[480px] md:h-[520px] overflow-hidden">
      {/* Background images - all preloaded, opacity toggled */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${s.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === currentSlide ? 1 : 0,
          }}
        />
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-foreground/30 dark:bg-background/60" />

      <div className="container relative h-full flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`transition-all duration-500 ease-out ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            key={slide.id}
          >
            <Badge variant="secondary" className="mb-4 inline-flex items-center gap-1 bg-background/80 text-foreground">
              <Star className="w-3 h-3" />
              Popular Calculator
            </Badge>

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-sm mb-6">
              <Icon className="w-8 h-8 text-primary-foreground dark:text-primary" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-foreground mb-4 drop-shadow-lg">
              {slide.title}
            </h1>

            <p className="text-lg md:text-xl text-white/90 dark:text-muted-foreground mb-8 max-w-xl mx-auto drop-shadow">
              {slide.description}
            </p>

            <Button asChild size="lg" className="px-8 shadow-lg">
              <Link to={slide.href}>Calculate Now</Link>
            </Button>
          </div>
        </div>

        <button
          onClick={() => goTo((currentSlide - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => goTo((currentSlide + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
