import { OfferDetailsView } from "./OfferDetailsView";


const sharedData = {
  offerAmount: 48500,
  earnestMoney: 1500,
  financingType: "Cash",
  closingCosts: "Buyer does NOT request seller contribution",
  personalProperty: {
    included: ["Refrigerator", "Washer/Dryer"],
    itemsToRemove: "Trash in backyard to be cleared by seller prior to closing.",
  },
  inspection: { required: true, days: 7 },
  appraisal: { required: true, days: 7 },
  closingTerms: {
    titleCompany: "Title First Co.",
    closingDate: "July 30, 2026",
    possession: "At closing",
  },
  documents: [{ name: "Proof_of_Funds.pdf", url: "/files/proof-of-funds.pdf" }],
  notes:
    "Dear Seller, we love the character of this home and are excited to potentially make it our next investment project. We have the funds ready and are looking for a smooth, fast closing process. Thank you for your consideration!",
};

export function BuyerOfferDetails() {
  return <OfferDetailsView viewerRole="buyer" data={sharedData} />;
}

export function SellerOfferDetails() {
  return <OfferDetailsView viewerRole="seller" data={sharedData} />;
}
