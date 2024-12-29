import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle2 } from "lucide-react";

const metrics = [
  {
    title: "Total Checklists",
    value: "324",
    change: "+12.5%",
    trend: "up",
    description: "vs. previous period",
  },
  {
    title: "Completion Rate",
    value: "94.2%",
    change: "+2.3%",
    trend: "up",
    description: "vs. previous period",
  },
  {
    title: "Average Time",
    value: "18min",
    change: "-5.1%",
    trend: "down",
    description: "vs. previous period",
  },
  {
    title: "Issues Found",
    value: "15",
    change: "-33.2%",
    trend: "down",
    description: "vs. previous period",
  },
];

export function ReportsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            {metric.trend === "up" ? (
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-rose-500" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <span className={metric.trend === "up" ? "text-emerald-500" : "text-rose-500"}>
                {metric.change}
              </span>
              {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}