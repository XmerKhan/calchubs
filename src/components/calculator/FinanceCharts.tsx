import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const COLORS = {
  primary: 'hsl(217 91% 60%)',
  green: 'hsl(142 76% 36%)',
  amber: 'hsl(38 92% 50%)',
  red: 'hsl(0 84% 60%)',
  purple: 'hsl(280 68% 60%)',
  pink: 'hsl(340 82% 52%)',
  muted: 'hsl(215 16% 60%)',
};

const tooltipStyle = {
  backgroundColor: 'hsl(var(--card))',
  border: '1px solid hsl(var(--border))',
  borderRadius: 8,
  color: 'hsl(var(--foreground))',
  fontSize: 12,
};

const axisTick = { fill: 'hsl(var(--muted-foreground))', fontSize: 11 };
const grid = 'hsl(var(--border))';

const fmt = (n: number) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n);
const money = (n: number) => '$' + fmt(n);

const ChartFrame = ({ title, caption, children, height = 288 }: { title: string; caption: string; children: React.ReactNode; height?: number }) => (
  <figure className="my-5 p-4 sm:p-5 bg-secondary/40 border border-border rounded-xl">
    <h4 className="text-sm sm:text-base font-semibold text-foreground mb-3">{title}</h4>
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        {children as any}
      </ResponsiveContainer>
    </div>
    <p className="mt-2 text-xs text-muted-foreground italic">{caption}</p>
  </figure>
);

/* ---------------- EMI: Donut + Stacked Yearly Bar ---------------- */
export const EMICharts = ({
  principal, annualRatePct, tenureMonths, totalInterest, emi,
}: { principal: number; annualRatePct: number; tenureMonths: number; totalInterest: number; emi: number; }) => {
  const donutData = [
    { name: 'Principal', value: Math.round(principal), color: COLORS.primary },
    { name: 'Interest', value: Math.round(totalInterest), color: COLORS.red },
  ];
  const r = annualRatePct / 100 / 12;
  let balance = principal;
  const years = Math.ceil(tenureMonths / 12);
  const yearlyData: { name: string; Principal: number; Interest: number }[] = [];
  let monthsLeft = tenureMonths;
  for (let y = 1; y <= years; y++) {
    let pSum = 0, iSum = 0;
    const monthsThisYear = Math.min(12, monthsLeft);
    for (let m = 0; m < monthsThisYear; m++) {
      const interest = balance * r;
      const princ = emi - interest;
      pSum += princ;
      iSum += interest;
      balance -= princ;
    }
    monthsLeft -= monthsThisYear;
    yearlyData.push({ name: `Y${y}`, Principal: Math.max(0, Math.round(pSum)), Interest: Math.max(0, Math.round(iSum)) });
  }

  return (
    <>
      <ChartFrame title="Principal vs Total Interest" caption="How much of your total repayment goes to interest versus paying down the amount borrowed.">
        <PieChart>
          <Pie data={donutData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2}
               label={(e: any) => `${e.name}: ${money(e.value)}`}>
            {donutData.map((d, i) => <Cell key={i} fill={d.color} />)}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => money(v)} />
        </PieChart>
      </ChartFrame>
      <ChartFrame title="Interest vs Principal — Year by Year" caption="The interest share (red) is largest in the early years and shrinks over time as more of every EMI goes toward the principal.">
        <BarChart data={yearlyData} margin={{ top: 8, right: 12, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={grid} />
          <XAxis dataKey="name" tick={axisTick} />
          <YAxis tick={axisTick} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
          <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => money(v)} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="Interest" stackId="a" fill={COLORS.red} />
          <Bar dataKey="Principal" stackId="a" fill={COLORS.primary} />
        </BarChart>
      </ChartFrame>
    </>
  );
};

/* ---------------- Loan: Side-by-side term comparison ---------------- */
const monthlyPayment = (p: number, annualRatePct: number, years: number) => {
  const r = annualRatePct / 100 / 12;
  const n = years * 12;
  if (r === 0) return p / n;
  return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
};

export const LoanCharts = ({ principal, annualRatePct, years }: { principal: number; annualRatePct: number; years: number }) => {
  const terms = Array.from(new Set([Math.max(1, years - 2), years, years + 2])).sort((a, b) => a - b);
  const data = terms.map((t) => {
    const pay = monthlyPayment(principal, annualRatePct, t);
    const totalInterest = pay * t * 12 - principal;
    return {
      name: `${t}-yr term`,
      'Total Interest': Math.max(0, Math.round(totalInterest)),
      'Monthly Payment': Math.round(pay),
    };
  });
  return (
    <ChartFrame title="Total Interest Across Different Loan Terms" caption="A longer term lowers the monthly payment but almost always increases the total interest paid over the life of the loan.">
      <BarChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={grid} />
        <XAxis dataKey="name" tick={axisTick} />
        <YAxis tick={axisTick} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => money(v)} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="Total Interest" fill={COLORS.red} radius={[6, 6, 0, 0]} />
        <Bar dataKey="Monthly Payment" fill={COLORS.primary} radius={[6, 6, 0, 0]} />
      </BarChart>
    </ChartFrame>
  );
};

