"use client";
import { Modal } from "antd";
import { Mail, Phone, X } from "lucide-react";

interface UserDetailsModalProps {
  open: boolean;
  onClose: () => void;
  onApprove?: () => void;
  user?: {
    name: string;
    avatarUrl: string;
    email: string;
    phone: string;
    userType: string;
    yearsIn: string;
    joiningDate: string;
  };
}

const DEFAULT_USER = {
  name: "Sam Jones",
  avatarUrl: "/users/sam-jones.jpg",
  email: "olivia@untitledui.com",
  phone: "+44 723 456 7891",
  userType: "Buyer",
  yearsIn: "2 years",
  joiningDate: "05/04/2024",
};

export function UserDetailsModal({
  open,
  onClose,
  onApprove,
  user = DEFAULT_USER,
}: UserDetailsModalProps) {
  const rows = [
    { label: "User Type", value: user.userType },
    { label: "Name", value: user.name },
    { label: "Years in", value: user.yearsIn },
    { label: "Joining Date", value: user.joiningDate },
  ];

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      closeIcon={<X size={18} />}
      centered
      width={420}
    >
      <h2 className="mb-5 text-lg font-bold text-primary-black">User details</h2>

      {/* Profile */}
      <div className="mb-4 flex items-center gap-3 border-b border-gray-100 pb-4">
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="size-14 shrink-0 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-bold text-primary-black">{user.name}</h3>
          <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Mail size={14} />
              {user.email}
            </span>
            <span className="flex items-center gap-1">
              <Phone size={14} />
              {user.phone}
            </span>
          </div>
        </div>
      </div>

      {/* Details rows */}
      <div className="divide-y divide-gray-100">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between py-3">
            <span className="text-gray-500">{row.label}</span>
            <span className="font-medium text-primary-black">{row.value}</span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-5 flex justify-end gap-3">
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-primary-black hover:bg-gray-50"
        >
          <X size={16} />
          Cancel
        </button>
        <button
          onClick={onApprove}
          className="rounded-md bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90"
        >
          Approved
        </button>
      </div>
    </Modal>
  );
}