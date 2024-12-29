import { Suspense } from "react";
import { ChecklistHeader } from "./components/checklist-header";
import { ChecklistGrid } from "./components/checklist-grid";
import { ChecklistSkeleton } from "./components/checklist-skeleton";

export default function ChecklistsPage() {
  return (
    <div className="container space-y-8 p-8">
      <ChecklistHeader />
      <Suspense fallback={<ChecklistSkeleton />}>
        <ChecklistGrid />
      </Suspense>
    </div>
  );
}