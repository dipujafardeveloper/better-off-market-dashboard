import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Image } from "antd";

export type PropertyStatus =
  | "pending"
  | "active"
  | "under_contract"
  | "sold"
  | "off_market";

const STATUS_CONFIG: Record<
  PropertyStatus,
  { label: string; className: string; dotClassName: string }
> = {
  pending: {
    label: "Pending",
    className: "bg-[#FFEDD5] text-[#C2410C]",
    dotClassName: "bg-[#F97316]",
  },
  active: {
    label: "Active",
    className: "bg-emerald-100 text-emerald-700",
    dotClassName: "bg-emerald-500",
  },
  under_contract: {
    label: "Under Contract",
    className: "bg-sky-100 text-sky-700",
    dotClassName: "bg-sky-500",
  },
  sold: {
    label: "Sold",
    className: "bg-slate-200 text-slate-700",
    dotClassName: "bg-slate-500",
  },
  off_market: {
    label: "Off Market",
    className: "bg-muted text-muted-foreground",
    dotClassName: "bg-muted-foreground",
  },
};

interface PropertyHeaderCardProps {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  location: string;
  status: PropertyStatus;
  className?: string;
}

export function PropertyHeaderCard({
  imageUrl,
  imageAlt,
  title,
  location,
  status,
  className,
}: PropertyHeaderCardProps) {
  const config = STATUS_CONFIG[status];

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-4  p-3 sm:gap-5 sm:p-4",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        src={imageUrl}
        alt={imageAlt ?? title}
        width={100}
        height={100}
        className="h-16 w-16 shrink-0 rounded-xl object-cover sm:h-20 sm:w-20"
      />

      <div className="min-w-0 flex-1">
        <h2 className="truncate text-lg font-medium text-foreground sm:text-xl">
          {title}
        </h2>
        <p className="mt-0.5 flex items-center gap-1 text-sm text-[#565E74]">
          <MapPin size={14} className="shrink-0 text-[#AC3400]" />
          <span className="truncate">{location}</span>
        </p>
      </div>

      <span
        className={cn(
          "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium",
          config.className,
        )}
      >
        <span className={cn("h-1.5 w-1.5 rounded-full", config.dotClassName)} />
        {config.label}
      </span>
    </div>
  );
}
