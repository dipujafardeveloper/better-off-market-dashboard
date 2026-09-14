// "use client";
// import { useState } from "react";
// import { cn } from "@/lib/utils";
// import type { Conversation, ChatThread } from "@/types";
// import ChatHeader from "./ChatHeader";
// import ChatMessages from "./ChatMessages";
// import { useParams } from "next/navigation";
// import { useGetSingleChatQuery } from "@/redux/api/chatApi";

// type Props = {
//   conversations: Conversation[];
//   threads: Record<string, ChatThread>; // keyed by conversation id
// };

// export default function MessagesContainer({ conversations, threads }: Props) {
//   const id = useParams()?.["id"];

//   const { data } = useGetSingleChatQuery(id);

//   console.log("====", data?.data?.messages);

//   return (
//     <div className="flex h-[calc(100vh-8rem)] bg-white rounded-xl overflow-hidden ">
//       <div className={cn("flex-1 min-w-0 flex-col flex")}>
//         {
//           <>
//             <ChatHeader contact={data?.data?.contact} />
//             <ChatMessages
//               dateLabel={activeThread.dateLabel}
//               messages={data?.data?.messages}
//               contact={data?.data?.contact}
//             />
//           </>
//         }
//       </div>
//     </div>
//   );
// }
