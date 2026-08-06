// components/insights/UserDistributionCard.tsx
import { ChevronRight } from "lucide-react";

interface DistributionRow {
  label: string;
  count: number;
  percentage: number;
  barColorClass: string;
}

interface UserDistributionCardProps {
  title?: string;
  onViewAll?: () => void;
  rows?: DistributionRow[];
}

const DEFAULT_ROWS: DistributionRow[] = [
  {
    label: "Buyers",
    count: 1842,
    percentage: 76,
    barColorClass: "bg-gray-900",
  },
  {
    label: "Sellers Approved",
    count: 573,
    percentage: 23.7,
    barColorClass: "bg-orange-500",
  },
  {
    label: "Sellers Pending",
    count: 3,
    percentage: 0.3,
    barColorClass: "bg-red-300",
  },
];

const formatRowLabel = (count: number, percentage: number) =>
  `${count.toLocaleString("en-US")} users (${percentage}%)`;

export function UserDistributionCard({
  title = "User Distribution",
  rows = DEFAULT_ROWS,
}: UserDistributionCardProps) {
  return (
    <div className="rounded-lg bg-white sm:px-7 sm:pt-7 sm:pb-24 px-6 pt-6 py-16 shadow-[0_10px_30px_0_rgba(15,23,42,0.05)]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-[#191C1E]">{title}</h2>
      </div>

      <div className="space-y-5">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-semibold text-primary-black">
                {row.label}
              </span>
              <span className="text-sm text-gray-500">
                {formatRowLabel(row.count, row.percentage)}
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-gray-100">
              <div
                className={`h-full rounded-full ${row.barColorClass}`}
                style={{ width: `${Math.max(row.percentage, 1.5)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
