import { RiDashboardHorizontalFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import {
  Briefcase,
  ChartColumn,
  Clock,
  ContactRound,
  ListChecks,
  ListPlus,
  Logs,
  Mail,
  Scale,
  Users,
  Wallet,
} from "lucide-react";

export const navLinks = [
  {
    key: "dashboard",
    icon: <RiDashboardHorizontalFill size={18} />,
    label: <Link href={"/dashboard"}>Dashboard</Link>,
  },
  {
    key: "users",
    icon: <Users size={18} />,
    label: <Link href={"/users"}>Users</Link>,
  },
  {
    key: "listings",
    icon: <ListChecks size={18} />,
    label: <Link href={"/listings"}>Listings</Link>,
  },
  {
    key: "orders",
    icon: <Logs size={18} />,
    label: <Link href={"/orders"}>Orders</Link>,
  },
  {
    key: "messages",
    icon: <Mail size={18} />,
    label: <Link href={"/messages"}>Messages</Link>,
  },
  {
    key: "analytics",
    icon: <ChartColumn size={18} />,
    label: <Link href={"/analytics"}>Analytics</Link>,
  },
  {
    key: "content",
    icon: <ListPlus size={18} />,
    label: <Link href={"/content"}>Content</Link>,
  },
  {
    key: "settings",
    icon: <IoSettingsOutline size={18} />,
    label: <Link href={"/settings"}>Settings</Link>,
  },
  // {
  //   key: "logout",
  //   icon: <RiLogoutCircleLine size={18} />,
  //   label: <Link href={"/login"}>Logout</Link>,
  // },
];
