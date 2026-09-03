"use client";
import { useGetUserOverviewQuery } from "@/redux/api/statsApi";
import { useEffect, useMemo, useState } from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";
import { Skeleton } from "antd";
import { ChevronDown } from "lucide-react";

interface DataPoint {
  month: string;
  value: number;
}

interface UserOverviewMonth {
  month: string;
  count: number | string;
}

interface UserOverviewChartProps {
  title?: string;
  subtitle?: string;
}

const formatNumber = (value: number) =>
  value.toLocaleString("en-US", { maximumFractionDigits: 0 });

const currentYear = new Date().getFullYear();
const YEAR_OPTIONS = Array.from({ length: 5 }, (_, i) => currentYear - i);

const MONTH_ORDER = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function UserOverviewChart({
  title = "User Overview",
  subtitle = "Yearly analysis",
}: UserOverviewChartProps) {
  const [year, setYear] = useState(currentYear);
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const {
    data: userOverviewData,
    isLoading,
    isFetching,
  } = useGetUserOverviewQuery({
    year,
  });

  const chartData: DataPoint[] = useMemo(() => {
    const monthsFromApi = userOverviewData?.data?.months ?? [];
    const countByMonth = new Map<string, number>(
      monthsFromApi.map((m: UserOverviewMonth): [string, number] => [
        m.month,
        Number(m.count),
      ]),
    );

    return MONTH_ORDER.map((month) => ({
      month: month.toUpperCase(),
      value: countByMonth.get(month) ?? 0,
    }));
  }, [userOverviewData]);

  // Default the highlighted bar to the month with the highest count
  // once real data arrives, instead of a hardcoded "AUG".
  useEffect(() => {
    if (chartData.length === 0) return;
    const maxIndex = chartData.reduce(
      (maxIdx, point, idx, arr) =>
        point.value > arr[maxIdx].value ? idx : maxIdx,
      0,
    );
    setActiveIndex(maxIndex);
  }, [chartData]);

  const activePoint = chartData[activeIndex];
  const leftPercent = useMemo(
    () => ((activeIndex + 0.5) / chartData.length) * 100,
    [activeIndex, chartData.length],
  );

  const showLoading = isLoading || isFetching;

  return (
    <div className="rounded-xl bg-white p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:p-8">
      {/* Header */}
      <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-primary-black">{title}</h2>
          <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
        </div>

        <div className="relative flex items-center gap-3">
          {/* <span className="text-sm text-gray-500">Yearly</span> */}
          <button
            type="button"
            onClick={() => setYearDropdownOpen((prev) => !prev)}
            className="flex items-center gap-1.5 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white cursor-pointer"
          >
            {year}
            <ChevronDown className="size-3.5" />
          </button>

          {yearDropdownOpen && (
            <div className="absolute right-0 top-full z-20 mt-2 w-28 overflow-hidden rounded-lg bg-white shadow-lg border border-gray-100">
              {YEAR_OPTIONS.map((y) => (
                <button
                  key={y}
                  type="button"
                  onClick={() => {
                    setYear(y);
                    setYearDropdownOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-left text-sm cursor-pointer hover:bg-gray-50 ${
                    y === year ? "font-semibold text-gray-900" : "text-gray-600"
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chart / Loading */}
      {showLoading ? (
        <div className="pt-4">
          <Skeleton.Node active style={{ width: "100%", height: 300 }}>
            <div style={{ width: "100%", height: "100%" }} />
          </Skeleton.Node>
        </div>
      ) : (
        <div className="relative">
          {/* Floating tooltip above active bar */}
          {activePoint && (
            <div
              className="pointer-events-none absolute -top-2 z-10 -translate-x-1/2 -translate-y-full transition-all duration-300"
              style={{ left: `${leftPercent}%` }}
            >
              <div className="relative rounded-2xl bg-gray-900 px-5 py-2.5 text-center shadow-lg">
                <p className="text-xs text-gray-400">User</p>
                <p className="text-base font-bold text-white">
                  {formatNumber(activePoint.value)}
                </p>
                <span className="absolute left-1/2 top-full h-2 w-1 -translate-x-1/2 bg-gray-900" />
              </div>
            </div>
          )}

          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              barCategoryGap="30%"
              margin={{ top: 70, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient
                  id="activeBarGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#0f2a52" />
                  <stop offset="100%" stopColor="#7fb3f0" />
                </linearGradient>
                <linearGradient
                  id="inactiveBarGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#e7eaf0" />
                  <stop offset="100%" stopColor="#f5f7fa" />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={(props) => (
                  <MonthTick {...props} activeIndex={activeIndex} />
                )}
              />

              <Bar
                dataKey="value"
                radius={[10, 10, 0, 0]}
                maxBarSize={52}
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onClick={(_, index) => setActiveIndex(index)}
                cursor="pointer"
              >
                {chartData.map((_, index) => (
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
      )}
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
