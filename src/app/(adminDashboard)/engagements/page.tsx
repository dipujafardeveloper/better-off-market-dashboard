import React from "react";
import EngagementsTable from "./components/EngagementsTable";

export default function EngagementsPage() {
  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold text-text-color mb-1">
          Engagements
        </h1>
        <p className="text-primary-gray text-base font-normal">
          Manage all contractor accounts and verification status
        </p>
      </div>
      <EngagementsTable />
    </div>
  );
}
