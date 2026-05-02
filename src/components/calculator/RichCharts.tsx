import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend,
} from 'recharts';

// Semantic colors per spec: green=normal, yellow=borderline, red=risk, blue=info
export const CHART_COLORS = {
  normal: 'hsl(142 76% 36%)',
  warn: 'hsl(38 92% 50%)',
  risk: 'hsl(0 84% 60%)',
  info: 'hsl(217 91% 60%)',
  accent: 'hsl(280 68% 60%)',
  pink: 'hsl(340 82% 52%)',
  muted: 'hsl(215 16% 60%)',
};

const PALETTE = [
  CHART_COLORS.info,
  CHART_COLORS.normal,
  CHART_COLORS.warn,
  CHART_COLORS.risk,
  CHART_COLORS.accent,
  CHART_COLORS.pink,
];

interface BasePoint { name: string; value: number; color?: string; }

export interface ChartSpec {
  type: 'bar' | 'horizontalBar' | 'pie' | 'donut' | 'line' | 'rangeBar' | 'thermometer';
  title: string;
  caption: string;
  alt: string;
  data: BasePoint[] | RangeBand[] | LinePoint[];
  xLabel?: string;
  yLabel?: string;
  unit?: string;
  // For line charts with multiple series
  series?: { key: string; label: string; color: string }[];
}

export interface RangeBand { name: string; from: number; to: number; color: string; }
export interface LinePoint { x: number | string; [key: string]: number | string; }

const ChartFrame = ({ spec, children }: { spec: ChartSpec; children: React.ReactNode }) => (
  <figure
    className="my-6 p-4 sm:p-5 bg-card border border-border rounded-xl"
    role="img"
    aria-label={spec.alt}
  >
    <figcaption className="mb-3">
      <h4 className="text-base font-semibold text-foreground">{spec.title}</h4>
    </figcaption>
    <div className="w-full h-64 sm:h-72">
      <ResponsiveContainer width="100%" height="100%">
        {children as any}
      </ResponsiveContainer>
    </div>
    <p className="mt-3 text-xs text-muted-foreground italic">{spec.caption}</p>
  </figure>
);

export const RichChart = ({ spec }: { spec: ChartSpec }) => {
  const tooltipStyle = {
    backgroundColor: 'hsl(var(--card))',
    border: '1px solid hsl(var(--border))',
    borderRadius: 8,
    color: 'hsl(var(--foreground))',
    fontSize: 12,
  };

  if (spec.type === 'pie' || spec.type === 'donut') {
    const data = spec.data as BasePoint[];
    return (
      <ChartFrame spec={spec}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={spec.type === 'donut' ? 55 : 0}
            outerRadius={90}
            paddingAngle={2}
            label={(e: any) => `${e.name}: ${e.value}${spec.unit ?? ''}`}
          >
            {data.map((d, i) => (
              <Cell key={i} fill={d.color ?? PALETTE[i % PALETTE.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} />
        </PieChart>
      </ChartFrame>
    );
  }

  if (spec.type === 'line') {
    const data = spec.data as LinePoint[];
    const series = spec.series ?? [{ key: 'value', label: spec.yLabel ?? 'Value', color: CHART_COLORS.info }];
    return (
      <ChartFrame spec={spec}>
        <LineChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 16 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="x"
            label={{ value: spec.xLabel, position: 'insideBottom', offset: -8, fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
          />
          <YAxis
            label={{ value: spec.yLabel, angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
          />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          {series.map((s) => (
            <Line key={s.key} type="monotone" dataKey={s.key} name={s.label} stroke={s.color} strokeWidth={2} dot={{ r: 3 }} />
          ))}
        </LineChart>
      </ChartFrame>
    );
  }

  if (spec.type === 'rangeBar') {
    // Horizontal stacked color bands (e.g. BMI ranges)
    const bands = spec.data as RangeBand[];
    const min = Math.min(...bands.map((b) => b.from));
    const max = Math.max(...bands.map((b) => b.to));
    const total = max - min;
    return (
      <figure
        className="my-6 p-4 sm:p-5 bg-card border border-border rounded-xl"
        role="img"
        aria-label={spec.alt}
      >
        <h4 className="text-base font-semibold text-foreground mb-3">{spec.title}</h4>
        <div className="w-full">
          <div className="flex w-full h-10 rounded-md overflow-hidden border border-border">
            {bands.map((b, i) => {
              const widthPct = ((b.to - b.from) / total) * 100;
              return (
                <div
                  key={i}
                  className="flex items-center justify-center text-[10px] sm:text-xs font-medium text-white text-center px-1"
                  style={{ width: `${widthPct}%`, backgroundColor: b.color }}
                  title={`${b.name}: ${b.from}–${b.to}`}
                >
                  <span className="truncate">{b.name}</span>
                </div>
              );
            })}
          </div>
          <div className="flex w-full text-[10px] sm:text-xs text-muted-foreground mt-1">
            {bands.map((b, i) => {
              const widthPct = ((b.to - b.from) / total) * 100;
              return (
                <div key={i} className="text-center" style={{ width: `${widthPct}%` }}>
                  {b.from}{i === bands.length - 1 ? `–${b.to}` : ''}
                </div>
              );
            })}
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground italic">{spec.caption}</p>
      </figure>
    );
  }

  if (spec.type === 'thermometer') {
    // SVG thermometer comparing C / F / K
    const data = spec.data as BasePoint[]; // each point: name=label, value=Celsius
    return (
      <figure
        className="my-6 p-4 sm:p-5 bg-card border border-border rounded-xl"
        role="img"
        aria-label={spec.alt}
      >
        <h4 className="text-base font-semibold text-foreground mb-3">{spec.title}</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left text-muted-foreground">
                <th className="py-2 pr-3">Reference</th>
                <th className="py-2 pr-3">Celsius (°C)</th>
                <th className="py-2 pr-3">Fahrenheit (°F)</th>
                <th className="py-2">Kelvin (K)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => {
                const c = d.value;
                const f = c * 9 / 5 + 32;
                const k = c + 273.15;
                return (
                  <tr key={i} className="border-t border-border">
                    <td className="py-2 pr-3 font-medium text-foreground">{d.name}</td>
                    <td className="py-2 pr-3">{c}°</td>
                    <td className="py-2 pr-3">{f.toFixed(1)}°</td>
                    <td className="py-2">{k.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground italic">{spec.caption}</p>
      </figure>
    );
  }

  // bar / horizontalBar
  const data = spec.data as BasePoint[];
  const horizontal = spec.type === 'horizontalBar';
  return (
    <ChartFrame spec={spec}>
      <BarChart
        data={data}
        layout={horizontal ? 'vertical' : 'horizontal'}
        margin={{ top: 8, right: 16, left: horizontal ? 30 : 0, bottom: 16 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        {horizontal ? (
          <>
            <XAxis type="number" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} label={{ value: spec.xLabel, position: 'insideBottom', offset: -8, fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
            <YAxis type="category" dataKey="name" width={90} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
          </>
        ) : (
          <>
            <XAxis dataKey="name" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} label={{ value: spec.xLabel, position: 'insideBottom', offset: -8, fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
            <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} label={{ value: spec.yLabel, angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
          </>
        )}
        <Tooltip contentStyle={tooltipStyle} />
        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
          {data.map((d, i) => (
            <Cell key={i} fill={d.color ?? PALETTE[i % PALETTE.length]} />
          ))}
        </Bar>
      </BarChart>
    </ChartFrame>
  );
};
