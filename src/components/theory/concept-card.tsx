import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ConceptCardProps {
  title: string;
  className?: string;
  children: ReactNode;
}

export function ConceptCard({ title, className, children }: ConceptCardProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>
          <h3 className="text-lg">{title}</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
