"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ChecklistField } from "@/app/types/checklist";

interface FieldActionsProps {
  actions: ChecklistField["actions"];
  onActionsChange: (actions: ChecklistField["actions"]) => void;
}

export function FieldActions({ actions, onActionsChange }: FieldActionsProps) {
  const [selectedAction, setSelectedAction] = useState<"onTrue" | "onFalse">("onTrue");

  const addAction = (type: "show" | "hide" | "setValue" | "notify") => {
    const newActions = { ...actions };
    const actionSet = newActions[selectedAction] || {};

    switch (type) {
      case "show":
      case "hide":
        actionSet[type] = [...(actionSet[type] || []), ""];
        break;
      case "setValue":
        actionSet.setValue = [...(actionSet.setValue || []), { field: "", value: "" }];
        break;
      case "notify":
        actionSet.notify = [...(actionSet.notify || []), { message: "", type: "info" }];
        break;
    }

    newActions[selectedAction] = actionSet;
    onActionsChange(newActions);
  };

  const removeAction = (type: string, index: number) => {
    const newActions = { ...actions };
    const actionSet = newActions[selectedAction];
    if (!actionSet) return;

    actionSet[type] = actionSet[type].filter((_, i) => i !== index);
    onActionsChange(newActions);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Select
          value={selectedAction}
          onValueChange={(value: "onTrue" | "onFalse") => setSelectedAction(value)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="onTrue">Cuando es verdadero</SelectItem>
            <SelectItem value="onFalse">Cuando es falso</SelectItem>
          </SelectContent>
        </Select>

        <Button type="button" variant="outline" onClick={() => addAction("show")}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Mostrar Campo
        </Button>

        <Button type="button" variant="outline" onClick={() => addAction("hide")}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Ocultar Campo
        </Button>

        <Button type="button" variant="outline" onClick={() => addAction("notify")}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Notificación
        </Button>
      </div>

      {actions?.[selectedAction]?.show?.map((fieldId, index) => (
        <Card key={`show-${index}`} className="p-4">
          <div className="flex items-center gap-4">
            <Label>Mostrar Campo</Label>
            <Input
              value={fieldId}
              onChange={(e) => {
                const newActions = { ...actions };
                newActions[selectedAction].show[index] = e.target.value;
                onActionsChange(newActions);
              }}
              placeholder="ID del campo"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeAction("show", index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      ))}

      {actions?.[selectedAction]?.hide?.map((fieldId, index) => (
        <Card key={`hide-${index}`} className="p-4">
          <div className="flex items-center gap-4">
            <Label>Ocultar Campo</Label>
            <Input
              value={fieldId}
              onChange={(e) => {
                const newActions = { ...actions };
                newActions[selectedAction].hide[index] = e.target.value;
                onActionsChange(newActions);
              }}
              placeholder="ID del campo"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeAction("hide", index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      ))}

      {actions?.[selectedAction]?.notify?.map((notification, index) => (
        <Card key={`notify-${index}`} className="p-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Label>Mensaje</Label>
              <Input
                value={notification.message}
                onChange={(e) => {
                  const newActions = { ...actions };
                  newActions[selectedAction].notify[index].message = e.target.value;
                  onActionsChange(newActions);
                }}
                placeholder="Mensaje de notificación"
              />
            </div>
            <div className="w-48">
              <Label>Tipo</Label>
              <Select
                value={notification.type}
                onValueChange={(value: "info" | "warning" | "error") => {
                  const newActions = { ...actions };
                  newActions[selectedAction].notify[index].type = value;
                  onActionsChange(newActions);
                }}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="info">Info</SelectItem>
                  <SelectItem value="warning">Advertencia</SelectItem>
                  <SelectItem value="error">Error</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="mt-6"
              onClick={() => removeAction("notify", index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}