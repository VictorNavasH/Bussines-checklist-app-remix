"use client";

import { useState, useEffect } from 'react';
import { ChecklistField, Condition } from '@/app/types/checklist';

type FieldValues = Record<string, any>;

export function useConditionalFields(fields: ChecklistField[]) {
  const [values, setValues] = useState<FieldValues>({});
  const [visibleFields, setVisibleFields] = useState<string[]>([]);
  const [notifications, setNotifications] = useState<Array<{
    message: string;
    type: 'info' | 'warning' | 'error';
  }>>([]);

  const evaluateCondition = (condition: Condition, fieldValues: FieldValues): boolean => {
    const fieldValue = fieldValues[condition.field];
    
    switch (condition.operator) {
      case 'equals':
        return fieldValue === condition.value;
      case 'notEquals':
        return fieldValue !== condition.value;
      case 'greaterThan':
        return fieldValue > condition.value;
      case 'lessThan':
        return fieldValue < condition.value;
      case 'contains':
        return Array.isArray(fieldValue) 
          ? fieldValue.includes(condition.value)
          : String(fieldValue).includes(String(condition.value));
      default:
        return false;
    }
  };

  const evaluateFieldVisibility = (field: ChecklistField, fieldValues: FieldValues): boolean => {
    if (!field.conditions || field.conditions.length === 0) {
      return true;
    }

    return field.conditions.every(condition => evaluateCondition(condition, fieldValues));
  };

  const handleFieldChange = (fieldId: string, value: any) => {
    const newValues = { ...values, [fieldId]: value };
    setValues(newValues);

    // Encontrar el campo que cambió
    const changedField = fields.find(f => f.id === fieldId);
    if (!changedField?.actions) return;

    // Evaluar acciones basadas en el valor
    const actions = value ? changedField.actions.onTrue : changedField.actions.onFalse;
    if (!actions) return;

    // Mostrar/ocultar campos
    if (actions.show) {
      setVisibleFields(prev => [...new Set([...prev, ...actions.show!])]);
    }
    if (actions.hide) {
      setVisibleFields(prev => prev.filter(id => !actions.hide!.includes(id)));
    }

    // Establecer valores en otros campos
    if (actions.setValue) {
      const newValueUpdates = actions.setValue.reduce((acc, { field, value }) => ({
        ...acc,
        [field]: value
      }), {});
      setValues(prev => ({ ...prev, ...newValueUpdates }));
    }

    // Mostrar notificaciones
    if (actions.notify) {
      setNotifications(prev => [...prev, ...actions.notify!]);
    }
  };

  useEffect(() => {
    // Calcular campos visibles iniciales
    const initialVisibleFields = fields
      .filter(field => evaluateFieldVisibility(field, values))
      .map(field => field.id);
    
    setVisibleFields(initialVisibleFields);
  }, [fields]);

  return {
    values,
    visibleFields,
    notifications,
    handleFieldChange,
    clearNotification: (index: number) => {
      setNotifications(prev => prev.filter((_, i) => i !== index));
    }
  };
}