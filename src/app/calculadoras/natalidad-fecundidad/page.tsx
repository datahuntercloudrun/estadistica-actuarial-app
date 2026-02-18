"use client";

import { useState } from "react";
import { FormulaDisplay } from "@/components/theory/formula-display";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
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

/* ---------------------------------------------------------------------------
   Edad groups for TEF / ISF / TBR
--------------------------------------------------------------------------- */
const AGE_GROUPS_5 = [
  "15-19",
  "20-24",
  "25-29",
  "30-34",
  "35-39",
  "40-44",
  "45-49",
];

/* ===========================================================================
   TAB: TBN
=========================================================================== */

function TabTBN() {
  const [nacimientos, setNacimientos] = useState("");
  const [población, setPoblación] = useState("");

  const N = parseNum(nacimientos);
  const P = parseNum(población);
  const tbn = N !== null && P !== null && P !== 0 ? (N / P) * 1000 : null;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">
            Tasa Bruta de Natalidad (TBN)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormulaDisplay
            math="TBN = \\frac{N}{\\bar{P}} \\times 1000"
            block
          />
          <p className="text-sm text-muted-foreground text-center">
            N = nacimientos en el período, P = población media
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Nacimientos (N)</Label>
              <Input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={nacimientos}
                onChange={(e) => setNacimientos(e.target.value)}
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

          {/* Substituted */}
          <FormulaDisplay
            math={`TBN = \\frac{${kn(nacimientos)}}{${kn(población)}} \\times 1000`}
            block
          />

          {/* Result */}
          {tbn !== null ? (
            <ResultBox label="Resultado">
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                TBN = {formatRate(tbn)}
              </p>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                Es decir, {formatNumber(tbn, 2)} nacimientos por cada 1.000
                habitantes.
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
   TAB: TGF
=========================================================================== */

function TabTGF() {
  const [nacimientos, setNacimientos] = useState("");
  const [pobFemenina, setPobFemenina] = useState("");

  const N = parseNum(nacimientos);
  const Pf = parseNum(pobFemenina);
  const tgf = N !== null && Pf !== null && Pf !== 0 ? (N / Pf) * 1000 : null;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">
            Tasa General de Fecundidad (TGF)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormulaDisplay
            math="TGF = \\frac{N}{\\bar{P}^f_{15\\text{-}49}} \\times 1000"
            block
          />
          <p className="text-sm text-muted-foreground text-center">
            N = nacimientos, P_f = población femenina media de 15 a 49 años
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Nacimientos (N)</Label>
              <Input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={nacimientos}
                onChange={(e) => setNacimientos(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Población femenina 15-49 (P_f)</Label>
              <Input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={pobFemenina}
                onChange={(e) => setPobFemenina(e.target.value)}
              />
            </div>
          </div>

          <FormulaDisplay
            math={`TGF = \\frac{${kn(nacimientos)}}{${kn(pobFemenina)}} \\times 1000`}
            block
          />

          {tgf !== null ? (
            <ResultBox label="Resultado">
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                TGF = {formatRate(tgf)}
              </p>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                Es decir, {formatNumber(tgf, 2)} nacimientos por cada 1.000
                mujeres en edad fértil.
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
   TAB: TEF
=========================================================================== */

function TabTEF() {
  const [nacEdad, setNacEdad] = useState("");
  const [pobEdad, setPobEdad] = useState("");
  const [edadLabel, setEdadLabel] = useState("x");

  const Nx = parseNum(nacEdad);
  const Pfx = parseNum(pobEdad);
  const tef =
    Nx !== null && Pfx !== null && Pfx !== 0 ? (Nx / Pfx) * 1000 : null;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">
            Tasa Específica de Fecundidad (TEF)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormulaDisplay
            math="TEF_x = \\frac{N_x}{\\bar{P}^f_x} \\times 1000"
            block
          />
          <p className="text-sm text-muted-foreground text-center">
            N_x = nacimientos de madres de edad x, P^f_x = población femenina
            media de edad x
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <Label>Grupo de edad (x)</Label>
              <Input
                type="text"
                placeholder="ej: 25-29"
                value={edadLabel}
                onChange={(e) => setEdadLabel(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Nacimientos de edad {edadLabel} (N_x)</Label>
              <Input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={nacEdad}
                onChange={(e) => setNacEdad(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label>Población femenina edad {edadLabel} (P^f_x)</Label>
              <Input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={pobEdad}
                onChange={(e) => setPobEdad(e.target.value)}
              />
            </div>
          </div>

          <FormulaDisplay
            math={`TEF_{${edadLabel}} = \\frac{${kn(nacEdad)}}{${kn(pobEdad)}} \\times 1000`}
            block
          />

          {tef !== null ? (
            <ResultBox label="Resultado">
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                TEF_{"{"}
                {edadLabel}
                {"}"} = {formatRate(tef)}
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
   TAB: ISF
=========================================================================== */

function TabISF() {
  const [método, setMétodo] = useState<"tgf" | "tef">("tgf");

  // Método 1
  const [tgfInput, setTgfInput] = useState("");
  const tgfVal = parseNum(tgfInput);
  const isfFromTGF = tgfVal !== null ? (tgfVal * 35) / 1000 : null;

  // Método 2
  const [tefValues, setTefValues] = useState<string[]>(
    AGE_GROUPS_5.map(() => "")
  );

  function setTefAt(index: number, val: string) {
    setTefValues((prev) => {
      const next = [...prev];
      next[index] = val;
      return next;
    });
  }

  const tefNums = tefValues.map(parseNum);
  const allTefFilled = tefNums.every((v) => v !== null);
  const sumTef = allTefFilled
    ? (tefNums as number[]).reduce((acc, v) => acc + v, 0)
    : null;
  // Para grupos quinquenales: ISF = 5 * SUM(TEF_x) / 1000
  const isfFromTEF = sumTef !== null ? (5 * sumTef) / 1000 : null;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">
            Índice Sintetico de Fecundidad (ISF)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormulaDisplay
            math="ISF = \\frac{TGF \\times 35}{1000} = \\frac{5 \\times \\sum TEF_x}{1000}"
            block
          />
          <p className="text-sm text-muted-foreground text-center">
            Número medio de hijos por mujer a lo largo de su vida reproductiva
          </p>

          {/* Method selector */}
          <div className="flex gap-2">
            <Button
              variant={método === "tgf" ? "default" : "outline"}
              size="sm"
              onClick={() => setMétodo("tgf")}
            >
              Método 1: Desde TGF
            </Button>
            <Button
              variant={método === "tef" ? "default" : "outline"}
              size="sm"
              onClick={() => setMétodo("tef")}
            >
              Método 2: Desde TEF
            </Button>
          </div>

          {método === "tgf" ? (
            <div className="space-y-4">
              <div className="max-w-sm space-y-1.5">
                <Label>TGF (en tantos por mil)</Label>
                <Input
                  type="text"
                  inputMode="numeric"
                  placeholder="ej: 42,5"
                  value={tgfInput}
                  onChange={(e) => setTgfInput(e.target.value)}
                />
              </div>

              <FormulaDisplay
                math={`ISF = \\frac{${kn(tgfInput)} \\times 35}{1000}`}
                block
              />

              {isfFromTGF !== null ? (
                <ResultBox label="Resultado">
                  <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                    ISF = {formatNumber(isfFromTGF, 4)} hijos/mujer
                  </p>
                </ResultBox>
              ) : (
                <EmptyResult />
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Introduce las TEF por grupos quinquenales de edad (en tantos por
                mil):
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {AGE_GROUPS_5.map((group, idx) => (
                  <div key={group} className="space-y-1.5">
                    <Label>TEF_{group}</Label>
                    <Input
                      type="text"
                      inputMode="numeric"
                      placeholder="0"
                      value={tefValues[idx]}
                      onChange={(e) => setTefAt(idx, e.target.value)}
                    />
                  </div>
                ))}
              </div>

              <FormulaDisplay
                math={`ISF = \\frac{5 \\times (${tefNums.map((v, idx) => (v !== null ? formatNumber(v, 2) : `TEF_{${AGE_GROUPS_5[idx]}}`)).join(" + ")})}{1000}`}
                block
              />

              {sumTef !== null && (
                <p className="text-sm text-muted-foreground text-center">
                  Suma TEF = {formatNumber(sumTef, 2)}
                </p>
              )}

              {isfFromTEF !== null ? (
                <ResultBox label="Resultado">
                  <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                    ISF = {formatNumber(isfFromTEF, 4)} hijos/mujer
                  </p>
                </ResultBox>
              ) : (
                <EmptyResult />
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

/* ===========================================================================
   TAB: TBR
=========================================================================== */

function TabTBR() {
  const [método, setMétodo] = useState<"isf" | "tef">("isf");

  // Método 1
  const [isfInput, setIsfInput] = useState("");
  const [propFem, setPropFem] = useState("0,4878");
  const isfVal = parseNum(isfInput);
  const propVal = parseNum(propFem);
  const tbrFromISF =
    isfVal !== null && propVal !== null ? isfVal * propVal : null;

  // Método 2
  const [tefFemValues, setTefFemValues] = useState<string[]>(
    AGE_GROUPS_5.map(() => "")
  );

  function setTefFemAt(index: number, val: string) {
    setTefFemValues((prev) => {
      const next = [...prev];
      next[index] = val;
      return next;
    });
  }

  const tefFemNums = tefFemValues.map(parseNum);
  const allFemFilled = tefFemNums.every((v) => v !== null);
  const sumTefFem = allFemFilled
    ? (tefFemNums as number[]).reduce((acc, v) => acc + v, 0)
    : null;
  const tbrFromTEF = sumTefFem !== null ? (5 * sumTefFem) / 1000 : null;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">
            Tasa Bruta de Reproducción (TBR)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormulaDisplay
            math="TBR = ISF \\times \\frac{N^f}{N} = \\frac{5 \\times \\sum TEF^f_x}{1000}"
            block
          />
          <p className="text-sm text-muted-foreground text-center">
            Número medio de hijas por mujer (sin considerar mortalidad)
          </p>

          <div className="flex gap-2">
            <Button
              variant={método === "isf" ? "default" : "outline"}
              size="sm"
              onClick={() => setMétodo("isf")}
            >
              Método 1: Desde ISF
            </Button>
            <Button
              variant={método === "tef" ? "default" : "outline"}
              size="sm"
              onClick={() => setMétodo("tef")}
            >
              Método 2: Desde TEF femeninas
            </Button>
          </div>

          {método === "isf" ? (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label>ISF (hijos/mujer)</Label>
                  <Input
                    type="text"
                    inputMode="numeric"
                    placeholder="ej: 1,23"
                    value={isfInput}
                    onChange={(e) => setIsfInput(e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>Proporción nacimientos femeninos (N^f / N)</Label>
                  <Input
                    type="text"
                    inputMode="numeric"
                    placeholder="0,4878"
                    value={propFem}
                    onChange={(e) => setPropFem(e.target.value)}
                  />
                </div>
              </div>

              <FormulaDisplay
                math={`TBR = ${kn(isfInput)} \\times ${kn(propFem)}`}
                block
              />

              {tbrFromISF !== null ? (
                <ResultBox label="Resultado">
                  <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                    TBR = {formatNumber(tbrFromISF, 4)} hijas/mujer
                  </p>
                </ResultBox>
              ) : (
                <EmptyResult />
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Introduce las TEF femeninas por grupos quinquenales (en tantos
                por mil):
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {AGE_GROUPS_5.map((group, idx) => (
                  <div key={group} className="space-y-1.5">
                    <Label>TEF^f_{group}</Label>
                    <Input
                      type="text"
                      inputMode="numeric"
                      placeholder="0"
                      value={tefFemValues[idx]}
                      onChange={(e) => setTefFemAt(idx, e.target.value)}
                    />
                  </div>
                ))}
              </div>

              <FormulaDisplay
                math={`TBR = \\frac{5 \\times (${tefFemNums.map((v, idx) => (v !== null ? formatNumber(v, 2) : `TEF^f_{${AGE_GROUPS_5[idx]}}`)).join(" + ")})}{1000}`}
                block
              />

              {sumTefFem !== null && (
                <p className="text-sm text-muted-foreground text-center">
                  Suma TEF^f = {formatNumber(sumTefFem, 2)}
                </p>
              )}

              {tbrFromTEF !== null ? (
                <ResultBox label="Resultado">
                  <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                    TBR = {formatNumber(tbrFromTEF, 4)} hijas/mujer
                  </p>
                </ResultBox>
              ) : (
                <EmptyResult />
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

/* ===========================================================================
   MAIN PAGE
=========================================================================== */

export default function NatalidadFecundidadPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Calculadora de Natalidad y Fecundidad
        </h1>
        <p className="text-muted-foreground mt-2">
          Calcula los principales indicadores de natalidad y fecundidad. Selecciona
          la pestana del indicador que necesites.
        </p>
      </div>

      <Tabs defaultValue="tbn" className="space-y-4">
        <TabsList className="flex flex-wrap h-auto gap-1">
          <TabsTrigger value="tbn">TBN</TabsTrigger>
          <TabsTrigger value="tgf">TGF</TabsTrigger>
          <TabsTrigger value="tef">TEF</TabsTrigger>
          <TabsTrigger value="isf">ISF</TabsTrigger>
          <TabsTrigger value="tbr">TBR</TabsTrigger>
        </TabsList>

        <TabsContent value="tbn">
          <TabTBN />
        </TabsContent>
        <TabsContent value="tgf">
          <TabTGF />
        </TabsContent>
        <TabsContent value="tef">
          <TabTEF />
        </TabsContent>
        <TabsContent value="isf">
          <TabISF />
        </TabsContent>
        <TabsContent value="tbr">
          <TabTBR />
        </TabsContent>
      </Tabs>
    </div>
  );
}
