"use client";

import { useState } from "react";
import { useConditionalFields } from "@/lib/hooks/use-conditional-fields";
import { ChecklistField, ChecklistSection } from "@/app/types/checklist";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Camera, Trash2 } from "lucide-react";

interface ConditionalFormProps {
  sections: ChecklistSection[];
  onSubmit: (values: Record<string, any>) => void;
}

export function ConditionalForm({ sections, onSubmit }: ConditionalFormProps) {
  const allFields = sections.flatMap(section => section.fields);
  const {
    values,
    visibleFields,
    notifications,
    handleFieldChange,
    clearNotification
  } = useConditionalFields(allFields);

  const [photos, setPhotos] = useState<Record<string, string>>({});

  const handlePhotoCapture = async (fieldId: string) => {
    // Simular captura de foto
    const mockPhotoUrl = `photo_${Date.now()}.jpg`;
    setPhotos(prev => ({ ...prev, [fieldId]: mockPhotoUrl }));
    handleFieldChange(fieldId, mockPhotoUrl);
  };

  const renderField = (field: ChecklistField) => {
    if (!visibleFields.includes(field.id)) return null;

    switch (field.type) {
      case 'checkbox':
        return (
          <div className="flex items-center space-x-2">
            <Checkbox
              id={field.id}
              checked={values[field.id] || false}
              onCheckedChange={(checked) => handleFieldChange(field.id, checked)}
            />
            <label htmlFor={field.id} className="text-sm font-medium leading-none">
              {field.label}
            </label>
          </div>
        );

      case 'text':
        return (
          <div className="space-y-2">
            <label htmlFor={field.id} className="text-sm font-medium">
              {field.label}
            </label>
            <Input
              id={field.id}
              value={values[field.id] || ''}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
              placeholder={field.placeholder}
            />
          </div>
        );

      case 'number':
      case 'temperature':
        return (
          <div className="space-y-2">
            <label htmlFor={field.id} className="text-sm font-medium">
              {field.label}
            </label>
            <Input
              id={field.id}
              type="number"
              value={values[field.id] || ''}
              onChange={(e) => handleFieldChange(field.id, Number(e.target.value))}
              min={field.validation?.min}
              max={field.validation?.max}
            />
          </div>
        );

      case 'multiselect':
        return (
          <div className="space-y-2">
            <label htmlFor={field.id} className="text-sm font-medium">
              {field.label}
            </label>
            <Select
              value={values[field.id]}
              onValueChange={(value) => handleFieldChange(field.id, value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar..." />
              </SelectTrigger>
              <SelectContent>
                {field.validation?.options?.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );

      case 'photo':
        return (
          <div className="space-y-2">
            <label className="text-sm font-medium">{field.label}</label>
            <div className="flex items-center gap-4">
              {photos[field.id] ? (
                <div className="relative w-32 h-32 bg-muted rounded-lg">
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => {
                      setPhotos(prev => {
                        const newPhotos = { ...prev };
                        delete newPhotos[field.id];
                        return newPhotos;
                      });
                      handleFieldChange(field.id, null);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handlePhotoCapture(field.id)}
                >
                  <Camera className="mr-2 h-4 w-4" />
                  Tomar Foto
                </Button>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(values);
    }}>
      <div className="space-y-6">
        {notifications.map((notification, index) => (
          <Alert key={index} variant={notification.type === 'error' ? 'destructive' : 'default'}>
            <AlertDescription>{notification.message}</AlertDescription>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2"
              onClick={() => clearNotification(index)}
            >
              ×
            </Button>
          </Alert>
        ))}

        {sections.map((section) => (
          <Card key={section.id} className="p-6">
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            {section.description && (
              <p className="text-sm text-muted-foreground mb-4">
                {section.description}
              </p>
            )}
            <div className="space-y-4">
              {section.fields.map((field) => (
                <div key={field.id}>{renderField(field)}</div>
              ))}
            </div>
          </Card>
        ))}

        <div className="flex justify-end">
          <Button type="submit">Guardar Checklist</Button>
        </div>
      </div>
    </form>
  );
}