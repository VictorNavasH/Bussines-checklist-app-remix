"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TeamPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Equipo</h1>
            <p className="text-muted-foreground">
              Gestiona los miembros de tu equipo y sus permisos
            </p>
          </div>
          <div className="space-x-2">
            <Button variant="outline" onClick={() => router.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Invitar Miembro
            </Button>
          </div>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Miembros del Equipo</h2>
          <p className="text-muted-foreground">
            No hay miembros en el equipo todavía
          </p>
        </Card>
      </div>
    </div>
  );
}