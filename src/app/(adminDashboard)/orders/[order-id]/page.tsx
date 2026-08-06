import React from "react";
import { PropertyHeaderCard } from "./_components/PropertyHeaderCard";
import {
  BuyerOfferDetails,
  SellerOfferDetails,
} from "./_components/OderDetailsContainer";

export default function OrderPage() {
  return (
    <div>
      <PropertyHeaderCard
        imageUrl="/property_image.png"
        title="Modern Nashville Duplex"
        location="East Nashville, TN 37206"
        status="pending"
      />
      <BuyerOfferDetails />
      <SellerOfferDetails />
    </div>
  );
}
