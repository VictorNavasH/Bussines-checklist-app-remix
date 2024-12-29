"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Panel Principal</h1>
        <p className="text-muted-foreground">
          ¡Bienvenido de nuevo! Aquí está el resumen de tu restaurante.
        </p>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonStar className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
}