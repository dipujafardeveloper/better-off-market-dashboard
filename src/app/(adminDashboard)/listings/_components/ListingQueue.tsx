import { Image } from "antd";
import {
  AlertCircleIcon,
  CalendarIcon,
  DockIcon,
  ImageIcon,
} from "lucide-react";
import Link from "next/link";

export type ActionVariant =
  | "neutral"
  | "primary"
  | "danger-outline"
  | "success-outline";

export interface ListingAction {
  label: string;
  variant: ActionVariant;
  link?: string;
  onClick?: (listing: ListingItem) => void;
}

export interface ListingItem {
  id: string | number;
  title: string;
  agentName: string;
  county: string;
  submittedDate: string;
  photoCount: number;
  documentCount: number;
  price: number;
  imageUrl: string;
  actions: ListingAction[];
}

interface ListingQueueProps {
  title: string;
  badgeText?: string;
  badgeColorClass?: string; // e.g. "bg-orange-100 text-orange-600"
  listings: ListingItem[];
  emptyLabel?: string;
}

const formatPrice = (value: number) => `$${value.toLocaleString("en-US")}`;

const ACTION_STYLES: Record<ActionVariant, string> = {
  neutral: "bg-gray-200 text-primary-black hover:bg-gray-300",
  primary: "bg-[#00214C] text-white hover:opacity-90",
  "danger-outline": "border border-red-500 text-red-500 hover:bg-red-50",
  "success-outline": "border border-green-500 text-green-600 hover:bg-green-50",
};

export function ListingQueue({
  title,
  badgeText,
  badgeColorClass = "bg-[#FFDBD0] text-[#832600]",
  listings,
  emptyLabel = "No listings here yet",
}: ListingQueueProps) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-primary-black">{title}</h2>
        {badgeText && (
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColorClass}`}
          >
            {badgeText}
          </span>
        )}
      </div>

      {listings.length === 0 ? (
        <p className="py-16 text-center text-sm text-gray-400">{emptyLabel}</p>
      ) : (
        <div className="space-y-4">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}
    </div>
  );
}

function ListingCard({ listing }: { listing: ListingItem }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-gray-50 p-4 sm:flex-row sm:items-center">
      <Image
        src={listing.imageUrl}
        alt={listing.title}
        width={148}
        height={110}
        className="w-full shrink-0 rounded-lg object-cover"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-primary-black">{listing.title}</h3>
        <p className="mt-0.5 text-sm text-[#565E74]">
          {listing.agentName} · {listing.county}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#505F76]">
          <span className="flex items-center gap-1">
            <CalendarIcon className="size-3.5" />
            Submitted {listing.submittedDate}
          </span>
          <span className="flex items-center gap-1">
            <ImageIcon className="size-3.5" />
            {listing.photoCount} photos
          </span>
          {listing.documentCount > 0 ? (
            <span className="flex items-center gap-1">
              <DockIcon className="size-3.5" />
              {listing.documentCount} document
              {listing.documentCount > 1 ? "s" : ""}
            </span>
          ) : (
            <span className="flex items-center gap-1 text-red-500">
              <AlertCircleIcon className="size-3.5" />0 documents
            </span>
          )}
        </div>

        {listing.actions.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {listing.actions.map((action) =>
              action.link ? (
                <Link
                  key={action.label}
                  href={action.link}
                  className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${ACTION_STYLES[action.variant]}`}
                >
                  {action.label}
                </Link>
              ) : (
                <button
                  key={action.label}
                  onClick={() => action.onClick?.(listing)}
                  className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${ACTION_STYLES[action.variant]}`}
                >
                  {action.label}
                </button>
              ),
            )}
          </div>
        )}
      </div>

      <div className="shrink-0 text-right">
        <span className="text-xl font-bold text-[#00214C]">
          {formatPrice(listing.price)}
        </span>
      </div>
    </div>
  );
}
