"use client";

import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Mon", completion: 92 },
  { date: "Tue", completion: 95 },
  { date: "Wed", completion: 88 },
  { date: "Thu", completion: 94 },
  { date: "Fri", completion: 96 },
  { date: "Sat", completion: 91 },
  { date: "Sun", completion: 93 },
];

const CustomXAxis = ({ className, ...props }) => (
  <XAxis
    {...props}
    className="text-xs"
    tick={{ fill: "hsl(var(--foreground))" }}
    axisLine={{ stroke: "hsl(var(--border))" }}
    tickLine={{ stroke: "hsl(var(--border))" }}
  />
);

const CustomYAxis = ({ className, ...props }) => (
  <YAxis
    {...props}
    className="text-xs"
    tick={{ fill: "hsl(var(--foreground))" }}
    domain={[80, 100]}
    axisLine={{ stroke: "hsl(var(--border))" }}
    tickLine={{ stroke: "hsl(var(--border))" }}
  />
);

export function CompletionChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <CustomXAxis dataKey="date" />
          <CustomYAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--background))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
              fontSize: "0.875rem",
            }}
            cursor={{ stroke: "hsl(var(--muted-foreground))" }}
          />
          <Line
            type="monotone"
            dataKey="completion"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--primary))", strokeWidth: 0 }}
            activeDot={{ 
              fill: "hsl(var(--primary))",
              stroke: "hsl(var(--background))",
              strokeWidth: 2,
              r: 6
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}