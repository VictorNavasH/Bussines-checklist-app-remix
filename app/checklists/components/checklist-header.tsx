"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export function ChecklistHeader() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Checklists</h1>
        <p className="text-muted-foreground">
          Manage and monitor all your restaurant checklists
        </p>
      </div>
      <Button onClick={() => router.push("/checklists/new")}>
        <PlusCircle className="mr-2 h-4 w-4" />
        New Checklist
      </Button>
    </div>
  );
}