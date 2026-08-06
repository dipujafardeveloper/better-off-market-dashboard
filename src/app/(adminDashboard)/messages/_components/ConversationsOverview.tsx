"use client";

interface Conversation {
  id: string;
  partyA: string;
  partyB: string;
  subject: string;
  messageCount: number;
  lastActivity: string;
}

interface ConversationsOverviewProps {
  title?: string;
  conversations?: Conversation[];
  onReview?: (id: string) => void;
}

const DEFAULT_CONVERSATIONS: Conversation[] = Array.from(
  { length: 8 },
  (_, i) => ({
    id: `${i + 1}`,
    partyA: "James B.",
    partyB: "James R.",
    subject: "Memphis house",
    messageCount: 4,
    lastActivity: "Jun 14",
  })
);

export function ConversationsOverview({
  title = "Conversations overview",
  conversations = DEFAULT_CONVERSATIONS,
  onReview,
}: ConversationsOverviewProps) {
  return (
    <div className="w-full bg-[#F2F4F6] rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-primary-black mb-4">
        {title}
      </h2>

      <div className="space-y-3">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className="flex items-center justify-between rounded-xl bg-white border border-[#E2E8F0] px-6 py-4"
          >
            <div>
              <p className="text-base font-medium text-primary-black">
                {conversation.partyA}{" "}
                <span className="text-[#9CA3AF]">&harr;</span>{" "}
                {conversation.partyB} &mdash; {conversation.subject}
              </p>
              <p className="text-sm text-[#9CA3AF] mt-0.5">
                {conversation.messageCount} messages &middot; Last:{" "}
                {conversation.lastActivity}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onReview?.(conversation.id)}
              className="shrink-0 rounded-lg bg-[#0F2A4D] hover:bg-[#0F2A4D]/90 text-white text-sm font-semibold px-5 py-2 transition-colors"
            >
              Review
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}