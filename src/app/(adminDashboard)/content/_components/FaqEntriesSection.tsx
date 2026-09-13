"use client";
import { useState } from "react";
import { HelpCircle, Plus, Pencil, Trash2 } from "lucide-react";
import { AddFaqModal } from "@/components/(adminDashboard)/modals/content/AddFaqModal";
import {
  useCreateFaqMutation,
  useDeleteFaqMutation,
  useGetFaqsQuery,
  useUpdateFaqMutation,
} from "@/redux/api/faqsApi";
import { message, Popconfirm } from "antd";
import { toast } from "sonner";
import FAQsSkeleton from "./FAQsSkeleton";

export interface FaqEntry {
  _id: string;
  question: string;
  answer: string;
}

interface FaqEntriesSectionProps {
  faqs?: FaqEntry[];
}

export function FaqEntriesSection({}: FaqEntriesSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("Add FAQ");
  const [selectedFaq, setSelectedFaq] = useState<FaqEntry | null>(null);
  const [createFaq, { isLoading: isCreating }] = useCreateFaqMutation();
  const { data, isLoading } = useGetFaqsQuery({ limit: 100 });
  const [deleteFaq] = useDeleteFaqMutation();
  const [updateFaq] = useUpdateFaqMutation();

  const handleEdit = (faq: FaqEntry) => {
    setTitle("Edit FAQ");
    setSelectedFaq(faq);
    setIsModalOpen(true);
  };

  const handleAddFaq = async (faq: FaqEntry) => {
    try {
      if (selectedFaq) {
        await updateFaq({
          id: selectedFaq._id,
          answer: faq.answer,
          question: faq.question,
        }).unwrap();
        message.success("Successfully updated FAQ");
        return;
      }
      await createFaq(faq).unwrap();
      message.success("Successfully added FAQ");
      setIsModalOpen(false);
    } catch (error: any) {
      message.error(error?.data?.message ?? "Failed to add FAQ");
    }
  };

  const confirm = async (id: string) => {
    toast.loading("Deleting FAQ...");
    try {
      await deleteFaq(id).unwrap();
      message.success("Successfully deleted FAQ");
      toast.dismiss();
    } catch (error: any) {
      message.error(error?.data?.message ?? "Failed to delete FAQ");
      toast.dismiss();
    }
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HelpCircle color="#00214C" className="size-5 text-primary-blue" />
          <h2 className="text-lg font-bold text-primary-black">FAQ Entries</h2>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1.5 rounded-md bg-[#00214C] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          <Plus size={16} />
          Add FAQ
        </button>
      </div>

      {isLoading ? (
        <FAQsSkeleton count={8} />
      ) : (
        <div className="space-y-3">
          {data?.data?.data?.map((faq: FaqEntry) => (
            <div
              key={faq?._id}
              className="flex  gap-3 rounded-2xl bg-gray-50 p-4 shadow-[0_5px_15px_0_rgba(15,23,42,0.03)]"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#ECEEF0]">
                <HelpCircle color="#00214C" size={16} />
              </span>

              <div className="flex-1">
                <p className="font-semibold text-[#191C1E]">{faq.question}</p>
                <span className="mt-1">{faq.answer}</span>
              </div>

              <div className="flex shrink-0 items-center gap-3 text-gray-400">
                <button
                  onClick={() => handleEdit(faq)}
                  className="hover:text-primary-black"
                >
                  <Pencil color="#565E74" size={18} />
                </button>
                <Popconfirm
                  title="Delete the question"
                  description="Are you sure to delete this question?"
                  onConfirm={() => confirm(faq?._id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 size={18} />
                  </button>
                </Popconfirm>
              </div>
            </div>
          ))}
        </div>
      )}

      <AddFaqModal
        title={title}
        setTitle={setTitle}
        selectedFaq={selectedFaq}
        setSelectedFaq={setSelectedFaq}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        disabled={isCreating}
        onSubmit={(values) => {
          handleAddFaq(values as FaqEntry);
        }}
      />
    </div>
  );
}
