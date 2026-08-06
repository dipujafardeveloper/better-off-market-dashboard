import AnimatedArrow from "@/animatedArrows/AnimatedArrow";
import Link from "next/link";

interface StatCardProps {
  label: string;
  value: string | number;
  footer?: {
    type: "link" | "text" | "trailing";
    text: string;
    onClick?: () => void;
  };
}

interface StatsRowProps {
  stats?: StatCardProps[];
}

export function StatContainer({
  stats = [
    {
      label: "Total Users",
      value: 247,
      footer: { type: "link", text: "See details" },
    },
    {
      label: "Active Listings",
      value: 535,
      footer: { type: "text", text: "Updated 2 mins ago" },
    },
    {
      label: "Deals Closed",
      value: 318,
      footer: { type: "trailing", text: "1,284 offers" },
    },
  ],
}: StatsRowProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}

function StatCard({ label, value, footer }: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium tracking-wide text-[#404943]">
            {label.toUpperCase()}
          </p>
          <p className="mt-2 text-3xl font-bold text-primary-black sm:text-4xl">
            {value}
          </p>
        </div>

        {footer?.type === "trailing" && (
          <span className="mt-1 shrink-0 text-sm text-[#565E74]">
            {footer.text}
          </span>
        )}
      </div>

      {footer?.type === "text" && (
        <p className="mt-4 text-sm text-[#707973]">{footer.text}</p>
      )}

      {footer?.type === "link" && (
        <Link href="/users">
          <button
            onClick={footer.onClick}
            className="mt-4 flex items-center justify-between w-full gap-1.5 text-sm text-[#707973] transition-colors hover:text-primary-black group"
          >
            {footer.text}
            <AnimatedArrow  size={16} />
          </button>
        </Link>
      )}
    </div>
  );
}
