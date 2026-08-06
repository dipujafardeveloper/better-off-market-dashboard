// components/insights/OfferConversionCard.tsx
interface ConversionRow {
  label: string;
  value: number;
  dotColorClass: string;
}

interface OfferConversionCardProps {
  title?: string;
  rows?: ConversionRow[];
}

const DEFAULT_ROWS: ConversionRow[] = [
  { label: "Accepted", value: 628, dotColorClass: "bg-orange-500" },
  { label: "Pending", value: 342, dotColorClass: "bg-blue-300" },
  { label: "Rejected", value: 218, dotColorClass: "bg-red-200" },
  { label: "Withdrawn", value: 96, dotColorClass: "bg-gray-300" },
];

export function OfferConversionCard({
  title = "Offer Conversion",
  rows = DEFAULT_ROWS,
}: OfferConversionCardProps) {
  return (
    <div className="rounded-lg bg-white sm:px-7 sm:pt-7 sm:pb-24 px-6 pt-6 py-16 shadow-[0_10px_30px_0_rgba(15,23,42,0.05)]">
      <h2 className="mb-6 text-xl font-semibold text-[#191C1E]">{title}</h2>

      <div className="space-y-5">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className={`size-2.5 rounded-full ${row.dotColorClass}`} />
              <span className="text-sm text-gray-600">{row.label}</span>
            </div>
            <span className="font-bold text-primary-black">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}