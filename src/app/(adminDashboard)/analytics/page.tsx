"use client";
import { useGetDashboardQuery } from "@/redux/api/dashboardApi";
import { InsightsHeader } from "./_components/InsightsHeader";
import { InsightsStatsRow } from "./_components/InsightsStatsRow";
import { OfferConversionCard } from "./_components/OfferConversionCard";
import Analytics from "./_components/analytics";
import Loading from "@/components/shared/Loading";

export default function AnalyticsPage() {
  const { data, isLoading } = useGetDashboardQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="space-y-6 p-6">
      <InsightsHeader />
      <InsightsStatsRow analytics={data?.data} />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        {/* <UserDistributionCard /> */}
        <Analytics data={data?.data} />
        <OfferConversionCard data={data?.data?.offerConversion} />
      </div>
    </div>
  );
}
