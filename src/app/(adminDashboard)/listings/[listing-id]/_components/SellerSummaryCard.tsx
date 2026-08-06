interface SellerSummaryCardProps {
  name?: string;
  avatarUrl?: string;
  activeListings?: number;
  rating?: number;
  joinDate?: string;
  onViewProfile?: () => void;
}

export function SellerSummaryCard({
  name = "James R.",
  avatarUrl = "/user_image.png",
  activeListings = 12,
  rating = 98,
  joinDate = "March 2021",
  onViewProfile,
}: SellerSummaryCardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
      {/* Avatar + Name */}
      <div className="mb-5 flex items-center gap-3">
        <img
          src={avatarUrl}
          alt={name}
          className="size-14 rounded-full object-cover"
        />
        <h3 className="text-lg font-bold text-primary-black">{name}</h3>
      </div>

      {/* Stats */}
      <div className="divide-y divide-gray-100">
        <div className="flex items-center justify-between py-3">
          <span className="text-gray-500">Active Listings</span>
          <span className="font-semibold text-primary-black">
            {activeListings}
          </span>
        </div>

        <div className="flex items-center justify-between py-3">
          <span className="text-gray-500">Rating</span>
          <span className="font-semibold text-primary-black">{rating}%</span>
        </div>

        <div className="flex items-center justify-between py-3">
          <span className="text-gray-500">Join Date</span>
          <span className="font-semibold text-primary-black">{joinDate}</span>
        </div>
      </div>

      {/* View Profile */}
      <button
        onClick={onViewProfile}
        className="mt-4 w-full rounded-lg border border-primary-blue py-3 text-sm font-medium text-primary-blue hover:bg-blue-50"
      >
        View seller profile
      </button>
    </div>
  );
}