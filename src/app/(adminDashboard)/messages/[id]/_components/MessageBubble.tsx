import { cn } from "@/lib/utils";
import type { ChatContact, ChatMessage } from "@/types";
import AttachmentGrid from "./AttachmentGrid";

function formatTime(dateString: string) {
  return new Date(dateString).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function MessageBubble({
  message,
  contact,
}: {
  message: ChatMessage;
  contact: ChatContact;
}) {
  // Admin view: no "me" — partyA always renders on the left, partyB
  // always on the right, so the conversation reads consistently
  // regardless of who sent which message.
  const isPartyB = message.sender === contact.partyB.id;
  const senderName = isPartyB ? contact.partyB.name : contact.partyA.name;

  const hasImages = message.images && message.images.length > 0;
  const hasText = message.text && message.text.trim().length > 0;

  return (
    <div className={cn("flex flex-col", isPartyB ? "items-end" : "items-start")}>
      <span className="text-sm text-black mb-1 px-1">{senderName}</span>

      {hasImages && (
        <AttachmentGrid urls={message.images} align={isPartyB ? "end" : "start"} />
      )}

      {hasText && (
        <div
          className={cn(
            "max-w-[85%] sm:max-w-[70%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
            isPartyB
              ? "bg-main-color text-white rounded-br-md"
              : "bg-[#ECEEF0] text-black rounded-bl-md",
          )}
        >
          {message.text}
        </div>
      )}

      <span className="text-xs text-[#594139] mt-1 px-1">
        {formatTime(message.createdAt)}
      </span>
    </div>
  );
}