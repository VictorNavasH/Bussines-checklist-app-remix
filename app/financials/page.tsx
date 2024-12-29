"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ZohoConnectButton } from "@/components/integrations/zoho-connect-button";

export default function FinancialsPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Proyecciones Financieras</h1>
            <p className="text-muted-foreground">
              Gestiona y analiza tus datos financieros
            </p>
          </div>
          <Button variant="outline" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Conectar con Zoho Books</h2>
          <p className="text-muted-foreground mb-6">
            Integra tus datos financieros para realizar proyecciones más precisas
          </p>
          <ZohoConnectButton />
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Resumen Financiero</h2>
          <p className="text-muted-foreground">
            Conecta tu cuenta de Zoho Books para ver tu resumen financiero
          </p>
        </Card>
      </div>
    </div>
  );
}