import type { ReactNode } from "react";

interface DefinitionBlockProps {
  term: string;
  children: ReactNode;
}

export function DefinitionBlock({ term, children }: DefinitionBlockProps) {
  return (
    <div className="rounded-md border-l-4 border-primary bg-primary/10 p-4">
      <p className="mb-1 font-semibold text-primary">{term}</p>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
