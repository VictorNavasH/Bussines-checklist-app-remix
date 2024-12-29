"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ZohoConnectButton } from "@/components/integrations/zoho-connect-button";
import { NotionLikeEditor } from "@/components/editor/notion-like-editor";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FinancialProjectionsForm() {
  const [isZohoConnected, setIsZohoConnected] = useState(false);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Integración con Zoho Books</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Conecta tu cuenta de Zoho Books para importar datos financieros históricos
          y realizar proyecciones más precisas.
        </p>
        {!isZohoConnected ? (
          <ZohoConnectButton />
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Cuenta conectada</span>
              <Button variant="ghost" size="sm">
                Desconectar
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Período de Análisis</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3m">Últimos 3 meses</SelectItem>
                    <SelectItem value="6m">Últimos 6 meses</SelectItem>
                    <SelectItem value="1y">Último año</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Tipo de Proyección</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="linear">Lineal</SelectItem>
                    <SelectItem value="seasonal">Estacional</SelectItem>
                    <SelectItem value="custom">Personalizada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-full">Actualizar Proyecciones</Button>
          </div>
        )}
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Supuestos y Notas</h3>
        <NotionLikeEditor
          placeholder="Documenta los supuestos utilizados en tus proyecciones financieras..."
          className="min-h-[200px]"
        />
      </Card>
    </div>
  );
}