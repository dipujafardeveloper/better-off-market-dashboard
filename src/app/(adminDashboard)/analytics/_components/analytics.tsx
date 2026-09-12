"use client";
import { Empty } from "antd";
import Link from "next/link";
import { useState } from "react";

type TProps = {
  data?: any;
};

type ActiveTab = "views" | "saves";

export default function Analytics({ data }: TProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("views");

  const entries =
    activeTab === "views"
      ? (data?.topViewedProperties ?? [])
      : (data?.topSavedProperties ?? []);
  const maxCount =
    activeTab === "views" ? data?.maxViewsCount || 1 : data?.maxSavesCount || 1;

  return (
    <div className="bg-white shadow-[0_10px_30px_0_rgba(15,23,42,0.05)] p-6">
      {/* Header with tabs and year selector */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("views")}
            className={`px-6 py-1 rounded-full font-medium transition-colors cursor-pointer ${
              activeTab === "views"
                ? "bg-[#001a4d] text-white"
                : "bg-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Views
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("saves")}
            className={`px-6 py-1 rounded-full font-medium transition-colors cursor-pointer ${
              activeTab === "saves"
                ? "bg-[#001a4d] text-white"
                : "bg-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Saves
          </button>
        </div>
      </div>

      {/* Properties list */}
      {entries.length === 0 ? (
        <Empty />
      ) : (
        <div className="space-y-6">
          <h5>Top 5 {activeTab} Properties</h5>
          {entries?.map((entry : any) => (
            <div key={entry.propertyId}>
              <div className="flex items-center justify-between mb-2">
                <Link
                  href={`/listings/${entry.propertyId}`}
                  className="text-sm font-semibold text-primary-black hover:underline"
                >
                  {entry.label}
                </Link>
                <span className="text-sm font-medium text-primary-gray">
                  {entry.count} {activeTab}
                </span>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-[#1F4E8B] h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${(entry.count / maxCount) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
