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
  SquareRoot,
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
      { title: 'EMI Calculator', description: 'Calculate your Equated Monthly Installment for loans.', href: '/emi-calculator', icon: Wallet, isPopular: true },
      { title: 'Loan Calculator', description: 'Calculate monthly payments and amortization schedule.', href: '/loan-calculator', icon: CreditCard, isPopular: true },
      { title: 'Mortgage Calculator', description: 'Calculate home loan payments with taxes and insurance.', href: '/mortgage-calculator', icon: Home },
      { title: 'Simple Interest Calculator', description: 'Calculate simple interest on principal amount.', href: '/simple-interest-calculator', icon: TrendingUp },
      { title: 'Compound Interest Calculator', description: 'Calculate compound interest with different frequencies.', href: '/compound-interest-calculator', icon: LineChart, isPopular: true },
      { title: 'Savings Calculator', description: 'Plan your savings goals with regular deposits.', href: '/savings-calculator', icon: PiggyBank },
      { title: 'Investment Calculator', description: 'Calculate future value of your investments.', href: '/investment-calculator', icon: TrendingUp },
      { title: 'Retirement Calculator', description: 'Plan for retirement with savings projections.', href: '/retirement-calculator', icon: Target },
      { title: 'Inflation Calculator', description: 'Calculate the impact of inflation over time.', href: '/inflation-calculator', icon: BarChart3 },
    ],
  },
  {
    id: 'math',
    title: 'Math Calculators',
    description: 'Solve percentages, fractions, algebra, and other mathematical calculations easily.',
    href: '/math-calculators',
    icon: Calculator,
    calculators: [
      { title: 'Percentage Calculator', description: 'Calculate percentages and percentage changes.', href: '/percentage-calculator', icon: Percent, isPopular: true },
      { title: 'Average Calculator', description: 'Calculate mean, median, mode, and range.', href: '/average-calculator', icon: BarChart3 },
      { title: 'Fraction Calculator', description: 'Add, subtract, multiply, and divide fractions.', href: '/fraction-calculator', icon: Divide },
      { title: 'Ratio Calculator', description: 'Calculate and simplify ratios.', href: '/ratio-calculator', icon: BarChart3 },
      { title: 'Square Root Calculator', description: 'Calculate square roots and nth roots.', href: '/square-root-calculator', icon: SquareRoot },
      { title: 'Power Calculator', description: 'Calculate powers and exponents.', href: '/power-calculator', icon: Superscript },
    ],
  },
  {
    id: 'health',
    title: 'Health & Fitness',
    description: 'Track your health metrics including BMI, calories, macros, and fitness goals.',
    href: '/health-fitness-calculators',
    icon: Heart,
    calculators: [
      { title: 'BMI Calculator', description: 'Calculate Body Mass Index for healthy weight.', href: '/bmi-calculator', icon: Activity, isPopular: true },
      { title: 'BMR Calculator', description: 'Calculate Basal Metabolic Rate (Mifflin-St Jeor).', href: '/bmr-calculator', icon: Flame },
      { title: 'Calorie Calculator', description: 'Calculate daily calorie needs for your goals.', href: '/calorie-calculator', icon: Flame, isPopular: true },
      { title: 'Ideal Weight Calculator', description: 'Calculate ideal body weight using multiple formulas.', href: '/ideal-weight-calculator', icon: Target },
      { title: 'Body Fat Calculator', description: 'Calculate body fat percentage (US Navy method).', href: '/body-fat-calculator', icon: Scale },
      { title: 'Water Intake Calculator', description: 'Calculate daily water intake needs.', href: '/water-intake-calculator', icon: Droplets },
      { title: 'TDEE Calculator', description: 'Calculate Total Daily Energy Expenditure.', href: '/tdee-calculator', icon: Zap },
    ],
  },
  {
    id: 'daily',
    title: 'Daily Routine Calculators',
    description: 'Tools for everyday calculations like time, date, age, and productivity tracking.',
    href: '/daily-routine-calculators',
    icon: Clock,
    calculators: [
      { title: 'Age Calculator', description: 'Calculate exact age in years, months, and days.', href: '/age-calculator', icon: Calendar, isPopular: true },
      { title: 'Date Difference Calculator', description: 'Calculate days between two dates.', href: '/date-difference-calculator', icon: Calendar },
      { title: 'Time Duration Calculator', description: 'Calculate time duration between two times.', href: '/time-duration-calculator', icon: Timer },
      { title: 'Tip Calculator', description: 'Calculate tip amount and split bills.', href: '/tip-calculator', icon: Receipt },
      { title: 'Discount Calculator', description: 'Calculate discounts and sale prices.', href: '/discount-calculator', icon: Tag },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced Calculators',
    description: 'Complex calculations for scientific, engineering, and specialized purposes.',
    href: '/advanced-calculators',
    icon: Sparkles,
    calculators: [
      { title: 'Speed Calculator', description: 'Calculate speed, distance, or time.', href: '/speed-calculator', icon: Gauge },
      { title: 'Force Calculator', description: 'Calculate force using F = m × a.', href: '/force-calculator', icon: Atom },
      { title: 'Work & Energy Calculator', description: 'Calculate work, energy, and power.', href: '/work-energy-calculator', icon: Battery },
      { title: 'Ohm\'s Law Calculator', description: 'Calculate voltage, current, or resistance.', href: '/ohms-law-calculator', icon: Lightbulb },
      { title: 'Voltage Calculator', description: 'Calculate voltage in electrical circuits.', href: '/voltage-calculator', icon: Cpu },
    ],
  },
];

export const getPopularCalculators = (): CalculatorItem[] => {
  return categories.flatMap(cat => cat.calculators.filter(calc => calc.isPopular));
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((cat) => cat.href === `/${slug}`);
};

export const getCategoryByCalculatorHref = (href: string): Category | undefined => {
  return categories.find((cat) => 
    cat.calculators.some((calc) => calc.href === href)
  );
};
