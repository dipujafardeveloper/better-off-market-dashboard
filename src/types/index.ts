export type TSection =
  | "Dashboard"
  | "Riders"
  | "Drivers"
  | "Ride Management"
  | "Earning"
  | "Fare management"
  | "Voucher"
  | "Promo code"
  | "Notification Management"
  | "Help & Support";

export type TActivityLog = {
  id: number;
  action: string;
  description: string;
  dateTime: string;
};

export type TAdminStaff = {
  key: number;
  name: string;
  phone: string;
  email: string;
  role: string;
  joinDate: string;
  avatar?: string;
  sections: TSection[];
  activityLog: TActivityLog[];
};

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
