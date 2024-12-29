"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Highlighter,
  Pencil,
  Type,
  Image,
  Eraser,
  Hand,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PdfToolbarProps {
  selectedTool: string;
  onToolSelect: (tool: string) => void;
  selectedColor: string;
  onColorSelect: (color: string) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const tools = [
  { id: "hand", icon: Hand, label: "Mover" },
  { id: "highlight", icon: Highlighter, label: "Resaltar" },
  { id: "draw", icon: Pencil, label: "Dibujar" },
  { id: "text", icon: Type, label: "Texto" },
  { id: "image", icon: Image, label: "Imagen" },
  { id: "eraser", icon: Eraser, label: "Borrar" },
];

const colors = [
  { id: "mauve", value: "#edadff" },
  { id: "sunset", value: "#ffce85" },
  { id: "rose", value: "#ff4797" },
  { id: "turquoise", value: "#02f2d2" },
  { id: "moonstone", value: "#02b1c4" },
  { id: "yinmn", value: "#364f6b" },
];

export function PdfToolbar({
  selectedTool,
  onToolSelect,
  selectedColor,
  onColorSelect,
  onZoomIn,
  onZoomOut,
}: PdfToolbarProps) {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-md border rounded-full shadow-lg p-2 flex items-center gap-2 z-50">
      <div className="flex items-center gap-1">
        {tools.map((tool) => (
          <Button
            key={tool.id}
            variant="ghost"
            size="icon"
            className={cn(
              "rounded-full hover:bg-muted",
              selectedTool === tool.id && "bg-muted"
            )}
            onClick={() => onToolSelect(tool.id)}
            title={tool.label}
          >
            <tool.icon className="h-4 w-4" />
          </Button>
        ))}
      </div>

      <Separator orientation="vertical" className="h-6" />

      <div className="flex items-center gap-1">
        {colors.map((color) => (
          <Button
            key={color.id}
            variant="ghost"
            size="icon"
            className={cn(
              "rounded-full w-6 h-6 p-0",
              selectedColor === color.value && "ring-2 ring-ring ring-offset-2"
            )}
            style={{ backgroundColor: color.value }}
            onClick={() => onColorSelect(color.value)}
          />
        ))}
      </div>

      <Separator orientation="vertical" className="h-6" />

      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={onZoomIn}
          title="Aumentar"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={onZoomOut}
          title="Reducir"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          title="Restablecer"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}