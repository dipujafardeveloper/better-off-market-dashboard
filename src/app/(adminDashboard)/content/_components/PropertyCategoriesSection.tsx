// components/content-management/PropertyCategoriesSection.tsx
"use client";
import { useState } from "react";
import { Plus, Eye, EyeOff, Pencil, Trash2 } from "lucide-react";
import { Image, TableProps } from "antd";
import DataTable from "@/utils/DataTable";
import { AddCategoryModal } from "@/components/(adminDashboard)/modals/content/AddCategoryModal";

export interface CategoryRow {
  key: string | number;
  name: string;
  imageUrl: string;
  listingCount: number;
  status: "Visible" | "Hidden";
}

interface PropertyCategoriesSectionProps {
  categories?: CategoryRow[];
}

const DEFAULT_CATEGORIES: CategoryRow[] = [
  {
    key: 1,
    name: "Residential",
    imageUrl: "/property_image.png",
    listingCount: 142,
    status: "Visible",
  },
  {
    key: 2,
    name: "Commercial",
    imageUrl: "/property_image.png",
    listingCount: 87,
    status: "Visible",
  },
  {
    key: 3,
    name: "Land",
    imageUrl: "/property_image.png",
    listingCount: 87,
    status: "Visible",
  },
  {
    key: 4,
    name: "Industrial",
    imageUrl: "/property_image.png",
    listingCount: 29,
    status: "Hidden",
  },
];

const handleToggleVisibility = (record: CategoryRow) =>
  console.log("toggle", record);

const handleDelete = (record: CategoryRow) => console.log("delete", record);

export function PropertyCategoriesSection({
  categories = DEFAULT_CATEGORIES,
}: PropertyCategoriesSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("Add Category");

  const handleEdit = (record: CategoryRow) => {
    setTitle("Edit Category");
    setIsModalOpen(true);
  };

  const columns: TableProps<CategoryRow>["columns"] = [
    {
      title: "Category Name",
      dataIndex: "name",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <Image
            src={record.imageUrl}
            alt={record.name}
            width={100}
            height={60}
            className="h-10 w-14 rounded-md object-cover"
          />
          <span className="font-semibold text-[#191C1E]">{record.name}</span>
        </div>
      ),
    },
    {
      title: "Listing Count",
      dataIndex: "listingCount",
      render: (value) => (
        <span className="text-gray-500">{value} listings</span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: CategoryRow["status"]) => (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
            status === "Visible"
              ? "bg-green-100 text-green-600"
              : "bg-gray-200 text-gray-500"
          }`}
        >
          <span
            className={`size-1.5 rounded-full ${
              status === "Visible" ? "bg-green-500" : "bg-gray-400"
            }`}
          />
          {status}
        </span>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <div className="flex items-center gap-3 text-gray-400 pl-4">
          <button
            onClick={() => handleToggleVisibility(record)}
            className="hover:text-primary-black"
          >
            {record.status === "Visible" ? (
              <Eye color="#565E74" size={18} />
            ) : (
              <EyeOff color="#565E74" size={18} />
            )}
          </button>
          <button
            onClick={() => handleEdit(record)}
            className="hover:text-primary-black"
          >
            <Pencil color="#565E74" size={18} />
          </button>
          <button
            onClick={() => handleDelete(record)}
            className="text-red-500 hover:text-red-600"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
          >
            <path
              d="M3.5 9L9 0L14.5 9H3.5ZM14.5 20C13.25 20 12.1875 19.5625 11.3125 18.6875C10.4375 17.8125 10 16.75 10 15.5C10 14.25 10.4375 13.1875 11.3125 12.3125C12.1875 11.4375 13.25 11 14.5 11C15.75 11 16.8125 11.4375 17.6875 12.3125C18.5625 13.1875 19 14.25 19 15.5C19 16.75 18.5625 17.8125 17.6875 18.6875C16.8125 19.5625 15.75 20 14.5 20ZM0 19.5V11.5H8V19.5H0ZM14.5 18C15.2 18 15.7917 17.7583 16.275 17.275C16.7583 16.7917 17 16.2 17 15.5C17 14.8 16.7583 14.2083 16.275 13.725C15.7917 13.2417 15.2 13 14.5 13C13.8 13 13.2083 13.2417 12.725 13.725C12.2417 14.2083 12 14.8 12 15.5C12 16.2 12.2417 16.7917 12.725 17.275C13.2083 17.7583 13.8 18 14.5 18ZM2 17.5H6V13.5H2V17.5ZM7.05 7H10.95L9 3.85L7.05 7Z"
              fill="#00214C"
            />
          </svg>
          <h2 className="text-lg font-bold text-[#191C1E]">
            Property Categories
          </h2>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1.5 rounded-md bg-[#00214C] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          <Plus size={16} />
          Add Category
        </button>
      </div>

      <DataTable columns={columns} data={categories} pageSize={10} />

      <AddCategoryModal
        title={title}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(values) => {
          console.log("new category", values);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}
