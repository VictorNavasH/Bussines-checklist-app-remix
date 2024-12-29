import { Suspense } from "react";
import { UsersHeader } from "./components/users-header";
import { UsersTable } from "./components/users-table";
import { UsersTableSkeleton } from "./components/users-table-skeleton";

export default function UsersPage() {
  return (
    <div className="container space-y-8 p-8">
      <UsersHeader />
      <Suspense fallback={<UsersTableSkeleton />}>
        <UsersTable />
      </Suspense>
    </div>
  );
}