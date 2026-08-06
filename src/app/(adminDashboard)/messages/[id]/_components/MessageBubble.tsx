import { cn } from "@/lib/utils";
import type { ChatContact, ChatMessage } from "@/types";

export default function MessageBubble({
  message,
  contact,
}: {
  message: ChatMessage;
  contact: ChatContact;
}) {
  const isMe = message.sender === "me";

  return (
    <div className={cn("flex flex-col", isMe ? "items-end" : "items-start")}>
      <span className="text-sm text-black mb-1 px-1 ">{ isMe ? contact.sellerName : contact.buyerName}</span>
      <div
        className={cn(
          "max-w-[85%] sm:max-w-[70%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          isMe
            ? "bg-main-color text-white rounded-br-md"
            : "bg-[#ECEEF0] text-black rounded-bl-md",
        )}
      >
        {message.content}
      </div>
      <span className="text-xs text-[#594139] mt-1 px-1">{message.time}</span>
    </div>
  );
}
