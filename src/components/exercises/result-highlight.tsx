import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface ResultHighlightProps {
  label: string;
  value: string;
  unit?: string;
}

export function ResultHighlight({ label, value, unit }: ResultHighlightProps) {
  return (
    <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
      <CardContent className="flex items-center gap-4">
        <CheckCircle2 className="h-8 w-8 shrink-0 text-green-600 dark:text-green-400" />
        <div>
          <p className="text-sm font-medium text-green-800 dark:text-green-200">
            {label}
          </p>
          <p className="text-2xl font-bold text-green-900 dark:text-green-100">
            {value}
          </p>
          {unit && (
            <p className="text-sm text-green-700 dark:text-green-300">
              {unit}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