/* ---------------- Mortgage: Balance line + stacked area (yearly principal vs interest) ---------------- */
export const MortgageCharts = ({ loanAmount, annualRatePct, years }: { loanAmount: number; annualRatePct: number; years: number }) => {
  const r = annualRatePct / 100 / 12;
  const n = years * 12;
  const pay = monthlyPayment(loanAmount, annualRatePct, years);
  let balance = loanAmount;
  const balanceData: { x: number; Balance: number }[] = [{ x: 0, Balance: Math.round(loanAmount) }];
  const yearlyData: { x: string; Principal: number; Interest: number }[] = [];
  for (let y = 1; y <= years; y++) {
    let pSum = 0, iSum = 0;
    for (let m = 0; m < 12 && (y - 1) * 12 + m < n; m++) {
      const interest = balance * r;
      const princ = pay - interest;
      pSum += princ;
      iSum += interest;
      balance -= princ;
    }
    yearlyData.push({ x: `Y${y}`, Principal: Math.max(0, Math.round(pSum)), Interest: Math.max(0, Math.round(iSum)) });
    balanceData.push({ x: y, Balance: Math.max(0, Math.round(balance)) });
  }

  return (
    <>
      <ChartFrame title="Remaining Loan Balance Over Time" caption="Your outstanding balance falls slowly at first, then accelerates in the second half of the loan.">
        <LineChart data={balanceData} margin={{ top: 8, right: 12, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={grid} />
          <XAxis dataKey="x" tick={axisTick} label={{ value: 'Year', position: 'insideBottom', offset: -4, fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
          <YAxis tick={axisTick} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
          <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => money(v)} />
          <Line type="monotone" dataKey="Balance" stroke={COLORS.primary} strokeWidth={2} dot={false} />
        </LineChart>
      </ChartFrame>
      <ChartFrame title="Yearly Interest vs Principal Paid" caption="Early years are interest-heavy; later years shift toward paying down the principal, which is why prepayments early in the loan save the most.">
        <AreaChart data={yearlyData} margin={{ top: 8, right: 12, left: 0, bottom: 8 }} stackOffset="none">
          <CartesianGrid strokeDasharray="3 3" stroke={grid} />
          <XAxis dataKey="x" tick={axisTick} />
          <YAxis tick={axisTick} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
          <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => money(v)} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Area type="monotone" dataKey="Interest" stackId="1" stroke={COLORS.red} fill={COLORS.red} fillOpacity={0.6} />
          <Area type="monotone" dataKey="Principal" stackId="1" stroke={COLORS.primary} fill={COLORS.primary} fillOpacity={0.6} />
        </AreaChart>
      </ChartFrame>
    </>
  );
};

/* ---------------- Simple Interest: simple vs compound over years ---------------- */
export const SimpleVsCompoundChart = ({ principal, annualRatePct, years }: { principal: number; annualRatePct: number; years: number }) => {
  const r = annualRatePct / 100;
  const points = [];
  const steps = Math.max(6, Math.ceil(years));
  for (let i = 0; i <= steps; i++) {
    const t = (years * i) / steps;
    points.push({
      x: Number(t.toFixed(1)),
      Simple: Math.round(principal * (1 + r * t)),
      Compound: Math.round(principal * Math.pow(1 + r, t)),
    });
  }
  return (
    <ChartFrame title="Simple Interest vs Compound Interest Growth" caption="Both start at the same principal, but compounding pulls ahead more and more as time goes on.">
      <LineChart data={points} margin={{ top: 8, right: 12, left: 0, bottom: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={grid} />
        <XAxis dataKey="x" tick={axisTick} label={{ value: 'Year', position: 'insideBottom', offset: -4, fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
        <YAxis tick={axisTick} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => money(v)} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Line type="monotone" dataKey="Simple" stroke={COLORS.amber} strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="Compound" stroke={COLORS.green} strokeWidth={2} dot={false} />
      </LineChart>
    </ChartFrame>
  );
};

/* ---------------- Compound Interest: compound curve vs simple line ---------------- */
export const CompoundInterestChart = ({
  principal, annualRatePct, years, compoundsPerYear,
}: { principal: number; annualRatePct: number; years: number; compoundsPerYear: number }) => {
  const r = annualRatePct / 100;
  const points = [];
  const steps = Math.max(8, Math.ceil(years));
  for (let i = 0; i <= steps; i++) {
    const t = (years * i) / steps;
    points.push({
      x: Number(t.toFixed(1)),
      Compound: Math.round(principal * Math.pow(1 + r / compoundsPerYear, compoundsPerYear * t)),
      Simple: Math.round(principal * (1 + r * t)),
    });
  }
  return (
    <ChartFrame title="Compound Growth Curve vs Simple Interest" caption="The compound curve bends upward over time — the gap versus a flat simple-interest line grows as years accumulate.">
      <LineChart data={points} margin={{ top: 8, right: 12, left: 0, bottom: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={grid} />
        <XAxis dataKey="x" tick={axisTick} label={{ value: 'Year', position: 'insideBottom', offset: -4, fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
        <YAxis tick={axisTick} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => money(v)} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Line type="monotone" dataKey="Compound" stroke={COLORS.green} strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="Simple" stroke={COLORS.muted} strokeWidth={2} strokeDasharray="4 4" dot={false} />
      </LineChart>
    </ChartFrame>
  );
};

/* ---------------- Savings: stacked area contributions vs interest + running total line ---------------- */
export const SavingsChart = ({
  initial, monthly, annualRatePct, years,
}: { initial: number; monthly: number; annualRatePct: number; years: number }) => {
  const r = annualRatePct / 100 / 12;
  let balance = initial;
  const points: { x: string; Contributions: number; Interest: number; Total: number }[] = [];
  let contribs = initial;
  const nYears = Math.max(1, Math.round(years));
  points.push({ x: 'Y0', Contributions: Math.round(contribs), Interest: 0, Total: Math.round(balance) });
  for (let y = 1; y <= nYears; y++) {
    for (let m = 0; m < 12; m++) {
      balance = balance * (1 + r) + monthly;
      contribs += monthly;
    }
    const interest = Math.max(0, balance - contribs);
    points.push({ x: `Y${y}`, Contributions: Math.round(contribs), Interest: Math.round(interest), Total: Math.round(balance) });
  }
  return (
    <ChartFrame title="Contributions vs Interest Earned Over Time" caption="Blue is money you deposited; green is growth from interest. The line on top is your total balance.">
      <AreaChart data={points} margin={{ top: 8, right: 12, left: 0, bottom: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={grid} />
        <XAxis dataKey="x" tick={axisTick} />
        <YAxis tick={axisTick} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => money(v)} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Area type="monotone" dataKey="Contributions" stackId="1" stroke={COLORS.primary} fill={COLORS.primary} fillOpacity={0.5} />
        <Area type="monotone" dataKey="Interest" stackId="1" stroke={COLORS.green} fill={COLORS.green} fillOpacity={0.5} />
        <Line type="monotone" dataKey="Total" stroke={COLORS.amber} strokeWidth={2} dot={false} />
      </AreaChart>
    </ChartFrame>
  );
};

/* ---------------- Investment: projected line with shaded range band ---------------- */
export const InvestmentChart = ({
  initial, monthly, returnPct, years,
}: { initial: number; monthly: number; returnPct: number; years: number }) => {
  const project = (rPct: number, months: number) => {
    const r = rPct / 100 / 12;
    if (r === 0) return initial + monthly * months;
    return initial * Math.pow(1 + r, months) + monthly * ((Math.pow(1 + r, months) - 1) / r);
  };
  const nYears = Math.max(1, Math.round(years));
  const consPct = Math.max(0, returnPct - 2);
  const optPct = returnPct + 2;
  const points = [];
  for (let y = 0; y <= nYears; y++) {
    const m = y * 12;
    const low = Math.round(project(consPct, m));
    const mid = Math.round(project(returnPct, m));
    const high = Math.round(project(optPct, m));
    points.push({ x: `Y${y}`, Low: low, Expected: mid, Range: high - low, RangeBase: low, High: high });
  }
  return (
    <ChartFrame title={`Projected Growth With Return Range (±2%)`} caption={`Solid line is the expected return (${returnPct}%). The shaded band shows a more conservative and a more optimistic scenario — real returns will fall somewhere in this range, not on a single line.`}>
      <AreaChart data={points} margin={{ top: 8, right: 12, left: 0, bottom: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={grid} />
        <XAxis dataKey="x" tick={axisTick} />
        <YAxis tick={axisTick} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
        <Tooltip contentStyle={tooltipStyle}
          formatter={(v: number, name: string) => name === 'Range' || name === 'RangeBase' ? null : money(v)}
        />
        <Legend wrapperStyle={{ fontSize: 12 }} payload={[
          { value: `Optimistic (+2%)`, type: 'square', color: COLORS.green },
          { value: `Expected (${returnPct}%)`, type: 'line', color: COLORS.primary },
          { value: `Conservative (-2%)`, type: 'square', color: COLORS.amber },
        ]} />
        <Area type="monotone" dataKey="RangeBase" stackId="band" stroke="none" fill="transparent" />
        <Area type="monotone" dataKey="Range" stackId="band" stroke="none" fill={COLORS.primary} fillOpacity={0.18} />
        <Line type="monotone" dataKey="Low" stroke={COLORS.amber} strokeWidth={1.5} strokeDasharray="4 4" dot={false} />
        <Line type="monotone" dataKey="High" stroke={COLORS.green} strokeWidth={1.5} strokeDasharray="4 4" dot={false} />
        <Line type="monotone" dataKey="Expected" stroke={COLORS.primary} strokeWidth={2.5} dot={false} />
      </AreaChart>
    </ChartFrame>
  );
};

/* ---------------- Retirement: two-phase line (accumulation + withdrawal) ---------------- */
export const RetirementChart = ({
  currentAge, retirementAge, currentSavings, monthly, returnPct, retirementBalance,
}: { currentAge: number; retirementAge: number; currentSavings: number; monthly: number; returnPct: number; retirementBalance: number; }) => {
  const r = returnPct / 100 / 12;
  const yearsAcc = retirementAge - currentAge;
  const points: { age: number; Portfolio: number; phase: string }[] = [];
  let bal = currentSavings;
  points.push({ age: currentAge, Portfolio: Math.round(bal), phase: 'Accumulation' });
  for (let y = 1; y <= yearsAcc; y++) {
    for (let m = 0; m < 12; m++) bal = bal * (1 + r) + monthly;
    points.push({ age: currentAge + y, Portfolio: Math.round(bal), phase: 'Accumulation' });
  }
  // Withdrawal phase: 4% rule = annual withdrawal = 4% of retirement balance, held nominal, grown at conservative rate
  const annualWithdraw = retirementBalance * 0.04;
  const withdrawalYears = 30;
  const withdrawR = Math.max(0, returnPct - 2) / 100 / 12;
  let wb = retirementBalance;
  for (let y = 1; y <= withdrawalYears; y++) {
    for (let m = 0; m < 12; m++) wb = wb * (1 + withdrawR) - annualWithdraw / 12;
    points.push({ age: retirementAge + y, Portfolio: Math.max(0, Math.round(wb)), phase: 'Withdrawal' });
    if (wb <= 0) break;
  }
  return (
    <ChartFrame title="Portfolio Trajectory: Accumulation → Withdrawal" caption={`Portfolio grows until age ${retirementAge}, then draws down under a 4%-style withdrawal. The peak marks the transition into retirement.`}>
      <LineChart data={points} margin={{ top: 8, right: 12, left: 0, bottom: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={grid} />
        <XAxis dataKey="age" tick={axisTick} label={{ value: 'Age', position: 'insideBottom', offset: -4, fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
        <YAxis tick={axisTick} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => money(v)} />
        <Line type="monotone" dataKey="Portfolio" stroke={COLORS.primary} strokeWidth={2.5} dot={false} />
      </LineChart>
    </ChartFrame>
  );
};

/* ---------------- Inflation: dual line nominal (flat) vs real (declining) ---------------- */
export const InflationChart = ({ amount, annualRatePct, years }: { amount: number; annualRatePct: number; years: number }) => {
  const r = annualRatePct / 100;
  const n = Math.max(1, Math.round(years));
  const points = [];
  for (let y = 0; y <= n; y++) {
    points.push({
      x: `Y${y}`,
      Nominal: Math.round(amount),
      'Real Value': Math.round(amount / Math.pow(1 + r, y)),
    });
  }
  return (
    <ChartFrame title="Nominal Amount vs Real Purchasing Power" caption="The nominal number on your statement stays flat, but its real purchasing power quietly erodes every year inflation runs above zero.">
      <LineChart data={points} margin={{ top: 8, right: 12, left: 0, bottom: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={grid} />
        <XAxis dataKey="x" tick={axisTick} />
        <YAxis tick={axisTick} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => money(v)} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Line type="monotone" dataKey="Nominal" stroke={COLORS.primary} strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="Real Value" stroke={COLORS.red} strokeWidth={2} dot={false} />
      </LineChart>
    </ChartFrame>
  );
};
