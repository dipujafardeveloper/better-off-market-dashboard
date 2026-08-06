"use client";
import { Button, Input, TableProps } from "antd";
import DataTable from "@/utils/DataTable";
import { MapPin, ArrowDownToLine, ArrowRight } from "lucide-react";

const trades = ["Electrician", "Plumber"];
const cisStatus = ["Pending", "Dispute", "Active"];

type TDataType = {
  key?: number;
  serial: number;
  engId: string;
  companyName: string;
  workerName: string;
  trade: string;
  region: string;
  cisStatus: string;
  endDate: string;
};

const data: TDataType[] = Array.from({ length: 20 }).map((_, inx) => ({
  key: inx,
  serial: inx + 1,
  engId: "ORD-12847",
  companyName: "Harrington Build Ltd",
  workerName: "Cameron Williamson",
  trade: trades[inx % 2],
  region: "London",
  endDate: "05/04/2024",
  cisStatus: cisStatus[inx % 3],
}));

const cisBadge: Record<string, string> = {
  Pending: "bg-yellow-50 text-yellow-600",
  Dispute: "bg-red-50 text-red-500",
  Active: "bg-green-50 text-green-600",
};

const EngagementsTable = () => {
  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Eng ID",
      dataIndex: "engId",
      render: (text) => <p className="font-medium">{text}</p>,
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      render: (text) => <p className="font-medium">{text}</p>,
    },
    {
      title: "Worker Name",
      dataIndex: "workerName",
      render: (text) => <p className="font-medium">{text}</p>,
    },
    {
      title: "Trade",
      dataIndex: "trade",
    },
    {
      title: "Region",
      dataIndex: "region",
      render: (text) => (
        <div className="flex items-center gap-x-1 text-gray-500">
          <MapPin size={14} />
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: "CIS Status",
      dataIndex: "cisStatus",
      render: (text) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${cisBadge[text]}`}
        >
          {text}
        </span>
      ),
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      render: (text) => <p className="text-gray-500">{text}</p>,
    },
  ];

  return (
    <div className="bg-section-bg rounded-3xl">
      <div className="flex justify-end items-center gap-2 px-2 mb-2 pt-2">
        <Input.Search
          placeholder="Search here..."
          size="large"
          className="!max-w-[400px]"
        />
        <Button
          className="cursor-pointer !bg-transparent !text-[#4A5565] !border-2 !border-black"
          type="primary"
          icon={<ArrowDownToLine size={18} />}
        >
          Export
        </Button>
      </div>
      <DataTable columns={columns} data={data} pageSize={10}></DataTable>
    </div>
  );
};

export default EngagementsTable;
