import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Activity, Wallet, Flame, CreditCard, Percent, Calendar, LineChart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const slides = [
  { id: 1, title: 'BMI Calculator', description: 'Calculate your Body Mass Index and understand your health status instantly.', icon: Activity, href: '/health-fitness/bmi-calculator', gradient: 'from-primary/10 to-primary/5', bgImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=60' },
  { id: 2, title: 'EMI Calculator', description: 'Plan your loans better with accurate monthly payment calculations.', icon: Wallet, href: '/finance/emi-calculator', gradient: 'from-accent/10 to-accent/5', bgImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=60' },
  { id: 3, title: 'Loan Calculator', description: 'Calculate total interest and payment schedules for any loan type.', icon: CreditCard, href: '/finance/loan-calculator', gradient: 'from-primary/10 to-primary/5', bgImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=60' },
  { id: 4, title: 'Calorie Calculator', description: 'Find your daily caloric needs based on your goals and activity level.', icon: Flame, href: '/health-fitness/calorie-calculator', gradient: 'from-destructive/10 to-destructive/5', bgImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=60' },
  { id: 5, title: 'Percentage Calculator', description: 'Quick and easy percentage calculations for any scenario.', icon: Percent, href: '/math/percentage-calculator', gradient: 'from-accent/10 to-accent/5', bgImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=60' },
  { id: 6, title: 'Age Calculator', description: 'Calculate your exact age in years, months, and days.', icon: Calendar, href: '/daily-routine/age-calculator', gradient: 'from-primary/10 to-primary/5', bgImage: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1200&q=60' },
  { id: 7, title: 'Compound Interest', description: 'See how your money grows with compound interest over time.', icon: LineChart, href: '/finance/compound-interest-calculator', gradient: 'from-accent/10 to-accent/5', bgImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=60' },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slide.bgImage})`, opacity: 0.12 }}
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-all duration-500`} />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in" key={slide.id}>
            <Badge variant="secondary" className="mb-4 inline-flex items-center gap-1">
              <Star className="w-3 h-3" />
              Popular Calculator
            </Badge>
            
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {slide.title}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              {slide.description}
            </p>
            
            <Button asChild size="lg" className="px-8">
              <Link to={slide.href}>
                Calculate Now
              </Link>
            </Button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors shadow-soft"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors shadow-soft"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-primary'
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
