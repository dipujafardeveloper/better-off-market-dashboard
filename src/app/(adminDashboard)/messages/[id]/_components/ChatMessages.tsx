import MessageBubble from "./MessageBubble";
import type { ChatContact, ChatMessage } from "@/types";

type Props = {
  messageGroups: { dateLabel: string; messages: ChatMessage[] }[];
  contact: ChatContact;
};

export default function ChatMessages({ messageGroups, contact }: Props) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-8">
      {messageGroups.map((group) => (
        <div key={group.dateLabel} className="mb-6">
          <div className="flex justify-center mb-6">
            <span className="text-xs font-medium text-[#594139] bg-[#ECEEF0] rounded-full px-3 py-1">
              {group.dateLabel}
            </span>
          </div>

          <div className="flex flex-col gap-5">
            {group.messages.map((m) => (
              <MessageBubble key={m.id} message={m} contact={contact} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}