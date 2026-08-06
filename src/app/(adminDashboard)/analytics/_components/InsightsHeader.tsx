// components/insights/InsightsHeader.tsx
interface InsightsHeaderProps {
  title?: string;
  subtitle?: string;
}

export function InsightsHeader({
  title = "Insights & Analytics",
  subtitle = "Real-time performance metrics for PropMarket.",
}: InsightsHeaderProps) {
  return (
    <div>
      <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-[#191C1E]">{title}</h1>
      <p className="mt-1 text-sm text-[#565E74]">{subtitle}</p>
    </div>
  );
}