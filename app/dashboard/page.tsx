"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DashboardHeader } from "./components/dashboard-header";
import { DashboardStats } from "./components/dashboard-stats";
import { PendingChecklists } from "./components/pending-checklists";
import { ClipboardCheck, Users, BarChart, Settings } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();

  const quickActions = [
    {
      title: "Nuevo Checklist",
      description: "Crear un nuevo checklist",
      icon: ClipboardCheck,
      href: "/checklists/new",
    },
    {
      title: "Gestionar Usuarios",
      description: "Administrar usuarios del sistema",
      icon: Users,
      href: "/users",
    },
    {
      title: "Ver Informes",
      description: "Consultar estadísticas y reportes",
      icon: BarChart,
      href: "/reports",
    },
    {
      title: "Configuración",
      description: "Ajustar preferencias del sistema",
      icon: Settings,
      href: "/settings",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <div className="container space-y-8 p-8 animate-fade-in">
        <DashboardHeader />
        
        <DashboardStats />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => (
            <Button
              key={action.href}
              variant="outline"
              className="h-auto p-6 flex flex-col items-center gap-4 hover:scale-105 transition-transform"
              onClick={() => router.push(action.href)}
            >
              <action.icon className="h-8 w-8" />
              <div className="text-center">
                <h3 className="font-semibold">{action.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {action.description}
                </p>
              </div>
            </Button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="glass-card p-6 rounded-2xl hover-lift">
            <h2 className="text-xl font-semibold mb-4">Checklists Pendientes</h2>
            <PendingChecklists />
          </div>
          <div className="glass-card p-6 rounded-2xl hover-lift">
            <h2 className="text-xl font-semibold mb-4">Actividad Reciente</h2>
            <div className="text-muted-foreground">
              No hay actividad reciente para mostrar.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}