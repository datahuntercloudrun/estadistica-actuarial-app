"use client";

import { useState } from "react";
import { FormulaDisplay } from "@/components/theory/formula-display";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatNumber, formatRate } from "@/lib/format";

/* ---------------------------------------------------------------------------
   Helpers
--------------------------------------------------------------------------- */

function parseNum(val: string): number | null {
  if (val.trim() === "") return null;
  const n = Number(val.replace(/\./g, "").replace(",", "."));
  return isNaN(n) ? null : n;
}

function kn(val: string): string {
  const n = parseNum(val);
  return n === null ? "\\text{?}" : formatNumber(n);
}

function ResultBox({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border-2 border-green-300 bg-green-50 p-4 dark:border-green-700 dark:bg-green-950">
      <p className="text-xs font-medium text-green-700 dark:text-green-300 mb-1">
        {label}
      </p>
      {children}
    </div>
  );
}

function EmptyResult() {
  return (
    <p className="text-sm text-muted-foreground italic">
      Introduce todos los datos para obtener el resultado.
    </p>
  );
}

/* ===========================================================================
   TAB: Saldo Migratorio
=========================================================================== */

function TabSaldo() {
  const [inmigraciones, setInmigraciones] = useState("");
  const [emigraciones, setEmigraciones] = useState("");

  const I = parseNum(inmigraciones);
  const E = parseNum(emigraciones);
  const sm = I !== null && E !== null ? I - E : null;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Saldo Migratorio (SM)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormulaDisplay math="SM = I - E" block />
          <p className="text-sm text-muted-foreground text-center">
            I = inmigraciones, E = emigraciones
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Inmigraciones (I)</Label>
              <Input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={inmigraciones}
                onChange={(e) => setInmigraciones(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Emigraciones (E)</Label>
              <Input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={emigraciones}
                onChange={(e) => setEmigraciones(e.target.value)}
              />
            </div>
          </div>

          <FormulaDisplay
            math={`SM = ${kn(inmigraciones)} - ${kn(emigraciones)}`}
            block
          />

          {sm !== null ? (
            <ResultBox label="Resultado">
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                SM = {formatNumber(sm)}
              </p>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                {sm > 0
                  ? "Saldo positivo: llegan más personas de las que se van."
                  : sm < 0
                    ? "Saldo negativo: se van más personas de las que llegan."
                    : "Saldo nulo: el flujo de entrada y salida esta equilibrado."}
              </p>
            </ResultBox>
          ) : (
            <EmptyResult />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

/* ===========================================================================
   TAB: TBI
=========================================================================== */

function TabTBI() {
  const [inmigraciones, setInmigraciones] = useState("");
  const [población, setPoblación] = useState("");

  const I = parseNum(inmigraciones);
  const P = parseNum(población);
  const tbi = I !== null && P !== null && P !== 0 ? (I / P) * 1000 : null;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">
            Tasa Bruta de Inmigración (TBI)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormulaDisplay
            math="TBI = \\frac{I}{\\bar{P}} \\times 1000"
            block
          />
          <p className="text-sm text-muted-foreground text-center">
            I = inmigraciones, P = población media
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Inmigraciones (I)</Label>
              <Input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={inmigraciones}
                onChange={(e) => setInmigraciones(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Población media (P)</Label>
              <Input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={población}
                onChange={(e) => setPoblación(e.target.value)}
              />
            </div>
          </div>

          <FormulaDisplay
            math={`TBI = \\frac{${kn(inmigraciones)}}{${kn(población)}} \\times 1000`}
            block
          />

          {tbi !== null ? (
            <ResultBox label="Resultado">
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                TBI = {formatRate(tbi)}
              </p>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                {formatNumber(tbi, 2)} inmigrantes por cada 1.000 habitantes.
              </p>
            </ResultBox>
          ) : (
            <EmptyResult />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

/* ===========================================================================
   TAB: TBE
=========================================================================== */

function TabTBE() {
  const [emigraciones, setEmigraciones] = useState("");
  const [población, setPoblación] = useState("");

  const E = parseNum(emigraciones);
  const P = parseNum(población);
  const tbe = E !== null && P !== null && P !== 0 ? (E / P) * 1000 : null;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">
            Tasa Bruta de Emigración (TBE)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormulaDisplay
            math="TBE = \\frac{E}{\\bar{P}} \\times 1000"
            block
          />
          <p className="text-sm text-muted-foreground text-center">
            E = emigraciones, P = población media
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Emigraciones (E)</Label>
              <Input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={emigraciones}
                onChange={(e) => setEmigraciones(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Población media (P)</Label>
              <Input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={población}
                onChange={(e) => setPoblación(e.target.value)}
              />
            </div>
          </div>

          <FormulaDisplay
            math={`TBE = \\frac{${kn(emigraciones)}}{${kn(población)}} \\times 1000`}
            block
          />

          {tbe !== null ? (
            <ResultBox label="Resultado">
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                TBE = {formatRate(tbe)}
              </p>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                {formatNumber(tbe, 2)} emigrantes por cada 1.000 habitantes.
              </p>
            </ResultBox>
          ) : (
            <EmptyResult />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

/* ===========================================================================
   TAB: Tasa Neta de Migración
=========================================================================== */

function TabTNM() {
  const [modo, setModo] = useState<"sm" | "ie">("ie");
  const [smInput, setSmInput] = useState("");
  const [inmigraciones, setInmigraciones] = useState("");
  const [emigraciones, setEmigraciones] = useState("");
  const [población, setPoblación] = useState("");

  const P = parseNum(población);
  let sm: number | null = null;
  if (modo === "sm") {
    sm = parseNum(smInput);
  } else {
    const I = parseNum(inmigraciones);
    const E = parseNum(emigraciones);
    sm = I !== null && E !== null ? I - E : null;
  }
  const tnm = sm !== null && P !== null && P !== 0 ? (sm / P) * 1000 : null;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">
            Tasa Neta de Migración (TNM)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormulaDisplay
            math="TNM = \\frac{SM}{\\bar{P}} \\times 1000 = \\frac{I - E}{\\bar{P}} \\times 1000"
            block
          />

          <div className="flex gap-2">
            <Button
              variant={modo === "ie" ? "default" : "outline"}
              size="sm"
              onClick={() => setModo("ie")}
            >
              Introducir I y E
            </Button>
            <Button
              variant={modo === "sm" ? "default" : "outline"}
              size="sm"
              onClick={() => setModo("sm")}
            >
              Introducir SM directamente
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {modo === "ie" ? (
              <>
                <div className="space-y-1.5">
                  <Label>Inmigraciones (I)</Label>
                  <Input
                    type="text"
                    inputMode="numeric"
                    placeholder="0"
                    value={inmigraciones}
                    onChange={(e) => setInmigraciones(e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>Emigraciones (E)</Label>
                  <Input
                    type="text"
                    inputMode="numeric"
                    placeholder="0"
                    value={emigraciones}
                    onChange={(e) => setEmigraciones(e.target.value)}
                  />
                </div>
              </>
            ) : (
              <div className="space-y-1.5">
                <Label>Saldo Migratorio (SM)</Label>
                <Input
                  type="text"
                  inputMode="numeric"
                  placeholder="0"
                  value={smInput}
                  onChange={(e) => setSmInput(e.target.value)}
                />
              </div>
            )}
            <div className="space-y-1.5">
              <Label>Población media (P)</Label>
              <Input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={población}
                onChange={(e) => setPoblación(e.target.value)}
              />
            </div>
          </div>

          {modo === "ie" ? (
            <FormulaDisplay
              math={`TNM = \\frac{${kn(inmigraciones)} - ${kn(emigraciones)}}{${kn(población)}} \\times 1000`}
              block
            />
          ) : (
            <FormulaDisplay
              math={`TNM = \\frac{${kn(smInput)}}{${kn(población)}} \\times 1000`}
              block
            />
          )}

          {sm !== null && modo === "ie" && (
            <p className="text-sm text-muted-foreground text-center">
              SM = {formatNumber(sm)}
            </p>
          )}

          {tnm !== null ? (
            <ResultBox label="Resultado">
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                TNM = {formatRate(tnm)}
              </p>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                {tnm > 0
                  ? "Tasa positiva: la region es receptora neta de migración."
                  : tnm < 0
                    ? "Tasa negativa: la region es emisora neta de migración."
                    : "Tasa nula: los flujos migratorios están equilibrados."}
              </p>
            </ResultBox>
          ) : (
            <EmptyResult />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

/* ===========================================================================
   TAB: Razon de Intercambio
=========================================================================== */

function TabRI() {
  const [inmigraciones, setInmigraciones] = useState("");
  const [emigraciones, setEmigraciones] = useState("");

  const I = parseNum(inmigraciones);
  const E = parseNum(emigraciones);
  const ri = I !== null && E !== null && E !== 0 ? I / E : null;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">
            Razon de Intercambio (RI)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormulaDisplay math="RI = \\frac{I}{E}" block />
          <p className="text-sm text-muted-foreground text-center">
            Si RI &gt; 1, entran más de los que salen. Si RI &lt; 1, salen mas
            de los que entran.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Inmigraciones (I)</Label>
              <Input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={inmigraciones}
                onChange={(e) => setInmigraciones(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Emigraciones (E)</Label>
              <Input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={emigraciones}
                onChange={(e) => setEmigraciones(e.target.value)}
              />
            </div>
          </div>

          <FormulaDisplay
            math={`RI = \\frac{${kn(inmigraciones)}}{${kn(emigraciones)}}`}
            block
          />

          {ri !== null ? (
            <ResultBox label="Resultado">
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                RI = {formatNumber(ri, 4)}
              </p>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                {ri > 1
                  ? `Por cada emigrante entran ${formatNumber(ri, 2)} inmigrantes.`
                  : ri < 1
                    ? `Por cada inmigrante salen ${formatNumber(1 / ri, 2)} emigrantes.`
                    : "Los flujos de entrada y salida son iguales."}
              </p>
            </ResultBox>
          ) : (
            <EmptyResult />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

/* ===========================================================================
   TAB: Matriz Migratoria
=========================================================================== */

const DEFAULT_REGIONS = ["Region A", "Region B", "Region C"];

function TabMatriz() {
  const [regions, setRegions] = useState(DEFAULT_REGIONS);
  const n = regions.length;

  // Matrix: flows[i][j] = flow from region i to region j (string)
  const [flows, setFlows] = useState<string[][]>(
    Array.from({ length: n }, () => Array.from({ length: n }, () => ""))
  );

  function setFlow(i: number, j: number, val: string) {
    setFlows((prev) => {
      const next = prev.map((row) => [...row]);
      next[i][j] = val;
      return next;
    });
  }

  function setRegionName(idx: number, name: string) {
    setRegions((prev) => {
      const next = [...prev];
      next[idx] = name;
      return next;
    });
  }

  function addRegion() {
    setRegions((prev) => [...prev, `Region ${String.fromCharCode(65 + prev.length)}`]);
    setFlows((prev) => {
      const newN = prev.length + 1;
      const next: string[][] = [];
      for (let i = 0; i < newN; i++) {
        const row: string[] = [];
        for (let j = 0; j < newN; j++) {
          row.push(prev[i]?.[j] ?? "");
        }
        next.push(row);
      }
      return next;
    });
  }

  function removeRegion() {
    if (regions.length <= 2) return;
    setRegions((prev) => prev.slice(0, -1));
    setFlows((prev) => prev.slice(0, -1).map((row) => row.slice(0, -1)));
  }

  // Parse all flows
  const parsed: (number | null)[][] = flows.map((row) =>
    row.map((v) => parseNum(v))
  );

  // Row sums (emigraciones from i, excluding diagonal)
  const rowSums: (number | null)[] = parsed.map((row, i) => {
    let sum = 0;
    let allFilled = true;
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (row[j] === null) {
        allFilled = false;
      } else {
        sum += row[j]!;
      }
    }
    return allFilled ? sum : null;
  });

  // Col sums (inmigraciones to j, excluding diagonal)
  const colSums: (number | null)[] = Array.from({ length: n }, (_, j) => {
    let sum = 0;
    let allFilled = true;
    for (let i = 0; i < n; i++) {
      if (i === j) continue;
      if (parsed[i][j] === null) {
        allFilled = false;
      } else {
        sum += parsed[i][j]!;
      }
    }
    return allFilled ? sum : null;
  });

  // Net flows
  const netFlows: (number | null)[] = regions.map((_, idx) => {
    if (colSums[idx] !== null && rowSums[idx] !== null) {
      return colSums[idx]! - rowSums[idx]!;
    }
    return null;
  });

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">
            Matriz Migratoria Origen-Destino
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Introduce los flujos migratorios entre regiones. Fila = origen,
            columna = destino. La diagonal queda vacia (no hay migración
            interna).
          </p>

          {/* Region name editors */}
          <div className="flex flex-wrap gap-2 items-end">
            {regions.map((r, idx) => (
              <div key={idx} className="space-y-1">
                <Label className="text-xs">Region {idx + 1}</Label>
                <Input
                  className="w-28 h-8 text-xs"
                  value={r}
                  onChange={(e) => setRegionName(idx, e.target.value)}
                />
              </div>
            ))}
            <div className="flex gap-1">
              <Button variant="outline" size="sm" onClick={addRegion}>
                + Anadir
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={removeRegion}
                disabled={regions.length <= 2}
              >
                - Quitar
              </Button>
            </div>
          </div>

          {/* Matrix table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-xs">
                    Origen \ Destino
                  </TableHead>
                  {regions.map((r, j) => (
                    <TableHead key={j} className="text-center text-xs">
                      {r}
                    </TableHead>
                  ))}
                  <TableHead className="text-center text-xs font-bold bg-muted/50">
                    Emigraciones
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {regions.map((rOrig, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium text-xs">
                      {rOrig}
                    </TableCell>
                    {regions.map((_, j) => (
                      <TableCell key={j} className="p-1">
                        {i === j ? (
                          <div className="w-20 h-8 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
                            ---
                          </div>
                        ) : (
                          <Input
                            className="w-20 h-8 text-xs text-center"
                            type="text"
                            inputMode="numeric"
                            placeholder="0"
                            value={flows[i][j]}
                            onChange={(e) => setFlow(i, j, e.target.value)}
                          />
                        )}
                      </TableCell>
                    ))}
                    <TableCell className="text-center font-semibold text-xs bg-muted/50">
                      {rowSums[i] !== null ? formatNumber(rowSums[i]!) : "---"}
                    </TableCell>
                  </TableRow>
                ))}
                {/* Inmigraciones row */}
                <TableRow className="bg-muted/50">
                  <TableCell className="font-bold text-xs">
                    Inmigraciones
                  </TableCell>
                  {colSums.map((s, j) => (
                    <TableCell
                      key={j}
                      className="text-center font-semibold text-xs"
                    >
                      {s !== null ? formatNumber(s) : "---"}
                    </TableCell>
                  ))}
                  <TableCell />
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Net flows */}
          <div>
            <h3 className="text-sm font-semibold mb-2">
              Flujos netos (Inmigraciones - Emigraciones)
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {regions.map((r, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg border p-3 text-center ${
                    netFlows[idx] !== null
                      ? netFlows[idx]! > 0
                        ? "border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950"
                        : netFlows[idx]! < 0
                          ? "border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-950"
                          : "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-950"
                      : ""
                  }`}
                >
                  <p className="text-xs font-medium text-muted-foreground">
                    {r}
                  </p>
                  {netFlows[idx] !== null ? (
                    <>
                      <p className="text-xl font-bold">
                        {netFlows[idx]! > 0 ? "+" : ""}
                        {formatNumber(netFlows[idx]!)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {netFlows[idx]! > 0
                          ? "Receptora neta"
                          : netFlows[idx]! < 0
                            ? "Emisora neta"
                            : "Equilibrada"}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground">---</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ===========================================================================
   MAIN PAGE
=========================================================================== */

export default function MigracionesPage() {
  return (
    <div className="max-w-5xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Calculadora de Migraciones
        </h1>
        <p className="text-muted-foreground mt-2">
          Calcula indicadores de migración y analiza flujos con la matriz
          origen-destino. Selecciona la pestana del indicador que necesites.
        </p>
      </div>

      <Tabs defaultValue="saldo" className="space-y-4">
        <TabsList className="flex flex-wrap h-auto gap-1">
          <TabsTrigger value="saldo">Saldo Migratorio</TabsTrigger>
          <TabsTrigger value="tbi">TBI</TabsTrigger>
          <TabsTrigger value="tbe">TBE</TabsTrigger>
          <TabsTrigger value="tnm">Tasa Neta</TabsTrigger>
          <TabsTrigger value="ri">Razon Intercambio</TabsTrigger>
          <TabsTrigger value="matriz">Matriz Migratoria</TabsTrigger>
        </TabsList>

        <TabsContent value="saldo">
          <TabSaldo />
        </TabsContent>
        <TabsContent value="tbi">
          <TabTBI />
        </TabsContent>
        <TabsContent value="tbe">
          <TabTBE />
        </TabsContent>
        <TabsContent value="tnm">
          <TabTNM />
        </TabsContent>
        <TabsContent value="ri">
          <TabRI />
        </TabsContent>
        <TabsContent value="matriz">
          <TabMatriz />
        </TabsContent>
      </Tabs>
    </div>
  );
}
