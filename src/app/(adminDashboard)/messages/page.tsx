"use client";

import { useRouter } from "next/navigation";
import { ConversationsOverview } from "./_components/ConversationsOverview";

const conversations = [
  {
    id: "conv_1",
    partyA: "James B.",
    partyB: "James R.",
    subject: "Memphis house",
    messageCount: 4,
    lastActivity: "Jun 14",
  },
  {
    id: "conv_2",
    partyA: "Sarah K.",
    partyB: "Mike T.",
    subject: "Austin duplex",
    messageCount: 12,
    lastActivity: "Jun 20",
  },
  {
    id: "conv_3",
    partyA: "Priya N.",
    partyB: "David L.",
    subject: "Nashville condo",
    messageCount: 2,
    lastActivity: "Jul 1",
  },
  {
    id: "conv_4",
    partyA: "James B.",
    partyB: "James R.",
    subject: "Memphis house",
    messageCount: 4,
    lastActivity: "Jun 14",
  },
  {
    id: "conv_5",
    partyA: "Sarah K.",
    partyB: "Mike T.",
    subject: "Austin duplex",
    messageCount: 12,
    lastActivity: "Jun 20",
  },
  {
    id: "conv_6",
    partyA: "Priya N.",
    partyB: "David L.",
    subject: "Nashville condo",
    messageCount: 2,
    lastActivity: "Jul 1",
  },
];

export default function AdminConversationsPage() {
  const router = useRouter();

  const handleReview = (id: string) => {
    router.push(`/messages/${id}`);
  };

  return (
    <ConversationsOverview
      conversations={conversations}
      onReview={handleReview}
    />
  );
}
