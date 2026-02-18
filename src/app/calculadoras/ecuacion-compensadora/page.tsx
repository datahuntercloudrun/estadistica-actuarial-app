"use client";

import { useState } from "react";
import { FormulaDisplay } from "@/components/theory/formula-display";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatNumber } from "@/lib/format";

type Variable = "Ptn" | "Pt" | "N" | "D" | "I" | "E";

const variableLabels: Record<Variable, string> = {
  Ptn: "P(t+n) — Población futura",
  Pt: "P(t) — Población inicial",
  N: "N — Nacimientos",
  D: "D — Defunciones",
  I: "I — Inmigraciones",
  E: "E — Emigraciones",
};

const variableShortLabels: Record<Variable, string> = {
  Ptn: "P(t+n)",
  Pt: "P(t)",
  N: "Nacimientos (N)",
  D: "Defunciones (D)",
  I: "Inmigraciones (I)",
  E: "Emigraciones (E)",
};

function parseNum(val: string): number | null {
  if (val.trim() === "") return null;
  const n = Number(val.replace(/\./g, "").replace(",", "."));
  return isNaN(n) ? null : n;
}

function katexNum(val: string): string {
  const n = parseNum(val);
  if (n === null) return "\\text{?}";
  // Show negative numbers wrapped in parens
  if (n < 0) return `(${formatNumber(n)})`;
  return formatNumber(n);
}

