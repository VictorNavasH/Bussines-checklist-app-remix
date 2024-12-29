"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const pendingChecklists = [
  {
    id: "1",
    title: "Checklist de Apertura",
    type: "apertura",
    assignedTo: "Juan Pérez",
    dueTime: "08:00",
  },
  {
    id: "2",
    title: "Revisión de Equipos",
    type: "mantenimiento",
    assignedTo: "María García",
    dueTime: "10:00",
  },
  {
    id: "3",
    title: "Limpieza de Comedor",
    type: "limpieza",
    assignedTo: "Carlos López",
    dueTime: "14:00",
  },
];

export function PendingChecklists() {
  const router = useRouter();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Título</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Asignado a</TableHead>
          <TableHead>Hora</TableHead>
          <TableHead className="text-right">Acción</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pendingChecklists.map((checklist) => (
          <TableRow key={checklist.id}>
            <TableCell className="font-medium">{checklist.title}</TableCell>
            <TableCell>
              <Badge variant="secondary" className="capitalize">
                {checklist.type}
              </Badge>
            </TableCell>
            <TableCell>{checklist.assignedTo}</TableCell>
            <TableCell>{checklist.dueTime}</TableCell>
            <TableCell className="text-right">
              <Button 
                size="sm" 
                variant="ghost"
                onClick={() => router.push(`/checklists/${checklist.id}`)}
              >
                Ver <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}