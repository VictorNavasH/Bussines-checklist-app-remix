import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Clock, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Tasa de Completado",
    value: "94%",
    icon: CheckCircle,
    description: "Últimos 30 días",
  },
  {
    title: "Tareas Pendientes",
    value: "12",
    icon: Clock,
    description: "Por completar",
  },
  {
    title: "Incidencias",
    value: "3",
    icon: AlertTriangle,
    description: "Requieren atención",
  },
  {
    title: "Eficiencia",
    value: "+8%",
    icon: TrendingUp,
    description: "vs. mes anterior",
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}