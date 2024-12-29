"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BusinessPlanForm } from "@/components/business-plan/business-plan-form";
import { MarketAnalysisForm } from "@/components/business-plan/market-analysis-form";
import { FinancialProjectionsForm } from "@/components/business-plan/financial-projections-form";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Save } from "lucide-react";
import { useRouter } from "next/navigation";

const steps = [
  { id: "basics", title: "Información Básica" },
  { id: "market", title: "Análisis de Mercado" },
  { id: "financials", title: "Proyecciones Financieras" },
];

export default function NewPlanPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSave = () => {
    // Aquí iría la lógica para guardar el plan
    router.push("/dashboard");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Crear Nuevo Plan</h1>
            <p className="text-muted-foreground">
              Complete la información paso a paso
            </p>
          </div>
          <Button variant="outline" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
        </div>

        <Card className="p-6">
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span>Progreso</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Tabs value={steps[currentStep].id} className="space-y-6">
            <TabsList className="grid grid-cols-3 w-full">
              {steps.map((step, index) => (
                <TabsTrigger
                  key={step.id}
                  value={step.id}
                  disabled={index !== currentStep}
                >
                  {step.title}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="basics">
              <BusinessPlanForm />
            </TabsContent>

            <TabsContent value="market">
              <MarketAnalysisForm />
            </TabsContent>

            <TabsContent value="financials">
              <FinancialProjectionsForm />
            </TabsContent>
          </Tabs>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Anterior
            </Button>

            <div className="space-x-2">
              <Button variant="outline" onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Guardar Borrador
              </Button>
              {currentStep < steps.length - 1 ? (
                <Button onClick={handleNext}>
                  Siguiente
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSave}>
                  Finalizar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}