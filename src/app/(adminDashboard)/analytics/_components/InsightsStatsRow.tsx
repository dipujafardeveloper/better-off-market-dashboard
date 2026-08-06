// components/insights/InsightsStatsRow.tsx
import { Users, Building2 } from "lucide-react";

interface StatCard {
  icon: React.ReactNode;
  iconBgClass: string;
  label: string;
  value: string | number;
  trendBadge?: boolean;
}

interface InsightsStatsRowProps {
  stats?: StatCard[];
}

const DEFAULT_STATS: StatCard[] = [
  {
    icon: <Users className="size-5 text-indigo-500" />,
    iconBgClass: "bg-indigo-50",
    label: "Total Seller",
    value: "2,418",
    trendBadge: true,
  },
  {
    icon: <Users className="size-5 text-indigo-500" />,
    iconBgClass: "bg-indigo-50",
    label: "Total Buyer",
    value: "2,418",
    trendBadge: true,
  },
  {
    icon: <Building2 className="size-5 text-orange-500" />,
    iconBgClass: "bg-orange-50",
    label: "Active Listings",
    value: 535,
  },
];

export function InsightsStatsRow({
  stats = DEFAULT_STATS,
}: InsightsStatsRowProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 shadow-[0_10px_30px_0_rgba(15,23,42,0.05)]">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded-lg bg-white p-5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
        >
          <div className="flex items-start justify-between">
            <span
              className={`flex size-10 items-center justify-center rounded-lg ${stat.iconBgClass}`}
            >
              {stat.icon}
            </span>
          </div>

          <p className="mt-4 text-sm text-[#565E74]">{stat.label}</p>
          <p className="mt-1 text-3xl font-bold text-primary-black">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}
