"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NotionLikeEditor } from "@/components/editor/notion-like-editor";

const formSchema = z.object({
  businessName: z.string().min(1, "El nombre es requerido"),
  industry: z.string().min(1, "La industria es requerida"),
  description: z.string().min(50, "La descripción debe tener al menos 50 caracteres"),
  mission: z.string().min(20, "La misión debe tener al menos 20 caracteres"),
  vision: z.string().min(20, "La visión debe tener al menos 20 caracteres"),
  legalStructure: z.string().min(1, "La estructura legal es requerida"),
});

export function BusinessPlanForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      industry: "",
      description: "",
      mission: "",
      vision: "",
      legalStructure: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del Negocio</FormLabel>
              <FormControl>
                <Input placeholder="Mi Empresa S.L." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Industria</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione una industria" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="technology">Tecnología</SelectItem>
                  <SelectItem value="retail">Comercio Minorista</SelectItem>
                  <SelectItem value="manufacturing">Manufactura</SelectItem>
                  <SelectItem value="services">Servicios</SelectItem>
                  <SelectItem value="food">Alimentación</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción del Negocio</FormLabel>
              <FormControl>
                <NotionLikeEditor
                  content={field.value}
                  onChange={field.onChange}
                  placeholder="Describe tu negocio y propuesta de valor..."
                  className="min-h-[200px]"
                />
              </FormControl>
              <FormDescription>
                Describe brevemente tu idea de negocio y propuesta de valor
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="mission"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Misión</FormLabel>
                <FormControl>
                  <NotionLikeEditor
                    content={field.value}
                    onChange={field.onChange}
                    placeholder="Nuestra misión es..."
                    className="min-h-[150px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="vision"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Visión</FormLabel>
                <FormControl>
                  <NotionLikeEditor
                    content={field.value}
                    onChange={field.onChange}
                    placeholder="Nuestra visión es..."
                    className="min-h-[150px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="legalStructure"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estructura Legal</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione una estructura legal" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="sole_proprietorship">Autónomo</SelectItem>
                  <SelectItem value="llc">Sociedad Limitada</SelectItem>
                  <SelectItem value="corporation">Sociedad Anónima</SelectItem>
                  <SelectItem value="cooperative">Cooperativa</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}