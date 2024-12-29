"use client";

import { ChecklistForm } from "../components/checklist-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NewChecklistPage() {
  const router = useRouter();

  return (
    <div className="container space-y-8 p-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Crear Nuevo Checklist</h1>
          <p className="text-muted-foreground">
            Complete los detalles para crear un nuevo checklist
          </p>
        </div>
      </div>
      <ChecklistForm />
    </div>
  );
}