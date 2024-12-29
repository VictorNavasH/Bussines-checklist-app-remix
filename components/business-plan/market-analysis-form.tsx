"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { NotionLikeEditor } from "@/components/editor/notion-like-editor";
import { PlanSection } from "./plan-section";

const formSchema = z.object({
  targetMarket: z.string().min(50, "La descripción del mercado objetivo debe tener al menos 50 caracteres"),
  competition: z.string().min(50, "El análisis de la competencia debe tener al menos 50 caracteres"),
  marketingStrategy: z.string().min(50, "La estrategia de marketing debe tener al menos 50 caracteres"),
  swotAnalysis: z.string().min(50, "El análisis DAFO debe tener al menos 50 caracteres"),
});

export function MarketAnalysisForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      targetMarket: "",
      competition: "",
      marketingStrategy: "",
      swotAnalysis: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <PlanSection
          title="Mercado Objetivo"
          description="Define y describe tu mercado objetivo, incluyendo datos demográficos y necesidades específicas."
        >
          <FormField
            control={form.control}
            name="targetMarket"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <NotionLikeEditor
                    content={field.value}
                    onChange={field.onChange}
                    placeholder="Describe tu mercado objetivo..."
                    className="min-h-[200px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </PlanSection>

        <PlanSection
          title="Análisis de la Competencia"
          description="Identifica y analiza tus principales competidores, sus fortalezas y debilidades."
        >
          <FormField
            control={form.control}
            name="competition"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <NotionLikeEditor
                    content={field.value}
                    onChange={field.onChange}
                    placeholder="Analiza tu competencia..."
                    className="min-h-[200px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </PlanSection>

        <PlanSection
          title="Estrategia de Marketing"
          description="Define cómo alcanzarás y atraerás a tus clientes potenciales."
        >
          <FormField
            control={form.control}
            name="marketingStrategy"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <NotionLikeEditor
                    content={field.value}
                    onChange={field.onChange}
                    placeholder="Describe tu estrategia de marketing..."
                    className="min-h-[200px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </PlanSection>

        <PlanSection
          title="Análisis DAFO"
          description="Analiza las Debilidades, Amenazas, Fortalezas y Oportunidades de tu negocio."
        >
          <FormField
            control={form.control}
            name="swotAnalysis"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <NotionLikeEditor
                    content={field.value}
                    onChange={field.onChange}
                    placeholder="Realiza tu análisis DAFO..."
                    className="min-h-[200px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </PlanSection>
      </form>
    </Form>
  );
}