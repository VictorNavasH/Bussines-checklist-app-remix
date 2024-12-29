"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeSettings } from "@/components/settings/theme-settings";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Configuración</h1>
            <p className="text-muted-foreground">
              Personaliza la aplicación según tus preferencias
            </p>
          </div>
          <Button variant="outline" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
        </div>

        <ThemeSettings />

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Notificaciones</h2>
          {/* Aquí irían las configuraciones de notificaciones */}
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Integraciones</h2>
          {/* Aquí irían las configuraciones de integraciones */}
        </Card>
      </div>
    </div>
  );
}