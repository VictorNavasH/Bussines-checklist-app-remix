"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ConditionalForm } from "@/components/checklist/conditional-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { checklistTemplates } from "@/lib/data/checklist-templates";
import { useStore } from "@/lib/store";
import { useToast } from "@/components/ui/use-toast";

export default function ChecklistPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const addChecklist = useStore((state) => state.addChecklist);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // Simular carga del template
    const template = checklistTemplates.opening;
    setSections(template.sections);
  }, [params.id]);

  const handleSubmit = (values: Record<string, any>) => {
    addChecklist({
      id: crypto.randomUUID(),
      title: "Nuevo Checklist",
      type: "opening",
      sections: sections,
      status: "completed",
      createdAt: new Date(),
      updatedAt: new Date(),
      responses: values,
    });

    toast({
      title: "Checklist completado",
      description: "Los datos han sido guardados correctamente.",
    });

    router.push("/checklists");
  };

  return (
    <div className="container space-y-8 p-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Completar Checklist</h1>
          <p className="text-muted-foreground">
            Complete todos los campos requeridos
          </p>
        </div>
      </div>

      <ConditionalForm sections={sections} onSubmit={handleSubmit} />
    </div>
  );
}