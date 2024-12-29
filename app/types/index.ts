export type User = {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'supervisor' | 'employee';
};

export type ChecklistItem = {
  id: string;
  type: 'checkbox' | 'text' | 'number' | 'temperature' | 'photo' | 'multiselect' | 'datetime';
  label: string;
  required: boolean;
  value: any;
  conditions?: {
    field: string;
    operator: 'equals' | 'notEquals' | 'greaterThan' | 'lessThan';
    value: any;
  }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    options?: string[];
  };
};

export type Checklist = {
  id: string;
  title: string;
  type: 'opening' | 'closing' | 'cleaning' | 'maintenance';
  items: ChecklistItem[];
  assignedTo?: string;
  dueDate?: Date;
  status: 'pending' | 'in-progress' | 'completed';
  createdAt: Date;
  updatedAt: Date;
};