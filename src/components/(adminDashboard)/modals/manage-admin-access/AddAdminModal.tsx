
"use client";;
import { useState } from "react";
import { Modal, Select, message } from "antd";
import { TSection } from "@/types";



// ─── All Sections ─────────────────────────────────────────────
const ALL_SECTIONS: TSection[] = [
  "Dashboard", "Riders", "Drivers", "Ride Management",
  "Earning", "Fare management", "Voucher", "Promo code",
  "Notification Management", "Help & Support",
];


// ─── Input Field ──────────────────────────────────────────────
const inputCls =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 h-12 text-sm text-gray-900 " +
  "placeholder:text-gray-400 outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-200 transition";

// ─── Add Modal ────────────────────────────────────────────────
const AddAdminModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [name,     setName]     = useState("");
  const [phone,    setPhone]    = useState("");
  const [email,    setEmail]    = useState("");
  const [role,     setRole]     = useState("Operation Team");
  const [sections, setSections] = useState<TSection[]>([]);

  const handleSubmit = () => {
    console.log("Add admin staff:", { name, phone, email, role, sections });
    message.success("Admin staff added!");
    onClose();
    setName(""); setPhone(""); setEmail(""); setRole("Operation Team"); setSections([]);
  };

  return (
    <Modal
      open={open}
      footer={null}
      centered
      onCancel={onClose}
      closeIcon={false}
      styles={{ content: { borderRadius: 20, padding: "28px" } }}
      width={520}
    >
      <h2 className="text-xl font-bold text-gray-900">Add Admin Staff</h2>
      <p className="text-sm text-gray-400 mt-0.5 mb-6">Create, manage and track all vouchers</p>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-800 mb-1.5">Name</label>
        <input className={inputCls} placeholder="Write here" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-800 mb-1.5">Phone Number</label>
        <input className={inputCls} placeholder="Write here" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-800 mb-1.5">Email</label>
        <input className={inputCls} placeholder="Write here" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      {/* Role */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-800 mb-1.5">Role</label>
        <input className={inputCls} value={role} onChange={(e) => setRole(e.target.value)} />
      </div>

      {/* Select Accessible Section */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-800 mb-1.5">Select Accessible Section</label>
        <Select
          mode="multiple"
          value={sections}
          onChange={(v) => setSections(v as TSection[])}
          className="w-full h-12"
          placeholder="Select sections..."
          options={ALL_SECTIONS.map((s) => ({ label: s, value: s }))}
          tagRender={({ label, onClose }) => (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 mr-1 rounded-full text-xs font-medium bg-gray-900 text-white">
              {label}
              <button onClick={onClose} className="ml-0.5 hover:opacity-70">×</button>
            </span>
          )}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button onClick={onClose}
          className="flex-1 h-12 rounded-lg bg-gray-100 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors">
          Cancel
        </button>
        <button onClick={handleSubmit}
          className="flex-1 h-12 rounded-lg bg-gray-900 text-sm font-semibold text-white hover:bg-black transition-colors">
          Submit
        </button>
      </div>
    </Modal>
  );
};

export default AddAdminModal;