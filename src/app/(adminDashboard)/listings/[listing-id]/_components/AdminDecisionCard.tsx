import { CheckCircle2, XCircle } from "lucide-react";

interface AdminDecisionCardProps {
  title?: string;
  onApprove?: () => void;
  onReject?: () => void;
}

export function AdminDecisionCard({
  title = "Admin Decision",
  onApprove,
  onReject,
}: AdminDecisionCardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
      <p className="mb-4 text-xs font-semibold tracking-wide text-gray-400">
        {title.toUpperCase()}
      </p>

      <div className="space-y-3">
        <button
          onClick={onApprove}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-800 py-3 text-sm font-medium text-white shadow-[0_4px_10px_0_rgba(22,101,52,0.25)] hover:bg-green-900"
        >
          <CheckCircle2 size={18} />
          Approve listing
        </button>

        <button
          onClick={onReject}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <XCircle size={18} />
          Reject listing
        </button>
      </div>
    </div>
  );
}