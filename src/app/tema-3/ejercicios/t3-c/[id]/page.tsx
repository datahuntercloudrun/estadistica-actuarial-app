import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BookOpen, ArrowLeft, ArrowRight, Lightbulb, ChevronRight, CheckCircle2 } from "lucide-react";
import { FormulaDisplay } from "@/components/theory/formula-display";

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
  ];
}

/* ================================================================== */
/*  Helper de formato                                                  */
/* ================================================================== */
function fmt(n: number): string {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function fmtDec(n: number, d = 2): string {
  const fixed = n.toFixed(d);
  const [intPart, decPart] = fixed.split(".");
  return `${intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${decPart}`;
}

/* ================================================================== */
/*  Ejercicio 1                                                        */
/* ================================================================== */
function Exercise1() {
  const inm = 1250;
  const emi = 820;
  const pMedia = 24500;
  const sm = inm - emi; // 430
  const tmn = (sm / pMedia) * 1000; // 17,55

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader><CardTitle>Enunciado</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <p>
            En el año 2024 un municipio registro 1.250 inmigraciones y 820 emigraciones.
            La población media anual fue 24.500 habitantes. Calcular: el saldo migratorio
            y la tasa de migración neta.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Solución esperada: SM = 430; TMN = 17,55&permil;
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Solución</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          {/* Paso 1: SM */}
          <div className="space-y-3">
            <h4 className="font-semibold">Paso 1: Saldo migratorio</h4>
            <p className="text-sm text-muted-foreground">
              El saldo migratorio es la diferencia entre inmigraciones y emigraciones:
            </p>
            <FormulaDisplay math="SM = I - E" block />
            <div className="rounded-md bg-muted px-4 py-2">
              <FormulaDisplay math={`SM = 1.250 - 820 = ${fmt(sm)}`} block />
            </div>
            <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
              SM = {fmt(sm)} personas
            </div>
          </div>

          {/* Paso 2: TMN */}
          <div className="space-y-3">
            <h4 className="font-semibold">Paso 2: Tasa de migración neta</h4>
            <p className="text-sm text-muted-foreground">
              La tasa neta de migración se expresa por cada 1.000 habitantes:
            </p>
            <FormulaDisplay math="TMN = \\frac{SM}{\\bar{P}} \\times 1.000" block />
            <div className="rounded-md bg-muted px-4 py-2">
              <FormulaDisplay
                math={`TMN = \\frac{${fmt(sm)}}{${fmt(pMedia)}} \\times 1.000 = ${fmtDec(tmn)}\\text{‰}`}
                block
              />
            </div>
            <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
              TMN = {fmtDec(tmn)}&permil;
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ================================================================== */
/*  Ejercicio 2                                                        */
/* ================================================================== */
function Exercise2() {
  const inm = 3600;
  const emi = 2400;
  const pMitad = 600000;
  const tbi = (inm / pMitad) * 1000; // 6,0
  const tbe = (emi / pMitad) * 1000; // 4,0

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader><CardTitle>Enunciado</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <p>
            En una provincia hubo 3.600 inmigraciones y 2.400 emigraciones durante el año.
            La población a mitad de año fue 600.000 habitantes. Calcula las tasas brutas
            de inmigración y emigración.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Solución esperada: TBI = 6,0&permil;; TBE = 4,0&permil;
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Solución</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="font-semibold">Paso 1: Tasa bruta de inmigración (TBI)</h4>
            <p className="text-sm text-muted-foreground">
              Se calcula dividiendo las inmigraciones entre la población media y multiplicando por 1.000:
            </p>
            <FormulaDisplay math="TBI = \\frac{I}{\\bar{P}} \\times 1.000" block />
            <div className="rounded-md bg-muted px-4 py-2">
              <FormulaDisplay
                math={`TBI = \\frac{${fmt(inm)}}{${fmt(pMitad)}} \\times 1.000 = ${fmtDec(tbi, 1)}\\text{‰}`}
                block
              />
            </div>
            <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
              TBI = {fmtDec(tbi, 1)}&permil;
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Paso 2: Tasa bruta de emigración (TBE)</h4>
            <FormulaDisplay math="TBE = \\frac{E}{\\bar{P}} \\times 1.000" block />
            <div className="rounded-md bg-muted px-4 py-2">
              <FormulaDisplay
                math={`TBE = \\frac{${fmt(emi)}}{${fmt(pMitad)}} \\times 1.000 = ${fmtDec(tbe, 1)}\\text{‰}`}
                block
              />
            </div>
            <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
              TBE = {fmtDec(tbe, 1)}&permil;
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ================================================================== */
/*  Ejercicio 3                                                        */
/* ================================================================== */
function Exercise3() {
  const p2011 = 28400;
  const p2021 = 29900;
  const nac = 1200;
  const def = 1100;
  const sm = p2021 - p2011 - nac + def; // 1.400

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader><CardTitle>Enunciado</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <p>
            Dos censos muestran que la población de un municipio era 28.400 en 2011 y
            29.900 en 2021. Entre censos se registraron 1.200 nacimientos y 1.100
            defunciones. Suponiendo que las cifras de nacimientos y defunciones son
            completas, calcula el saldo migratorio neto acumulado entre 2011 y 2021.
            &iquest;El municipio fue receptor neto o emisor neto en ese período?
          </p>
          <p className="text-sm text-muted-foreground italic">
            Solución esperada: SM = 1.400 (receptor neto)
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Solución</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="font-semibold">Paso 1: Aplicar la ecuación compensadora inversa</h4>
            <p className="text-sm text-muted-foreground">
              Despejamos el saldo migratorio de la ecuación compensadora:
            </p>
            <FormulaDisplay math="P_{2021} = P_{2011} + N - D + SM" block />
            <FormulaDisplay math="SM = P_{2021} - P_{2011} - N + D" block />
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Paso 2: Sustitucion</h4>
            <div className="rounded-md bg-muted px-4 py-2">
              <FormulaDisplay
                math={`SM = ${fmt(p2021)} - ${fmt(p2011)} - ${fmt(nac)} + ${fmt(def)}`}
                block
              />
              <FormulaDisplay
                math={`SM = ${fmt(p2021 - p2011)} - ${fmt(nac)} + ${fmt(def)} = ${fmt(sm)}`}
                block
              />
            </div>
            <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
              SM = {fmt(sm)} personas
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Paso 3: Interpretación</h4>
            <div className="rounded-md border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950 p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                Como SM = {fmt(sm)} &gt; 0, el municipio fue <strong>receptor neto</strong> de
                migración en el período 2011-2021. Recibio un total neto de {fmt(sm)} personas
                más de las que emigraron.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ================================================================== */
/*  Ejercicio 4                                                        */
/* ================================================================== */
function Exercise4() {
  // Flujos
  const flujos = {
    AB: 480, AC: 120,
    BA: 300, BC: 200,
    CA: 150, CB: 250,
  };

  // Entradas / Salidas
  const entA = flujos.BA + flujos.CA; // 300+150=450
  const salA = flujos.AB + flujos.AC; // 480+120=600
  const smA = entA - salA; // -150

  const entB = flujos.AB + flujos.CB; // 480+250=730
  const salB = flujos.BA + flujos.BC; // 300+200=500
  const smB = entB - salB; // +230

  const entC = flujos.AC + flujos.BC; // 120+200=320
  const salC = flujos.CA + flujos.CB; // 150+250=400
  const smC = entC - salC; // -80

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader><CardTitle>Enunciado</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <p>
            Tres comunidades A, B y C intercambian población en un año. Los flujos
            observados (personas que se mudan dentro del ano) son:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>De A a B: 480</li>
            <li>De A a C: 120</li>
            <li>De B a A: 300</li>
            <li>De B a C: 200</li>
            <li>De C a A: 150</li>
            <li>De C a B: 250</li>
          </ul>
          <div className="space-y-1 text-sm">
            <p><strong>a)</strong> Construye la matriz de migración (filas origen, columnas destino), con ceros en diagonal.</p>
            <p><strong>b)</strong> Calcula para cada region el saldo migratorio neto (entradas - salidas).</p>
            <p><strong>c)</strong> Determina la region con mayor capacidad de atraccion neta.</p>
          </div>
          <p className="text-sm text-muted-foreground italic">
            Solución esperada: B tiene mayor atraccion neta (+230)
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Solución</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          {/* a) Matriz */}
          <div className="space-y-3">
            <h4 className="font-semibold">a) Matriz de migración (origen-destino)</h4>
            <p className="text-sm text-muted-foreground">
              Filas = region de origen, Columnas = region de destino. La diagonal es cero
              (no se cuenta migración interna dentro de la misma region).
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Origen \ Destino</TableHead>
                  <TableHead className="text-center">A</TableHead>
                  <TableHead className="text-center">B</TableHead>
                  <TableHead className="text-center">C</TableHead>
                  <TableHead className="text-center font-semibold">Total salidas</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">A</TableCell>
                  <TableCell className="text-center text-muted-foreground">0</TableCell>
                  <TableCell className="text-center">480</TableCell>
                  <TableCell className="text-center">120</TableCell>
                  <TableCell className="text-center font-semibold">{salA}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">B</TableCell>
                  <TableCell className="text-center">300</TableCell>
                  <TableCell className="text-center text-muted-foreground">0</TableCell>
                  <TableCell className="text-center">200</TableCell>
                  <TableCell className="text-center font-semibold">{salB}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">C</TableCell>
                  <TableCell className="text-center">150</TableCell>
                  <TableCell className="text-center">250</TableCell>
                  <TableCell className="text-center text-muted-foreground">0</TableCell>
                  <TableCell className="text-center font-semibold">{salC}</TableCell>
                </TableRow>
                <TableRow className="bg-muted/50 font-semibold">
                  <TableCell>Total entradas</TableCell>
                  <TableCell className="text-center">{entA}</TableCell>
                  <TableCell className="text-center">{entB}</TableCell>
                  <TableCell className="text-center">{entC}</TableCell>
                  <TableCell className="text-center">{entA + entB + entC}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* b) Saldos */}
          <div className="space-y-3">
            <h4 className="font-semibold">b) Saldo migratorio neto de cada region</h4>
            <FormulaDisplay math="SM_i = \\text{Entradas}_i - \\text{Salidas}_i" block />
            <div className="rounded-md bg-muted px-4 py-2 space-y-1">
              <FormulaDisplay math={`SM_A = ${entA} - ${salA} = ${smA}`} block />
              <FormulaDisplay math={`SM_B = ${entB} - ${salB} = +${smB}`} block />
              <FormulaDisplay math={`SM_C = ${entC} - ${salC} = ${smC}`} block />
            </div>
            <p className="text-sm text-muted-foreground italic">
              Verificacion: {smA} + {smB} + ({smC}) = {smA + smB + smC} (la suma de saldos en un sistema cerrado es cero).
            </p>
          </div>

          {/* c) Atraccion neta */}
          <div className="space-y-3">
            <h4 className="font-semibold">c) Region con mayor capacidad de atraccion neta</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Region</TableHead>
                  <TableHead className="text-center">Entradas</TableHead>
                  <TableHead className="text-center">Salidas</TableHead>
                  <TableHead className="text-center">SM</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">A</TableCell>
                  <TableCell className="text-center">{entA}</TableCell>
                  <TableCell className="text-center">{salA}</TableCell>
                  <TableCell className="text-center text-red-600 font-semibold">{smA}</TableCell>
                </TableRow>
                <TableRow className="bg-green-50 dark:bg-green-950">
                  <TableCell className="font-medium">B</TableCell>
                  <TableCell className="text-center">{entB}</TableCell>
                  <TableCell className="text-center">{salB}</TableCell>
                  <TableCell className="text-center text-green-600 font-bold">+{smB}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">C</TableCell>
                  <TableCell className="text-center">{entC}</TableCell>
                  <TableCell className="text-center">{salC}</TableCell>
                  <TableCell className="text-center text-red-600 font-semibold">{smC}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
              La region B tiene la mayor capacidad de atraccion neta con SM = +{smB}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ================================================================== */
