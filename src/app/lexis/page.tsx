"use client";

import { useState, useCallback } from "react";
import { LexisDiagram } from "@/components/lexis/lexis-diagram";
import { LexisLegend } from "@/components/lexis/lexis-legend";
import type { LexisLegendItem } from "@/components/lexis/lexis-legend";
import type {
  LexisConfig,
  LexisLifeLine,
  LexisSurface,
  LexisStockLine,
  SurfaceType,
} from "@/types/lexis";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

/* -------------------------------------------------------------------------- */
/*  Colour palette                                                            */
/* -------------------------------------------------------------------------- */

const COLORS = [
  "#3b82f6",
  "#ef4444",
  "#22c55e",
  "#f59e0b",
  "#8b5cf6",
  "#ec4899",
  "#14b8a6",
  "#f97316",
];

/* -------------------------------------------------------------------------- */
/*  Surface-type labels (Spanish)                                             */
/* -------------------------------------------------------------------------- */

const SURFACE_LABELS: Record<SurfaceType, string> = {
  "edad-período": "Edad-Periodo",
  "período-cohorte": "Periodo-Cohorte",
  "cohorte-edad": "Cohorte-Edad",
  "triangulo-sup": "Triangulo superior",
  "triangulo-inf": "Triangulo inferior",
};

const STOCK_LABELS: Record<string, string> = {
  vertical: "Vertical (stock a 1 de enero)",
  horizontal: "Horizontal (cohorte cumple edad)",
  diagonal: "Diagonal (cohorte durante período)",
};

/* -------------------------------------------------------------------------- */
/*  Pre-built example configs                                                 */
/* -------------------------------------------------------------------------- */

interface Example {
  name: string;
  description: string;
  config: Partial<LexisConfig>;
  lifelines: LexisLifeLine[];
  surfaces: LexisSurface[];
  stockLines: LexisStockLine[];
}

