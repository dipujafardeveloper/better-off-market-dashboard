// components/listings/ListingReviewTabs.tsx
"use client";
import { useState } from "react";
import { Tabs } from "antd";
import { ListingQueue } from "./ListingQueue";
import { useGetPropertiesQuery } from "@/redux/api/propertiesApi";
import PaginationSection from "@/components/shared/PaginationSection";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { useSearchParams } from "next/navigation";
import { mapPropertyToListingItem } from "./mapPropertyToListingItem";

const tabs = ["Pending", "Active", "Rejected", "Sold", "Under Contract"];

export function ListingReviewTabs() {
  const updateParams = useUpdateSearchParams();
  const [activeKey, setActiveKey] = useState("Pending");
  const page = useSearchParams().get("page") || "1";
  const limit = useSearchParams().get("limit") || "10";

  const { data, isLoading } = useGetPropertiesQuery({
    status: activeKey,
    page,
    limit,
  });

  const metaData = data?.meta;
  const rawProperties = data?.data?.properties ?? [];
  const listings = rawProperties.map(mapPropertyToListingItem);

  const handleOnChange = (key: string) => {
    updateParams({ page: "1" });
    setActiveKey(key);
  };

  return (
    <div className="rounded-3xl bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:p-6">
      <Tabs
        activeKey={activeKey}
        onChange={handleOnChange}
        items={tabs.map((tab) => ({
          key: tab,
          label: (
            <span className="text-sm font-medium">
              {tab} ({data?.data?.statusCounts?.[tab as keyof typeof data.data.statusCounts] || 0})
            </span>
          ),
        }))}
        className="[&_.ant-tabs-nav]:!mb-6 [&_.ant-tabs-tab]:px-1 [&_.ant-tabs-tab-active_.ant-tabs-tab-btn]:!text-primary-blue [&_.ant-tabs-ink-bar]:!bg-primary-blue"
      />

      {isLoading ? (
        <p className="py-16 text-center text-sm text-gray-400">Loading...</p>
      ) : (
        <ListingQueue
          status={activeKey}
          listings={listings}
          totalProperties={metaData?.total ?? 0}
        />
      )}

      <PaginationSection
        total={metaData?.total ?? 0}
        current={Number(page)}
        pageSize={Number(limit)}
      />
    </div>
  );
}