/*  Ejercicio 5                                                        */
/* ================================================================== */
function Exercise5() {
  const p2015 = 52000;
  const p2020 = 55200;
  const nac = 3400;
  const def = 2600;
  const n = 5;
  const sm = p2020 - p2015 - nac + def; // 2.400
  const pMedia = (p2015 + p2020) / 2; // 53.600
  const tasaAnual = (sm / n / pMedia) * 1000; // 8,96

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader><CardTitle>Enunciado</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <p>
            Un municipio tenia 52.000 habitantes a 1 de enero de 2015 y 55.200 habitantes
            a 1 de enero de 2020. Entre 2015 y 2019 (cinco años) se registraron 3.400
            nacimientos y 2.600 defunciones. Calcula:
          </p>
          <div className="space-y-1 text-sm">
            <p><strong>a)</strong> El saldo migratorio acumulado entre 2015 y 2019.</p>
            <p><strong>b)</strong> La tasa media anual neta de migración por 1.000 habitantes, usando como población base la media aritmetica entre el inicio y el final del período.</p>
          </div>
          <p className="text-sm text-muted-foreground italic">
            Solución esperada: a) SM = 2.400; b) TMN = 8,96&permil;
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Solución</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="font-semibold">a) Saldo migratorio acumulado</h4>
            <FormulaDisplay math="SM = P_{2020} - P_{2015} - N + D" block />
            <div className="rounded-md bg-muted px-4 py-2">
              <FormulaDisplay
                math={`SM = ${fmt(p2020)} - ${fmt(p2015)} - ${fmt(nac)} + ${fmt(def)}`}
                block
              />
              <FormulaDisplay
                math={`SM = ${fmt(p2020 - p2015)} - ${fmt(nac - def)} = ${fmt(sm)}`}
                block
              />
            </div>
            <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
              SM acumulado = {fmt(sm)} personas
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">b) Tasa media anual neta de migración</h4>
            <p className="text-sm text-muted-foreground">
              Se calcula el saldo migratorio medio anual y se divide entre la población media:
            </p>
            <FormulaDisplay math="TMN_{\\text{anual}} = \\frac{SM / n}{\\bar{P}} \\times 1.000" block />
            <div className="rounded-md bg-muted px-4 py-2 space-y-1">
              <FormulaDisplay
                math={`\\bar{P} = \\frac{${fmt(p2015)} + ${fmt(p2020)}}{2} = ${fmt(pMedia)}`}
                block
              />
              <FormulaDisplay
                math={`TMN_{\\text{anual}} = \\frac{${fmt(sm)} / ${n}}{${fmt(pMedia)}} \\times 1.000 = \\frac{${fmt(sm / n)}}{${fmt(pMedia)}} \\times 1.000 = ${fmtDec(tasaAnual)}\\text{‰}`}
                block
              />
            </div>
            <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
              TMN anual = {fmtDec(tasaAnual)}&permil;
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ================================================================== */
/*  Ejercicio 6                                                        */
/* ================================================================== */
function Exercise6() {
  const inmAcum = 18000;
  const emiAcum = 10000;
  const nAnos = 4;
  const pMedia = 900000;

  const tbiAnual = (inmAcum / nAnos / pMedia) * 1000; // 5,0
  const tbeAnual = (emiAcum / nAnos / pMedia) * 1000; // 2,78
  const smAcum = inmAcum - emiAcum; // 8.000
  const tmnAnual = (smAcum / nAnos / pMedia) * 1000; // 2,22

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader><CardTitle>Enunciado</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <p>
            Una provincia registro, entre 2012 y 2016 (4 años), un total acumulado de
            18.000 inmigraciones y 10.000 emigraciones. La población a mitad del período
            (valor medio) fue 900.000 habitantes.
          </p>
          <div className="space-y-1 text-sm">
            <p><strong>a)</strong> Calcula la tasa bruta media anual de inmigración y de emigración por 1.000 habitantes.</p>
            <p><strong>b)</strong> Calcula la tasa bruta neta media anual por 1.000 habitantes y comenta brevemente si la provincia gana o pierde población por migración.</p>
          </div>
          <p className="text-sm text-muted-foreground italic">
            Solución esperada: a) TBI = 5,0&permil;; b) Gana población
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Solución</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="font-semibold">a) Tasas brutas medias anuales</h4>
            <p className="text-sm text-muted-foreground">
              Para obtener tasas medias anuales, dividimos el flujo acumulado entre el número
              de años y luego entre la población media:
            </p>
            <FormulaDisplay math="TBI_{\\text{anual}} = \\frac{I_{\\text{acum}} / n}{\\bar{P}} \\times 1.000" block />
            <div className="rounded-md bg-muted px-4 py-2 space-y-1">
              <FormulaDisplay
                math={`TBI_{\\text{anual}} = \\frac{${fmt(inmAcum)} / ${nAnos}}{${fmt(pMedia)}} \\times 1.000 = \\frac{${fmt(inmAcum / nAnos)}}{${fmt(pMedia)}} \\times 1.000 = ${fmtDec(tbiAnual, 1)}\\text{‰}`}
                block
              />
              <FormulaDisplay
                math={`TBE_{\\text{anual}} = \\frac{${fmt(emiAcum)} / ${nAnos}}{${fmt(pMedia)}} \\times 1.000 = \\frac{${fmt(emiAcum / nAnos)}}{${fmt(pMedia)}} \\times 1.000 = ${fmtDec(tbeAnual)}\\text{‰}`}
                block
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
                TBI media anual = {fmtDec(tbiAnual, 1)}&permil;
              </div>
              <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
                TBE media anual = {fmtDec(tbeAnual)}&permil;
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">b) Tasa bruta neta media anual</h4>
            <FormulaDisplay math="TMN_{\\text{anual}} = TBI_{\\text{anual}} - TBE_{\\text{anual}} = \\frac{SM_{\\text{acum}} / n}{\\bar{P}} \\times 1.000" block />
            <div className="rounded-md bg-muted px-4 py-2 space-y-1">
              <FormulaDisplay
                math={`SM_{\\text{acum}} = ${fmt(inmAcum)} - ${fmt(emiAcum)} = ${fmt(smAcum)}`}
                block
              />
              <FormulaDisplay
                math={`TMN_{\\text{anual}} = \\frac{${fmt(smAcum)} / ${nAnos}}{${fmt(pMedia)}} \\times 1.000 = \\frac{${fmt(smAcum / nAnos)}}{${fmt(pMedia)}} \\times 1.000 = ${fmtDec(tmnAnual)}\\text{‰}`}
                block
              />
            </div>
            <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
              TMN anual = {fmtDec(tmnAnual)}&permil;
            </div>
            <div className="rounded-md border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950 p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <strong>Interpretación:</strong> Como la tasa neta media anual es positiva ({fmtDec(tmnAnual)}&permil;),
                la provincia <strong>gana población</strong> por efecto de las migraciones. Cada año recibe,
                en terminos netos, unas {fmt(smAcum / nAnos)} personas más de las que pierde.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ================================================================== */
