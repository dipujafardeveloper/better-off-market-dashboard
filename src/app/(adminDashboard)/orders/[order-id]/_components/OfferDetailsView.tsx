import {
  Archive,
  AlertCircle,
  Search,
  BadgeCheck,
  Calendar,
  File,
  Download,
  MessageSquare,
} from "lucide-react";
import { SummaryCard } from "./SummaryCard";
import { SummaryField } from "./SummaryField";
import { ContingencyItem } from "./ContingencyItem";
import { Pill } from "./Pill";
import {
  CalenderIcon,
  ContingenciesIcon,
  DocIcon,
  DollarIcon,
  MessageIcon,
  PDFIcon,
  PersonalPropertyIcon,
} from "@/icon";

export interface OfferDetailsViewDocument {
  name: string;
  url: string;
}

export interface OfferDetailsViewData {
  offerAmount: number;
  earnestMoney: number;
  financingType: string;
  closingCosts: string;

  personalProperty: {
    included: string[];
    itemsToRemove?: string;
  };

  inspection: { required: boolean; days?: number };
  appraisal: { required: boolean; days?: number };

  closingTerms: {
    titleCompany: string;
    closingDate: string;
    possession: string;
  };

  documents?: OfferDetailsViewDocument[];
  notes?: string;
}

interface OfferDetailsViewProps {
  viewerRole?: "buyer" | "seller";
  title?: string;
  notesTitle?: string;
  data: OfferDetailsViewData;
}

function formatCurrency(amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  });
}

function contingencyValue(item: { required: boolean; days?: number }) {
  if (!item.required) return "Waived";
  return item.days ? `Yes, ${item.days} days` : "Yes";
}

export function OfferDetailsView({
  viewerRole = "buyer",
  title,
  notesTitle = "Notes From Seller",
  data,
}: OfferDetailsViewProps) {
  const pageTitle =
    title ??
    (viewerRole === "buyer" ? "Buyer Offer Details" : "Seller Offer Details");

  return (
    <div className="= bg-muted/40  py-6 ">
      <div className="w-full ">
        <h1 className="mb-5 text-xl font-semibold text-[#00214C] sm:text-2xl">
          {pageTitle}
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
          {/* Main column */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <SummaryCard title="Offer Details" icon={<DollarIcon />}>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <SummaryField
                  label="Offer amount"
                  value={formatCurrency(data.offerAmount)}
                />
                <SummaryField
                  label="Earnest money"
                  value={formatCurrency(data.earnestMoney)}
                />
                <SummaryField
                  label="Financing type"
                  value={data.financingType}
                />
                <SummaryField label="Closing costs" value={data.closingCosts} />
              </div>
            </SummaryCard>

            <SummaryCard
              title="Personal Property"
              icon={<PersonalPropertyIcon />}
            >
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Included items
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {data.personalProperty.included.length > 0 ? (
                      data.personalProperty.included.map((item) => (
                        <Pill key={item}>{item}</Pill>
                      ))
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        None specified
                      </span>
                    )}
                  </div>
                </div>
                {data.personalProperty.itemsToRemove ? (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Items to be removed
                    </p>
                    <p className="mt-1 text-sm italic text-foreground">
                      &ldquo;{data.personalProperty.itemsToRemove}&rdquo;
                    </p>
                  </div>
                ) : null}
              </div>
            </SummaryCard>

            <SummaryCard title="Contingencies" icon={<ContingenciesIcon />}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ContingencyItem
                  icon={<Search size={16} />}
                  label="Inspection"
                  value={contingencyValue(data.inspection)}
                />
                <ContingencyItem
                  icon={<BadgeCheck size={16} />}
                  label="Appraisal"
                  value={contingencyValue(data.appraisal)}
                />
              </div>
            </SummaryCard>

            <SummaryCard title="Closing Terms" icon={<CalenderIcon />}>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
                <SummaryField
                  label="Title company"
                  value={data.closingTerms.titleCompany}
                />
                <SummaryField
                  label="Closing date"
                  value={data.closingTerms.closingDate}
                />
                <SummaryField
                  label="Possession"
                  value={data.closingTerms.possession}
                />
              </div>
            </SummaryCard>
          </div>

          {/* Sidebar column */}
          <div className="flex flex-col gap-6">
            {data.documents && data.documents.length > 0 ? (
              <SummaryCard title="Documents" icon={<DocIcon />}>
                <ul className="flex flex-col gap-2">
                  {data.documents.map((doc) => (
                    <li key={doc.url}>
                      <a
                        href={doc.url}
                        download
                        className="flex items-center justify-between gap-3 rounded-md border border-[#E2BFB5] bg-[#F7F9FB] px-3 py-3 text-sm text-foreground hover:border-primary/50"
                      >
                        <div className="flex gap-2">
                          <PDFIcon className=" size-4 " />
                          <span className="truncate">{doc.name}</span>
                        </div>
                        <Download
                          size={16}
                          className="shrink-0 text-[#594139]"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </SummaryCard>
            ) : null}

            {data.notes ? (
              <SummaryCard title={notesTitle} icon={<MessageIcon />}>
                <p className="rounded-xl bg-[#F2F4F6] p-3 text-sm italic leading-relaxed text-[#594139]">
                  &ldquo;{data.notes}&rdquo;
                </p>
              </SummaryCard>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
