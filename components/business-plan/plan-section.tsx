import { Card } from "@/components/ui/card";

interface PlanSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function PlanSection({ title, description, children }: PlanSectionProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
      )}
      {children}
    </Card>
  );
}