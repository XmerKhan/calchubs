export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-calculate-bmi',
    title: 'How to Calculate BMI: A Complete Guide',
    excerpt: 'Learn the BMI formula, what your score means, and how to maintain a healthy Body Mass Index for better wellness.',
    content: `## What is BMI?\n\nBody Mass Index (BMI) is a simple calculation using your height and weight to estimate body fat. The formula is:\n\n**BMI = Weight (kg) / Height (m)²**\n\n## BMI Categories\n\n- **Underweight**: Below 18.5\n- **Normal weight**: 18.5 – 24.9\n- **Overweight**: 25 – 29.9\n- **Obesity**: 30 and above\n\n## How to Improve Your BMI\n\n1. Maintain a balanced diet rich in fruits and vegetables\n2. Exercise regularly — at least 150 minutes per week\n3. Stay hydrated and get adequate sleep\n4. Consult a healthcare provider for personalized advice\n\n## Limitations of BMI\n\nBMI doesn't distinguish between muscle and fat mass. Athletes may have a high BMI but low body fat. Always consider BMI alongside other health metrics.`,
    date: '2026-03-15',
    readTime: '4 min read',
    category: 'Health',
  },
  {
    slug: 'understanding-compound-interest',
    title: 'Understanding Compound Interest: Grow Your Money Faster',
    excerpt: 'Discover how compound interest works, the formula behind it, and strategies to maximize your investment returns.',
    content: `## What is Compound Interest?\n\nCompound interest is interest calculated on both the initial principal and the accumulated interest from previous periods.\n\n**Formula: A = P(1 + r/n)^(nt)**\n\nWhere:\n- A = Final amount\n- P = Principal\n- r = Annual interest rate\n- n = Number of times compounded per year\n- t = Number of years\n\n## Example\n\nInvesting $10,000 at 8% compounded monthly for 10 years:\n\nA = 10000(1 + 0.08/12)^(12×10) = **$22,196.40**\n\n## Tips to Maximize Compound Interest\n\n1. Start investing early — time is your biggest ally\n2. Reinvest dividends and returns\n3. Choose investments with higher compounding frequency\n4. Stay consistent with monthly contributions`,
    date: '2026-03-10',
    readTime: '5 min read',
    category: 'Finance',
  },
  {
    slug: 'emi-calculator-guide',
    title: 'EMI Calculator Guide: Plan Your Loan Payments',
    excerpt: 'Everything you need to know about EMI calculations, how banks determine your monthly payments, and tips to reduce EMI.',
    content: `## What is EMI?\n\nEMI (Equated Monthly Installment) is a fixed monthly payment made to repay a loan over a specified tenure.\n\n**Formula: EMI = [P × r × (1+r)^n] / [(1+r)^n – 1]**\n\nWhere:\n- P = Principal loan amount\n- r = Monthly interest rate\n- n = Loan tenure in months\n\n## Factors Affecting EMI\n\n1. **Loan Amount**: Higher principal = higher EMI\n2. **Interest Rate**: Lower rates reduce EMI significantly\n3. **Tenure**: Longer tenure = lower EMI but more total interest\n\n## Tips to Reduce Your EMI\n\n- Make a larger down payment\n- Negotiate for a lower interest rate\n- Choose a longer repayment period\n- Prepay when you have surplus funds`,
    date: '2026-03-05',
    readTime: '4 min read',
    category: 'Finance',
  },
  {
    slug: 'daily-calorie-needs',
    title: 'How Many Calories Do You Need Per Day?',
    excerpt: 'Learn how to calculate your daily calorie requirements based on age, gender, weight, and activity level.',
    content: `## Understanding Calorie Needs\n\nYour daily calorie needs depend on your Basal Metabolic Rate (BMR) and activity level.\n\n**Mifflin-St Jeor Equation:**\n- Men: BMR = 10W + 6.25H - 5A + 5\n- Women: BMR = 10W + 6.25H - 5A - 161\n\nWhere W = weight (kg), H = height (cm), A = age\n\n## Activity Multipliers\n\n- Sedentary: BMR × 1.2\n- Lightly active: BMR × 1.375\n- Moderately active: BMR × 1.55\n- Very active: BMR × 1.725\n\n## Tips for Healthy Eating\n\n1. Focus on nutrient-dense whole foods\n2. Track your intake for a week to build awareness\n3. Don't drop calories too drastically\n4. Adjust based on your goals (lose, maintain, or gain)`,
    date: '2026-02-28',
    readTime: '3 min read',
    category: 'Health',
  },
  {
    slug: 'percentage-calculation-tricks',
    title: '5 Quick Percentage Calculation Tricks',
    excerpt: 'Master mental math with these simple percentage tricks that work for discounts, tips, and everyday calculations.',
    content: `## Why Learn Percentage Tricks?\n\nPercentages appear everywhere — shopping discounts, restaurant tips, exam scores, and financial returns.\n\n## Trick 1: Finding 10%\n\nJust move the decimal point one place left.\n- 10% of 250 = 25\n\n## Trick 2: Finding 5%\n\nHalf of 10%.\n- 5% of 250 = 12.5\n\n## Trick 3: Finding 15% (Tips)\n\n10% + 5% = 15%.\n- 15% of 80 = 8 + 4 = 12\n\n## Trick 4: Finding 25%\n\nDivide by 4.\n- 25% of 200 = 50\n\n## Trick 5: Reverse Percentages\n\n8% of 50 = 50% of 8 = 4. Swap the numbers for easier math!`,
    date: '2026-02-20',
    readTime: '3 min read',
    category: 'Math',
  },
  {
    slug: 'save-money-with-calculators',
    title: 'How Online Calculators Help You Save Money',
    excerpt: 'From loan comparisons to budgeting tools, discover how free online calculators can improve your financial decisions.',
    content: `## The Power of Free Calculators\n\nOnline calculators help you make informed decisions without hiring expensive consultants.\n\n## 1. Loan Comparison\n\nCompare multiple loan offers by plugging in different rates and tenures to find the cheapest option.\n\n## 2. Investment Planning\n\nUse compound interest and investment calculators to set realistic savings goals.\n\n## 3. Health Tracking\n\nBMI, calorie, and water intake calculators help you stay on track with health goals for free.\n\n## 4. Daily Savings\n\nTip calculators ensure you never overpay. Discount calculators help you shop smarter.\n\n## 5. Tax & Retirement Planning\n\nPlan ahead with retirement and inflation calculators to ensure financial security.\n\n## Conclusion\n\nBookmark CalcHub and use these tools regularly to make data-driven decisions in your daily life.`,
    date: '2026-02-15',
    readTime: '4 min read',
    category: 'Finance',
  },
];

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
