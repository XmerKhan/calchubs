export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-calculate-bmi-correctly',
    title: 'How to Calculate BMI Correctly: A Complete Guide',
    description: 'Learn the correct way to calculate your Body Mass Index, understand the BMI scale, and what your results really mean for your health.',
    content: `## What is BMI?

Body Mass Index (BMI) is a simple measurement that uses your height and weight to estimate whether you're at a healthy weight. It's calculated using the formula:

**BMI = weight (kg) / height (m)²**

## BMI Categories

| BMI Range | Category |
|-----------|----------|
| Below 18.5 | Underweight |
| 18.5 – 24.9 | Normal weight |
| 25.0 – 29.9 | Overweight |
| 30.0 and above | Obese |

## How to Calculate

1. Measure your weight in kilograms
2. Measure your height in meters
3. Square your height (multiply it by itself)
4. Divide your weight by the squared height

### Example
If you weigh 70 kg and are 1.75 m tall:
- Height² = 1.75 × 1.75 = 3.0625
- BMI = 70 / 3.0625 = **22.86** (Normal weight)

## Limitations of BMI

BMI doesn't distinguish between muscle and fat mass. Athletes may have a high BMI but low body fat. Always consult a healthcare professional for a complete assessment.

## Tips for Accurate Results

- Weigh yourself in the morning before eating
- Use consistent units (metric or imperial)
- Measure height without shoes
- Track your BMI over time for trends`,
    date: '2026-03-20',
    readTime: '4 min read',
    category: 'Health',
  },
  {
    slug: 'understanding-compound-interest',
    title: 'Understanding Compound Interest: Make Your Money Work Harder',
    description: 'Discover how compound interest works, why Einstein called it the eighth wonder of the world, and how to use it to grow your wealth.',
    content: `## What is Compound Interest?

Compound interest is interest earned on both the initial principal and the accumulated interest from previous periods. It's the reason small, consistent investments can grow into substantial wealth over time.

**Formula: A = P(1 + r/n)^(nt)**

Where:
- **A** = Final amount
- **P** = Principal (initial investment)
- **r** = Annual interest rate (decimal)
- **n** = Number of times interest compounds per year
- **t** = Number of years

## Simple vs Compound Interest

| Feature | Simple Interest | Compound Interest |
|---------|----------------|-------------------|
| Calculation | On principal only | On principal + accumulated interest |
| Growth | Linear | Exponential |
| Returns | Lower over time | Higher over time |

## Real-World Example

Investing ₹10,000 at 8% annual interest for 20 years:
- **Simple Interest**: ₹10,000 + (₹10,000 × 0.08 × 20) = **₹26,000**
- **Compound Interest**: ₹10,000 × (1.08)^20 = **₹46,610**

That's nearly **80% more** with compound interest!

## Tips to Maximize Compound Interest

1. Start investing as early as possible
2. Reinvest all returns and dividends
3. Choose investments with frequent compounding
4. Be consistent with regular contributions
5. Avoid withdrawing early`,
    date: '2026-03-18',
    readTime: '5 min read',
    category: 'Finance',
  },
  {
    slug: 'emi-calculation-guide-home-loans',
    title: 'EMI Calculation Guide: Everything About Home Loan EMIs',
    description: 'A complete guide to understanding EMI calculations for home loans, car loans, and personal loans. Learn how banks calculate your monthly payments.',
    content: `## What is EMI?

EMI (Equated Monthly Installment) is the fixed monthly payment you make to repay a loan. It includes both principal repayment and interest charges.

**Formula: EMI = P × r × (1+r)^n / ((1+r)^n - 1)**

Where:
- **P** = Loan principal amount
- **r** = Monthly interest rate (annual rate / 12)
- **n** = Total number of monthly installments

## How EMI Works

Each EMI payment is split between:
- **Interest component** (higher in early months)
- **Principal component** (increases over time)

## Example Calculation

For a home loan of ₹50,00,000 at 8.5% for 20 years:
- Monthly rate (r) = 8.5% / 12 = 0.7083%
- Number of EMIs (n) = 20 × 12 = 240
- **EMI = ₹43,391**
- Total payment = ₹1,04,13,840
- Total interest = ₹54,13,840

## Factors That Affect EMI

1. **Loan amount** — Higher principal = higher EMI
2. **Interest rate** — Even 0.5% difference matters significantly
3. **Loan tenure** — Longer tenure = lower EMI but more total interest
4. **Prepayments** — Reduce principal and save on interest

## Tips to Reduce Your EMI

- Make a larger down payment
- Negotiate for a lower interest rate
- Consider balance transfer if rates drop
- Make partial prepayments when possible`,
    date: '2026-03-15',
    readTime: '5 min read',
    category: 'Finance',
  },
  {
    slug: 'daily-calorie-intake-guide',
    title: 'How Many Calories Do You Actually Need Per Day?',
    description: 'Find out your daily calorie requirements based on age, gender, activity level, and fitness goals. A practical guide with actionable tips.',
    content: `## Understanding Calorie Needs

Your daily calorie needs depend on your Basal Metabolic Rate (BMR) and activity level. BMR is the number of calories your body burns at rest.

## Calculating BMR (Mifflin-St Jeor Equation)

**Men**: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age - 161 + 166
**Women**: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age - 161

## Activity Multipliers

| Activity Level | Multiplier |
|---------------|------------|
| Sedentary (little/no exercise) | BMR × 1.2 |
| Lightly active (1-3 days/week) | BMR × 1.375 |
| Moderately active (3-5 days/week) | BMR × 1.55 |
| Very active (6-7 days/week) | BMR × 1.725 |
| Extra active (physical job) | BMR × 1.9 |

## Calorie Goals

- **Weight loss**: Eat 500 calories below maintenance
- **Maintenance**: Eat at your calculated level
- **Weight gain**: Eat 300-500 calories above maintenance

## Example

A 30-year-old male, 75 kg, 175 cm, moderately active:
- BMR = 10(75) + 6.25(175) - 5(30) + 5 = **1,698 cal**
- Maintenance = 1,698 × 1.55 = **2,632 cal/day**
- For weight loss: ~2,132 cal/day

## Practical Tips

1. Track your food for a week to understand current intake
2. Make gradual changes (200-300 cal adjustments)
3. Prioritize protein to maintain muscle mass
4. Don't go below 1,200 cal/day without medical supervision
5. Adjust every 4-6 weeks based on progress`,
    date: '2026-03-12',
    readTime: '4 min read',
    category: 'Health',
  },
  {
    slug: 'percentage-calculations-made-easy',
    title: 'Percentage Calculations Made Easy: Tips and Tricks',
    description: 'Master percentage calculations with simple tricks. Learn how to calculate discounts, tax, tips, profit margins, and more in seconds.',
    content: `## The Basic Formula

**Percentage = (Part / Whole) × 100**

## Common Percentage Calculations

### Finding a Percentage of a Number
What is 25% of 200?
→ (25/100) × 200 = **50**

### Finding What Percentage One Number is of Another
15 is what percent of 60?
→ (15/60) × 100 = **25%**

### Percentage Increase/Decrease
Price went from ₹500 to ₹600:
→ ((600-500)/500) × 100 = **20% increase**

## Quick Mental Math Tricks

| To find... | Do this... |
|-----------|-----------|
| 10% | Move decimal one place left |
| 5% | Find 10%, then halve it |
| 15% | Find 10% + 5% |
| 20% | Find 10%, then double it |
| 25% | Divide by 4 |
| 50% | Divide by 2 |

## Real-World Applications

1. **Shopping discounts**: Original ₹1,200, 30% off → Save ₹360, Pay ₹840
2. **Restaurant tips**: Bill ₹800, 15% tip → ₹120 tip
3. **Tax calculation**: Income ₹5,00,000, 10% tax → ₹50,000
4. **Exam scores**: 72 out of 90 → 80%

## Common Mistakes to Avoid

- Confusing percentage points with percentages
- Applying percentage increase then same decrease (they don't cancel out)
- Forgetting to convert percentages to decimals in formulas`,
    date: '2026-03-10',
    readTime: '3 min read',
    category: 'Math',
  },
  {
    slug: 'save-money-with-loan-calculators',
    title: 'How Loan Calculators Can Save You Thousands',
    description: 'Learn how using a loan calculator before borrowing can help you compare options, negotiate better rates, and save thousands in interest.',
    content: `## Why Use a Loan Calculator?

A loan calculator helps you understand the true cost of borrowing before you commit. Most people focus only on the monthly EMI but forget about total interest paid over the loan term.

## What a Loan Calculator Reveals

1. **Monthly EMI amount**
2. **Total interest over the loan term**
3. **Total amount paid (principal + interest)**
4. **Amortization schedule** (month-by-month breakdown)

## Comparing Loan Options

### Scenario: ₹20,00,000 Home Loan

| Tenure | Rate | EMI | Total Interest |
|--------|------|-----|---------------|
| 15 years | 8.5% | ₹19,698 | ₹15,45,640 |
| 20 years | 8.5% | ₹17,356 | ₹21,65,440 |
| 25 years | 8.5% | ₹16,054 | ₹28,16,200 |

Choosing 15 years over 25 years saves you **₹12,70,560** in interest!

## Smart Borrowing Tips

1. **Compare at least 3 lenders** before deciding
2. **Check the total cost**, not just the EMI
3. **Shorter tenure = less interest** (if EMI is affordable)
4. **Fixed vs floating rate**: Fixed gives certainty; floating may save money if rates drop
5. **Read the fine print**: Processing fees, prepayment charges, etc.

## When to Prepay

- When you receive a bonus or windfall
- When interest rates rise on floating rate loans
- Early in the loan term (when interest component is highest)

Use our [Loan Calculator](/finance/loan-calculator) to run your own scenarios and find the best option for your situation.`,
    date: '2026-03-08',
    readTime: '4 min read',
    category: 'Finance',
  },
];