/*  Ejercicio 7                                                        */
/* ================================================================== */
function Exercise7() {
  const p2010 = 410000;
  const p2020 = 428500;
  const nac = 22000;
  const def = 27500;
  const nAnos = 10;

  const sm = p2020 - p2010 - nac + def; // 24.000
  const pMedia = (p2010 + p2020) / 2; // 419.250
  const tasaAnual = (sm / nAnos / pMedia) * 1000; // 5,72

  // Cohorte
  const pCoh2010 = 10000;
  const pCoh2020 = 8200;
  const dCoh = 100;
  const smCoh = pCoh2020 - pCoh2010 + dCoh; // -1.700
  const tasaCohAnual = (smCoh / pCoh2010) * 1000 / nAnos; // -17,0

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader><CardTitle>Enunciado</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <p>
            Entre el censo de 2010 y el de 2020 un area paso de 410.000 a 428.500
            habitantes. Entre censos se registraron 22.000 nacimientos y 27.500
            defunciones.
          </p>
          <div className="space-y-1 text-sm">
            <p><strong>a)</strong> Calcula el saldo migratorio acumulado entre 2010 y 2020.</p>
            <p><strong>b)</strong> Calcula la tasa neta media anual de migración por 1.000 habitantes, usando la población media aritmetica entre censos.</p>
            <p><strong>c)</strong> Supon que la cohorte nacida en 1990 tenia 10.000 individuos en 2010 y 8.200 en 2020; entre 2010 y 2020 hubo 100 defunciones en esa cohorte. Calcula el saldo migratorio de la cohorte y compara su tasa neta acumulada por 1.000 con la tasa neta media anual del area.</p>
          </div>
          <p className="text-sm text-muted-foreground italic">
            Solución esperada: a) SM = 24.000; b) 5,72&permil;/ano; c) -17,0&permil;/ano
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Solución</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          {/* a) */}
          <div className="space-y-3">
            <h4 className="font-semibold">a) Saldo migratorio acumulado</h4>
            <FormulaDisplay math="SM = P_{2020} - P_{2010} - N + D" block />
            <div className="rounded-md bg-muted px-4 py-2">
              <FormulaDisplay
                math={`SM = ${fmt(p2020)} - ${fmt(p2010)} - ${fmt(nac)} + ${fmt(def)}`}
                block
              />
              <FormulaDisplay
                math={`SM = ${fmt(p2020 - p2010)} - ${fmt(nac)} + ${fmt(def)} = ${fmt(sm)}`}
                block
              />
            </div>
            <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
              SM acumulado = {fmt(sm)} personas
            </div>
          </div>

          {/* b) */}
          <div className="space-y-3">
            <h4 className="font-semibold">b) Tasa neta media anual de migración</h4>
            <div className="rounded-md bg-muted px-4 py-2 space-y-1">
              <FormulaDisplay
                math={`\\bar{P} = \\frac{${fmt(p2010)} + ${fmt(p2020)}}{2} = ${fmt(pMedia)}`}
                block
              />
              <FormulaDisplay
                math={`TMN_{\\text{anual}} = \\frac{${fmt(sm)} / ${nAnos}}{${fmt(pMedia)}} \\times 1.000 = \\frac{${fmt(sm / nAnos)}}{${fmt(pMedia)}} \\times 1.000 = ${fmtDec(tasaAnual)}\\text{‰}/\\text{ano}`}
                block
              />
            </div>
            <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
              TMN anual = {fmtDec(tasaAnual)}&permil;/ano
            </div>
          </div>

          {/* c) */}
          <div className="space-y-3">
            <h4 className="font-semibold">c) Análisis de la cohorte nacida en 1990</h4>
            <p className="text-sm text-muted-foreground">
              Para la cohorte, la ecuación de supervivencia es:
            </p>
            <FormulaDisplay math="P_{\\text{coh}}^{2020} = P_{\\text{coh}}^{2010} - D_{\\text{coh}} + SM_{\\text{coh}}" block />
            <FormulaDisplay math="SM_{\\text{coh}} = P_{\\text{coh}}^{2020} - P_{\\text{coh}}^{2010} + D_{\\text{coh}}" block />
            <div className="rounded-md bg-muted px-4 py-2 space-y-1">
              <FormulaDisplay
                math={`SM_{\\text{coh}} = ${fmt(pCoh2020)} - ${fmt(pCoh2010)} + ${dCoh} = ${fmt(smCoh)}`}
                block
              />
            </div>
            <div className="inline-block rounded-md border border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950 px-3 py-1.5 text-sm font-semibold text-red-900 dark:text-red-100">
              SM cohorte = {fmt(smCoh)} personas (emigración neta)
            </div>

            <h4 className="font-semibold mt-4">Tasa neta media anual de la cohorte</h4>
            <div className="rounded-md bg-muted px-4 py-2 space-y-1">
              <FormulaDisplay
                math={`TMN_{\\text{coh, anual}} = \\frac{SM_{\\text{coh}}}{P_{\\text{coh}}^{2010}} \\times \\frac{1.000}{n} = \\frac{${fmt(smCoh)}}{${fmt(pCoh2010)}} \\times \\frac{1.000}{${nAnos}} = ${fmtDec(tasaCohAnual, 1)}\\text{‰}/\\text{ano}`}
                block
              />
            </div>
            <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
              TMN cohorte anual = {fmtDec(tasaCohAnual, 1)}&permil;/ano
            </div>

            <div className="rounded-md border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950 p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <strong>Comparacion e interpretación:</strong> Mientras el area en su conjunto tiene
                una tasa neta media anual de migración positiva (+{fmtDec(tasaAnual)}&permil;/ano),
                indicando que atrae población, la cohorte nacida en 1990 tiene una tasa
                fuertemente negativa ({fmtDec(tasaCohAnual, 1)}&permil;/ano). Esto significa que esta
                cohorte (personas de 20 a 30 años en el período) emigro significativamente
                del area, posiblemente por motivos laborales o formativos, a pesar de que
                el area gana población en terminos globales gracias a otras cohortes de edad.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ================================================================== */
