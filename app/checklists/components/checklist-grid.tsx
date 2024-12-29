import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checklist } from "@/app/types";
import { ClipboardCheck, Clock, User, ArrowRight } from "lucide-react";

const checklists: Checklist[] = [
  {
    id: "1",
    title: "Morning Opening Checklist",
    type: "opening",
    items: [],
    status: "pending",
    assignedTo: "John Doe",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Evening Closing Checklist",
    type: "closing",
    items: [],
    status: "in-progress",
    assignedTo: "Sarah Smith",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    title: "Weekly Equipment Maintenance",
    type: "maintenance",
    items: [],
    status: "completed",
    assignedTo: "Mike Johnson",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
  "in-progress": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
  completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
};

export function ChecklistGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {checklists.map((checklist) => (
        <Card key={checklist.id} className="hover:shadow-lg transition-shadow">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <Badge
                variant="secondary"
                className="capitalize"
              >
                {checklist.type}
              </Badge>
              <Badge
                className={statusColors[checklist.status]}
              >
                {checklist.status}
              </Badge>
            </div>
            <CardTitle className="text-xl">{checklist.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="mr-2 h-4 w-4" />
                {checklist.assignedTo}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-2 h-4 w-4" />
                {new Date(checklist.createdAt).toLocaleDateString()}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <ClipboardCheck className="mr-2 h-4 w-4" />
                {checklist.items.length} items
              </div>
            </div>
            <Button className="w-full" variant="outline">
              View Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}