// components/offers/OffersTable.tsx
"use client";
import { Tag, TableProps } from "antd";
import DataTable from "@/utils/DataTable";
import Link from "next/link";
import { useGetAllOffersQuery } from "@/redux/api/offerApi";
import { IOffer } from "@/types";
import moment from "moment";
import { getOfferStatusBadge } from "@/utils/getOfferStatusBadge";

const formatAmount = (value: number) => `$${value?.toLocaleString("en-US")}`;

const handleReview = (record: IOffer) => {
  console.log("review", record);
};

const OffersTable = () => {
  const { data: offersData } = useGetAllOffersQuery({});

  console.log("data =>>>>>>>>>>>>", offersData?.data);

  const columns: TableProps<IOffer>["columns"] = [
    {
      title: "Buyer & Seller",
      dataIndex: "_",
      render: (_, record) => (
        <p className="font-medium text-[#191C1E]">
          {record?.buyer?.name} <span>→</span> {record.seller?.name}
        </p>
      ),
    },
    {
      title: "Property & County",
      dataIndex: "__",
      render: (_, record) => (
        <div className="max-w-[450px]">
          <Link
            href={`/listings/${record?.property?._id}`}
            className="text-[#191C1E] hover:underline"
          >{`${record.property?.propertyType} - ${record?.property?.city}, ${record?.property?.state}, ${record?.property?.zipCode}`}</Link>
          <p className="text-sm text-gray-400">{record?.property?.county}</p>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      render: (text) => (
        <p className="text-[#191C1E]">{moment(text).format("ll")}</p>
      ),
    },
    {
      title: "Offer Amount",
      dataIndex: "_",
      render: (value, record) => (
        <p className="font-semibold text-[#AC3400]">
          {formatAmount(record?.currentTerms?.offerAmount)}
        </p>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: any) => <div className="bg0"> {getOfferStatusBadge(status)}</div>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <Link href={`/orders/${record._id}`}>
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
      <DataTable columns={columns} data={offersData?.data} pageSize={10} />
    </div>
  );
};

export default OffersTable;
