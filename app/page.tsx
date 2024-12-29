"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BarChart3, FileText, Users } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight gradient-text">
            Tu Plan de Negocio Profesional
          </h1>
          <p className="text-xl text-muted-foreground">
            Crea, analiza y comparte tu plan de negocio de manera sencilla y profesional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 hover-lift">
            <FileText className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Plan de Negocio</h3>
            <p className="text-muted-foreground mb-4">
              Estructura tu idea de negocio con nuestras plantillas profesionales
            </p>
            <Link href="/plan/new">
              <Button className="w-full">
                Crear Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>

          <Card className="p-6 hover-lift">
            <BarChart3 className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Proyecciones</h3>
            <p className="text-muted-foreground mb-4">
              Analiza la viabilidad financiera de tu proyecto con herramientas avanzadas
            </p>
            <Link href="/financials">
              <Button className="w-full" variant="outline">
                Ver Proyecciones
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>

          <Card className="p-6 hover-lift">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Colaboración</h3>
            <p className="text-muted-foreground mb-4">
              Trabaja en equipo y comparte tu plan con inversores y asesores
            </p>
            <Link href="/team">
              <Button className="w-full" variant="outline">
                Gestionar Equipo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            ¿Por qué elegir nuestra plataforma?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-4">
              <h3 className="font-semibold mb-2">Fácil de Usar</h3>
              <p className="text-sm text-muted-foreground">
                Interfaz intuitiva y guiada paso a paso
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Profesional</h3>
              <p className="text-sm text-muted-foreground">
                Plantillas y formatos probados por expertos
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Colaborativo</h3>
              <p className="text-sm text-muted-foreground">
                Trabajo en equipo en tiempo real
              </p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Análisis Detallado</h3>
              <p className="text-sm text-muted-foreground">
                Herramientas avanzadas de proyección financiera
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}