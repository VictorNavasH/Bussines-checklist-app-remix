"use client";

export const checklistTemplates = {
  opening: {
    id: "opening-template",
    title: "Checklist de Apertura",
    sections: [
      {
        title: "Seguridad y Acceso",
        items: [
          {
            id: "security-1",
            label: "Desactivar sistema de alarma",
            type: "checkbox",
            required: true,
          },
          {
            id: "security-2",
            label: "Verificar cámaras de seguridad",
            type: "checkbox",
            required: true,
          },
        ],
      },
      {
        title: "Equipamiento de Cocina",
        items: [
          {
            id: "kitchen-1",
            label: "Temperatura de cámaras frigoríficas",
            type: "temperature",
            required: true,
            validation: {
              min: 0,
              max: 4,
              unit: "°C",
            },
          },
          {
            id: "kitchen-2",
            label: "Encender equipos principales",
            type: "multiselect",
            required: true,
            options: [
              "Hornos",
              "Planchas",
              "Freidoras",
              "Cámaras frigoríficas",
            ],
          },
        ],
      },
      {
        title: "Limpieza Inicial",
        items: [
          {
            id: "cleaning-1",
            label: "Limpiar superficies de trabajo",
            type: "checkbox",
            required: true,
          },
          {
            id: "cleaning-2",
            label: "Estado general de limpieza",
            type: "photo",
            required: true,
          },
        ],
      },
    ],
  },
  closing: {
    id: "closing-template",
    title: "Checklist de Cierre",
    sections: [
      {
        title: "Limpieza Final",
        items: [
          {
            id: "cleaning-final-1",
            label: "Limpiar y desinfectar todas las superficies",
            type: "checkbox",
            required: true,
          },
          {
            id: "cleaning-final-2",
            label: "Fotografía de áreas críticas",
            type: "photo",
            required: true,
          },
        ],
      },
      {
        title: "Equipos y Seguridad",
        items: [
          {
            id: "equipment-1",
            label: "Apagar y limpiar equipos",
            type: "multiselect",
            required: true,
            options: [
              "Hornos",
              "Planchas",
              "Freidoras",
              "Lavavajillas",
            ],
          },
          {
            id: "security-final-1",
            label: "Activar sistema de alarma",
            type: "checkbox",
            required: true,
          },
        ],
      },
    ],
  },
  maintenance: {
    id: "maintenance-template",
    title: "Checklist de Mantenimiento",
    sections: [
      {
        title: "Equipos de Cocina",
        items: [
          {
            id: "maint-1",
            label: "Revisión de hornos",
            type: "text",
            required: true,
          },
          {
            id: "maint-2",
            label: "Estado de filtros de campana",
            type: "photo",
            required: true,
          },
        ],
      },
      {
        title: "Sistemas de Refrigeración",
        items: [
          {
            id: "maint-3",
            label: "Temperatura de cámaras",
            type: "temperature",
            required: true,
            validation: {
              min: 0,
              max: 4,
              unit: "°C",
            },
          },
          {
            id: "maint-4",
            label: "Limpieza de condensadores",
            type: "checkbox",
            required: true,
          },
        ],
      },
    ],
  },
  hygiene: {
    id: "hygiene-template",
    title: "Checklist de Higiene",
    sections: [
      {
        title: "Higiene Personal",
        items: [
          {
            id: "hygiene-1",
            label: "Uniforme completo y limpio",
            type: "checkbox",
            required: true,
          },
          {
            id: "hygiene-2",
            label: "Lavado de manos",
            type: "datetime",
            required: true,
          },
        ],
      },
      {
        title: "Áreas de Trabajo",
        items: [
          {
            id: "hygiene-3",
            label: "Desinfección de superficies",
            type: "checkbox",
            required: true,
          },
          {
            id: "hygiene-4",
            label: "Control de plagas",
            type: "text",
            required: true,
          },
        ],
      },
    ],
  },
};

export type ChecklistTemplate = typeof checklistTemplates.opening;
export type ChecklistSection = typeof checklistTemplates.opening.sections[0];
export type ChecklistItem = typeof checklistTemplates.opening.sections[0].items[0];