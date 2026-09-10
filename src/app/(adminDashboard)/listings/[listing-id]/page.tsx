"use client";
import React from "react";
import PropertyContainer from "./_components/PropertyContainer";
import { useParams } from "next/navigation";
import { useGetSinglePropertyQuery } from "@/redux/api/propertiesApi";
import PropertiesSkeletonDetails from "./_components/PropertiesSkeletonDetails";

export default function ListingDetailsPage() {
  const { "listing-id": propertyId } = useParams();
  const { data, isLoading } = useGetSinglePropertyQuery(propertyId);


  if (isLoading) return <PropertiesSkeletonDetails />;
  return (
    <>
      <PropertyContainer property={data?.data} />
    </>
  );
}
