// components/content-management/FaqEntriesSection.tsx
"use client";
import { useState } from "react";
import { HelpCircle, Plus, Pencil, Trash2 } from "lucide-react";
import { AddFaqModal } from "@/components/(adminDashboard)/modals/content/AddFaqModal";

export interface FaqEntry {
  id: string | number;
  audience: "SELLER" | "BUYER";
  question: string;
  answer: string;
}

interface FaqEntriesSectionProps {
  faqs?: FaqEntry[];
}

const DEFAULT_FAQS: FaqEntry[] = [
  {
    id: 1,
    audience: "SELLER",
    question: "Is Betterofmarket free to use?",
    answer: "Yes, listing your property is free.",
  },
  {
    id: 2,
    audience: "BUYER",
    question: "How do I submit an offer?",
    answer: "Use the Make Offer button on any listing.",
  },
  {
    id: 3,
    audience: "SELLER",
    question: "Is payment processed on the platform?",
    answer: "Payments are handled through your chosen title company.",
  },
];


const handleDelete = (faq: FaqEntry) => console.log("delete", faq);

export function FaqEntriesSection({
  faqs = DEFAULT_FAQS,
}: FaqEntriesSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("Add FAQ");


  const handleEdit = (faq: FaqEntry) => {
    setTitle("Edit FAQ");
    setIsModalOpen(true);
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

      <div className="space-y-3">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4 shadow-[0_5px_15px_0_rgba(15,23,42,0.03)]"
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
              <button
                onClick={() => handleDelete(faq)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <AddFaqModal
        title={title}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(values) => {
          console.log("new faq", values);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}
