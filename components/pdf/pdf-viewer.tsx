"use client";

import { useState, useRef, useEffect } from "react";
import { PdfToolbar } from "./pdf-toolbar";
import { usePdfAnnotations } from "@/lib/hooks/use-pdf-annotations";
import { cn } from "@/lib/utils";

interface PdfViewerProps {
  url: string;
}

export function PdfViewer({ url }: PdfViewerProps) {
  const [selectedTool, setSelectedTool] = useState("hand");
  const [selectedColor, setSelectedColor] = useState("#edadff");
  const { canvasRef, startDrawing, draw, stopDrawing } = usePdfAnnotations();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseleave", stopDrawing);
    };
  }, [startDrawing, draw, stopDrawing]);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.5));

  return (
    <div className="relative min-h-screen bg-background">
      <PdfToolbar
        selectedTool={selectedTool}
        onToolSelect={setSelectedTool}
        selectedColor={selectedColor}
        onColorSelect={setSelectedColor}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className={cn(
          "max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg",
          "transition-transform duration-200",
          selectedTool === "hand" && "cursor-grab active:cursor-grabbing"
        )}>
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ 
              minHeight: "842px",
              transform: `scale(${scale})`,
              transformOrigin: "center top"
            }}
          />
        </div>
      </div>
    </div>
  );
}