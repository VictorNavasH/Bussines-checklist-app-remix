"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const issues = [
  {
    id: "1",
    checklist: "Morning Opening",
    issue: "Equipment malfunction",
    severity: "high",
    date: "2024-03-20",
    status: "open",
  },
  {
    id: "2",
    checklist: "Kitchen Cleaning",
    issue: "Missing supplies",
    severity: "medium",
    date: "2024-03-19",
    status: "resolved",
  },
  {
    id: "3",
    checklist: "Safety Check",
    issue: "Expired items",
    severity: "high",
    date: "2024-03-18",
    status: "in-progress",
  },
];

const severityColors = {
  high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
  low: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
};

const statusColors = {
  open: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
  "in-progress": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
  resolved: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
};

export function IssuesTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Checklist</TableHead>
            <TableHead>Issue</TableHead>
            <TableHead>Severity</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell className="font-medium">{issue.checklist}</TableCell>
              <TableCell>{issue.issue}</TableCell>
              <TableCell>
                <Badge className={severityColors[issue.severity]}>
                  {issue.severity}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge className={statusColors[issue.status]}>
                  {issue.status}
                </Badge>
              </TableCell>
              <TableCell>{issue.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}