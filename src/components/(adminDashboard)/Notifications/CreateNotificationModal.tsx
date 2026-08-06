"use client";

import { useState } from "react";
import { Modal, Select } from "antd";

// ─── Types ────────────────────────────────────────────────────
type TNotificationType = "Promotional Message" | "Service Update" | "Important Announcement";
type TTargetAudience   = "Riders" | "Drivers" | "Both";
type TCity             = "Tripoli" | "Benghazi" | "Misrata" | "Zawiya";

// ─── Props ────────────────────────────────────────────────────
type TProps = {
  open: boolean;
  onClose: () => void;
};

// ─── Input Styles ─────────────────────────────────────────────
const inputCls =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 " +
  "placeholder:text-gray-400 outline-none focus:border-gray-300 focus:ring-1 " +
  "focus:ring-gray-200 transition resize-none";

// ─── Component ────────────────────────────────────────────────
const CreateNotificationModal = ({ open, onClose }: TProps) => {
  const [notifType,  setNotifType]  = useState<TNotificationType | undefined>(undefined);
  const [title,      setTitle]      = useState("");
  const [message,    setMessage]    = useState("");
  const [audience,   setAudience]   = useState<TTargetAudience | undefined>(undefined);
  const [city,       setCity]       = useState<TCity | undefined>(undefined);

  const handleSend = () => {
    console.log("Send notification:", { notifType, title, message, audience, city });
    onClose();
    reset();
  };

  const handleCancel = () => {
    onClose();
    reset();
  };

  const reset = () => {
    setNotifType(undefined);
    setTitle("");
    setMessage("");
    setAudience(undefined);
    setCity(undefined);
  };

  return (
    <Modal
      open={open}
      footer={null}
      centered
      onCancel={handleCancel}
      closeIcon={false}
      styles={{ content: { borderRadius: 20, padding: "28px 28px 24px" } }}
      width={560}
    >
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Notifications</h2>

      {/* Notification Type */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-800 mb-2">
          Notification Type
        </label>
        <Select
          placeholder="Select City"
          value={notifType}
          onChange={(v) => setNotifType(v)}
          className="w-full !h-12"
          suffixIcon={
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="m6 9 6 6 6-6" />
            </svg>
          }
          options={[
            { label: "Promotional Message",   value: "Promotional Message"   },
            { label: "Service Update",        value: "Service Update"        },
            { label: "Important Announcement",value: "Important Announcement"},
          ]}
        />
      </div>

      {/* Notification Title */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-800 mb-2">
          Notification Title
        </label>
        <input
          type="text"
          placeholder="Enter the notification title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={inputCls}
        />
      </div>

      {/* Message */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-800 mb-2">
          Message
        </label>
        <textarea
          rows={5}
          placeholder="Enter your message here...."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputCls}
        />
      </div>

      {/* Target Audience */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-800 mb-2">
          Target Audience
        </label>
        <Select
          placeholder="Select audience"
          value={audience}
          onChange={(v) => setAudience(v as TTargetAudience)}
          className="w-full !h-12"
          suffixIcon={
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="m6 9 6 6 6-6" />
            </svg>
          }
          options={[
            { label: "Riders",  value: "Riders"  },
            { label: "Drivers", value: "Drivers" },
            { label: "Both",    value: "Both"    },
          ]}
          defaultValue="Rider"
        />
      </div>

      {/* City */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-800 mb-2">
          City
        </label>
        <Select
          placeholder="Select City"
          value={city}
          onChange={(v) => setCity(v)}
          className="w-full !h-12"
          suffixIcon={
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="m6 9 6 6 6-6" />
            </svg>
          }
          options={[
            { label: "Tripoli",  value: "Tripoli"  },
            { label: "Benghazi", value: "Benghazi" },
            { label: "Misrata",  value: "Misrata"  },
            { label: "Zawiya",   value: "Zawiya"   },
          ]}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleCancel}
          className="flex-1 h-12 rounded-lg bg-gray-100 text-sm font-semibold
                     text-gray-700 hover:bg-gray-200 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSend}
          className="flex-1 h-12 rounded-lg bg-gray-900 text-sm font-semibold
                     text-white hover:bg-black transition-colors"
        >
          Sent
        </button>
      </div>
    </Modal>
  );
};

export default CreateNotificationModal;