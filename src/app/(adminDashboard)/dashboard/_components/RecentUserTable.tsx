"use client";
import { Avatar, Tag, TableProps } from "antd";
import DataTable from "@/utils/DataTable";
import Link from "next/link";

type TStatus = "Active" | "Blocked";

type TDataType = {
  key?: number;
  name: string;
  email: string;
  avatarUrl?: string;
  role: string;
  location: string;
  joined: string;
  status: TStatus;
};

const data: TDataType[] = [
  {
    key: 1,
    name: "James Butler",
    email: "james@email.com",
    role: "Buyer",
    location: "Hamilton County",
    joined: "Mar 2025",
    status: "Active",
  },
  {
    key: 2,
    name: "James R.",
    email: "james@propmail.com",
    avatarUrl: "/user_image.png",
    role: "Seller",
    location: "Hamilton County",
    joined: "Jan 2024",
    status: "Active",
  },
  {
    key: 3,
    name: "Sarah K.",
    email: "sarah@email.com",
    role: "Seller (Pending)",
    location: "Warren County",
    joined: "Jun 14, 2026",
    status: "Blocked",
  },
  {
    key: 4,
    name: "Mike T.",
    email: "mike@email.com",
    role: "Seller (Pending)",
    location: "Butler County",
    joined: "Jun 13, 2026",
    status: "Active",
  },
  {
    key: 5,
    name: "Sarah K.",
    email: "sarah@email.com",
    role: "Seller (Pending)",
    location: "Warren County",
    joined: "Jun 14, 2026",
    status: "Blocked",
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const avatarColors = ["#DCE6FF", "#FFE1D6"];

const handleView = (record: TDataType) => {
  console.log("view", record);
};

const handleBlock = (record: TDataType) => {
  console.log("block", record);
};

const handleUnblock = (record: TDataType) => {
  console.log("unblock", record);
};

const RecentUserTable = () => {
  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "User",
      dataIndex: "name",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <Avatar
            src={record.avatarUrl}
            style={{
              backgroundColor: record.avatarUrl
                ? undefined
                : avatarColors[(record.key ?? 0) % avatarColors.length],
              color: "#1e3a8a",
              fontWeight: 600,
            }}
          >
            {!record.avatarUrl && getInitials(record.name)}
          </Avatar>
          <div>
            <p className="font-semibold text-[#191C1E]">{record.name}</p>
            <p className="text-sm text-[#565E74]">{record.email}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Role & Activity",
      dataIndex: "role",
      render: (text) => <p className="text-[#191C1E]">{text}</p>,
    },
    {
      title: "Location",
      dataIndex: "location",
      render: (text) => <p className="text-gray-500">{text}</p>,
    },
    {
      title: "Joined",
      dataIndex: "joined",
      render: (text) => <p className="text-gray-500">{text}</p>,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: TStatus) => (
        <Tag
          className="!rounded-full !border-0 !px-3 !py-1 !text-xs !font-medium"
          style={
            status === "Active"
              ? { background: "#DCFCE7", color: "#16A34A" }
              : { background: "#FEE2E2", color: "#DC2626" }
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <div className="flex items-center gap-3 text-sm font-semibold">
          <button
            onClick={() => handleView(record)}
            className={
              "text-[#1674A3] hover:scale-105 transition-transform duration-300"
            }
          >
            View
          </button>
          {record.status === "Active" && (
            <button
              onClick={() => handleBlock(record)}
              className="text-red-600 hover:scale-105 transition-transform duration-300"
            >
              Block
            </button>
          )}
          {record.status === "Blocked" && (
            <button
              onClick={() => handleUnblock(record)}
              className="text-green-600 hover:scale-105 transition-transform duration-300"
            >
              Unblock
            </button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="bg-section-bg rounded-3xl">
      <div className="flex items-center justify-between px-2 pt-2 mb-2">
        <h2 className="text-lg font-bold text-[#191C1B]">Recent users</h2>
        <Link href="/users">
          <button className="text-xs font-semibold tracking-wide text-[#0F5238]">
            VIEW ALL
          </button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} pageSize={10} />
    </div>
  );
};

export default RecentUserTable;
