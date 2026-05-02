import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { CalculatorRichSection } from './CalculatorRichSection';

// Map URL slug → deepContent key
const slugMap: Record<string, string> = {
  'bmi-calculator': 'bmi',
  'age-calculator': 'age',
  'force-calculator': 'force',
  'percentage-calculator': 'percentage',
  'speed-calculator': 'speed',
};

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface CalculatorLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

export const CalculatorLayout = ({
  children,
  title,
  description,
  breadcrumbs,
}: CalculatorLayoutProps) => {
  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((item, index) => (
            <span key={index} className="flex items-center gap-1">
              <ChevronRight className="w-4 h-4" />
              {item.href ? (
                <Link to={item.href} className="hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>

        {children}

        {(() => {
          const path = location.pathname.replace(/\/$/, '');
          const last = path.split('/').pop() ?? '';
          const slug = slugMap[last] ?? last.replace(/-calculator$/, '');
          return <CalculatorRichSection slug={slug} toolName={title} shortDescription={description} />;
        })()}
      </div>
    </div>
  );
};
