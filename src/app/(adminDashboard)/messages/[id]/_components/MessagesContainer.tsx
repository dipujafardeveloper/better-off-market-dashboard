"use client";
import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/types";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import { useParams } from "next/navigation";
import { useGetSingleChatQuery } from "@/redux/api/chatApi";

function groupMessagesByDate(messages: ChatMessage[]) {
  const groups: { dateLabel: string; messages: ChatMessage[] }[] = [];

  messages.forEach((message) => {
    const messageDate = new Date(message.createdAt);
    const label = formatDateLabel(messageDate);

    const lastGroup = groups[groups.length - 1];
    if (lastGroup && lastGroup.dateLabel === label) {
      lastGroup.messages.push(message);
    } else {
      groups.push({ dateLabel: label, messages: [message] });
    }
  });

  return groups;
}

function formatDateLabel(date: Date) {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  if (isSameDay(date, today)) return "Today";
  if (isSameDay(date, yesterday)) return "Yesterday";

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function MessagesContainer() {
  const id = useParams()?.["id"] as string;

  const { data, isLoading } = useGetSingleChatQuery(id, { skip: !id });

  const contact = data?.data?.contact;
  const messages = data?.data?.messages ?? [];

  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-8rem)] items-center justify-center bg-white rounded-xl">
        <span className="text-sm text-muted-foreground">Loading conversation...</span>
      </div>
    );
  }

  if (!contact) {
    return (
      <div className="flex h-[calc(100vh-8rem)] items-center justify-center bg-white rounded-xl">
        <span className="text-sm text-muted-foreground">Conversation not found</span>
      </div>
    );
  }

  const messageGroups = groupMessagesByDate(messages);

  return (
    <div className="flex h-[calc(100vh-8rem)] bg-white rounded-xl overflow-hidden">
      <div className={cn("flex-1 min-w-0 flex-col flex")}>
        <ChatHeader contact={contact} />
        <ChatMessages messageGroups={messageGroups} contact={contact} />
      </div>
    </div>
  );
}