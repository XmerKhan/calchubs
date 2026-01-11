import { 
  DollarSign, 
  Calculator, 
  Heart, 
  Clock, 
  Sparkles,
  Wallet,
  Percent,
  Activity,
  Flame,
  CreditCard
} from 'lucide-react';

export interface CalculatorItem {
  title: string;
  description: string;
  href: string;
  icon: any;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: any;
  calculators: CalculatorItem[];
}

export const categories: Category[] = [
  {
    id: 'finance',
    title: 'Finance Calculators',
    description: 'Calculate loans, EMI, investments, and financial planning tools to manage your money better.',
    href: '/finance-calculators',
    icon: DollarSign,
    calculators: [
      {
        title: 'EMI Calculator',
        description: 'Calculate your Equated Monthly Installment for loans with interest breakdown.',
        href: '/emi-calculator',
        icon: Wallet,
      },
      {
        title: 'Loan Calculator',
        description: 'Calculate monthly payments, total interest, and view amortization schedule.',
        href: '/loan-calculator',
        icon: CreditCard,
      },
    ],
  },
  {
    id: 'math',
    title: 'Math Calculators',
    description: 'Solve percentages, fractions, algebra, and other mathematical calculations easily.',
    href: '/math-calculators',
    icon: Calculator,
    calculators: [
      {
        title: 'Percentage Calculator',
        description: 'Calculate percentages, percentage change, and "X is what % of Y" easily.',
        href: '/percentage-calculator',
        icon: Percent,
      },
    ],
  },
  {
    id: 'health',
    title: 'Health & Fitness',
    description: 'Track your health metrics including BMI, calories, macros, and fitness goals.',
    href: '/health-fitness-calculators',
    icon: Heart,
    calculators: [
      {
        title: 'BMI Calculator',
        description: 'Calculate your Body Mass Index to check if you are at a healthy weight.',
        href: '/bmi-calculator',
        icon: Activity,
      },
      {
        title: 'Calorie Calculator',
        description: 'Calculate daily calorie needs based on your activity level and goals.',
        href: '/calorie-calculator',
        icon: Flame,
      },
    ],
  },
  {
    id: 'daily',
    title: 'Daily Routine Calculators',
    description: 'Tools for everyday calculations like time, date, age, and productivity tracking.',
    href: '/daily-routine-calculators',
    icon: Clock,
    calculators: [],
  },
  {
    id: 'advanced',
    title: 'Advanced Calculators',
    description: 'Complex calculations for scientific, engineering, and specialized purposes.',
    href: '/advanced-calculators',
    icon: Sparkles,
    calculators: [],
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((cat) => cat.href === `/${slug}`);
};

export const getCategoryByCalculatorHref = (href: string): Category | undefined => {
  return categories.find((cat) => 
    cat.calculators.some((calc) => calc.href === href)
  );
};
