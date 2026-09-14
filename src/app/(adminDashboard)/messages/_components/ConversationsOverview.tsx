"use client";
import Link from "next/link";
import ConversationListSkeleton from "./ConversationListSkeleton";
import moment from "moment";

interface Conversation {
  id: string;
  partyA: {
    id: string;
    name: string;
    profile?: string;
  };
  partyB: {
    id: string;
    name: string;
    profile?: string;
  };
  messageCount: number;
  lastActivity: string;
}

interface ConversationsOverviewProps {
  title?: string;
  conversations?: Conversation[];
  loading?: boolean;
}

export function ConversationsOverview({
  title = "Conversations overview",
  conversations,
  loading,
}: ConversationsOverviewProps) {
  return (
    <div className="w-full bg-[#F2F4F6] rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-primary-black mb-4">
        {title}
      </h2>

      {loading ? (
        <ConversationListSkeleton count={8} />
      ) : (
        <div className="space-y-3">
          {conversations?.map((conversation) => (
            <div
              key={conversation?.id}
              className="flex items-center justify-between rounded-xl bg-white border border-[#E2E8F0] px-6 py-4"
            >
              <div>
                <p className="text-base font-medium text-primary-black space-x-2">
                  <Link
                    href={`/seller-profile?seller=${conversation?.partyA?.id}`}
                    className="hover:scale-105 hover:underline duration-300"
                  >
                    {" "}
                    {conversation?.partyA?.name}
                  </Link>
                  <span className="text-[#9CA3AF]">&harr;</span>{" "}
                  <Link
                    href={`/seller-profile?seller=${conversation?.partyB?.id}`}
                    className="hover:scale-105 hover:underline duration-300"
                  >
                    {conversation?.partyB?.name}
                  </Link>
                </p>
                <p className="text-sm text-[#9CA3AF] mt-0.5">
                  {conversation.messageCount} messages &middot; Last:{" "}
                  {moment(conversation.lastActivity).format("ll")}
                </p>
              </div>

              <Link href={`/messages/${conversation?.id}`}>
                <button
                  type="button"
                  className="shrink-0 rounded-lg bg-[#0F2A4D] hover:bg-[#0F2A4D]/90 text-white text-sm font-semibold px-5 py-2 transition-colors"
                >
                  Review
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
