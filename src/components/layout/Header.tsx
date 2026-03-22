import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Calculator, Menu, Moon, Sun } from 'lucide-react';
import { categories } from '@/data/calculatorCategories';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header = ({ isDark, toggleTheme }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Calculator className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">CalcHub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
          >
            Home
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
            >
              {category.title.replace(' Calculators', '')}
            </Link>
          ))}
          <Link
            to="/blog"
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
          >
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <div className="flex flex-col gap-2 mt-6">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  Home
                </Link>
                <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Categories
                </div>
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Link
                      key={category.id}
                      to={category.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors flex items-center gap-3"
                    >
                      <Icon className="w-4 h-4 text-primary" />
                      {category.title}
                    </Link>
                  );
                })}
                <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  More
                </div>
                <Link
                  to="/blog"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors flex items-center gap-3"
                >
                  <BookOpen className="w-4 h-4 text-primary" />
                  Blog
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
