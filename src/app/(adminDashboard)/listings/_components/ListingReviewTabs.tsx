// components/listings/ListingReviewTabs.tsx
"use client";
import { useState } from "react";
import { Tabs } from "antd";
import { ListingQueue, type ListingItem } from "./ListingQueue";
import { useGetPropertiesQuery } from "@/redux/api/propertiesApi";
import PaginationSection from "@/components/shared/PaginationSection";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { useSearchParams } from "next/navigation";

interface TabConfig {
  key: string;
  navLabel: string;
  count?: number;
  title: string;
  badgeText?: string;
  badgeColorClass?: string;
  listings: ListingItem[];
}

const handleReview = (l: ListingItem) => console.log("review", l);
const handleApprove = (l: ListingItem) => console.log("approve", l);
const handleReject = (l: ListingItem) => console.log("reject", l);

const reviewAction: ListingAction = {
  label: "Review",
  variant: "neutral",
  link: "/listings/1",
  onClick: handleReview,
};
const approveAction: ListingAction = {
  label: "Approve",
  variant: "primary",
  onClick: handleApprove,
};
const rejectAction: ListingAction = {
  label: "Reject",
  variant: "danger-outline",
  onClick: handleReject,
};

type ListingAction = ListingItem["actions"][number];

const tabs = ["Pending", "Active", "Rejected", "Sold", "Under Contract"];
export function ListingReviewTabs() {
  const updateParams = useUpdateSearchParams();
  const [activeKey, setActiveKey] = useState("Pending");
  const page = useSearchParams().get("page") || "1";
  const limit = useSearchParams().get("limit") || "10";

  const queries: Record<string, string | number> = {};

  queries["status"] = activeKey;
  queries["page"] = page;
  queries["limit"] = limit;

  const { data } = useGetPropertiesQuery(queries);

  const metaData = data?.meta ?? {};
  const properties = data?.data?.properties ?? [];

  console.log(properties);

  const handleOnChange = (key: string) => {
    updateParams({ page: "1" });
    setActiveKey(key);
  };

  return (
    <div className="rounded-3xl bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:p-6">
      <Tabs
        activeKey={activeKey}
        onChange={handleOnChange}
        items={tabs?.map((tab) => ({
          key: tab,
          label: (
            <span className="text-sm font-medium">
              {tab}({data?.data?.statusCounts[tab] || 0})
            </span>
          ),
        }))}
        className="[&_.ant-tabs-nav]:!mb-6 [&_.ant-tabs-tab]:px-1 [&_.ant-tabs-tab-active_.ant-tabs-tab-btn]:!text-primary-blue [&_.ant-tabs-ink-bar]:!bg-primary-blue"
      />

      {/* Same container, just different data/title per tab */}
      <ListingQueue
        status={activeKey}
        badgeText={"badgeText"}
        badgeColorClass={"activeTab.badgeColorClass"}
        listings={properties}
      />

      <PaginationSection
        total={metaData?.total ?? 0}
        current={Number(page)}
        pageSize={Number(limit)}
      />
    </div>
  );
}
