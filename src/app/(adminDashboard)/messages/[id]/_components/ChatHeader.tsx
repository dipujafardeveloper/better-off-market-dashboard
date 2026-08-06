"use client";

import { ChevronLeft, Map, MapPin, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ChatContact } from "@/types";
import Link from "next/link";

type Props = {
  contact: ChatContact;
  onBack?: () => void; // shown only on mobile
};

export default function ChatHeader({ contact, onBack }: Props) {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5 border-b border-primary-border-color">
      <div className="flex items-center gap-3 min-w-0">
        {onBack && (
          <button
            onClick={onBack}
            className="md:hidden -ml-1 size-8 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 shrink-0"
            aria-label="Back to messages"
          >
            <ChevronLeft className="size-5" />
          </button>
        )}
        <div className="min-w-0">
          <p className="font-medium truncate">
            {contact.buyerName} ↔ {contact.sellerName}. — {contact.city}, {contact.county}
          </p>
        </div>
      </div>

      {/* <Link href={`/seller-profile`}>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full text-primary-black gap-1.5 shrink-0 border border-primary-border-color cursor-pointer"
        >
          <UserCircle2 className="size-4" />
          <span className="hidden sm:inline">View Profile</span>
        </Button>
      </Link> */}
    </div>
  );
}
