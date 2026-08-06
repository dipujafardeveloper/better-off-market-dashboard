// components/content-management/AddCategoryModal.tsx
"use client";
import { useState } from "react";
import { Modal, Upload, message } from "antd";
import type { UploadProps } from "antd";
import { UploadCloud, X } from "lucide-react";

interface AddCategoryFormValues {
  categoryName: string;
  image: File | null;
}

interface AddCategoryModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
  onSubmit: (values: AddCategoryFormValues) => void;
}

export function AddCategoryModal({ open, onClose, onSubmit, title }: AddCategoryModalProps) {
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const resetAndClose = () => {
    setCategoryName("");
    setImage(null);
    onClose();
  };

  const draggerProps: UploadProps = {
    multiple: false,
    accept: "image/*",
    showUploadList: false,
    beforeUpload: (file) => {
      setImage(file);
      return false; // prevent auto-upload; handled on submit
    },
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
      <h2 className="mb-5 text-lg font-medium text-primary-black">{ title || "Add Category"}</h2>

      <Upload.Dragger {...draggerProps} className="!rounded-xl !border-dashed !border-orange-200 !bg-white">
        <div className="flex flex-col items-center py-6">
          <UploadCloud className="mb-3 size-8 text-primary-blue" />
          <p className="text-sm font-medium text-primary-black">
            {image ? image.name : "Click or drag to upload Category photos"}
          </p>
        </div>
      </Upload.Dragger>

      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-primary-black">
          Category Name
        </label>
        <input
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter category Name"
          className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm text-primary-black placeholder:text-gray-400 focus:border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue"
        />
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={resetAndClose}
          className="flex items-center gap-1.5 rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-primary-black hover:bg-gray-50"
        >
          <X size={16} />
          Cancel
        </button>
        <button
          onClick={() => {
            if (!categoryName.trim()) {
              message.error("Category name is required");
              return;
            }
            onSubmit({ categoryName, image });
          }}
          className="rounded-md bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90"
        >
          Add
        </button>
      </div>
    </Modal>
  );
}