"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ConversationsOverview } from "./_components/ConversationsOverview";
import { useGetChatsQuery } from "@/redux/api/chatApi";
import PaginationSection from "@/components/shared/PaginationSection";
import ConversationListSkeleton from "./_components/ConversationListSkeleton";

const conversations = [
  {
    id: "conv_1",
    partyA: "James B.",
    partyB: "James R.",
    messageCount: 4,
    lastActivity: "Jun 14",
  },
  {
    id: "conv_2",
    partyA: "Sarah K.",
    partyB: "Mike T.",
    messageCount: 12,
    lastActivity: "Jun 20",
  },
  {
    id: "conv_3",
    partyA: "Priya N.",
    partyB: "David L.",
    messageCount: 2,
    lastActivity: "Jul 1",
  },
  {
    id: "conv_4",
    partyA: "James B.",
    partyB: "James R.",
    messageCount: 4,
    lastActivity: "Jun 14",
  },
  {
    id: "conv_5",
    partyA: "Sarah K.",
    partyB: "Mike T.",
    messageCount: 12,
    lastActivity: "Jun 20",
  },
  {
    id: "conv_6",
    partyA: "Priya N.",
    partyB: "David L.",
    messageCount: 2,
    lastActivity: "Jul 1",
  },
];

export default function AdminConversationsPage() {
  const router = useRouter();
  const page = useSearchParams().get("page") || "1";
  const limit = useSearchParams().get("limit") || "8";

  const queries: Record<string, string | number> = { page, limit };
  const { data, isLoading } = useGetChatsQuery(queries);

  console.log(data?.data);

  const meta = data?.meta;

  return (
    <>
      <ConversationsOverview
        conversations={data?.data}
        loading={isLoading}
      />

      <PaginationSection
        total={meta?.total}
        current={Number(page)}
        pageSize={Number(limit)}
      />
    </>
  );
}
