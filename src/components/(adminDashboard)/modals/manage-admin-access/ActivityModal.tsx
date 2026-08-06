"use client";;
import { TAdminStaff } from "@/types";
import { Modal } from "antd";
import { CheckCircle, Clock } from "lucide-react";


// ─── Section Tag ──────────────────────────────────────────────
const SectionTag = ({ label }: { label: string }) => (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-900 text-white">
        {label}
    </span>
);

const ActivityModal = ({
    staff,
    open,
    onClose,
}: {
    staff: TAdminStaff | null;
    open: boolean;
    onClose: () => void;
}) => {
    if (!staff) return null;

    return (
        <Modal
            open={open}
            footer={null}
            centered
            onCancel={onClose}
            closeIcon={false}
            styles={{ content: { borderRadius: 20, padding: "28px" } }}
            width={560}
        >
            <h2 className="text-xl font-bold text-gray-900">Admin Staff Activity</h2>
            <p className="text-sm text-gray-400 mt-0.5 mb-5">
                View detailed activity history and system access logs for this admin staff member
            </p>

            {/* Staff Info Card */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-5">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        {/* Avatar placeholder */}
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold text-lg overflow-hidden">
                            {staff.avatar ? (
                                <img src={staff.avatar} alt={staff.name} className="w-full h-full object-cover" />
                            ) : (
                                staff.name.charAt(0)
                            )}
                        </div>
                        <div>
                            <p className="text-base font-bold text-gray-900">{staff.name}</p>
                            <p className="text-sm text-gray-500">{staff.phone}</p>
                        </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-lg border border-gray-200 text-xs font-medium text-gray-700 bg-white">
                        {staff.role}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Join Date</p>
                        <p className="text-sm font-semibold text-gray-900">{staff.joinDate}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Access Permissions</p>
                        <div className="flex flex-wrap gap-1.5">
                            {staff.sections.slice(0, 3).map((s) => (
                                <SectionTag key={s} label={s} />
                            ))}
                            {staff.sections.length > 3 && (
                                <span className="text-xs text-gray-400">+{staff.sections.length - 3} more</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Activity Log */}
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-gray-900">Recent Activity Log</h3>
                <span className="text-xs text-gray-500 border border-gray-200 rounded-lg px-3 py-1">
                    {staff.activityLog.length} activities
                </span>
            </div>

            <div className="border border-gray-100 rounded-2xl overflow-hidden">
                {staff.activityLog.map((log, idx) => (
                    <div
                        key={log.id}
                        className={`flex items-start justify-between px-4 py-4 ${idx < staff.activityLog.length - 1 ? "border-b border-gray-100" : ""}`}
                    >
                        <div className="flex items-start gap-3">
                            <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                            <div>
                                <p className="text-sm font-bold text-gray-900">{log.action}</p>
                                <p className="text-xs text-gray-500 mt-0.5">{log.description}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 shrink-0 ml-4">
                            <Clock size={12} />
                            {log.dateTime}
                        </div>
                    </div>
                ))}
            </div>
        </Modal>
    );
};

export default ActivityModal;