export default function EcuaciónCompensadoraPage() {
  const [solveFor, setSolveFor] = useState<Variable>("Ptn");
  const [values, setValues] = useState<Record<Variable, string>>({
    Ptn: "",
    Pt: "",
    N: "",
    D: "",
    I: "",
    E: "",
  });

  const inputVars = (
    ["Ptn", "Pt", "N", "D", "I", "E"] as Variable[]
  ).filter((v) => v !== solveFor);

  function handleChange(variable: Variable, value: string) {
    setValues((prev) => ({ ...prev, [variable]: value }));
  }

  // Compute the result
  function computeResult(): number | null {
    const nums: Partial<Record<Variable, number>> = {};
    for (const v of inputVars) {
      const n = parseNum(values[v]);
      if (n === null) return null;
      nums[v] = n;
    }

    switch (solveFor) {
      case "Ptn":
        return nums.Pt! + nums.N! - nums.D! + nums.I! - nums.E!;
      case "Pt":
        return nums.Ptn! - nums.N! + nums.D! - nums.I! + nums.E!;
      case "N":
        return nums.Ptn! - nums.Pt! + nums.D! - nums.I! + nums.E!;
      case "D":
        return nums.Pt! + nums.N! - nums.Ptn! + nums.I! - nums.E!;
      case "I":
        return nums.Ptn! - nums.Pt! - nums.N! + nums.D! + nums.E!;
      case "E":
        return nums.Pt! + nums.N! - nums.D! + nums.I! - nums.Ptn!;
      default:
        return null;
    }
  }

  const result = computeResult();

  // Intermediate results
  const pt = parseNum(values.Pt);
  const n = parseNum(values.N);
  const d = parseNum(values.D);
  const i = parseNum(values.I);
  const e = parseNum(values.E);
  const ptn = parseNum(values.Ptn);

  const crecVegetativo =
    n !== null && d !== null ? n - d : null;
  const saldoMigratorio =
    i !== null && e !== null ? i - e : null;
  const crecTotal =
    crecVegetativo !== null && saldoMigratorio !== null
      ? crecVegetativo + saldoMigratorio
      : null;

  // Build substituted fórmula
  function buildSubstituted(): string {
    if (solveFor === "Ptn") {
      return `P(t+n) = ${katexNum(values.Pt)} + ${katexNum(values.N)} - ${katexNum(values.D)} + ${katexNum(values.I)} - ${katexNum(values.E)}`;
    }
    if (solveFor === "Pt") {
      return `P(t) = ${katexNum(values.Ptn)} - ${katexNum(values.N)} + ${katexNum(values.D)} - ${katexNum(values.I)} + ${katexNum(values.E)}`;
    }
    if (solveFor === "N") {
      return `N = ${katexNum(values.Ptn)} - ${katexNum(values.Pt)} + ${katexNum(values.D)} - ${katexNum(values.I)} + ${katexNum(values.E)}`;
    }
    if (solveFor === "D") {
      return `D = ${katexNum(values.Pt)} + ${katexNum(values.N)} - ${katexNum(values.Ptn)} + ${katexNum(values.I)} - ${katexNum(values.E)}`;
    }
    if (solveFor === "I") {
      return `I = ${katexNum(values.Ptn)} - ${katexNum(values.Pt)} - ${katexNum(values.N)} + ${katexNum(values.D)} + ${katexNum(values.E)}`;
    }
    // E
    return `E = ${katexNum(values.Pt)} + ${katexNum(values.N)} - ${katexNum(values.D)} + ${katexNum(values.I)} - ${katexNum(values.Ptn)}`;
  }

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Ecuación Compensadora
        </h1>
        <p className="text-muted-foreground mt-2">
          Calcula cualquier variable de la ecuación fundamental de la dinámica
          poblacional.
        </p>
      </div>

      {/* General Fórmula */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Fórmula general</CardTitle>
        </CardHeader>
        <CardContent>
          <FormulaDisplay
            math="P(t+n) = P(t) + N - D + I - E"
            block
          />
          <p className="text-sm text-muted-foreground text-center mt-1">
            donde N = nacimientos, D = defunciones, I = inmigraciones, E =
            emigraciones
          </p>
        </CardContent>
      </Card>

      {/* Solve-for selector */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">
            Variable a calcular
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select
            value={solveFor}
            onValueChange={(v) => setSolveFor(v as Variable)}
          >
            <SelectTrigger className="w-full max-w-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {(Object.keys(variableLabels) as Variable[]).map((v) => (
                <SelectItem key={v} value={v}>
                  {variableLabels[v]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Input Fields */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Datos de entrada</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inputVars.map((v) => (
              <div key={v} className="space-y-1.5">
                <Label htmlFor={v}>{variableShortLabels[v]}</Label>
                <Input
                  id={v}
                  type="text"
                  inputMode="numeric"
                  placeholder="0"
                  value={values[v]}
                  onChange={(ev) => handleChange(v, ev.target.value)}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Substituted Fórmula */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">
            Fórmula con valores sustituidos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormulaDisplay math={buildSubstituted()} block />
        </CardContent>
      </Card>

      {/* Result */}
      <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-blue-800 dark:text-blue-200">
            Resultado
          </CardTitle>
        </CardHeader>
        <CardContent>
          {result !== null ? (
            <div className="text-center">
              <FormulaDisplay
                math={`\\boxed{${variableLabels[solveFor].split("—")[0].trim()} = ${formatNumber(result)}}`}
                block
              />
            </div>
          ) : (
            <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
              Introduce todos los datos para obtener el resultado.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Intermediate Results */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Resultados intermedios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            {/* Crecimiento vegetativo */}
            <div className="rounded-lg border p-4 text-center space-y-1">
              <p className="text-xs text-muted-foreground font-medium">
                Crecimiento Vegetativo
              </p>
              <FormulaDisplay math="CV = N - D" />
              {crecVegetativo !== null ? (
                <p className="text-xl font-bold">
                  {formatNumber(crecVegetativo)}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">---</p>
              )}
            </div>
            {/* Saldo migratorio */}
            <div className="rounded-lg border p-4 text-center space-y-1">
              <p className="text-xs text-muted-foreground font-medium">
                Saldo Migratorio
              </p>
              <FormulaDisplay math="SM = I - E" />
              {saldoMigratorio !== null ? (
                <p className="text-xl font-bold">
                  {formatNumber(saldoMigratorio)}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">---</p>
              )}
            </div>
            {/* Crecimiento total */}
            <div className="rounded-lg border p-4 text-center space-y-1">
              <p className="text-xs text-muted-foreground font-medium">
                Crecimiento Total
              </p>
              <FormulaDisplay math="CT = CV + SM" />
              {crecTotal !== null ? (
                <p className="text-xl font-bold">
                  {formatNumber(crecTotal)}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">---</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
