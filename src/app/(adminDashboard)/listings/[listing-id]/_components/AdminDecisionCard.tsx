"use client";
import {
  useApprovePropertyMutation,
  useRejectPropertyMutation,
} from "@/redux/api/propertiesApi";
import { IPropertyResponse } from "@/types";
import { message, Popconfirm } from "antd";
import { CheckCircle2, XCircle } from "lucide-react";

interface AdminDecisionCardProps {
  title?: string;
  property: IPropertyResponse;
}

export function AdminDecisionCard({
  title = "Admin Decision",
  property,
}: AdminDecisionCardProps) {
  const [approveProperty, { isLoading: isApproving }] =
    useApprovePropertyMutation();
  const [rejectProperty, { isLoading: isRejecting }] =
    useRejectPropertyMutation();

  const handleApprove = async () => {
    try {
      await approveProperty(property?._id).unwrap();
      message.success("Listing approved successfully");
    } catch (err: any) {
      message.error(err?.data?.message || "Failed to approve listing");
    }
  };

  const handleReject = async () => {
    try {
      await rejectProperty(property?._id).unwrap();
      message.success("Listing rejected");
    } catch (err: any) {
      message.error(err?.data?.message || "Failed to reject listing");
    }
  };

  return (
    <div className="rounded-md border  bg-white p-5 shadow-[0_10px_30px_0_rgba(15,23,42,0.05)]">
      <p className="mb-4 text-xs font-semibold tracking-wide text-gray-400">
        {title.toUpperCase()}
      </p>

      <div className="space-y-3">
        <Popconfirm
          title="Approve this listing?"
          description="This will make the property publicly visible to buyers."
          okText="Approve"
          cancelText="Cancel"
          okButtonProps={{ loading: isApproving }}
          onConfirm={handleApprove}
        >
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-800 py-3 text-sm font-medium text-white shadow-[0_4px_10px_0_rgba(22,101,52,0.25)] hover:bg-green-900">
            <CheckCircle2 size={18} />
            Approve listing
          </button>
        </Popconfirm>

        <Popconfirm
          title="Reject this listing?"
          description="The seller will be notified their listing was rejected."
          okText="Reject"
          cancelText="Cancel"
          okButtonProps={{ danger: true, loading: isRejecting }}
          onConfirm={handleReject}
        >
          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <XCircle size={18} />
            Reject listing
          </button>
        </Popconfirm>
      </div>
    </div>
  );
}
