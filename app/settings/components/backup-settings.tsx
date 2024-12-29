"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Download, Upload, History } from "lucide-react";

export function BackupSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Copias de Seguridad</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between space-x-2">
          <div className="space-y-1">
            <Label htmlFor="auto-backup">Backup Automático</Label>
            <p className="text-sm text-muted-foreground">
              Realizar copias de seguridad diarias automáticamente
            </p>
          </div>
          <Switch id="auto-backup" />
        </div>
        <div className="flex flex-col gap-2">
          <Button variant="outline" className="justify-start">
            <Download className="mr-2 h-4 w-4" />
            Descargar Backup
          </Button>
          <Button variant="outline" className="justify-start">
            <Upload className="mr-2 h-4 w-4" />
            Restaurar Backup
          </Button>
          <Button variant="outline" className="justify-start">
            <History className="mr-2 h-4 w-4" />
            Historial de Backups
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}