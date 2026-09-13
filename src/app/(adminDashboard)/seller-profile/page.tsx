import { SellerProfileCard } from "./_components/SellerProfileCard";
import SellerListingAndReviewsContainer from "./_components/SellerListingAndReviewsContainer";

export const metadata = {
  title: "Seller Profile",
  description: "This the official website of Better Off Market",
};

export default function SellerProfile() {
  return (
    <div className="space-y-8">
      <SellerProfileCard />
      <SellerListingAndReviewsContainer />
    </div>
  );
}
