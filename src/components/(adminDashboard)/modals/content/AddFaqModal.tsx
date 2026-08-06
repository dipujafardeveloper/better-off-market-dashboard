"use client";
import { useState } from "react";
import { Modal, message } from "antd";
import { X } from "lucide-react";

interface AddFaqFormValues {
  question: string;
  answer: string;
}

interface AddFaqModalProps {
title: string;
  open: boolean;
  onClose: () => void;
  onSubmit: (values: AddFaqFormValues) => void;
}

export function AddFaqModal({ open, onClose, onSubmit , title}: AddFaqModalProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const resetAndClose = () => {
    setQuestion("");
    setAnswer("");
    onClose();
  };

  return (
    <Modal
      open={open}
      onCancel={resetAndClose}
      footer={null}
      closeIcon={<X size={18} />}
      centered
      width={480}
    >
      <h2 className="mb-5 text-lg font-medium text-primary-black">{ title || "Add FAQ"}</h2>

      <div className="space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-primary-black">
            Add question
          </label>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Question"
            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-primary-black placeholder:text-gray-400 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-primary-black">
            Add Answer
          </label>
          <input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Answer"
            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-primary-black placeholder:text-gray-400 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={resetAndClose}
          className="flex items-center gap-1.5 rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-primary-black hover:bg-gray-50"
        >
          <X size={16} />
          Cancel
        </button>
        <button
          onClick={() => {
            if (!question.trim() || !answer.trim()) {
              message.error("Question and answer are both required");
              return;
            }
            onSubmit({ question, answer });
          }}
          className="rounded-md bg-gray-900 px-6 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Add
        </button>
      </div>
    </Modal>
  );
}