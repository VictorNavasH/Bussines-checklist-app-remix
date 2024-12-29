"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTheme } from "next-themes";
import { Moon, Sun, Laptop } from "lucide-react";

export function ThemeSettings() {
  const { theme, setTheme } = useTheme();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Apariencia</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          defaultValue={theme}
          onValueChange={(value) => setTheme(value)}
          className="grid grid-cols-3 gap-4"
        >
          <div>
            <RadioGroupItem
              value="light"
              id="light"
              className="peer sr-only"
            />
            <Label
              htmlFor="light"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-checked:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Sun className="mb-2 h-6 w-6" />
              <span className="text-sm font-medium">Claro</span>
            </Label>
          </div>

          <div>
            <RadioGroupItem
              value="dark"
              id="dark"
              className="peer sr-only"
            />
            <Label
              htmlFor="dark"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-gray-950 p-4 hover:bg-gray-900 peer-checked:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Moon className="mb-2 h-6 w-6 text-white" />
              <span className="text-sm font-medium text-white">Oscuro</span>
            </Label>
          </div>

          <div>
            <RadioGroupItem
              value="system"
              id="system"
              className="peer sr-only"
            />
            <Label
              htmlFor="system"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-gradient-to-br from-white to-gray-900 p-4 hover:opacity-90 peer-checked:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Laptop className="mb-2 h-6 w-6" />
              <span className="text-sm font-medium">Sistema</span>
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
}