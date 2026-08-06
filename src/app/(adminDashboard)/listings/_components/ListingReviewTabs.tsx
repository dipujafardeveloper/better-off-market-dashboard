// components/listings/ListingReviewTabs.tsx
"use client";
import { useState } from "react";
import { Tabs } from "antd";
import { ListingQueue, type ListingItem } from "./ListingQueue";

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
const handleEdit = (l: ListingItem) => console.log("edit", l);
const handleUnpublish = (l: ListingItem) => console.log("unpublish", l);
const handleResubmit = (l: ListingItem) => console.log("resubmit", l);

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

const TAB_CONFIG: TabConfig[] = [
  {
    key: "pending",
    navLabel: "Pending approval",
    count: 5,
    title: "Pending Approval Queue",
    badgeText: "5 ITEMS AWAITING",
    badgeColorClass: "bg-[#FFDBD0] text-[#832600]",
    listings: [
      {
        id: 1,
        title: "Condo — Phoenix, AZ",
        agentName: "James R.",
        county: "Warren County",
        submittedDate: "Jun 14, 2026",
        photoCount: 2,
        documentCount: 1,
        price: 175000,
        imageUrl: "/property_image.png",
        actions: [reviewAction, approveAction, rejectAction],
      },
      {
        id: 2,
        title: "Condo — Phoenix, AZ",
        agentName: "James R.",
        county: "Warren County",
        submittedDate: "Jun 14, 2026",
        photoCount: 2,
        documentCount: 0,
        price: 175000,
        imageUrl: "/property_image.png",
        actions: [reviewAction, rejectAction], // no Approve — missing documents
      },
      {
        id: 3,
        title: "Loft — Chicago, IL",
        agentName: "Sarah L.",
        county: "Cook County",
        submittedDate: "Jun 14, 2026",
        photoCount: 2,
        documentCount: 1,
        price: 410000,
        imageUrl: "/property_image.png",
        actions: [reviewAction, approveAction, rejectAction],
      },
      {
        id: 4,
        title: "Loft — Chicago, IL",
        agentName: "Sarah L.",
        county: "Cook County",
        submittedDate: "Jun 14, 2026",
        photoCount: 2,
        documentCount: 1,
        price: 410000,
        imageUrl: "/property_image.png",
        actions: [reviewAction, approveAction, rejectAction],
      },
    ],
  },
  {
    key: "active",
    navLabel: "All active",
    count: 535,
    title: "Active Listings",
    // badgeText: "535 LIVE",
    badgeColorClass: "bg-green-100 text-green-600",
    listings: [],
  },
  {
    key: "featured",
    navLabel: "Featured",
    title: "Featured Listings",
    listings: [],
  },
  {
    key: "rejected",
    navLabel: "Rejected",
    title: "Rejected Listings",
    // badgeText: "1 REJECTED",
    badgeColorClass: "bg-red-100 text-red-600",
    listings: [],
  },
  { key: "sold", navLabel: "Sold", title: "Sold Listings", listings: [] },
];

export function ListingReviewTabs() {
  const [activeKey, setActiveKey] = useState(TAB_CONFIG[0].key);
  const activeTab =
    TAB_CONFIG.find((tab) => tab.key === activeKey) ?? TAB_CONFIG[0];

  return (
    <div className="rounded-3xl bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:p-6">
      <Tabs
        activeKey={activeKey}
        onChange={setActiveKey}
        items={TAB_CONFIG.map((tab) => ({
          key: tab.key,
          label: (
            <span className="text-sm font-medium">
              {tab.navLabel}
              {typeof tab.count === "number" && ` (${tab.count})`}
            </span>
          ),
        }))}
        className="[&_.ant-tabs-nav]:!mb-6 [&_.ant-tabs-tab]:px-1 [&_.ant-tabs-tab-active_.ant-tabs-tab-btn]:!text-primary-blue [&_.ant-tabs-ink-bar]:!bg-primary-blue"
      />

      {/* Same container, just different data/title per tab */}
      <ListingQueue
        title={activeTab.title}
        badgeText={activeTab.badgeText}
        badgeColorClass={activeTab.badgeColorClass}
        listings={activeTab.listings}
      />
    </div>
  );
}
