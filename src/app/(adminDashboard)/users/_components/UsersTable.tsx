"use client";
import { useMemo, useState } from "react";
import { Avatar, Select, Tag, TableProps } from "antd";
import DataTable from "@/utils/DataTable";
import { ChevronDownIcon } from "lucide-react";
import { UserDetailsModal } from "@/components/(adminDashboard)/modals/users/UserDetailsModal";

type TStatus = "Active" | "Blocked";

type TDataType = {
  key?: number;
  name: string;
  email: string;
  avatarUrl?: string;
  location: string;
  joined: string;
  status: TStatus;
};

const data: TDataType[] = [
  {
    key: 1,
    name: "James Butler",
    email: "james@email.com",
    location: "Hamilton County",
    joined: "Mar 2025",
    status: "Active",
  },
  {
    key: 2,
    name: "James R.",
    email: "james@propmail.com",
    avatarUrl: "/user_image.png",
    location: "Hamilton County",
    joined: "Jan 2024",
    status: "Active",
  },
  {
    key: 3,
    name: "James R.",
    email: "james@propmail.com",
    avatarUrl: "/user_image.png",
    location: "Hamilton County",
    joined: "Jan 2024",
    status: "Active",
  },
  {
    key: 4,
    name: "Sarah K.",
    email: "sarah@email.com",
    location: "Warren County",
    joined: "Jun 14, 2026",
    status: "Blocked",
  },
  {
    key: 5,
    name: "Mike T.",
    email: "mike@email.com",
    location: "Butler County",
    joined: "Jun 13, 2026",
    status: "Active",
  },
  {
    key: 6,
    name: "Sarah K.",
    email: "sarah@email.com",
    location: "Warren County",
    joined: "Jun 14, 2026",
    status: "Blocked",
  },
  {
    key: 7,
    name: "Mike T.",
    email: "mike@email.com",
    location: "Butler County",
    joined: "Jun 13, 2026",
    status: "Active",
  },
  {
    key: 8,
    name: "Sarah K.",
    email: "sarah@email.com",
    location: "Warren County",
    joined: "Jun 14, 2026",
    status: "Blocked",
  },
];

const STATUS_FILTER_OPTIONS = [
  { label: "All Status", value: "all" },
  { label: "Active", value: "Active" },
  { label: "Blocked", value: "Blocked" },
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

const UsersTable = () => {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isOpen, setIsOpen] = useState(false);

  const filteredData = useMemo(() => {
    if (statusFilter === "all") return data;
    return data.filter((item) => item.status === statusFilter);
  }, [statusFilter]);

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
      render: (_, record) => {
        return (
          <div className="flex items-center gap-3 text-sm font-semibold">
            <button
              onClick={() => {handleView(record); setIsOpen(true)}}
              className={`transition-transform duration-300 hover:scale-105 text-[#1674A3] }`}
            >
              View
            </button>
            {record.status === "Active" && (
              <button
                onClick={() => handleBlock(record)}
                className="text-red-600 transition-transform duration-300 hover:scale-105"
              >
                Block
              </button>
            )}
            {record.status === "Blocked" && (
              <button
                onClick={() => handleUnblock(record)}
                className="text-green-600 transition-transform duration-300 hover:scale-105"
              >
                Unblock
              </button>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div className="bg-section-bg rounded-lg">
      {/* Filter Bar */}
      <div className="mb-4 flex flex-wrap items-center gap-3 px-2 pt-2">
        <Select
          value={statusFilter}
          onChange={setStatusFilter}
          options={STATUS_FILTER_OPTIONS}
          suffixIcon={<ChevronDownIcon className="size-4 text-orange-400" />}
          popupMatchSelectWidth={false}
          className="[&_.ant-select-selector]:!rounded-lg [&_.ant-select-selector]:!border-[#E2BFB5] [&_.ant-select-selector]:!px-4 [&_.ant-select-selector]:!py-1.5"
        />
      </div>

      <DataTable columns={columns} data={filteredData} pageSize={10} />

      <UserDetailsModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onApprove={() => {
          // call your approve API
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export default UsersTable;
