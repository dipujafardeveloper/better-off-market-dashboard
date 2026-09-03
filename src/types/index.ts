
export interface Conversation {
  id: string;
  name: string;
  initials: string;
  lastMessage: string;
  timestamp: string;
  unread?: boolean;
  online?: boolean;
}

export interface ChatContact {
  id: string;
  buyerName: string;
  sellerName: string;
  initials: string;
  avatarColor: string;
  propertyType: string;
  city: string;
  county: string;
}

export interface ChatMessage {
  id: string;
  sender: "me" | "them";
  content: string;
  time: string; 
}

export interface ChatThread {
  contact: ChatContact;
  dateLabel: string; // e.g. "JUNE 14, 2024"
  messages: ChatMessage[];
}


export type TStatus = "active" | "blocked";
export interface IUser {
  _id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  location?: string;
  company?: string;
  bio?: string;
  status: TStatus;
  profile: string;
  createdAt: string;

}