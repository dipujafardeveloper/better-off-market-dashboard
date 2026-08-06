// components/offers/OffersTable.tsx
"use client";
import { Tag, TableProps } from "antd";
import DataTable from "@/utils/DataTable";
import Link from "next/link";

type OfferStatus = "Pending" | "Accepted" | "Rejected";

type OfferRow = {
  key?: number;
  buyer: string;
  seller: string;
  property: string;
  county: string;
  date: string;
  amount: number;
  status: OfferStatus;
};

const data: OfferRow[] = [
  {
    key: 1,
    buyer: "James B.",
    seller: "James R.",
    property: "Memphis house",
    county: "Hamilton County",
    date: "Jun 14, 2026",
    amount: 46000,
    status: "Pending",
  },
  {
    key: 2,
    buyer: "James B.",
    seller: "James R.",
    property: "Memphis house",
    county: "Hamilton County",
    date: "Jun 14, 2026",
    amount: 46000,
    status: "Accepted",
  },
  {
    key: 3,
    buyer: "James B.",
    seller: "James R.",
    property: "Memphis house",
    county: "Hamilton County",
    date: "Jun 14, 2026",
    amount: 46000,
    status: "Rejected",
  },
  {
    key: 4,
    buyer: "James B.",
    seller: "James R.",
    property: "Memphis house",
    county: "Hamilton County",
    date: "Jun 14, 2026",
    amount: 46000,
    status: "Rejected",
  },
  {
    key: 5,
    buyer: "James B.",
    seller: "James R.",
    property: "Memphis house",
    county: "Hamilton County",
    date: "Jun 14, 2026",
    amount: 46000,
    status: "Rejected",
  },
];

const formatAmount = (value: number) => `$${value.toLocaleString("en-US")}`;

const STATUS_STYLES: Record<
  OfferStatus,
  { bg: string; dot: string; text: string }
> = {
  Pending: { bg: "#FFEDD5", dot: "#F97316", text: "#C2410C" },
  Accepted: { bg: "#DCFCE7", dot: "#22C55E", text: "#15803D" },
  Rejected: { bg: "#FEE2E2", dot: "#EF4444", text: "#B91C1C" },
};

const handleReview = (record: OfferRow) => {
  console.log("review", record);
};

const OffersTable = () => {
  const columns: TableProps<OfferRow>["columns"] = [
    {
      title: "Buyer & Seller",
      dataIndex: "buyer",
      render: (_, record) => (
        <p className="font-medium text-[#191C1E]">
          {record.buyer} <span>→</span> {record.seller}
        </p>
      ),
    },
    {
      title: "Property & County",
      dataIndex: "property",
      render: (_, record) => (
        <div>
          <p className="text-[#191C1E]">{record.property}</p>
          <p className="text-sm text-gray-400">{record.county}</p>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => <p className="text-[#191C1E]">{text}</p>,
    },
    {
      title: "Offer Amount",
      dataIndex: "amount",
      render: (value) => (
        <p className="font-semibold text-[#AC3400]">{formatAmount(value)}</p>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: OfferStatus) => {
        const style = STATUS_STYLES[status];
        return (
          <Tag
            className="!flex !w-fit !items-center !gap-1.5 !rounded-full !border-0 !px-3 !py-1 !text-xs !font-medium"
            style={{ background: style.bg, color: style.text }}
          >
            <span
              className="size-1.5 rounded-full"
              style={{ background: style.dot }}
            />
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <Link href={`/orders/${record.key}`}>
          <button
            onClick={() => handleReview(record)}
            className="rounded-md bg-[#00214C] px-4 py-1.5 text-xs font-semibold text-white hover:opacity-90"
          >
            Review
          </button>
        </Link>
      ),
    },
  ];

  return (
    <div className="rounded-3xl bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:p-6">
      <h2 className="mb-4 md:text-lg font-bold text-[#191C1E]">
        All offers — platform wide
      </h2>
      <DataTable columns={columns} data={data} pageSize={10} />
    </div>
  );
};

export default OffersTable;
