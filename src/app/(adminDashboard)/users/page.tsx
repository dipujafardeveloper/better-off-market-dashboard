import React from "react";
import UsersTable from "./_components/UsersTable";

export default function UserPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="md:text-3xl text-xl font-semibold text-text-color mb-1">User Management</h1>
        <p className="text-[#565E74] md:text-base text-sm  font-normal">
          Oversee platform actors, verify identities, and manage account statuses.
        </p>
      </div>
      <UsersTable />
    </div>
  );
}
