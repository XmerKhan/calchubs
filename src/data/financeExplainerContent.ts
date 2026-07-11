import type { ExplainerContent } from '@/components/calculator/FinanceExplainer';

export const financeExplainerContent: Record<string, ExplainerContent> = {
  emi: {
    intro: [
      "Buying a car, financing your education, or taking a personal loan almost always comes down to one question: can you comfortably afford the monthly payment? An EMI calculator answers that instantly by turning a loan amount, interest rate, and repayment period into one fixed monthly figure — the Equated Monthly Installment.",
    ],
    sections: [
      {
        heading: 'How EMI Actually Works',
        paragraphs: [
          "Every EMI payment carries two things inside it: part of it repays the money you borrowed (principal), and part of it pays the lender for lending it to you (interest). What confuses most first-time borrowers is that these two parts don't stay in the same proportion throughout the loan.",
          "In the first year or two, most of your payment is eaten up by interest, and your principal barely moves. It's only in the second half of the loan term that the balance shifts — more of your payment starts chipping away at what you actually owe. This is exactly why paying off a loan even a couple of years early saves far more interest than most people expect: you're skipping the exact months where interest was taking the biggest bite.",
        ],
      },
      {
        heading: 'The Formula Behind It',
        paragraphs: ["Lenders calculate EMI using the reducing balance method:"],
        formula: 'EMI = P × r × (1 + r)ⁿ ÷ [(1 + r)ⁿ − 1]',
        bullets: [
          'P = the amount borrowed',
          'r = monthly interest rate (annual rate ÷ 12 ÷ 100)',
          'n = total number of monthly installments',
        ],
      },
      {
        heading: 'Worked Example',
        paragraphs: [
          "A loan of Rs. 1,000,000 at 12% annual interest over 5 years (60 months) gives r = 0.01 and n = 60. Solving the formula produces an EMI of roughly Rs. 22,244 per month. Over the full 5 years, total repayment comes to about Rs. 1,334,640 — meaning Rs. 334,640 is interest paid on top of what was borrowed.",
        ],
      },
      {
        heading: 'What Actually Changes Your EMI',
        paragraphs: [
          '**Tenure is the biggest lever.** A 10-year loan and a 20-year loan on the same principal can differ by 30–40% or more in total interest paid, even though the monthly EMI on the longer loan looks more "affordable." Borrowers often pick the longer tenure because the monthly number feels lighter, without running the total-cost comparison first.',
          "**Small rate differences compound more than they appear to.** A 1–2% difference between two lenders sounds minor, but stretched over 15–20 years it can mean paying the equivalent of an extra year or two of the loan in interest alone.",
          "**Fixed vs. floating matters.** Fixed-rate EMIs stay locked for the entire loan term. Floating-rate EMIs move if the lender's benchmark rate changes — either the EMI itself adjusts, or the bank extends the tenure instead, depending on the loan's terms.",
        ],
      },
      {
        heading: 'Mistakes Worth Avoiding',
        bullets: [
          'Choosing tenure purely by what feels affordable monthly, without checking the total interest cost across different tenure options',
          "Not asking about prepayment penalties before signing — some lenders charge a fee for paying off early, which can quietly cancel out the interest you'd otherwise save",
          'Assuming the EMI is the full cost of the loan — processing fees (often 0.5–2% of the loan amount) and insurance add-ons sit outside the EMI but still add to what the loan actually costs',
        ],
      },
      {
        heading: 'Ways to Lower What You Pay Overall',
        bullets: [
          'A larger upfront down payment reduces the principal, which reduces everything calculated from it.',
          'Occasional lump-sum payments toward the principal — whenever spare cash is available — shorten the loan and cut total interest, even without changing the EMI itself.',
          'Comparing offers from three or four lenders before signing, since small rate differences on paper translate into real money over the years.',
          'Refinancing later if market rates drop meaningfully below what you\u2019re currently paying.',
        ],
      },
    ],
    faqs: [
      { q: 'Does my EMI change during the loan?', a: 'Only on a floating-rate loan. Fixed-rate loans keep the same EMI from the first payment to the last.' },
      { q: 'Why does it feel like I\u2019m barely reducing what I owe in the early years?', a: 'Because interest is calculated on the outstanding balance, which is highest at the start. As the balance drops, more of each payment shifts toward principal.' },
      { q: 'Is a smaller EMI always better?', a: 'Not automatically. A smaller EMI usually comes from a longer tenure, which means more total interest paid. It\u2019s a trade-off between monthly comfort and total cost, not a simple "smaller is better."' },
      { q: 'Can I change my EMI after taking the loan?', a: 'Yes, through a lump-sum prepayment or by refinancing to a lower rate — both usually require lender approval and may involve a fee.' },
      { q: 'What is included in the EMI calculation?', a: 'Only principal and interest at the stated rate over the stated tenure. Processing fees, insurance, and taxes usually sit outside the EMI figure.' },
    ],
  },

  loan: {
    intro: [
      "A loan calculator is the broader, general-purpose version of EMI-style tools — instead of being tied to one specific loan type, it lets you plug in any principal, rate, and term to see the monthly payment, total interest, and a full repayment breakdown. It\u2019s the tool people reach for before ever walking into a bank, just to know what they\u2019re getting into.",
    ],
    sections: [
      {
        heading: 'Why a General Loan Calculator Is Different From a Specialized One',
        paragraphs: [
          "Specialized calculators (mortgage, auto, student loan) often bake in extra variables specific to that loan type — property tax, PMI, trade-in value. A general loan calculator strips that away and focuses purely on the core relationship between principal, rate, term, and payment. This makes it useful for loan types that don\u2019t have a dedicated calculator: personal loans, business loans, debt consolidation loans, or informal lending arrangements between individuals.",
        ],
      },
      {
        heading: 'The Core Relationship Between the Three Variables',
        paragraphs: [
          "There are really only three levers on any loan, and understanding how they pull against each other is more useful than memorizing a formula:",
        ],
        bullets: [
          '**Increase the principal** → payment goes up, total interest goes up (more money is being lent, so more interest accrues on it)',
          "**Increase the rate** → payment goes up, and interest cost grows faster than it looks like it should, because interest compounds on a rate that applies to the whole remaining balance every period",
          '**Increase the term** → payment goes down, but total interest paid goes up, because you\u2019re paying interest for a longer stretch of time',
          'Most borrowing decisions are really about which of these three you\u2019re willing to trade against the other two.',
        ],
      },
      {
        heading: 'Reading a Loan Payment Breakdown Properly',
        paragraphs: [
          'When a loan calculator shows a payment amount, that single number hides two very different costs: the interest rate cost and the opportunity cost of tying up your monthly cash flow for years. A loan with a lower monthly payment isn\u2019t automatically the cheaper loan — it\u2019s often the more expensive one once you look at total interest paid across the full term. This is the single most common misunderstanding borrowers have, and it\u2019s why looking only at "can I afford the monthly payment" without checking "how much will this cost me in total" leads to overpaying.',
        ],
      },
      {
        heading: 'Secured vs. Unsecured Loans and Why Rates Differ',
        paragraphs: [
          'Loan calculators don\u2019t distinguish between secured and unsecured loans directly, but understanding the difference explains why the same calculator can produce wildly different real-world rates for different people. A secured loan (backed by collateral like a car or property) generally carries a lower interest rate because the lender has recourse if the borrower defaults. An unsecured loan (personal loans, most credit cards) carries higher rates because the lender is taking on more risk with nothing to reclaim if repayment stops. Two people can enter the same numbers into this calculator and still end up with very different real offers from a bank, because the lender prices risk before the calculator ever comes into play.',
        ],
      },
      {
        heading: 'Common Situations Where This Calculator Gets Misused',
        bullets: [
          'Entering the advertised "starting rate" instead of the actual rate you were quoted, which gives an unrealistically low payment estimate',
          'Ignoring fees that get added to the loan amount (origination fees, documentation charges) — the true principal being repaid is often higher than the sticker price of what was borrowed',
          'Comparing loans with different terms side by side using only the monthly payment figure, rather than total interest paid',
        ],
      },
      {
        heading: 'How to Use the Output to Actually Compare Loans',
        paragraphs: [
          'The most useful way to use this calculator when shopping for a loan is to run the same principal through two or three different rate/term combinations and compare total interest paid, not just the monthly figure. A loan that\u2019s 2% cheaper in rate but 5 years longer in term can easily end up costing more overall — the calculator makes that comparison visible in seconds instead of requiring manual computation.',
        ],
      },
    ],
    faqs: [
      { q: 'What\u2019s the difference between this and an EMI calculator?', a: 'They use the same underlying math. "EMI" is simply the term commonly used in South Asian banking for the fixed monthly installment; this calculator is the general-purpose version usable for any loan type.' },
      { q: 'Why does my bank\u2019s quoted payment differ slightly from this calculator\u2019s result?', a: 'Banks often round differently, apply daily interest accrual instead of pure monthly compounding, or bundle in fees that shift the effective principal. Treat the calculator\u2019s output as a close estimate, not a binding figure.' },
      { q: 'Does a longer loan term always mean more total interest?', a: 'Almost always, assuming the rate stays the same. The only exception is if a longer term comes paired with a meaningfully lower rate, which occasionally happens with certain loan products.' },
      { q: 'Should I always choose the shortest term I can afford?', a: 'Not necessarily — it depends on what else that cash could be doing. If the loan\u2019s interest rate is low and you could invest the difference at a higher return, a longer term with disciplined investing elsewhere can sometimes make more financial sense than aggressively shortening the loan.' },
      { q: 'How accurate is the amortization schedule shown here?', a: 'It uses the standard reducing-balance method, which is the same math most banks use. Real statements can still differ slightly due to rounding, exact accrual dates, or fees baked into the balance.' },
    ],
  },

  mortgage: {
    intro: [
      "A mortgage calculator estimates the monthly payment on a home loan, factoring in the loan amount, interest rate, and term — and, in a fuller version, property tax, home insurance, and other recurring homeownership costs. It\u2019s typically the first tool a home buyer uses, often before they\u2019ve even chosen a house, just to figure out what price range is realistic.",
    ],
    sections: [
      {
        heading: 'Why Mortgage Payments Are More Than "Principal and Interest"',
        paragraphs: [
          "The number most people fixate on is the base principal-and-interest payment, but that\u2019s rarely what actually leaves your bank account each month. Lenders typically bundle property tax and home insurance into an escrow account, collecting a portion of both with every monthly payment. If the down payment is below a certain threshold (commonly 20% in many markets), an additional cost — mortgage insurance — gets added on top, protecting the lender rather than the borrower, until enough equity has built up in the home.",
          'This is why two mortgage calculators can show different "monthly payment" figures for the exact same loan amount and rate — one is showing pure principal-and-interest, the other is showing the fuller picture including taxes, insurance, and any HOA dues.',
        ],
      },
      {
        heading: 'The Down Payment Trade-Off',
        paragraphs: [
          "A larger down payment does more than just lower the loan amount — it often unlocks a better interest rate, since lenders view a buyer with more equity in the home as lower risk. It can also eliminate mortgage insurance entirely, which is a recurring cost that provides no benefit to the borrower. On the other hand, putting every available dollar into a down payment can leave a buyer with little cash cushion for moving costs, repairs, or emergencies — which is its own financial risk. There\u2019s rarely a single \u201cright\u201d answer here; it depends on how stable the buyer\u2019s income and emergency savings already are.",
        ],
      },
      {
        heading: 'Fixed-Rate vs. Adjustable-Rate Mortgages',
        paragraphs: [
          'A fixed-rate mortgage keeps the same interest rate for the entire loan term, which means predictable payments for 15, 20, or 30 years. An adjustable-rate mortgage typically starts with a lower rate for an initial period, after which the rate adjusts periodically based on a market index. The appeal of an adjustable rate is the lower starting payment; the risk is that payments can rise later if market rates rise. Buyers who plan to stay in a home long-term generally lean toward fixed rates for predictability, while buyers who expect to sell or refinance within a few years sometimes use adjustable rates to take advantage of the lower initial cost.',
        ],
      },
      {
        heading: 'The Real Cost of a 30-Year Term',
        paragraphs: [
          "Extending a mortgage from 15 to 30 years roughly halves the monthly payment, but it doesn\u2019t just double the total interest paid over the life of the loan — it often more than doubles it, because interest keeps accruing on a larger remaining balance for twice as long. This doesn\u2019t make a 30-year term a bad choice; for many buyers, the lower monthly payment is what makes home ownership possible at all. But it\u2019s worth seeing the total-interest number clearly rather than only comparing monthly payments.",
        ],
      },
      {
        heading: "Costs a Mortgage Calculator Usually Doesn't Include",
        paragraphs: [
          'Closing costs — attorney fees, appraisal fees, title insurance, and various administrative charges — typically aren\u2019t part of the monthly payment calculation, but they\u2019re due upfront at the time of purchase and can amount to several thousand dollars depending on the property value and location. Ongoing maintenance costs, which tend to run around 1% of a property\u2019s value annually, also fall outside the calculator entirely but are a real, recurring cost of ownership worth budgeting for separately.',
        ],
      },
      {
        heading: 'Extra Payments and Early Payoff',
        paragraphs: [
          'Making occasional extra payments toward the principal — even small, irregular ones — can meaningfully shorten a mortgage and reduce total interest paid, because those extra dollars stop accruing interest immediately rather than being spread out over the remaining term. Some borrowers use a biweekly payment strategy instead: paying half the monthly amount every two weeks results in the equivalent of one extra full payment per year, without it feeling like a large lump sum. Before pursuing either strategy, it\u2019s worth checking whether the mortgage carries a prepayment penalty, since some loans charge a fee for paying off faster than scheduled.',
        ],
      },
    ],
    faqs: [
      { q: 'Why is my estimated payment different from what my lender quoted?', a: 'Lenders factor in your specific credit profile, local tax rates, and insurance quotes, which a general calculator can only estimate. Treat the calculator\u2019s output as a planning figure, not a guaranteed offer.' },
      { q: 'Does a bigger down payment always make sense?', a: 'Generally it lowers cost and risk, but only if it doesn\u2019t leave you without a cash reserve for emergencies or near-term expenses after moving in.' },
      { q: 'Is it worth paying points to lower my rate?', a: 'It depends on how long you plan to stay in the home — paying upfront for a lower rate only pays off if you keep the loan long enough for the monthly savings to exceed what you paid upfront.' },
      { q: 'What happens to mortgage insurance once I have enough equity?', a: 'In many cases it can be removed once the loan balance drops to a set percentage of the home\u2019s original value, though the exact process depends on the lender and loan type.' },
      { q: 'Should I choose a 15-year or 30-year mortgage?', a: 'A 15-year loan usually carries a lower rate and dramatically less total interest, but a much higher monthly payment. A 30-year term keeps monthly costs manageable at the price of paying interest for far longer.' },
    ],
  },

  'simple-interest': {
    intro: [
      "A simple interest calculator answers one of the most basic financial questions there is: if you lend, borrow, or invest a fixed amount at a fixed rate, how much interest accrues over time — without that interest itself earning more interest. It\u2019s the starting point for understanding how money grows or costs money, before compound interest enters the picture.",
    ],
    sections: [
      {
        heading: 'The Formula and Why It\u2019s "Simple"',
        paragraphs: [
          'Simple interest is calculated purely on the original principal, every single period, with nothing added to that base:',
        ],
        formula: 'Simple Interest = P × r × t',
        bullets: [
          'P = the principal',
          'r = annual interest rate (as a decimal)',
          't = time in years',
          '**Example:** Rs. 200,000 invested at 8% simple annual interest for 3 years earns 200,000 × 0.08 × 3 = **Rs. 48,000** in interest, regardless of how that interest could theoretically have been reinvested.',
          "The defining feature of simple interest is that the interest earned in year one doesn\u2019t itself earn interest in year two — the calculation always applies the rate to the same original principal.",
        ],
      },
      {
        heading: 'Where Simple Interest Actually Shows Up',
        paragraphs: [
          'Simple interest is less common in everyday consumer finance than compound interest, but it still appears in specific places: certain short-term personal loans, some auto loans, many bonds, and a range of informal lending arrangements calculate interest this way. It\u2019s also the standard teaching tool for understanding interest before introducing the more complex compounding version, because the math is transparent enough to verify by hand.',
        ],
      },
      {
        heading: 'Simple Interest vs. Compound Interest — Why the Difference Matters',
        paragraphs: [
          'The gap between simple and compound interest is small over short periods and can become substantial over long ones. On a savings or investment product, compound interest works in your favor, since your interest itself starts earning more interest. On a loan, though, simple interest generally works in the borrower\u2019s favor, since the amount owed grows more slowly than it would under compounding. This is why it matters to know which type of interest a specific loan or investment actually uses — the label matters as much as the rate itself.',
        ],
      },
      {
        heading: 'A Practical Way to Think About It',
        paragraphs: [
          'Imagine two savers each put Rs. 100,000 into an account earning 10% annually for 10 years — one under simple interest, one under compound interest. The simple interest saver ends with Rs. 200,000 (Rs. 100,000 in interest, calculated the same way every year). The compound interest saver, if interest compounds annually, ends with roughly Rs. 259,374 — nearly 30% more, purely because each year\u2019s interest started earning interest of its own. The longer the time horizon, the wider this gap grows.',
        ],
      },
      {
        heading: 'When Simple Interest Calculations Get Misapplied',
        paragraphs: [
          'A common mistake is assuming a loan or product that advertises a flat "interest rate" is automatically simple interest — many loans that quote a flat rate are actually structured with compounding built into the repayment schedule, which results in a higher effective cost than the simple interest formula alone would suggest. Before assuming a rate is simple interest, it\u2019s worth confirming directly with the lender or reading the loan agreement\u2019s method of calculation, since the difference can meaningfully change what\u2019s actually owed.',
        ],
      },
      {
        heading: 'Simple Interest on Partial-Year Periods',
        paragraphs: [
          'Simple interest calculations aren\u2019t limited to whole years — for loans or deposits lasting a specific number of days or months, the time variable (t) is simply expressed as a fraction of a year. A 90-day loan, for instance, uses t = 90/365 in the formula. This is common in short-term lending and treasury-style instruments, where the term is measured in days rather than years.',
        ],
      },
    ],
    faqs: [
      { q: 'Is simple interest better for borrowers or lenders?', a: 'Generally better for borrowers, since the amount owed grows more slowly than under compound interest — assuming the rate itself is comparable.' },
      { q: 'Can simple interest apply to a savings account?', a: 'It\u2019s uncommon; most modern savings accounts compound interest, at least annually if not more frequently, since compounding benefits the saver.' },
      { q: 'How do I know if my loan uses simple or compound interest?', a: 'Check the loan agreement directly, or ask the lender explicitly — a quoted rate alone doesn\u2019t reveal the calculation method.' },
      { q: 'Does the interest rate period matter (monthly vs. annual)?', a: 'Yes — always confirm whether a quoted rate is annual or for a shorter period, since applying the formula with the wrong time unit produces a significantly wrong result.' },
      { q: 'Can I use this calculator for partial years?', a: 'Yes. Enter the time period as a decimal — for a 6-month term use 0.5, for 90 days use 90/365 ≈ 0.247.' },
    ],
  },

  'compound-interest': {
    intro: [
      "A compound interest calculator shows how money grows when interest is calculated not just on the original principal, but on the principal plus all previously accumulated interest. It\u2019s one of the most consequential concepts in personal finance — the same mechanism that grows retirement savings is the one that makes unpaid credit card balances spiral if left alone.",
    ],
    sections: [
      {
        heading: 'The Formula and What Each Piece Means',
        formula: 'A = P × (1 + r/n)^(n×t)',
        bullets: [
          'A = the final amount after interest',
          'P = the principal',
          'r = annual interest rate (as a decimal)',
          'n = number of times interest compounds per year',
          't = time in years',
          '**Example:** Rs. 100,000 invested at 8% annual interest, compounded monthly, for 10 years: A = 100,000 × (1 + 0.08/12)^(12×10) ≈ **Rs. 222,536**.',
          "Notice this is a meaningfully larger result than the same numbers under simple interest, purely because of how often the interest compounds and gets added back to the base.",
        ],
      },
      {
        heading: 'Why Compounding Frequency Actually Matters',
        paragraphs: [
          'Interest can compound annually, semi-annually, quarterly, monthly, or even daily — and the more frequently it compounds, the higher the final result, even with the same stated annual rate. The difference between annual and monthly compounding on the same rate is usually modest over short periods but becomes noticeable over a decade or more. This is why two financial products advertising the "same" interest rate can produce different actual returns — the compounding frequency printed in the fine print is doing real work behind the scenes.',
        ],
      },
      {
        heading: 'The Rule of 72 — A Mental Shortcut Worth Knowing',
        paragraphs: [
          "There\u2019s a well-known shortcut for estimating how long it takes an investment to double under compound interest: divide 72 by the annual interest rate. At 8% annual compounding, money roughly doubles in 72 ÷ 8 = 9 years. It\u2019s not exact, but it\u2019s accurate enough for quick mental estimates and is genuinely useful when comparing investment options without reaching for a calculator.",
        ],
      },
      {
        heading: 'Compounding Works Both Ways — Savings and Debt',
        paragraphs: [
          'Compound interest is usually discussed in the context of investing, but the same mechanism applies to debt. Credit card balances that go unpaid don\u2019t just accrue flat interest — the interest itself gets added to the balance, and next month\u2019s interest is calculated on that higher number. This is why credit card debt can grow surprisingly fast even without new spending: the compounding is working against the borrower exactly the way it works for an investor\u2019s savings.',
        ],
      },
      {
        heading: 'Why Starting Early Matters More Than Contributing More Later',
        paragraphs: [
          'Because compounding grows on an increasing base, money invested early has more time to compound and tends to outperform larger contributions made later, even if the total dollars contributed are smaller. Someone who invests a modest amount in their 20s and stops can end up ahead of someone who invests significantly more starting in their 40s, purely because of the extra decade of compounding. This is the core reason financial advisors consistently emphasize starting early over waiting to invest larger amounts.',
        ],
      },
      {
        heading: 'Common Misunderstandings About Compound Interest',
        bullets: [
          'Assuming a higher stated interest rate always beats a lower one, without checking compounding frequency — a 7% rate compounded daily can outperform an 8% rate compounded annually over long periods',
          'Underestimating how much interest accrues on debt left unpaid, particularly on high-rate products like credit cards',
          'Not accounting for inflation when projecting long-term compound growth — a large nominal number decades from now may represent less real purchasing power than it appears to',
        ],
      },
    ],
    faqs: [
      { q: 'What\u2019s the difference between nominal and effective interest rate?', a: 'The nominal rate is the stated annual rate before accounting for compounding frequency; the effective rate reflects what you actually earn or owe once compounding is factored in, and is always equal to or higher than the nominal rate.' },
      { q: 'Does more frequent compounding always mean significantly more money?', a: 'The effect is real but often smaller than people expect for typical savings rates — the difference becomes more meaningful at higher interest rates or over longer time horizons.' },
      { q: 'Why do two banks offering the same interest rate give different returns?', a: 'Compounding frequency differs — monthly compounding produces a higher effective return than annual compounding at the same stated rate.' },
      { q: 'Should I be worried about compound interest on my credit card?', a: 'Yes — because interest compounds on unpaid balances, carrying a balance month to month typically costs significantly more over time than the stated interest rate alone would suggest.' },
      { q: 'How can I use the Rule of 72 in practice?', a: 'Divide 72 by your expected annual return to get a rough estimate of years to double. At 6% ≈ 12 years, at 9% ≈ 8 years, at 12% ≈ 6 years.' },
    ],
  },

  savings: {
    intro: [
      "A savings calculator projects how a savings goal grows over time based on an initial deposit, regular contributions, and an interest rate — helping answer a very practical question: if I save this much every month, how long until I hit my target, or how much will I have by a certain date?",
    ],
    sections: [
      {
        heading: 'Why This Is a Different Question Than Compound Interest Alone',
        paragraphs: [
          'A compound interest calculator typically assumes one lump sum growing untouched. A savings calculator adds a second, often more important variable: regular contributions on top of the starting balance. For most people building savings, the recurring monthly deposit matters far more to the final result than the interest rate does — especially in the early years, before the account balance is large enough for interest to meaningfully outpace contributions.',
        ],
      },
      {
        heading: 'The Two Levers That Actually Move the Result',
        paragraphs: [
          '**Contribution amount and consistency** tend to have the biggest impact on reaching a savings goal, particularly over shorter time horizons. Increasing a monthly contribution by even a modest amount, sustained consistently, often moves the final total more than chasing a slightly higher interest rate.',
          '**Time horizon** works alongside consistency — the earlier contributions start, the more time each deposit has to benefit from compounding, even if the deposits themselves are modest. A saver who starts small but starts early frequently ends up ahead of a saver who waits and then tries to contribute more aggressively later.',
        ],
      },
      {
        heading: 'A Practical Example',
        paragraphs: [
          'Saving Rs. 10,000 per month at a 6% annual interest rate, compounded monthly, for 10 years results in total contributions of Rs. 1,200,000, but a final balance of roughly Rs. 1,639,000 — meaning close to Rs. 439,000 came purely from interest on the accumulated balance, not from the saver\u2019s own pocket. This gap between "money put in" and "money ended up with" is exactly what a savings calculator is designed to make visible.',
        ],
      },
      {
        heading: 'Setting a Realistic Goal-Based Target',
        paragraphs: [
          'Rather than asking "how much will I have," many savers use this calculator in reverse — starting with a target amount (a home down payment, an emergency fund, a wedding, a specific purchase) and working backward to find the monthly contribution needed to hit that target by a chosen date. This reframing tends to be more motivating than an open-ended savings plan, because it turns an abstract goal into a specific, trackable monthly number.',
        ],
      },
      {
        heading: 'Why an Emergency Fund Belongs in a Different Category',
        paragraphs: [
          'Financial guidance commonly separates savings into short-term (emergency funds, near-term purchases) and long-term (retirement, major future goals) categories, because they call for different account types and risk levels. An emergency fund is generally kept in an easily accessible account with modest but stable interest, since the point is availability, not maximum growth. Long-term savings can reasonably accept more volatility in exchange for potentially higher growth. Running both through the same savings calculator is useful for projections, but the underlying account choice should reflect how soon the money might actually be needed.',
        ],
      },
      {
        heading: 'The Effect of Interest Rate Changes on an Existing Plan',
        paragraphs: [
          'Because savings account interest rates aren\u2019t fixed the way a loan rate often is, a projection made today can shift if rates rise or fall over the saving period. This is worth revisiting periodically — a savings plan built around a 5% rate assumption can fall meaningfully short if the actual average rate over the period turns out lower, which is a reason to check projections periodically rather than treating an initial calculation as permanent.',
        ],
      },
      {
        heading: 'Common Mistakes When Using a Savings Calculator',
        bullets: [
          'Assuming a fixed interest rate will hold steady for years, when savings rates commonly fluctuate with broader market conditions',
          'Not accounting for inflation — a savings goal set in today\u2019s terms may need to be adjusted upward if the target is several years away',
          'Treating "starting amount" and "monthly contribution" as fixed inputs rather than revisiting them as income or priorities change over time',
        ],
      },
    ],
    faqs: [
      { q: 'Does the interest rate or the monthly contribution matter more?', a: 'For most realistic timeframes and rates, consistent contributions matter more than the interest rate, particularly in the first several years of saving.' },
      { q: 'How often should I recalculate my savings plan?', a: 'Whenever your income, goal amount, or the interest rate on your account changes meaningfully — an annual check-in is a reasonable habit for most savers.' },
      { q: 'Is it better to save a lump sum upfront or contribute monthly?', a: 'A lump sum invested immediately generally ends up slightly ahead, purely because it has more time to earn interest, but consistent monthly contributions remain the more realistic approach for most people building savings from ongoing income.' },
      { q: 'Should I include an emergency fund in the same savings goal as other targets?', a: 'Generally no — emergency funds are usually planned and tracked separately, since their purpose (immediate access during a crisis) differs from longer-term goals.' },
      { q: 'Does this calculator account for taxes on interest?', a: 'No — the projection shows gross balance. Depending on the account type and your jurisdiction, interest earned may be taxable and will slightly reduce the real end value.' },
    ],
  },

  investment: {
    intro: [
      "An investment calculator projects the future value of money invested today, plus any additional contributions over time, based on an assumed rate of return. Unlike a savings calculator, which typically assumes a conservative, stable interest rate, an investment calculator is generally used for higher-return, higher-volatility scenarios like stocks, mutual funds, or retirement portfolios.",
    ],
    sections: [
      {
        heading: 'The Key Difference From a Savings Projection',
        paragraphs: [
          'The math behind both calculators is similar, but the assumptions behind the numbers differ meaningfully. A savings account rate is relatively stable and low-risk. An investment return rate is an estimate based on historical averages or expected performance, and it will not be smooth year to year in reality — a calculator showing a steady 8% annual return is a simplification, since actual markets move up and down, sometimes sharply, even if the long-term average lands near that figure.',
        ],
      },
      {
        heading: 'Why the "Average Return" Assumption Needs Context',
        paragraphs: [
          'When this calculator asks for an expected annual return, it\u2019s worth entering a figure grounded in realistic historical ranges for the type of investment involved, rather than an optimistic guess. Equity markets have historically returned different long-term averages depending on the market and time period studied, while more conservative instruments like bonds have historically returned less but with less volatility. Entering an unrealistically high return assumption produces a projection that looks encouraging but doesn\u2019t reflect what\u2019s actually likely to happen.',
        ],
      },
      {
        heading: 'The Power (and Danger) of Long Time Horizons',
        paragraphs: [
          'Investment projections tend to look dramatically different over 10 years versus 30 years, because compounding accelerates the longer money stays invested. This is part of why long-term investing is generally framed differently from short-term trading — the same annual return assumption produces a modest-looking result over a short period and a very large-looking result over decades. It\u2019s worth remembering that this dramatic long-term growth assumes the invested return rate holds up consistently over that entire span, which real markets rarely do in a perfectly smooth line, even if the long-run average is accurate.',
        ],
      },
      {
        heading: 'Regular Contributions vs. Lump-Sum Investing',
        paragraphs: [
          'Similar to a savings calculator, an investment calculator usually allows for both an initial lump sum and ongoing periodic contributions. Regularly investing a fixed amount over time — sometimes called dollar-cost averaging — has the practical benefit of smoothing out the effect of market ups and downs, since the same fixed contribution buys more when prices are low and less when prices are high, rather than requiring the investor to correctly time the market.',
        ],
      },
      {
        heading: 'Why Fees Quietly Erode Investment Returns',
        paragraphs: [
          'A detail this calculator often doesn\u2019t ask for, but that meaningfully affects real-world results, is the ongoing fee charged by an investment product (commonly expressed as an expense ratio for funds). A seemingly small annual fee — even 1-2% — compounds against the investor the same way returns compound in their favor, and over decades can meaningfully reduce the final outcome compared to a lower-fee alternative with a similar underlying return.',
        ],
      },
      {
        heading: 'Risk Tolerance and Why One Number Doesn\u2019t Fit Everyone',
        paragraphs: [
          'The appropriate expected return assumption to use in this calculator depends heavily on the type of investment and the investor\u2019s risk tolerance and time horizon. Someone investing for a goal 20+ years away can typically afford to assume a higher-return, higher-volatility portfolio, since there\u2019s time to recover from downturns. Someone investing for a goal 2-3 years away typically needs a more conservative assumption, since there\u2019s less time to recover if the market drops right before the money is needed.',
        ],
      },
      {
        heading: 'Common Mistakes When Using an Investment Calculator',
        bullets: [
          'Using an overly optimistic return rate that doesn\u2019t reflect realistic long-term averages for the investment type',
          'Ignoring fees and taxes, both of which reduce the actual return an investor experiences compared to the calculator\u2019s gross projection',
          'Treating the projected number as a guarantee rather than an estimate based on assumptions that may not hold exactly',
        ],
      },
    ],
    faqs: [
      { q: 'What return rate should I use in this calculator?', a: 'A rate grounded in realistic historical averages for the specific investment type, rather than an optimistic guess — and it\u2019s worth running the calculation at a few different rates to see a range of outcomes rather than relying on a single number.' },
      { q: 'Does this calculator account for market crashes or downturns?', a: 'No — it assumes a smooth average return, which real markets don\u2019t provide year to year. The long-term average may still be accurate even though individual years vary significantly.' },
      { q: 'Should I include fees in my return assumption?', a: 'Yes — using a net-of-fees return assumption gives a far more realistic projection than using the fund\u2019s gross historical return.' },
      { q: 'Is investing always better than saving for a specific goal?', a: 'Not for short-term goals. Investment returns come with volatility, and money needed within a few years is generally safer in a stable savings vehicle, even at a lower return.' },
      { q: 'What does the shaded range on the chart represent?', a: 'It shows a conservative-to-optimistic band around the main projection — a visual reminder that returns are a range of possible outcomes, not a single guaranteed number.' },
    ],
  },

  retirement: {
    intro: [
      "A retirement calculator estimates whether current savings and contributions are on track to support a target retirement age and lifestyle, factoring in years until retirement, expected investment growth, and how long the money needs to last afterward. It\u2019s one of the more consequential financial tools available, because retirement planning mistakes are difficult to correct once retirement has actually started.",
    ],
    sections: [
      {
        heading: 'Why Retirement Math Has Two Distinct Phases',
        paragraphs: [
          'Retirement planning really involves two separate calculations stitched together. The accumulation phase covers everything from now until retirement — how much is saved and invested, and how it grows. The withdrawal phase covers retirement itself — how that accumulated amount gets drawn down over what could be 20-30+ years without running out. A calculator that only addresses accumulation and stops at "how much will I have at retirement" is only answering half the real question.',
        ],
      },
      {
        heading: 'The Withdrawal Rate Question',
        paragraphs: [
          'A commonly referenced starting point in retirement planning is a withdrawal rate — the percentage of a retirement portfolio withdrawn annually — chosen to make savings last through a typical retirement length without running out, based on historical market analysis. This isn\u2019t a guaranteed formula and has been debated and revised over the years, but it\u2019s a useful reference point for estimating how large a retirement portfolio needs to be relative to desired annual spending. Working backward from a target annual retirement income using this kind of framework gives a rough estimate of the total nest egg required.',
        ],
      },
      {
        heading: 'Why Inflation Cannot Be Ignored in Retirement Planning',
        paragraphs: [
          'Because retirement plans often span decades, inflation has enough time to meaningfully erode purchasing power if it isn\u2019t factored in. An income that feels comfortable today may not stretch nearly as far 20-30 years from now, purely due to rising prices. Retirement calculators that don\u2019t ask for an inflation assumption are implicitly assuming today\u2019s costs stay flat indefinitely, which understates how much will actually be needed.',
        ],
      },
      {
        heading: 'The Sequence-of-Returns Risk Most Calculators Don\u2019t Show',
        paragraphs: [
          'A subtlety that a simple average-return retirement calculator misses is sequence-of-returns risk — the danger that a market downturn occurring in the first few years of retirement, while withdrawals are being made, can permanently damage a portfolio\u2019s longevity even if the long-term average return over the full retirement turns out fine. Two retirees with identical average returns over 30 years can end up with very different outcomes depending purely on the order those returns occurred in, particularly relative to when withdrawals began. This is a reason financial planners often recommend more conservative withdrawal assumptions than a raw average-return calculation might suggest.',
        ],
      },
      {
        heading: 'Social Security, Pensions, and Other Income Sources',
        paragraphs: [
          'Most retirement calculators focus on personal savings and investments, but a realistic retirement income picture usually includes other sources as well — government pension programs, employer pensions, rental income, or part-time work. Entering only savings-based projections without accounting for these other income streams can make a retirement plan look more precarious than it actually is, or conversely, can hide a genuine shortfall if these other sources are assumed but not guaranteed.',
        ],
      },
      {
        heading: 'Why Starting Later Requires Disproportionately More Saving',
        paragraphs: [
          'Because retirement projections rely heavily on compounding over long time horizons, delaying retirement contributions by even five or ten years often requires a disproportionately larger monthly contribution later to reach the same target, since there\u2019s less time left for growth to do the work. This is why retirement calculators are often most useful early in a career — not because the exact numbers will hold up decades later, but because they make the cost of delay visible early enough to act on it.',
        ],
      },
      {
        heading: 'Common Mistakes When Using a Retirement Calculator',
        bullets: [
          'Using today\u2019s cost of living as the target retirement income without adjusting for decades of inflation',
          'Assuming a smooth, unchanging rate of return across both the accumulation and withdrawal phases',
          'Not revisiting the plan periodically as income, expenses, and market conditions change over a working career',
        ],
      },
    ],
    faqs: [
      { q: 'How much do I actually need to retire comfortably?', a: 'It depends heavily on desired annual spending, expected retirement length, and other income sources like pensions — a common approach is to work backward from target annual spending using a sustainable withdrawal rate assumption rather than relying on a single generic number.' },
      { q: 'Does this calculator account for market crashes right before I retire?', a: 'A basic average-return calculator generally does not — this is the sequence-of-returns risk described above, and it\u2019s worth treating projections as estimates rather than guarantees for this reason.' },
      { q: 'Should I include Social Security or pension income in my calculation?', a: 'Yes, if you\u2019re reasonably confident in receiving it — leaving it out entirely can make your required personal savings target look larger than it actually needs to be.' },
      { q: 'How often should I recalculate my retirement plan?', a: 'At least every few years, and definitely after any major life or income change — assumptions made in your 20s rarely stay accurate by your 40s or 50s.' },
      { q: 'What does the withdrawal phase in the chart represent?', a: 'It projects the balance drawing down after retirement under a 4%-style withdrawal assumption, so you can see roughly how long the accumulated portfolio can support spending.' },
    ],
  },

  inflation: {
    intro: [
      "An inflation calculator shows how the purchasing power of a given amount of money changes over time, either by projecting forward (what will this amount be worth in the future) or looking backward (what would a past amount be worth today). It answers a question that\u2019s easy to overlook in everyday financial planning: the number on your bank statement staying the same doesn\u2019t mean your actual buying power is staying the same.",
    ],
    sections: [
      {
        heading: 'The Formula Behind Inflation Adjustment',
        formula: 'Future Value = Present Value × (1 + inflation rate)^number of years',
        paragraphs: [
          '**Example:** Rs. 100,000 today, with inflation averaging 6% annually, would need to become roughly Rs. 179,000 in 10 years just to buy the same basket of goods and services — not because the money grew, but because prices rose around it.',
          'The same formula works in reverse to find out what a past amount is worth in today\u2019s terms, which is why inflation calculators are often used to compare historical prices, wages, or savings goals to modern equivalents.',
        ],
      },
      {
        heading: 'Why Inflation Matters More the Longer the Timeframe',
        paragraphs: [
          'Over a single year, inflation\u2019s effect is usually small enough to go unnoticed. Over 10, 20, or 30 years — the kind of timeframes relevant to savings goals and retirement planning — the cumulative effect becomes substantial. This is exactly why inflation calculators are frequently paired with retirement and long-term savings calculators: a savings target that looks sufficient in today\u2019s terms can fall meaningfully short by the time it\u2019s actually needed, purely due to inflation eroding what that number can buy.',
        ],
      },
      {
        heading: 'Real Return vs. Nominal Return',
        paragraphs: [
          'An investment or savings account advertising a 6% annual return sounds appealing until inflation is factored in. If inflation is running at 5% during that same period, the real return — the actual increase in purchasing power — is closer to 1%, not 6%. This distinction between nominal and real return is one of the most commonly overlooked factors in personal financial planning, because the nominal number is what\u2019s advertised and displayed, while the real number is what actually determines whether wealth is growing in a meaningful sense.',
        ],
      },
      {
        heading: 'Why Inflation Isn\u2019t the Same for Everyone',
        paragraphs: [
          'Broad inflation figures are calculated based on a standardized basket of goods and services meant to represent typical spending patterns, but any individual\u2019s actual cost increases can differ significantly depending on what they actually spend money on. Someone spending a large share of income on categories rising faster than the overall average experiences a personally higher inflation rate than someone spending more heavily in categories rising slower. This is worth keeping in mind when applying a general inflation calculator to a specific personal budget or savings goal.',
        ],
      },
      {
        heading: 'Using This Calculator for Salary and Wage Comparisons',
        paragraphs: [
          'One of the more practical everyday uses of an inflation calculator is comparing a past salary to what it would be worth today, or checking whether a raise has actually kept pace with rising costs. A salary that increased by 20% over five years can still represent a real pay cut in purchasing-power terms if inflation over that same period rose by more than 20% — a comparison this calculator makes straightforward to check.',
        ],
      },
      {
        heading: 'Inflation\u2019s Effect on Fixed-Income and Cash Holdings',
        paragraphs: [
          'Money sitting in cash or in accounts earning little to no interest loses purchasing power every year that inflation runs above the interest being earned. This is a core reason financial guidance generally discourages holding large sums in pure cash over long periods — inflation quietly erodes the value even while the number on the statement stays flat or grows only slightly.',
        ],
      },
      {
        heading: 'Common Mistakes When Interpreting Inflation Calculations',
        bullets: [
          'Comparing nominal dollar amounts across different years without adjusting for inflation, which makes past prices, wages, or savings goals look artificially smaller or larger than they really were in relative terms',
          'Assuming a single historical average inflation rate will hold steady going forward, when actual inflation varies meaningfully year to year and across different economic periods',
          'Using a general inflation rate for very specific categories (like education or healthcare) that have historically risen faster than overall average inflation in many economies',
        ],
      },
    ],
    faqs: [
      { q: 'What inflation rate should I use for long-term projections?', a: 'A long-term historical average for the relevant country or currency is a reasonable starting point, though it\u2019s worth checking a few different rate assumptions to see a range of outcomes rather than relying on one fixed number.' },
      { q: 'Does inflation affect all prices equally?', a: 'No — different categories of goods and services can rise at very different rates, which is why broad inflation figures are an average rather than a precise reflection of every individual\u2019s actual costs.' },
      { q: 'Why does my salary feel smaller even though it\u2019s gone up?', a: 'If your raises haven\u2019t kept pace with inflation, your nominal salary has increased while your real, purchasing-power-adjusted salary may have stayed flat or even declined.' },
      { q: 'Is holding cash a bad idea because of inflation?', a: 'Not entirely — cash provides liquidity and safety that other assets don\u2019t, but holding large amounts in cash for long periods does mean gradually losing purchasing power if inflation outpaces the interest earned.' },
      { q: 'Can I use this calculator to compare historical prices?', a: 'Yes — enter a past amount and the average inflation rate between then and now to see roughly what that amount would represent in today\u2019s purchasing power.' },
    ],
  },
};
