import React from "react";
import { ListingReviewTabs } from "./_components/ListingReviewTabs";

export default function ListingPage() {
  return (
    <>
      <h5 className="lg:text-3xl md:text-2xl text-xl font-semibold text-[#191C1E]">Listing Management</h5>
      <ListingReviewTabs />
    </>
  );
}
