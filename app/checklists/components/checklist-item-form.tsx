"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface ChecklistItemFormProps {
  index: number;
  onRemove: () => void;
}

export function ChecklistItemForm({ index, onRemove }: ChecklistItemFormProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium">Elemento #{index + 1}</h4>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-destructive"
          onClick={onRemove}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          name={`items.${index}.type`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de Campo</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un tipo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="checkbox">Casilla de Verificación</SelectItem>
                  <SelectItem value="text">Texto</SelectItem>
                  <SelectItem value="number">Número</SelectItem>
                  <SelectItem value="temperature">Temperatura</SelectItem>
                  <SelectItem value="photo">Foto</SelectItem>
                  <SelectItem value="multiselect">Selección Múltiple</SelectItem>
                  <SelectItem value="datetime">Fecha y Hora</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name={`items.${index}.label`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Etiqueta</FormLabel>
              <FormControl>
                <Input placeholder="Ej: Verificar temperatura" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        name={`items.${index}.required`}
        render={({ field }) => (
          <FormItem className="flex items-center justify-between rounded-lg border p-3">
            <div className="space-y-0.5">
              <FormLabel>Campo Requerido</FormLabel>
              <FormMessage />
            </div>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}