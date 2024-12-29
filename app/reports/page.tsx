import { Suspense } from "react";
import { ReportsHeader } from "./components/reports-header";
import { ReportsOverview } from "./components/reports-overview";
import { CompletionChart } from "./components/completion-chart";
import { IssuesTable } from "./components/issues-table";
import { Card } from "@/components/ui/card";

export default function ReportsPage() {
  return (
    <div className="container space-y-8 p-8">
      <ReportsHeader />
      <ReportsOverview />
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Completion Rates</h2>
          <Suspense fallback={<div className="h-[300px] animate-pulse bg-muted rounded-lg" />}>
            <CompletionChart />
          </Suspense>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Issues</h2>
          <Suspense fallback={<div className="h-[300px] animate-pulse bg-muted rounded-lg" />}>
            <IssuesTable />
          </Suspense>
        </Card>
      </div>
    </div>
  );
}