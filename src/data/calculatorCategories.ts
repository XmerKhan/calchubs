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
  CreditCard,
  Home,
  TrendingUp,
  PiggyBank,
  LineChart,
  Target,
  Droplets,
  Zap,
  Scale,
  Calendar,
  Timer,
  Receipt,
  Tag,
  Divide,
  BarChart3,
  Radical,
  Superscript,
  Gauge,
  Atom,
  Battery,
  Lightbulb,
  Cpu
} from 'lucide-react';

export interface CalculatorItem {
  title: string;
  description: string;
  href: string;
  icon: any;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  href: string;
  icon: any;
  calculators: CalculatorItem[];
}

export const categories: Category[] = [
  {
    id: 'finance',
    slug: 'finance',
    title: 'Finance Calculators',
    description: 'Calculate loans, EMI, investments, and financial planning tools to manage your money better. Make informed decisions about mortgages, savings, and retirement planning.',
    href: '/finance',
    icon: DollarSign,
    calculators: [
      { title: 'EMI Calculator', description: 'Calculate your Equated Monthly Installment for loans.', href: '/finance/emi-calculator', icon: Wallet, isPopular: true },
      { title: 'Loan Calculator', description: 'Calculate monthly payments and amortization schedule.', href: '/finance/loan-calculator', icon: CreditCard, isPopular: true },
      { title: 'Mortgage Calculator', description: 'Calculate home loan payments with taxes and insurance.', href: '/finance/mortgage-calculator', icon: Home },
      { title: 'Simple Interest Calculator', description: 'Calculate simple interest on principal amount.', href: '/finance/simple-interest-calculator', icon: TrendingUp },
      { title: 'Compound Interest Calculator', description: 'Calculate compound interest with different frequencies.', href: '/finance/compound-interest-calculator', icon: LineChart, isPopular: true },
      { title: 'Savings Calculator', description: 'Plan your savings goals with regular deposits.', href: '/finance/savings-calculator', icon: PiggyBank },
      { title: 'Investment Calculator', description: 'Calculate future value of your investments.', href: '/finance/investment-calculator', icon: TrendingUp },
      { title: 'Retirement Calculator', description: 'Plan for retirement with savings projections.', href: '/finance/retirement-calculator', icon: Target },
      { title: 'Inflation Calculator', description: 'Calculate the impact of inflation over time.', href: '/finance/inflation-calculator', icon: BarChart3 },
    ],
  },
  {
    id: 'math',
    slug: 'math',
    title: 'Math Calculators',
    description: 'Solve percentages, fractions, algebra, and other mathematical calculations easily. Perfect for students, professionals, and everyday math problems.',
    href: '/math',
    icon: Calculator,
    calculators: [
      { title: 'Percentage Calculator', description: 'Calculate percentages and percentage changes.', href: '/math/percentage-calculator', icon: Percent, isPopular: true },
      { title: 'Average Calculator', description: 'Calculate mean, median, mode, and range.', href: '/math/average-calculator', icon: BarChart3 },
      { title: 'Fraction Calculator', description: 'Add, subtract, multiply, and divide fractions.', href: '/math/fraction-calculator', icon: Divide },
      { title: 'Ratio Calculator', description: 'Calculate and simplify ratios.', href: '/math/ratio-calculator', icon: BarChart3 },
      { title: 'Square Root Calculator', description: 'Calculate square roots and nth roots.', href: '/math/square-root-calculator', icon: Radical },
      { title: 'Power Calculator', description: 'Calculate powers and exponents.', href: '/math/power-calculator', icon: Superscript },
    ],
  },
  {
    id: 'health-fitness',
    slug: 'health-fitness',
    title: 'Health & Fitness Calculators',
    description: 'Track your health metrics including BMI, calories, macros, and fitness goals. Make data-driven decisions for a healthier lifestyle.',
    href: '/health-fitness',
    icon: Heart,
    calculators: [
      { title: 'BMI Calculator', description: 'Calculate Body Mass Index for healthy weight.', href: '/health-fitness/bmi-calculator', icon: Activity, isPopular: true },
      { title: 'BMR Calculator', description: 'Calculate Basal Metabolic Rate (Mifflin-St Jeor).', href: '/health-fitness/bmr-calculator', icon: Flame },
      { title: 'Calorie Calculator', description: 'Calculate daily calorie needs for your goals.', href: '/health-fitness/calorie-calculator', icon: Flame, isPopular: true },
      { title: 'Ideal Weight Calculator', description: 'Calculate ideal body weight using multiple formulas.', href: '/health-fitness/ideal-weight-calculator', icon: Target },
      { title: 'Body Fat Calculator', description: 'Calculate body fat percentage (US Navy method).', href: '/health-fitness/body-fat-calculator', icon: Scale },
      { title: 'Water Intake Calculator', description: 'Calculate daily water intake needs.', href: '/health-fitness/water-intake-calculator', icon: Droplets },
      { title: 'TDEE Calculator', description: 'Calculate Total Daily Energy Expenditure.', href: '/health-fitness/tdee-calculator', icon: Zap },
    ],
  },
  {
    id: 'daily-routine',
    slug: 'daily-routine',
    title: 'Daily Routine Calculators',
    description: 'Tools for everyday calculations like time, date, age, and productivity tracking. Simplify your daily life with these handy calculators.',
    href: '/daily-routine',
    icon: Clock,
    calculators: [
      { title: 'Age Calculator', description: 'Calculate exact age in years, months, and days.', href: '/daily-routine/age-calculator', icon: Calendar, isPopular: true },
      { title: 'Date Difference Calculator', description: 'Calculate days between two dates.', href: '/daily-routine/date-difference-calculator', icon: Calendar },
      { title: 'Time Duration Calculator', description: 'Calculate time duration between two times.', href: '/daily-routine/time-duration-calculator', icon: Timer },
      { title: 'Tip Calculator', description: 'Calculate tip amount and split bills.', href: '/daily-routine/tip-calculator', icon: Receipt },
      { title: 'Discount Calculator', description: 'Calculate discounts and sale prices.', href: '/daily-routine/discount-calculator', icon: Tag },
    ],
  },
  {
    id: 'advanced',
    slug: 'advanced',
    title: 'Advanced Calculators',
    description: 'Complex calculations for scientific, engineering, and specialized purposes. Ideal for physics, electrical engineering, and technical applications.',
    href: '/advanced',
    icon: Sparkles,
    calculators: [
      { title: 'Speed Calculator', description: 'Calculate speed, distance, or time.', href: '/advanced/speed-calculator', icon: Gauge },
      { title: 'Force Calculator', description: 'Calculate force using F = m × a.', href: '/advanced/force-calculator', icon: Atom },
      { title: 'Work & Energy Calculator', description: 'Calculate work, energy, and power.', href: '/advanced/work-energy-calculator', icon: Battery },
      { title: 'Ohm\'s Law Calculator', description: 'Calculate voltage, current, or resistance.', href: '/advanced/ohms-law-calculator', icon: Lightbulb },
      { title: 'Voltage Calculator', description: 'Calculate voltage in electrical circuits.', href: '/advanced/voltage-calculator', icon: Cpu },
    ],
  },
];

export const getPopularCalculators = (): CalculatorItem[] => {
  return categories.flatMap(cat => cat.calculators.filter(calc => calc.isPopular));
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((cat) => cat.slug === slug);
};

export const getCategoryByCalculatorHref = (href: string): Category | undefined => {
  return categories.find((cat) => 
    cat.calculators.some((calc) => calc.href === href)
  );
};

export const getCalculatorBySlug = (categorySlug: string, calculatorSlug: string): CalculatorItem | undefined => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  return category.calculators.find(calc => calc.href === `/${categorySlug}/${calculatorSlug}`);
};
