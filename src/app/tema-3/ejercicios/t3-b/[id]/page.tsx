import Link from "next/link";
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
import { FormulaDisplay } from "@/components/theory/formula-display";
import { BookOpen, ArrowLeft, ArrowRight, Lightbulb, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return [{ id: "1" }];
}

/* ------------------------------------------------------------------ */
/*  Datos del ejercicio                                                */
/* ------------------------------------------------------------------ */
const datosAnuales = [
  { year: 2000, pob: 40470182, def: 360391, nac: 397632 },
  { year: 2001, pob: 40665545, def: 360131, nac: 406380 },
  { year: 2002, pob: 41035271, def: 368618, nac: 418846 },
  { year: 2003, pob: 41827836, def: 384828, nac: 441881 },
  { year: 2004, pob: 42547454, def: 371934, nac: 454591 },
];
const pob2005 = 43296335;

/* ------------------------------------------------------------------ */
/*  Cálculos                                                           */
/* ------------------------------------------------------------------ */

// Totales quinquenio
const totalNac = datosAnuales.reduce((s, d) => s + d.nac, 0); // 2.119.330
const totalDef = datosAnuales.reduce((s, d) => s + d.def, 0); // 1.845.902

// a) Quinquenio
const smQuinq = pob2005 - datosAnuales[0].pob - totalNac + totalDef; // 2.552.725
const pMediaQuinq = (datosAnuales[0].pob + pob2005) / 2; // 41.883.258,5
const tasaQuinq = (smQuinq / pMediaQuinq) * 1000; // 60,95 ‰
const tasaAnualMedia = tasaQuinq / 5; // 12,19 ‰

// b) Anuales
const poblaciones = [...datosAnuales.map((d) => d.pob), pob2005];
const anuales = datosAnuales.map((d, i) => {
  const pSig = poblaciones[i + 1];
  const sm = pSig - d.pob - d.nac + d.def;
  const pMedia = (d.pob + pSig) / 2;
  const tasa = (sm / pMedia) * 1000;
  return { year: d.year, sm, pMedia, tasa };
});

// c) Crecimiento vegetativo y TBN
const cvQuinq = totalNac - totalDef; // 273.428
const tbnQuinq = (totalNac / pMediaQuinq) * 1000; // 50,60 ‰
const tbnAnualMedia = tbnQuinq / 5; // 10,12 ‰

const cvAnuales = datosAnuales.map((d, i) => {
  const pSig = poblaciones[i + 1];
  const cv = d.nac - d.def;
  const pMedia = (d.pob + pSig) / 2;
  const tbn = (d.nac / pMedia) * 1000;
  return { year: d.year, cv, tbn };
});

/* ------------------------------------------------------------------ */
/*  Datos pedagógicos del ejercicio                                    */
/* ------------------------------------------------------------------ */
const exerciseData = {
  question:
    "¿Cómo podemos estimar cuántas personas entraron o salieron de España si solo tenemos datos del Padrón, nacimientos y defunciones?",
  learned: [
    "Despejar el saldo migratorio de la ecuación compensadora cuando no hay registro directo de migraciones.",
    "Calcular la tasa de migración neta (TMN) tanto para un quinquenio completo como para períodos anuales.",
    "Obtener el crecimiento vegetativo y la TBN, y compararlos con el saldo migratorio para identificar el motor principal del crecimiento demográfico.",
    "Interpretar que la inmigración fue el principal motor del crecimiento demográfico en España 2000-2004, superando ampliamente al crecimiento natural.",
  ],
};

