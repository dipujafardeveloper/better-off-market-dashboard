// data/mock-messages.ts
import type { Conversation, ChatThread } from "@/types";

export const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "James R.",
    initials: "JR",
    lastMessage: "Thanks for the update!",
    timestamp: "2h ago",
    online: true,
  },
{
    id: "2",
    name: "Sarah K.",
    initials: "SK",
    lastMessage: "Counter-offer received",
    timestamp: "1d ago",
  },
  {
    id: "3",
    name: "Mike T.",
    initials: "MT",
    lastMessage: "Congrats on the sale!",
    timestamp: "3d ago",
  },
];

