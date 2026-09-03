"use client";
import AnimatedArrow from "@/animatedArrows/AnimatedArrow";
import { useGetStatsQuery } from "@/redux/api/statsApi";
import { Skeleton } from "antd";
import Link from "next/link";

interface StatCardData {
  label: string;
  value: string | number;
  footer?: {
    type: "link" | "text" | "trailing";
    text: string;
    onClick?: () => void;
  };
  loading?: boolean;
}

export function StatContainer() {
  const { data, isLoading } = useGetStatsQuery(undefined);

  console.log(data?.data);

  const stats: StatCardData[] = [
    {
      label: "Total Users",
      value: data?.data?.registeredUsers || 0,
      footer: { type: "link", text: "See details" },
      loading: isLoading,
    },
    {
      label: "Active Listings",
      value: data?.data?.activeListings || 0,
      loading: isLoading,
    },
    {
      label: "Deals Closed",
      value: data?.data?.dealsClosed || 0,
      footer: { type: "trailing", text: `${data?.data?.totalOffers || 0} offers`},
      loading: isLoading,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}

function StatCard({ label, value, footer, loading }: StatCardData) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium tracking-wide text-[#404943]">
            {label.toUpperCase()}
          </p>
          { loading? <Skeleton.Input className="mt-2 " active /> :  <p className="mt-2 text-3xl font-bold text-primary-black sm:text-4xl">
            {value}
          </p>}
        </div>

        {footer?.type === "trailing" && (
          loading? <Skeleton.Input className=" shrink-0 " active /> : <span className="mt-1 shrink-0 text-base text-[#565E74]">
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
            <AnimatedArrow size={16} />
          </button>
        </Link>
      )}
    </div>
  );
}