const EXAMPLES: Example[] = [
  {
    name: "Líneas de vida 1996-1999",
    description: "Cuatro generaciones con líneas de vida diagonales",
    config: { startYear: 1996, endYear: 2002, minAge: 0, maxAge: 6 },
    lifelines: [
      { cohort: 1996, color: "#3b82f6" },
      { cohort: 1997, color: "#ef4444" },
      { cohort: 1998, color: "#22c55e" },
      { cohort: 1999, color: "#f59e0b" },
    ],
    surfaces: [],
    stockLines: [],
  },
  {
    name: "Superficies edad-período",
    description: "Rectangulo edad-período, paralelogramo período-cohorte y cohorte-edad",
    config: { startYear: 1996, endYear: 2002, minAge: 0, maxAge: 6 },
    lifelines: [],
    surfaces: [
      { type: "edad-período", year: 1998, age: 2, color: "#3b82f6", opacity: 0.35, label: "EP(1998,2)" },
      { type: "período-cohorte", year: 1999, age: 3, color: "#22c55e", opacity: 0.35, label: "PC(1999,3)" },
      { type: "cohorte-edad", year: 2000, age: 1, color: "#f59e0b", opacity: 0.35, label: "CE(2000,1)" },
    ],
    stockLines: [],
  },
  {
    name: "Triangulos superior e inferior",
    description: "Los dos triangulos que forman un cuadrado de Lexis",
    config: { startYear: 1996, endYear: 2001, minAge: 0, maxAge: 5 },
    lifelines: [],
    surfaces: [
      { type: "triangulo-sup", year: 1998, age: 2, color: "#8b5cf6", opacity: 0.4, label: "Tri. sup" },
      { type: "triangulo-inf", year: 1998, age: 2, color: "#ec4899", opacity: 0.4, label: "Tri. inf" },
    ],
    stockLines: [],
  },
  {
    name: "Stocks y flujos",
    description: "Líneas de stock con una superficie para visualizar flujos",
    config: { startYear: 1996, endYear: 2001, minAge: 0, maxAge: 5 },
    lifelines: [],
    surfaces: [
      { type: "edad-período", year: 1998, age: 2, color: "#3b82f6", opacity: 0.25, label: "Flujo EP" },
    ],
    stockLines: [
      { type: "vertical", year: 1998, age: 2, endYear: 1998, endAge: 3, color: "#ef4444", label: "Stock 1/1/1998, edad 2-3", thickness: 3 },
      { type: "horizontal", year: 1998, age: 2, endYear: 1999, endAge: 2, color: "#22c55e", label: "Cohorte cumple 2 años", thickness: 3 },
      { type: "diagonal", year: 1998, age: 2, endYear: 1999, endAge: 3, color: "#f59e0b", label: "Generación 1996 (2->3)", thickness: 3 },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Page component                                                            */
/* -------------------------------------------------------------------------- */

export default function LexisPage() {
  /* ---- Diagram range state ---- */
  const [startYear, setStartYear] = useState(1996);
  const [endYear, setEndYear] = useState(2001);
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(5);

  /* ---- Overlay state ---- */
  const [lifelines, setLifelines] = useState<LexisLifeLine[]>([]);
  const [surfaces, setSurfaces] = useState<LexisSurface[]>([]);
  const [stockLines, setStockLines] = useState<LexisStockLine[]>([]);

  /* ---- Display toggles ---- */
  const [showGrid, setShowGrid] = useState(true);
  const [showLifelines, setShowLifelines] = useState(true);

  /* ---- Add-lifeline form state ---- */
  const [llCohort, setLlCohort] = useState(1997);
  const [llColor, setLlColor] = useState(COLORS[0]);

  /* ---- Add-surface form state ---- */
  const [sfType, setSfType] = useState<SurfaceType>("edad-período");
  const [sfYear, setSfYear] = useState(1998);
  const [sfAge, setSfAge] = useState(2);
  const [sfColor, setSfColor] = useState(COLORS[1]);

  /* ---- Add-stockline form state ---- */
  const [slType, setSlType] = useState<"vertical" | "horizontal" | "diagonal">("vertical");
  const [slYear, setSlYear] = useState(1998);
  const [slAge, setSlAge] = useState(2);
  const [slEndYear, setSlEndYear] = useState(1998);
  const [slEndAge, setSlEndAge] = useState(3);
  const [slColor, setSlColor] = useState(COLORS[2]);

  /* ---- Helpers ---- */
  const nextColor = useCallback(
    (existing: number) => COLORS[existing % COLORS.length],
    []
  );

  const handleAddLifeline = () => {
    setLifelines((prev) => [...prev, { cohort: llCohort, color: llColor }]);
    setLlColor(nextColor(lifelines.length + 1));
  };

  const handleAddSurface = () => {
    setSurfaces((prev) => [
      ...prev,
      {
        type: sfType,
        year: sfYear,
        age: sfAge,
        color: sfColor,
        opacity: 0.35,
        label: `${SURFACE_LABELS[sfType]} (${sfYear}, ${sfAge})`,
      },
    ]);
    setSfColor(nextColor(surfaces.length + 1));
  };

  const handleAddStockLine = () => {
    setStockLines((prev) => [
      ...prev,
      {
        type: slType,
        year: slYear,
        age: slAge,
        endYear: slEndYear,
        endAge: slEndAge,
        color: slColor,
        label: `${STOCK_LABELS[slType].split(" (")[0]} (${slYear},${slAge})->(${slEndYear},${slEndAge})`,
        thickness: 3,
      },
    ]);
    setSlColor(nextColor(stockLines.length + 1));
  };

  const handleReset = () => {
    setLifelines([]);
    setSurfaces([]);
    setStockLines([]);
  };

  const handleLoadExample = (ex: Example) => {
    if (ex.config.startYear !== undefined) setStartYear(ex.config.startYear);
    if (ex.config.endYear !== undefined) setEndYear(ex.config.endYear);
    if (ex.config.minAge !== undefined) setMinAge(ex.config.minAge);
    if (ex.config.maxAge !== undefined) setMaxAge(ex.config.maxAge);
    setLifelines(ex.lifelines);
    setSurfaces(ex.surfaces);
    setStockLines(ex.stockLines);
  };

  /* ---- Build config ---- */
  const config: LexisConfig = {
    startYear,
    endYear,
    minAge,
    maxAge,
    lifelines,
    surfaces,
    stockLines,
    showGrid,
    showLifelines,
  };

  /* ---- Build legend items ---- */
  const legendItems: LexisLegendItem[] = [
    ...lifelines.map((ll) => ({
      color: ll.color,
      label: `Generación ${ll.cohort}`,
      type: "lifeline" as const,
    })),
    ...surfaces.map((sf) => ({
      color: sf.color,
      label: sf.label ?? `${SURFACE_LABELS[sf.type]} (${sf.year}, ${sf.age})`,
      type: "surface" as const,
    })),
    ...stockLines.map((sl) => ({
      color: sl.color,
      label: sl.label ?? `${STOCK_LABELS[sl.type].split(" (")[0]}`,
      type: "line" as const,
    })),
  ];

  /* ---- Remove helpers ---- */
  const removeLifeline = (idx: number) =>
    setLifelines((prev) => prev.filter((_, i) => i !== idx));
  const removeSurface = (idx: number) =>
    setSurfaces((prev) => prev.filter((_, i) => i !== idx));
  const removeStockLine = (idx: number) =>
    setStockLines((prev) => prev.filter((_, i) => i !== idx));

  /* ------------------------------------------------------------------ */
  /*  Render                                                             */
  /* ------------------------------------------------------------------ */

  return (
    <div className="space-y-6 max-w-7xl">
      {/* Page title */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Diagrama de Lexis interactivo
        </h1>
        <p className="text-muted-foreground mt-1">
          Construye y explora diagramas de Lexis paso a paso. Anade líneas de
          vida, superficies y líneas de stock para entender como se representan
          los fenómenos demográficos.
        </p>
      </div>

      {/* Pre-built examples bar */}
      <div className="flex flex-wrap gap-2">
        <span className="text-sm font-medium text-muted-foreground self-center mr-1">
          Ejemplos:
        </span>
        {EXAMPLES.map((ex) => (
          <Button
            key={ex.name}
            variant="outline"
            size="sm"
            onClick={() => handleLoadExample(ex)}
            title={ex.description}
          >
            {ex.name}
          </Button>
        ))}
      </div>

      {/* Main grid: controls + diagram */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* ============ CONTROLS (left column) ============ */}
        <div className="md:col-span-1 space-y-4">
          {/* --- Rango de años --- */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Rango de años</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="startYear" className="text-xs">
                    Inicio
                  </Label>
                  <Input
                    id="startYear"
                    type="number"
                    value={startYear}
                    onChange={(e) => setStartYear(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="endYear" className="text-xs">
                    Fin
                  </Label>
                  <Input
                    id="endYear"
                    type="number"
                    value={endYear}
                    onChange={(e) => setEndYear(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* --- Rango de edades --- */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Rango de edades</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="minAge" className="text-xs">
                    Edad minima
                  </Label>
                  <Input
                    id="minAge"
                    type="number"
                    value={minAge}
                    onChange={(e) => setMinAge(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="maxAge" className="text-xs">
                    Edad maxima
                  </Label>
                  <Input
                    id="maxAge"
                    type="number"
                    value={maxAge}
                    onChange={(e) => setMaxAge(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* --- Opciones de visualizacion --- */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Visualizacion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showGrid}
                  onChange={(e) => setShowGrid(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 accent-primary"
                />
                <span className="text-sm">Mostrar cuadricula</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showLifelines}
                  onChange={(e) => setShowLifelines(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 accent-primary"
                />
                <span className="text-sm">Mostrar líneas de vida</span>
              </label>
            </CardContent>
          </Card>

          {/* --- Anadir linea de vida --- */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Anadir linea de vida</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label htmlFor="llCohort" className="text-xs">
                  Ano de cohorte (generación)
                </Label>
                <Input
                  id="llCohort"
                  type="number"
                  value={llCohort}
                  onChange={(e) => setLlCohort(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <Label htmlFor="llColor" className="text-xs">
                    Color
                  </Label>
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      id="llColor"
                      type="color"
                      value={llColor}
                      onChange={(e) => setLlColor(e.target.value)}
                      className="h-9 w-12 cursor-pointer rounded border border-input p-0.5"
                    />
                    <span className="text-xs text-muted-foreground font-mono">
                      {llColor}
                    </span>
                  </div>
                </div>
                <Button size="sm" onClick={handleAddLifeline}>
                  Anadir
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* --- Anadir superficie --- */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Anadir superficie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label className="text-xs">Tipo</Label>
                <Select
                  value={sfType}
                  onValueChange={(v) => setSfType(v as SurfaceType)}
                >
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {(Object.keys(SURFACE_LABELS) as SurfaceType[]).map((t) => (
                      <SelectItem key={t} value={t}>
                        {SURFACE_LABELS[t]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="sfYear" className="text-xs">
                    Ano
                  </Label>
                  <Input
                    id="sfYear"
                    type="number"
                    value={sfYear}
                    onChange={(e) => setSfYear(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="sfAge" className="text-xs">
                    Edad
                  </Label>
                  <Input
                    id="sfAge"
                    type="number"
                    value={sfAge}
                    onChange={(e) => setSfAge(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <Label htmlFor="sfColor" className="text-xs">
                    Color
                  </Label>
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      id="sfColor"
                      type="color"
                      value={sfColor}
                      onChange={(e) => setSfColor(e.target.value)}
                      className="h-9 w-12 cursor-pointer rounded border border-input p-0.5"
                    />
                    <span className="text-xs text-muted-foreground font-mono">
                      {sfColor}
                    </span>
                  </div>
                </div>
                <Button size="sm" onClick={handleAddSurface}>
                  Anadir
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* --- Anadir linea de stock --- */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Anadir linea de stock</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label className="text-xs">Tipo</Label>
                <Select
                  value={slType}
                  onValueChange={(v) =>
                    setSlType(v as "vertical" | "horizontal" | "diagonal")
                  }
                >
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {(
                      Object.keys(STOCK_LABELS) as (
                        | "vertical"
                        | "horizontal"
                        | "diagonal"
                      )[]
                    ).map((t) => (
                      <SelectItem key={t} value={t}>
                        {STOCK_LABELS[t]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="slYear" className="text-xs">
                    Ano inicio
                  </Label>
                  <Input
                    id="slYear"
                    type="number"
                    value={slYear}
                    onChange={(e) => setSlYear(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="slAge" className="text-xs">
                    Edad inicio
                  </Label>
                  <Input
                    id="slAge"
                    type="number"
                    value={slAge}
                    onChange={(e) => setSlAge(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="slEndYear" className="text-xs">
                    Ano fin
                  </Label>
                  <Input
                    id="slEndYear"
                    type="number"
                    value={slEndYear}
                    onChange={(e) => setSlEndYear(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="slEndAge" className="text-xs">
                    Edad fin
                  </Label>
                  <Input
                    id="slEndAge"
                    type="number"
                    value={slEndAge}
                    onChange={(e) => setSlEndAge(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <Label htmlFor="slColor" className="text-xs">
                    Color
                  </Label>
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      id="slColor"
                      type="color"
                      value={slColor}
                      onChange={(e) => setSlColor(e.target.value)}
                      className="h-9 w-12 cursor-pointer rounded border border-input p-0.5"
                    />
                    <span className="text-xs text-muted-foreground font-mono">
                      {slColor}
                    </span>
                  </div>
                </div>
                <Button size="sm" onClick={handleAddStockLine}>
                  Anadir
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* --- Reset --- */}
          <Button
            variant="destructive"
            className="w-full"
            onClick={handleReset}
            disabled={
              lifelines.length === 0 &&
              surfaces.length === 0 &&
              stockLines.length === 0
            }
          >
            Limpiar todo
          </Button>
        </div>

        {/* ============ DIAGRAM + LEGEND (right column) ============ */}
        <div className="md:col-span-2 space-y-4">
          <Card>
            <CardContent className="pt-6">
              <LexisDiagram
                config={config}
                className="w-full"
              />
            </CardContent>
          </Card>

          {/* Active overlays summary */}
          {(lifelines.length > 0 ||
            surfaces.length > 0 ||
            stockLines.length > 0) && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Elementos activos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Lifelines */}
                {lifelines.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1.5">
                      Líneas de vida
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {lifelines.map((ll, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="gap-1.5 pr-1 cursor-pointer hover:bg-destructive/10 transition-colors"
                          onClick={() => removeLifeline(idx)}
                          title="Clic para eliminar"
                        >
                          <span
                            className="inline-block w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: ll.color }}
                          />
                          Gen. {ll.cohort}
                          <span className="text-muted-foreground ml-0.5">x</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Surfaces */}
                {surfaces.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1.5">
                      Superficies
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {surfaces.map((sf, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="gap-1.5 pr-1 cursor-pointer hover:bg-destructive/10 transition-colors"
                          onClick={() => removeSurface(idx)}
                          title="Clic para eliminar"
                        >
                          <span
                            className="inline-block w-2.5 h-2.5 rounded-sm"
                            style={{ backgroundColor: sf.color }}
                          />
                          {SURFACE_LABELS[sf.type]} ({sf.year},{sf.age})
                          <span className="text-muted-foreground ml-0.5">x</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stock lines */}
                {stockLines.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1.5">
                      Líneas de stock
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {stockLines.map((sl, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="gap-1.5 pr-1 cursor-pointer hover:bg-destructive/10 transition-colors"
                          onClick={() => removeStockLine(idx)}
                          title="Clic para eliminar"
                        >
                          <span
                            className="inline-block w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: sl.color }}
                          />
                          {sl.type} ({sl.year},{sl.age})-&gt;({sl.endYear},{sl.endAge})
                          <span className="text-muted-foreground ml-0.5">x</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Legend */}
          {legendItems.length > 0 && (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Leyenda</CardTitle>
              </CardHeader>
              <CardContent>
                <LexisLegend items={legendItems} />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
