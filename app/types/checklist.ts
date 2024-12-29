export type Condition = {
  field: string;
  operator: 'equals' | 'notEquals' | 'greaterThan' | 'lessThan' | 'contains';
  value: any;
};

export type ValidationRule = {
  min?: number;
  max?: number;
  pattern?: string;
  options?: string[];
  required?: boolean;
  customMessage?: string;
};

export type ChecklistField = {
  id: string;
  type: 'checkbox' | 'text' | 'number' | 'temperature' | 'photo' | 'multiselect' | 'datetime';
  label: string;
  description?: string;
  placeholder?: string;
  defaultValue?: any;
  validation?: ValidationRule;
  conditions?: Condition[];
  actions?: {
    onTrue?: {
      show?: string[];
      hide?: string[];
      setValue?: { field: string; value: any }[];
      notify?: { message: string; type: 'info' | 'warning' | 'error' }[];
    };
    onFalse?: {
      show?: string[];
      hide?: string[];
      setValue?: { field: string; value: any }[];
      notify?: { message: string; type: 'info' | 'warning' | 'error' }[];
    };
  };
};

export type ChecklistSection = {
  id: string;
  title: string;
  description?: string;
  fields: ChecklistField[];
  conditions?: Condition[];
};

export type Checklist = {
  id: string;
  title: string;
  description?: string;
  type: 'opening' | 'closing' | 'cleaning' | 'maintenance';
  sections: ChecklistSection[];
  assignedTo?: string;
  dueDate?: Date;
  status: 'pending' | 'in-progress' | 'completed';
  createdAt: Date;
  updatedAt: Date;
};