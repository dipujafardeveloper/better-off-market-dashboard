import { InsightsHeader } from "./_components/InsightsHeader";
import { InsightsStatsRow } from "./_components/InsightsStatsRow";
import { OfferConversionCard } from "./_components/OfferConversionCard";
import { UserDistributionCard } from "./_components/UserDistributionCard";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 p-6">
      <InsightsHeader />
      <InsightsStatsRow />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <UserDistributionCard />
        <OfferConversionCard />
      </div>
    </div>
  );
}
