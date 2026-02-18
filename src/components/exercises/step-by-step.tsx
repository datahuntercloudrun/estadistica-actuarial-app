"use client";

import { FormulaDisplay } from "@/components/theory/formula-display";
import type { SolutionStep } from "@/types/exercise";

interface StepByStepProps {
  steps: SolutionStep[];
}

export function StepByStep({ steps }: StepByStepProps) {
  return (
    <div className="relative space-y-8">
      {/* Vertical connecting line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border" />

      {steps.map((step) => (
        <div key={step.order} className="relative pl-12">
          {/* Step number circle */}
          <div className="absolute left-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold text-primary">
            {step.order}
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">{step.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.explanation}</p>

            {step.formula && (
              <FormulaDisplay math={step.formula} block />
            )}

            {step.substitution && (
              <div className="rounded-md bg-muted px-4 py-2">
                <FormulaDisplay math={step.substitution} block />
              </div>
            )}

            {step.result && (
              <div className="inline-block rounded-md border border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1.5 text-sm font-semibold text-emerald-800 dark:text-emerald-200">
                {step.result}
              </div>
            )}

            {step.note && (
              <p className="text-sm italic text-muted-foreground">
                {step.note}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