/*  Ejercicio 8                                                        */
/* ================================================================== */
function Exercise8() {
  const grupos = [
    { label: "15-19", pob: 30000, migr: 900 },
    { label: "20-24", pob: 28000, migr: 1400 },
    { label: "25-29", pob: 26000, migr: 2300 },
    { label: "30-34", pob: 24000, migr: 4700 },
  ];

  const tasas = grupos.map((g) => ({
    ...g,
    tasa: (g.migr / g.pob) * 1000,
  }));

  const sumaTasas = tasas.reduce((s, t) => s + t.tasa, 0);
  const amplitud = 5;
  const ismPer1000 = sumaTasas * amplitud;
  const ismAbsoluto = ismPer1000 / 1000;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader><CardTitle>Enunciado</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <p>
            Datos simplificados de migraciones netas en un año para una region (grupos
            quinquenales) y su población por grupo:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>15-19: población 30.000; migración bruta +900</li>
            <li>20-24: población 28.000; migración bruta +1.400</li>
            <li>25-29: población 26.000; migración bruta +2.300</li>
            <li>30-34: población 24.000; migración bruta +4.700</li>
          </ul>
          <div className="space-y-1 text-sm">
            <p><strong>a)</strong> Calcula la tasa específica de migración (por 1.000) para cada grupo.</p>
            <p><strong>b)</strong> Suponiendo que en el resto de las franjas de edad la migración bruta es 0, calcula el índice sintetico de movilidad (ISM) como suma de las tasas específicas (expresado por 1.000).</p>
            <p><strong>c)</strong> Interpreta brevemente el resultado.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Solución</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          {/* a) */}
          <div className="space-y-3">
            <h4 className="font-semibold">a) Tasas específicas de migración por grupo</h4>
            <p className="text-sm text-muted-foreground">
              La tasa específica de migración para cada grupo de edad se calcula como:
            </p>
            <FormulaDisplay math="TEM_x = \\frac{M_x}{P_x} \\times 1.000" block />
            <div className="rounded-md bg-muted px-4 py-2 space-y-1">
              {tasas.map((t) => (
                <FormulaDisplay
                  key={t.label}
                  math={`TEM_{${t.label}} = \\frac{${fmt(t.migr)}}{${fmt(t.pob)}} \\times 1.000 = ${fmtDec(t.tasa)}\\text{‰}`}
                  block
                />
              ))}
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Grupo de edad</TableHead>
                  <TableHead className="text-right">Población</TableHead>
                  <TableHead className="text-right">Migración neta</TableHead>
                  <TableHead className="text-right">TEM (&permil;)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasas.map((t) => (
                  <TableRow key={t.label}>
                    <TableCell className="font-medium">{t.label}</TableCell>
                    <TableCell className="text-right">{fmt(t.pob)}</TableCell>
                    <TableCell className="text-right">+{fmt(t.migr)}</TableCell>
                    <TableCell className="text-right font-semibold">{fmtDec(t.tasa)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* b) */}
          <div className="space-y-3">
            <h4 className="font-semibold">b) Índice sintetico de movilidad (ISM)</h4>
            <p className="text-sm text-muted-foreground">
              El ISM se calcula de forma analoga al Índice Sintetico de Fecundidad (ISF).
              Se suman las tasas específicas por grupo, multiplicadas por la amplitud del
              intervalo de edad (5 años), y se divide entre 1.000 para expresar el resultado
              en migraciones por persona:
            </p>
            <FormulaDisplay math="ISM = \\frac{1}{1.000} \\sum_x TEM_x \\cdot n_x" block />
            <div className="rounded-md bg-muted px-4 py-2 space-y-1">
              <FormulaDisplay
                math={`\\sum TEM_x = ${tasas.map((t) => fmtDec(t.tasa)).join(" + ")} = ${fmtDec(sumaTasas)}`}
                block
              />
              <FormulaDisplay
                math={`ISM = \\frac{${fmtDec(sumaTasas)} \\times ${amplitud}}{1.000} = \\frac{${fmtDec(ismPer1000)}}{1.000} = ${fmtDec(ismAbsoluto, 4)}`}
                block
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
                ISM = {fmtDec(ismPer1000)} (por 1.000)
              </div>
              <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
                ISM = {fmtDec(ismAbsoluto, 4)} migraciones por persona
              </div>
            </div>
          </div>

          {/* c) */}
          <div className="space-y-3">
            <h4 className="font-semibold">c) Interpretación</h4>
            <div className="rounded-md border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950 p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                El ISM de {fmtDec(ismAbsoluto, 2)} indica que, si las tasas específicas de migración
                observadas se mantuvieran constantes a lo largo de toda la vida, una persona
                realizaria aproximadamente {fmtDec(ismAbsoluto, 2)} migraciones netas durante las
                edades de 15 a 34 años. Como es un valor positivo, refleja que la region es
                atractora neta de población joven y adulta joven.
              </p>
              <p className="text-sm text-blue-900 dark:text-blue-100 mt-2">
                Se observa que la tasa específica de migración crece notablemente con la edad
                dentro de este rango: de {fmtDec(tasas[0].tasa)}&permil; en el grupo 15-19 a {fmtDec(tasas[3].tasa)}&permil; en
                el grupo 30-34, lo que sugiere que la region es especialmente atractiva para
                personas en edades laborales activas.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ================================================================== */
