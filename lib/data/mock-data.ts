export const mockChecklists = [
  {
    id: "1",
    templateId: "opening-template",
    date: new Date(),
    completedBy: "Juan Pérez",
    status: "completed",
    responses: [
      {
        itemId: "security-1",
        value: true,
        timestamp: new Date(),
      },
      {
        itemId: "kitchen-1",
        value: 2.5,
        timestamp: new Date(),
      },
    ],
  },
  {
    id: "2",
    templateId: "closing-template",
    date: new Date(),
    completedBy: "María García",
    status: "in-progress",
    responses: [],
  },
];

export const mockUsers = [
  {
    id: "1",
    name: "Juan Pérez",
    email: "juan@ejemplo.com",
    role: "admin",
  },
  {
    id: "2",
    name: "María García",
    email: "maria@ejemplo.com",
    role: "supervisor",
  },
];

export const mockStats = {
  totalChecklists: 156,
  completionRate: 94,
  averageTime: 15,
  issuesFound: 8,
  trendingUp: true,
};