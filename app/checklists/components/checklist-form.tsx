"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Textarea } from "@/components/ui/textarea";
import { ChecklistItemForm } from "./checklist-item-form";
import { PlusCircle, Save } from "lucide-react";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  title: z.string().min(1, "El título es requerido"),
  type: z.enum(["opening", "closing", "cleaning", "maintenance"]),
  description: z.string().optional(),
  items: z.array(z.object({
    type: z.enum(["checkbox", "text", "number", "temperature", "photo", "multiselect", "datetime"]),
    label: z.string().min(1, "La etiqueta es requerida"),
    required: z.boolean().default(false),
  })).min(1, "Debe agregar al menos un elemento"),
});

export function ChecklistForm() {
  const router = useRouter();
  const [items, setItems] = useState([{ id: "1", type: "checkbox", label: "", required: false }]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      type: "opening",
      description: "",
      items: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Aquí iría la lógica para guardar el checklist
    console.log(values);
    router.push("/checklists");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título</FormLabel>
                <FormControl>
                  <Input placeholder="Ej: Checklist de Apertura" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="opening">Apertura</SelectItem>
                    <SelectItem value="closing">Cierre</SelectItem>
                    <SelectItem value="cleaning">Limpieza</SelectItem>
                    <SelectItem value="maintenance">Mantenimiento</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describa el propósito de este checklist"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Elementos del Checklist</h3>
            <Button
              type="button"
              variant="outline"
              onClick={() => setItems([...items, { 
                id: String(items.length + 1),
                type: "checkbox",
                label: "",
                required: false
              }])}
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Agregar Elemento
            </Button>
          </div>

          {items.map((item, index) => (
            <Card key={item.id} className="p-4">
              <ChecklistItemForm
                index={index}
                onRemove={() => {
                  const newItems = [...items];
                  newItems.splice(index, 1);
                  setItems(newItems);
                }}
              />
            </Card>
          ))}
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
          >
            Cancelar
          </Button>
          <Button type="submit">
            <Save className="mr-2 h-4 w-4" />
            Guardar Checklist
          </Button>
        </div>
      </form>
    </Form>
  );
}