/*  Metadata de cada ejercicio                                         */
/* ================================================================== */
const exerciseMeta: Record<string, {
  title: string;
  tags: string[];
  question: string;
  learned: string[];
  component: () => React.JSX.Element;
}> = {
  "1": {
    title: "Saldo migratorio simple",
    tags: ["Saldo migratorio", "Tasa neta de migración"],
    question: "¿Cómo se mide cuánta población gana o pierde un municipio por efecto de las migraciones?",
    learned: [
      "El saldo migratorio (SM = I - E) resume en un solo número si la zona es receptora o emisora neta de población.",
      "La tasa neta de migración (TMN) estandariza el saldo por cada 1.000 habitantes, permitiendo comparar municipios de distinto tamaño.",
    ],
    component: Exercise1,
  },
  "2": {
    title: "Tasas brutas de inmigración y emigración",
    tags: ["TBI", "TBE"],
    question: "¿Cómo se cuantifican por separado las entradas y salidas de población de un territorio?",
    learned: [
      "La TBI y la TBE descomponen el fenómeno migratorio en sus dos componentes: entradas (inmigración) y salidas (emigración), cada una por 1.000 habitantes.",
      "Separar TBI y TBE revela si un saldo positivo se debe a mucha inmigración, poca emigración, o ambas cosas.",
    ],
    component: Exercise2,
  },
  "3": {
    title: "Ecuación compensadora inversa",
    tags: ["Ecuación compensadora", "Saldo migratorio"],
    question: "¿Cómo se estima el saldo migratorio cuando no hay registros directos de movimientos?",
    learned: [
      "La ecuación compensadora inversa (SM = P₂ - P₁ - N + D) permite estimar el saldo migratorio a partir de censos, nacimientos y defunciones.",
      "Este método es indirecto: si SM > 0 el municipio fue receptor neto; si SM < 0, emisor neto.",
      "Es el recurso principal cuando las estadísticas de migración son incompletas o inexistentes.",
    ],
    component: Exercise3,
  },
  "4": {
    title: "Matriz migratoria 3x3",
    tags: ["Matriz de migración", "Saldo migratorio", "Atracción neta"],
    question: "¿Cómo se organiza y analiza el intercambio de población entre varias regiones simultáneamente?",
    learned: [
      "La matriz origen-destino ordena todos los flujos bilaterales; las filas suman salidas y las columnas suman entradas.",
      "El saldo neto de cada región es Entradas - Salidas; en un sistema cerrado la suma de todos los saldos es cero.",
      "La región con mayor saldo positivo tiene la mayor capacidad de atracción neta.",
    ],
    component: Exercise4,
  },
  "5": {
    title: "Saldo acumulado y tasa media anual",
    tags: ["Saldo migratorio acumulado", "Tasa media anual"],
    question: "¿Cómo se calcula una tasa media anual de migración cuando los datos cubren varios años?",
    learned: [
      "El saldo migratorio acumulado se obtiene con la ecuación compensadora inversa aplicada al período completo.",
      "Para obtener la tasa media anual se divide el saldo entre el número de años y luego entre la población media.",
      "La población media aritmética (P₁ + P₂) / 2 es una aproximación válida cuando no hay datos intermedios.",
    ],
    component: Exercise5,
  },
  "6": {
    title: "Tasas medias anuales de inmigración y emigración",
    tags: ["TBI media anual", "TBE media anual", "Tasa neta media"],
    question: "¿Cómo se anualiza correctamente un flujo migratorio acumulado en varios años?",
    learned: [
      "Para anualizar se divide el flujo acumulado entre el número de años antes de dividir entre la población media.",
      "La TMN anual positiva indica que la provincia gana población por migración; negativa, que la pierde.",
      "TBI y TBE medias anuales permiten diagnosticar si el saldo se debe a alta inmigración, baja emigración o ambas.",
    ],
    component: Exercise6,
  },
  "7": {
    title: "Saldo intercensal y análisis por cohorte",
    tags: ["Saldo intercensal", "Análisis de cohorte"],
    question: "¿Puede una zona atraer población en conjunto y al mismo tiempo perder una cohorte específica?",
    learned: [
      "El saldo intercensal global puede ser positivo mientras que una cohorte concreta (ej. jóvenes 20-30) presenta emigración neta.",
      "Para la cohorte se usa la ecuación de supervivencia: SM_coh = P_coh² - P_coh¹ + D_coh.",
      "Comparar tasas globales con tasas por cohorte revela patrones ocultos de selectividad migratoria por edad.",
    ],
    component: Exercise7,
  },
  "8": {
    title: "ISM con tasas específicas por edad",
    tags: ["Tasa específica de migración", "ISM"],
    question: "¿Cuántas migraciones realizaría una persona a lo largo de su vida si se mantuvieran las tasas actuales?",
    learned: [
      "La tasa específica de migración (TEM) por grupo de edad se calcula como migración del grupo dividida entre su población, por 1.000.",
      "El ISM se construye igual que el ISF: sumando las TEM multiplicadas por la amplitud del intervalo y dividiendo entre 1.000.",
      "El ISM es un indicador sintético que resume la intensidad migratoria total en un solo número comparable entre territorios.",
    ],
    component: Exercise8,
  },
};

