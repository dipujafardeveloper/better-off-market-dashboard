import { cn } from "@/lib/utils";
import { Modal } from "antd";
import {
    User, Phone, MapPin, Calendar,
    Briefcase, FileText, Download, Car
} from "lucide-react";

type TPropsType = {
    open: boolean;
    setOpen: (collapsed: boolean) => void;
};

const documents = [
    { name: "NID/Password", file: "id_card.jpg", path: "/documents/id_card.pdf" },
    { name: "Driving License", file: "drive_license.jpg", path: "/documents/drive_license.pdf" },
    { name: "Vehicle Registration", file: "vehical.jpg", path: "/documents/vehical.pdf" },
];

const vehicleInfo = [
    { label: "Vehicle Type", value: "Taxi" },
    { label: "Car Company", value: "Toyota" },
    { label: "Model", value: "Corolla" },
    { label: "Year", value: "2009" },
    { label: "Color", value: "Blue" },
    { label: "Plate Number", value: "298-1563-5852" },
];

const infoData = [
    { icon: <User size={13} />, text: "Karan" },
    { icon: <Phone size={13} />, text: "+974 4467 1557" },
    { icon: <MapPin size={13} />, text: "Tripoli, Libya" },
    { icon: <Calendar size={13} />, text: "20-05-2025" },
]

const DriverRequestModal = ({ open, setOpen }: TPropsType) => {

    const handleDownload = (path: string, filename: string) => {
        const link = document.createElement("a");
        link.href = path;
        link.download = filename;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Modal
            open={open}
            footer={null}
            centered
            onCancel={() => setOpen(false)}
            closeIcon={false}
            styles={{ content: { borderRadius: 20, padding: "24px 20px 20px" } }}
            width={400}
        >
            <h2 className="text-lg font-bold text-gray-900 mb-5">
                Review Driver Documents
            </h2>

            {/* Driver Information */}
            <div className="bg-gray-100 rounded-2xl p-2 mb-3">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                        <Briefcase size={13} className="text-gray-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Driver Information</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5 bg-white p-2 rounded-md">
                    {infoData.map(({ icon, text }) => (
                        <div key={text} className="flex items-center gap-1.5 text-sm text-gray-700">
                            <span className="text-gray-500 shrink-0">{icon}</span>
                            {text}
                        </div>
                    ))}
                </div>
            </div>

            {/* Required Documents */}
            <div className="bg-gray-100 rounded-2xl py-3 px-1  mb-3.5">
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                        <Briefcase size={13} className="text-gray-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-900 mb-2">Required Documents</span>
                </div>

                {documents.map((doc, index) => (
                    <div
                        key={doc.name}
                        className={cn(
                            "flex items-center justify-between bg-white mb-1.5 rounded-md p-2",
                        )}
                    >
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                                <FileText size={14} className="text-gray-500" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                                <p className="text-xs text-gray-400">{doc.file}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleDownload(doc.path, doc.file)}
                            className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                            title={`Download ${doc.name}`}
                        >
                            <Download size={13} className="text-gray-500" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Vehicle Information */}
            <div className="bg-gray-100 rounded-2xl p-2 mb-4">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                        <Car size={13} className="text-gray-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Vehicle Information</span>
                </div>
                <div className="grid grid-cols-2 gap-3.5 bg-white p-2 rounded-md">
                    {vehicleInfo.map(({ label, value }) => (
                        <div key={label}>
                            <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                            <p className="text-sm font-semibold text-gray-900">{value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
                <button
                    onClick={() => setOpen(false)}
                    className="flex-1 py-2 rounded-md text-sm font-semibold text-gray-700 bg-gray-100 border border-gray-200 hover:bg-gray-200 transition-colors"
                >
                    Reject
                </button>
                <button
                    onClick={() => setOpen(false)}
                    className="flex-1 py-2 rounded-md text-sm font-semibold text-white bg-gray-900 hover:bg-black transition-colors"
                >
                    Approve
                </button>
            </div>
        </Modal>
    );
};

export default DriverRequestModal;