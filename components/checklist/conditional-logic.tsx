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
import { Condition } from "@/app/types/checklist";

interface ConditionalLogicProps {
  conditions: Condition[];
  onConditionsChange: (conditions: Condition[]) => void;
}

export function ConditionalLogic({ conditions, onConditionsChange }: ConditionalLogicProps) {
  const addCondition = () => {
    onConditionsChange([
      ...conditions,
      { field: "", operator: "equals", value: "" },
    ]);
  };

  const removeCondition = (index: number) => {
    const newConditions = [...conditions];
    newConditions.splice(index, 1);
    onConditionsChange(newConditions);
  };

  const updateCondition = (index: number, field: keyof Condition, value: any) => {
    const newConditions = [...conditions];
    newConditions[index] = { ...newConditions[index], [field]: value };
    onConditionsChange(newConditions);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>Lógica Condicional</Label>
        <Button type="button" variant="outline" onClick={addCondition}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Añadir Condición
        </Button>
      </div>

      {conditions.map((condition, index) => (
        <Card key={index} className="p-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Label>Campo</Label>
              <Input
                value={condition.field}
                onChange={(e) => updateCondition(index, "field", e.target.value)}
                placeholder="Seleccione campo"
              />
            </div>

            <div className="w-48">
              <Label>Operador</Label>
              <Select
                value={condition.operator}
                onValueChange={(value: Condition["operator"]) =>
                  updateCondition(index, "operator", value)
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="equals">Igual a</SelectItem>
                  <SelectItem value="notEquals">Diferente de</SelectItem>
                  <SelectItem value="greaterThan">Mayor que</SelectItem>
                  <SelectItem value="lessThan">Menor que</SelectItem>
                  <SelectItem value="contains">Contiene</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <Label>Valor</Label>
              <Input
                value={condition.value}
                onChange={(e) => updateCondition(index, "value", e.target.value)}
                placeholder="Valor"
              />
            </div>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="mt-6"
              onClick={() => removeCondition(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}