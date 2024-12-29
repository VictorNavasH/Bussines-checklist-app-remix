"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function NotificationsForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notificaciones</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-notifications">Notificaciones por Email</Label>
            <Switch id="email-notifications" />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="push-notifications">Notificaciones Push</Label>
            <Switch id="push-notifications" />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="reminder-notifications">Recordatorios</Label>
            <Switch id="reminder-notifications" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Frecuencia de Resumen</Label>
          <Select defaultValue="daily">
            <SelectTrigger>
              <SelectValue placeholder="Seleccione frecuencia" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Diario</SelectItem>
              <SelectItem value="weekly">Semanal</SelectItem>
              <SelectItem value="monthly">Mensual</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}