function fmt(n: number): string {
  const parts = Math.round(n).toString().split(".");
  return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function fmtDec(n: number, decimals = 2): string {
  const fixed = n.toFixed(decimals);
  const [intPart, decPart] = fixed.split(".");
  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${formattedInt},${decPart}`;
}

function fmtMedia(n: number): string {
  const fixed = n.toFixed(1);
  const [intPart, decPart] = fixed.split(".");
  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${formattedInt},${decPart}`;
}

export default function T3BExercise1({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-5xl space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/tema-3" className="hover:underline">Tema 3</Link>
        <span>/</span>
        <Link href="/tema-3/ejercicios/t3-b" className="hover:underline">T3-B</Link>
        <span>/</span>
        <span>Ejercicio 1</span>
      </div>

      {/* Pedagogical context cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Prerequisite card */}
        <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/20">
          <CardContent className="flex items-start gap-3 pt-5">
            <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">
                Antes de empezar
              </p>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                Repasa la teor&iacute;a de{" "}
                <Link
                  href="/tema-3/migraciones"
                  className="font-medium underline decoration-amber-400 underline-offset-2 hover:decoration-amber-600 dark:decoration-amber-500 dark:hover:decoration-amber-300"
                >
                  Migraciones
                </Link>{" "}
                y los{" "}
                <Link
                  href="/tema-3/ejercicios/t3-a"
                  className="font-medium underline decoration-amber-400 underline-offset-2 hover:decoration-amber-600 dark:decoration-amber-500 dark:hover:decoration-amber-300"
                >
                  ejercicios T3-A de Natalidad
                </Link>{" "}
                para dominar la ecuaci&oacute;n compensadora.
              </p>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Pregunta clave */}
      {exerciseData?.question && (
        <div className="bg-blue-50/50 dark:bg-blue-950/10 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Pregunta clave</p>
              <p className="text-blue-700 dark:text-blue-300 font-medium text-center mt-2">{exerciseData.question}</p>
            </div>
          </div>
        </div>
      )}

      <div>
        <h1 className="text-2xl font-bold">Ejercicio 1: Migraciones en Espa&ntilde;a 2000-2004</h1>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="secondary">Saldo migratorio</Badge>
          <Badge variant="secondary">Tasa neta de migración</Badge>
          <Badge variant="secondary">Crecimiento vegetativo</Badge>
          <Badge variant="secondary">TBN</Badge>
        </div>
      </div>

      {/* Enunciado */}
      <Card>
        <CardHeader>
          <CardTitle>Enunciado</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Segun el Padrón Municipal de Habitantes, la población residente en España a 1 de
            enero de cada año durante el período 2000-2004 es la que se refiere en el cuadro
            siguiente. Utilizando el Movimiento Natural de la Población podemos ampliar
            dicha información con las cifras de nacimientos y defunciones producidas
            durante el mismo período.
          </p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ano</TableHead>
                <TableHead className="text-right">Población a 01/01</TableHead>
                <TableHead className="text-right">Defunciones</TableHead>
                <TableHead className="text-right">Nacimientos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">2005</TableCell>
                <TableCell className="text-right">43.296.335</TableCell>
                <TableCell className="text-right"></TableCell>
                <TableCell className="text-right"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2004</TableCell>
                <TableCell className="text-right">42.547.454</TableCell>
                <TableCell className="text-right">371.934</TableCell>
                <TableCell className="text-right">454.591</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2003</TableCell>
                <TableCell className="text-right">41.827.836</TableCell>
                <TableCell className="text-right">384.828</TableCell>
                <TableCell className="text-right">441.881</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2002</TableCell>
                <TableCell className="text-right">41.035.271</TableCell>
                <TableCell className="text-right">368.618</TableCell>
                <TableCell className="text-right">418.846</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2001</TableCell>
                <TableCell className="text-right">40.665.545</TableCell>
                <TableCell className="text-right">360.131</TableCell>
                <TableCell className="text-right">406.380</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2000</TableCell>
                <TableCell className="text-right">40.470.182</TableCell>
                <TableCell className="text-right">360.391</TableCell>
                <TableCell className="text-right">397.632</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="space-y-1 text-sm">
            <p><strong>a)</strong> El saldo migratorio y la tasa de migración neta para el quinquenio 2000-2004.</p>
            <p><strong>b)</strong> El saldo migratorio y la tasa de migración neta para cada uno de los períodos anuales 2000, 2001, 2002, 2003 y 2004.</p>
            <p><strong>c)</strong> Calcular el crecimiento vegetativo y la TBN para los apartados anteriores.</p>
          </div>
        </CardContent>
      </Card>

      {/* ============================================= */}
      {/* SOLUCION APARTADO a)                          */}
      {/* ============================================= */}
      <Card>
        <CardHeader>
          <CardTitle>Solución - Apartado a) Quinquenio 2000-2004</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Paso 1 */}
          <div className="space-y-3">
            <h4 className="font-semibold">Paso 1: Fórmula de la ecuación compensadora</h4>
            <p className="text-sm text-muted-foreground">
              La ecuación compensadora relaciona la población de dos momentos distintos con los
              componentes del crecimiento demográfico. Despejamos el saldo migratorio (SM):
            </p>
            <FormulaDisplay math="P_{t+n} = P_t + N_{t,t+n} - D_{t,t+n} + SM_{t,t+n}" block />
            <div className="rounded-md bg-muted px-4 py-2">
              <FormulaDisplay math="SM_{t,t+n} = P_{t+n} - P_t - N_{t,t+n} + D_{t,t+n}" block />
            </div>
          </div>

          {/* Paso 2 */}
          <div className="space-y-3">
            <h4 className="font-semibold">Paso 2: Calcular totales del quinquenio</h4>
            <p className="text-sm text-muted-foreground">Sumamos nacimientos y defunciones de los 5 años:</p>
            <div className="rounded-md bg-muted px-4 py-2 space-y-1">
              <FormulaDisplay
                math={`N_{\\text{total}} = 397.632 + 406.380 + 418.846 + 441.881 + 454.591 = ${fmt(totalNac)}`}
                block
              />
              <FormulaDisplay
                math={`D_{\\text{total}} = 360.391 + 360.131 + 368.618 + 384.828 + 371.934 = ${fmt(totalDef)}`}
                block
              />
            </div>
          </div>

          {/* Paso 3 */}
          <div className="space-y-3">
            <h4 className="font-semibold">Paso 3: Calcular el saldo migratorio quinquenal</h4>
            <div className="rounded-md bg-muted px-4 py-2">
              <FormulaDisplay
                math={`SM = 43.296.335 - 40.470.182 - 2.119.330 + 1.845.902`}
                block
              />
            </div>
            <div className="inline-block rounded-md border border-primary/30 bg-primary/5 px-3 py-1.5 text-sm font-semibold text-primary">
              SM (quinquenio) = {fmt(smQuinq)} personas
            </div>
          </div>

          {/* Paso 4 */}
          <div className="space-y-3">
            <h4 className="font-semibold">Paso 4: Tasa de migración neta</h4>
            <p className="text-sm text-muted-foreground">
              Se calcula dividiendo el saldo migratorio entre la población media del período:
            </p>
            <FormulaDisplay math="TMN = \\frac{SM}{\\bar{P}} \\times 1.000" block />
            <div className="rounded-md bg-muted px-4 py-2 space-y-1">
              <FormulaDisplay
                math={`\\bar{P} = \\frac{P_{2000} + P_{2005}}{2} = \\frac{40.470.182 + 43.296.335}{2} = ${fmtMedia(pMediaQuinq)}`}
                block
              />
              <FormulaDisplay
                math={`TMN_{\\text{quinquenal}} = \\frac{${fmt(smQuinq)}}{${fmtMedia(pMediaQuinq)}} \\times 1.000 = ${fmtDec(tasaQuinq)}\\text{‰}`}
                block
              />
              <FormulaDisplay
                math={`TMN_{\\text{anual}} = \\frac{${fmtDec(tasaQuinq)}}{5} = ${fmtDec(tasaAnualMedia)}\\text{‰}`}
                block
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
                TMN quinquenal = {fmtDec(tasaQuinq)}&permil;
              </div>
              <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
                TMN anual media = {fmtDec(tasaAnualMedia)}&permil;
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ============================================= */}
      {/* SOLUCION APARTADO b)                          */}
      {/* ============================================= */}
      <Card>
        <CardHeader>
          <CardTitle>Solución - Apartado b) Periodos anuales</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="font-semibold">Paso 1: Fórmula para cada año</h4>
            <p className="text-sm text-muted-foreground">
              Para cada período anual, aplicamos la ecuación compensadora despejando el saldo migratorio:
            </p>
            <FormulaDisplay math="SM_t = P_{t+1} - P_t - N_t + D_t" block />
            <FormulaDisplay math="TMN_t = \\frac{SM_t}{\\bar{P}_t} \\times 1.000 \\quad \\text{donde} \\quad \\bar{P}_t = \\frac{P_t + P_{t+1}}{2}" block />
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Paso 2: Cálculos por ano</h4>
            {anuales.map((a) => {
              const d = datosAnuales.find((x) => x.year === a.year)!;
              const pSig = poblaciones[datosAnuales.indexOf(d) + 1];
              return (
                <div key={a.year} className="rounded-md border p-4 space-y-2">
                  <p className="font-medium">Ano {a.year}:</p>
                  <div className="rounded-md bg-muted px-4 py-2 space-y-1 text-sm">
                    <FormulaDisplay
                      math={`SM_{${a.year}} = ${fmt(pSig)} - ${fmt(d.pob)} - ${fmt(d.nac)} + ${fmt(d.def)} = ${fmt(a.sm)}`}
                      block
                    />
                    <FormulaDisplay
                      math={`\\bar{P}_{${a.year}} = \\frac{${fmt(d.pob)} + ${fmt(pSig)}}{2} = ${fmtMedia(a.pMedia)}`}
                      block
                    />
                    <FormulaDisplay
                      math={`TMN_{${a.year}} = \\frac{${fmt(a.sm)}}{${fmtMedia(a.pMedia)}} \\times 1.000 = ${fmtDec(a.tasa)}\\text{‰}`}
                      block
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Tabla resumen</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ano</TableHead>
                  <TableHead className="text-right">Saldo migratorio</TableHead>
                  <TableHead className="text-right">Población media</TableHead>
                  <TableHead className="text-right">TMN (&permil;)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {anuales.map((a) => (
                  <TableRow key={a.year}>
                    <TableCell className="font-medium">{a.year}</TableCell>
                    <TableCell className="text-right">{fmt(a.sm)}</TableCell>
                    <TableCell className="text-right">{fmtMedia(a.pMedia)}</TableCell>
                    <TableCell className="text-right font-semibold">{fmtDec(a.tasa)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* ============================================= */}
      {/* SOLUCION APARTADO c)                          */}
      {/* ============================================= */}
      <Card>
        <CardHeader>
          <CardTitle>Solución - Apartado c) Crecimiento vegetativo y TBN</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Fórmulas */}
          <div className="space-y-3">
            <h4 className="font-semibold">Fórmulas</h4>
            <p className="text-sm text-muted-foreground">
              El crecimiento vegetativo es la diferencia entre nacimientos y defunciones.
              La Tasa Bruta de Natalidad (TBN) mide la frecuencia de nacimientos en relación
              con la población media.
            </p>
            <FormulaDisplay math="CV = N - D" block />
            <FormulaDisplay math="TBN = \\frac{N}{\\bar{P}} \\times 1.000" block />
          </div>

          {/* Quinquenio */}
          <div className="space-y-3">
            <h4 className="font-semibold">Quinquenio 2000-2004</h4>
            <div className="rounded-md bg-muted px-4 py-2 space-y-1">
              <FormulaDisplay
                math={`CV_{\\text{quinquenal}} = ${fmt(totalNac)} - ${fmt(totalDef)} = ${fmt(cvQuinq)}`}
                block
              />
              <FormulaDisplay
                math={`TBN_{\\text{quinquenal}} = \\frac{${fmt(totalNac)}}{${fmtMedia(pMediaQuinq)}} \\times 1.000 = ${fmtDec(tbnQuinq)}\\text{‰}`}
                block
              />
              <FormulaDisplay
                math={`TBN_{\\text{anual media}} = \\frac{${fmtDec(tbnQuinq)}}{5} = ${fmtDec(tbnAnualMedia)}\\text{‰}`}
                block
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
                CV quinquenal = {fmt(cvQuinq)}
              </div>
              <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
                TBN quinquenal = {fmtDec(tbnQuinq)}&permil;
              </div>
              <div className="inline-block rounded-md border border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950 px-3 py-1.5 text-sm font-semibold text-green-900 dark:text-green-100">
                TBN anual media = {fmtDec(tbnAnualMedia)}&permil;
              </div>
            </div>
          </div>

          {/* Anuales */}
          <div className="space-y-3">
            <h4 className="font-semibold">Periodos anuales</h4>
            {cvAnuales.map((c) => {
              const d = datosAnuales.find((x) => x.year === c.year)!;
              const pSig = poblaciones[datosAnuales.indexOf(d) + 1];
              const pMedia = (d.pob + pSig) / 2;
              return (
                <div key={c.year} className="rounded-md border p-4 space-y-2">
                  <p className="font-medium">Ano {c.year}:</p>
                  <div className="rounded-md bg-muted px-4 py-2 space-y-1 text-sm">
                    <FormulaDisplay
                      math={`CV_{${c.year}} = ${fmt(d.nac)} - ${fmt(d.def)} = ${fmt(c.cv)}`}
                      block
                    />
                    <FormulaDisplay
                      math={`TBN_{${c.year}} = \\frac{${fmt(d.nac)}}{${fmtMedia(pMedia)}} \\times 1.000 = ${fmtDec(c.tbn)}\\text{‰}`}
                      block
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tabla resumen final */}
          <div className="space-y-3">
            <h4 className="font-semibold">Tabla resumen completa</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Periodo</TableHead>
                  <TableHead className="text-right">SM</TableHead>
                  <TableHead className="text-right">TMN (&permil;)</TableHead>
                  <TableHead className="text-right">CV</TableHead>
                  <TableHead className="text-right">TBN (&permil;)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-muted/50 font-semibold">
                  <TableCell>Quinquenio</TableCell>
                  <TableCell className="text-right">{fmt(smQuinq)}</TableCell>
                  <TableCell className="text-right">{fmtDec(tasaQuinq)}</TableCell>
                  <TableCell className="text-right">{fmt(cvQuinq)}</TableCell>
                  <TableCell className="text-right">{fmtDec(tbnQuinq)}</TableCell>
                </TableRow>
                <TableRow className="bg-muted/30 italic text-sm">
                  <TableCell>Quinq. (anual media)</TableCell>
                  <TableCell className="text-right">{fmt(Math.round(smQuinq / 5))}</TableCell>
                  <TableCell className="text-right">{fmtDec(tasaAnualMedia)}</TableCell>
                  <TableCell className="text-right">{fmt(Math.round(cvQuinq / 5))}</TableCell>
                  <TableCell className="text-right">{fmtDec(tbnAnualMedia)}</TableCell>
                </TableRow>
                {anuales.map((a, i) => (
                  <TableRow key={a.year}>
                    <TableCell>{a.year}</TableCell>
                    <TableCell className="text-right">{fmt(a.sm)}</TableCell>
                    <TableCell className="text-right">{fmtDec(a.tasa)}</TableCell>
                    <TableCell className="text-right">{fmt(cvAnuales[i].cv)}</TableCell>
                    <TableCell className="text-right">{fmtDec(cvAnuales[i].tbn)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="rounded-md border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950 p-4">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              <strong>Interpretación:</strong> Durante el quinquenio 2000-2004, España recibio un saldo migratorio
              neto de {fmt(smQuinq)} personas, lo que refleja el fuerte flujo inmigratorio de ese período.
              La tasa neta de migración anual media ({fmtDec(tasaAnualMedia)}&permil;) supera ampliamente
              la TBN anual media ({fmtDec(tbnAnualMedia)}&permil;), indicando que la inmigración fue
              el principal motor del crecimiento demográfico en España durante esos años.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Lo que has aprendido */}
      {exerciseData?.learned && exerciseData.learned.length > 0 && (
        <div className="bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">Lo que has aprendido</p>
              <ul className="space-y-1">
                {exerciseData.learned.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-emerald-700 dark:text-emerald-300 text-sm">
                    <ArrowRight className="w-3 h-3 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Prev / Next navigation with descriptive labels */}
      <div className="flex items-stretch justify-between gap-4 pt-4">
        <Link
          href="/tema-3/ejercicios/t3-a"
          className="group flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm transition-colors hover:bg-muted dark:bg-muted/20 dark:hover:bg-muted/40"
        >
          <ArrowLeft className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-0.5" />
          <div className="text-left">
            <span className="block text-xs text-muted-foreground">Hoja anterior</span>
            <span className="font-medium text-foreground">T3-A: Natalidad y Fecundidad</span>
          </div>
        </Link>
        <Link
          href="/tema-3/ejercicios/t3-c"
          className="group flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm transition-colors hover:bg-muted dark:bg-muted/20 dark:hover:bg-muted/40"
        >
          <div className="text-right">
            <span className="block text-xs text-muted-foreground">Hoja siguiente</span>
            <span className="font-medium text-foreground">T3-C: Migraciones avanzado</span>
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