/* ================================================================== */
/*  Page component                                                     */
/* ================================================================== */
export default async function T3CExercisePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const meta = exerciseMeta[id];
  if (!meta) notFound();

  const ExerciseComponent = meta.component;
  const currentId = parseInt(id);
  const prevId = currentId > 1 ? currentId - 1 : null;
  const nextId = currentId < 8 ? currentId + 1 : null;
  const prevMeta = prevId ? exerciseMeta[String(prevId)] : null;
  const nextMeta = nextId ? exerciseMeta[String(nextId)] : null;

  return (
    <div className="max-w-5xl space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/tema-3" className="hover:underline">Tema 3</Link>
        <span>/</span>
        <Link href="/tema-3/ejercicios/t3-c" className="hover:underline">T3-C</Link>
        <span>/</span>
        <span>Ejercicio {id}</span>
      </div>

      {/* ===== ANTES DE EMPEZAR ===== */}
      <Card className="border-amber-200 dark:border-amber-800/50 bg-amber-50/50 dark:bg-amber-950/20">
        <CardContent className="p-4 text-sm space-y-2">
          <div className="flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-200">
            <BookOpen className="h-4 w-4" />
            Antes de empezar
          </div>
          <p className="text-amber-900 dark:text-amber-100">
            Aseg&uacute;rate de conocer la teor&iacute;a de movimientos migratorios
            y los ejercicios b&aacute;sicos de la hoja T3-B antes de abordar este problema:
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            <Link href="/tema-3/migraciones">
              <Badge variant="outline" className="cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-900/30 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300">
                <BookOpen className="mr-1 h-3 w-3" />
                3.2 Movimientos Migratorios
                <ChevronRight className="ml-1 h-3 w-3" />
              </Badge>
            </Link>
            <Link href="/tema-3/ejercicios/t3-b">
              <Badge variant="outline" className="cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-900/30 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300">
                <BookOpen className="mr-1 h-3 w-3" />
                Hoja T3-B: Migraciones (1)
                <ChevronRight className="ml-1 h-3 w-3" />
              </Badge>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* ===== PREGUNTA CLAVE ===== */}
      {meta.question && (
        <div className="bg-blue-50/50 dark:bg-blue-950/10 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Pregunta clave</p>
              <p className="text-blue-700 dark:text-blue-300 font-medium text-center mt-2">{meta.question}</p>
            </div>
          </div>
        </div>
      )}

      <div>
        <h1 className="text-2xl font-bold">Ejercicio {id}: {meta.title}</h1>
        <div className="flex flex-wrap gap-2 mt-2">
          {meta.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </div>

      <ExerciseComponent />

      {/* ===== PREV / NEXT NAVIGATION ===== */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
        {prevMeta ? (
          <Link
            href={`/tema-3/ejercicios/t3-c/${prevId}`}
            className="group flex items-start gap-3 rounded-lg border p-4 transition-colors hover:bg-muted/50"
          >
            <ArrowLeft className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
            <div className="space-y-0.5">
              <p className="text-xs text-muted-foreground">Anterior</p>
              <p className="text-sm font-medium group-hover:text-primary">
                Ej.&nbsp;{prevId}: {prevMeta.title}
              </p>
            </div>
          </Link>
        ) : <span />}
        {nextMeta ? (
          <Link
            href={`/tema-3/ejercicios/t3-c/${nextId}`}
            className="group flex items-start gap-3 rounded-lg border p-4 text-right transition-colors hover:bg-muted/50 ml-auto"
          >
            <div className="space-y-0.5">
              <p className="text-xs text-muted-foreground">Siguiente</p>
              <p className="text-sm font-medium group-hover:text-primary">
                Ej.&nbsp;{nextId}: {nextMeta.title}
              </p>
            </div>
            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
          </Link>
        ) : <span />}
      </div>

      {/* ===== LO QUE HAS APRENDIDO ===== */}
      {meta.learned && meta.learned.length > 0 && (
        <div className="bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">Lo que has aprendido</p>
              <ul className="space-y-1">
                {meta.learned.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-emerald-700 dark:text-emerald-300 text-sm">
                    <ArrowRight className="w-3 h-3 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                <Link href="/tema-3/calculadora-migraciones">
                  <Badge variant="outline" className="cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-900/30 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300">
                    Calculadora de Migraciones
                    <ChevronRight className="ml-1 h-3 w-3" />
                  </Badge>
                </Link>
                <Link href="/tema-3/ejercicios/t3-c">
                  <Badge variant="outline" className="cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-900/30 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300">
                    Volver a la lista T3-C
                    <ChevronRight className="ml-1 h-3 w-3" />
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
