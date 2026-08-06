// components/offers/OfferStatsRow.tsx
import { BarChart3, Clock, CheckCircle2 } from "lucide-react";

interface StatCard {
  icon: React.ReactNode;
  iconBgClass: string;
  label: string;
  value: string | number;
}

interface OfferStatsRowProps {
  stats?: StatCard[];
}

const DEFAULT_STATS: StatCard[] = [
  {
    icon: <BarChart3 className="size-5 text-primary-blue" />,
    iconBgClass: "bg-blue-50",
    label: "Total Offers",
    value: "1,284",
  },
  {
    icon: <Clock className="size-5 text-orange-500" />,
    iconBgClass: "bg-orange-50",
    label: "Pending",
    value: 342,
  },
  {
    icon: <CheckCircle2 className="size-5 text-green-600" />,
    iconBgClass: "bg-green-50",
    label: "Accepted",
    value: 628,
  },
];

export function OfferStatsRow({ stats = DEFAULT_STATS }: OfferStatsRowProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded-2xl bg-white p-5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
        >
          <span
            className={`flex size-10 items-center justify-center rounded-lg ${stat.iconBgClass}`}
          >
            {stat.icon}
          </span>

          <p className="mt-4 text-xs font-medium tracking-wide text-gray-400">
            {stat.label.toUpperCase()}
          </p>
          <p className="mt-1 text-3xl font-bold text-primary-black">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}