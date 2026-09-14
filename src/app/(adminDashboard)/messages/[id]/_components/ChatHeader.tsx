// ChatHeader.tsx
import type { ChatContact } from "@/types";
import ImageWithFallback from "@/components/shared/image/ImageWithFallback";
import Link from "next/link";

export default function ChatHeader({ contact }: { contact: ChatContact }) {
  return (
    <div className="flex items-center gap-3 border-b border-gray-100 p-4">
      <div className="flex items-center -space-x-2">
        <Avatar name={contact.partyA.name} profile={contact.partyA.profile} />
        <Avatar name={contact.partyB.name} profile={contact.partyB.profile} />
      </div>
      <div>
        <p className="font-semibold text-primary-black space-x-2">
          <Link
            href={`/seller-profile?seller=${contact?.partyA?.id}`}
            className="hover:scale-105 hover:underline duration-300"
          >
            {contact.partyA.name}
          </Link>
          <span className="text-gray-400">↔</span>
          <Link
            href={`/seller-profile?seller=${contact?.partyB?.id}`}
            className="hover:scale-105 hover:underline duration-300"
          >
            {contact.partyB.name}
          </Link>
        </p>
      </div>
    </div>
  );
}

function Avatar({ name, profile }: { name: string; profile: string | null }) {
  if (profile) {
    return (
      <ImageWithFallback
        src={profile}
        alt={name}
        width={36}
        height={36}
        className="h-9 w-9 rounded-full border-2 border-white object-cover"
      />
    );
  }
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-xs font-semibold text-gray-600">
      {name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()}
    </div>
  );
}
