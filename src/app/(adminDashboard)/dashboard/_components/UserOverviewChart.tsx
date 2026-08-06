"use client";
import { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface DataPoint {
  month: string;
  value: number;
}

interface UserOverviewChartProps {
  title?: string;
  subtitle?: string;
  data?: DataPoint[];
  year?: number;
}

const DEFAULT_DATA: DataPoint[] = [
  { month: "JAN", value: 62000 },
  { month: "FEB", value: 41000 },
  { month: "MAR", value: 58000 },
  { month: "APR", value: 76000 },
  { month: "MAY", value: 54000 },
  { month: "JUN", value: 49000 },
  { month: "JUL", value: 38000 },
  { month: "AUG", value: 84849.93 },
  { month: "SEP", value: 52000 },
  { month: "OCT", value: 71000 },
  { month: "NOV", value: 47000 },
  { month: "DEC", value: 36000 },
];

const formatCurrency = (value: number) =>
  `$${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export function UserOverviewChart({
  title = "User Overview",
  subtitle = "Yearly analysis",
  data = DEFAULT_DATA,
  year = 2025,
}: UserOverviewChartProps) {
  const [activeIndex, setActiveIndex] = useState(
    DEFAULT_DATA.findIndex((d) => d.month === "AUG")
  );

  const activePoint = data[activeIndex];
  const leftPercent = useMemo(
    () => ((activeIndex + 0.5) / data.length) * 100,
    [activeIndex, data.length]
  );

  return (
    <div className="rounded-xl bg-white p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:p-8">
      {/* Header */}
      <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-primary-black">{title}</h2>
          <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">Yearly</span>
          <button className="flex items-center gap-1.5 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white">
            {year}
            <ChevronDownIcon className="size-3.5" />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="relative">
        {/* Floating tooltip above active bar */}
        <div
          className="pointer-events-none absolute -top-2 z-10 -translate-x-1/2 -translate-y-full transition-all duration-300"
          style={{ left: `${leftPercent}%` }}
        >
          <div className="relative rounded-2xl bg-gray-900 px-5 py-2.5 text-center shadow-lg">
            <p className="text-xs text-gray-400">User</p>
            <p className="text-base font-bold text-white">
              {formatCurrency(activePoint.value)}
            </p>
            <span className="absolute left-1/2 top-full h-2 w-1 -translate-x-1/2 bg-gray-900" />
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            barCategoryGap="30%"
            margin={{ top: 70, right: 0, left: 0, bottom: 0 }}
            onMouseLeave={() =>
              setActiveIndex(DEFAULT_DATA.findIndex((d) => d.month === "AUG"))
            }
          >
            <defs>
              <linearGradient id="activeBarGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0f2a52" />
                <stop offset="100%" stopColor="#7fb3f0" />
              </linearGradient>
              <linearGradient id="inactiveBarGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e7eaf0" />
                <stop offset="100%" stopColor="#f5f7fa" />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={(props) => <MonthTick {...props} activeIndex={activeIndex} />}
            />

            <Bar
              dataKey="value"
              radius={[10, 10, 0, 0]}
              maxBarSize={52}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onClick={(_, index) => setActiveIndex(index)}
              cursor="pointer"
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={
                    index === activeIndex
                      ? "url(#activeBarGradient)"
                      : "url(#inactiveBarGradient)"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function MonthTick({
  x,
  y,
  payload,
  activeIndex,
  index,
}: {
  x: number;
  y: number;
  payload: { value: string };
  activeIndex: number;
  index: number;
}) {
  const isActive = index === activeIndex;
  return (
    <text
      x={x}
      y={y + 20}
      textAnchor="middle"
      className={isActive ? "text-sm font-bold" : "text-sm font-medium"}
      fill={isActive ? "#0f172a" : "#94a3b8"}
    >
      {payload.value}
    </text>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}