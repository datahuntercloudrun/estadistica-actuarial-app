"use client";

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
import { ResultHighlight } from "@/components/exercises/result-highlight";
import { FertilityCurveChart } from "@/components/exercises/fertility-curve-chart";
import { formatNumber } from "@/lib/format";

/* ================================================================
   DATOS DEL EJERCICIO 1 - España 1999
   ================================================================ */

const nacimientos = [
  { edad: "15-19", total: 11198, varones: 5860, mujeres: 5338 },
  { edad: "20-24", total: 39084, varones: 20175, mujeres: 18909 },
  { edad: "25-29", total: 109707, varones: 56302, mujeres: 53405 },
  { edad: "30-34", total: 148163, varones: 76551, mujeres: 71612 },
  { edad: "35-39", total: 61726, varones: 31609, mujeres: 30117 },
  { edad: "40-44", total: 8878, varones: 4510, mujeres: 4368 },
  { edad: "45-49", total: 355, varones: 185, mujeres: 170 },
];

const mujeresResidentes = [
  { edad: "15-19", inicio: 1366633, fin: 1310510 },
  { edad: "20-24", inicio: 1639134, fin: 1621207 },
  { edad: "25-29", inicio: 1612553, fin: 1657708 },
  { edad: "30-34", inicio: 1619366, fin: 1643294 },
  { edad: "35-39", inicio: 1540727, fin: 1586580 },
  { edad: "40-44", inicio: 1390508, fin: 1440426 },
  { edad: "45-49", inicio: 1250044, fin: 1257084 },
];

const pInicio = 40202158;
const pFin = 40499790;

/* ================================================================
   CALCULOS
   ================================================================ */

// Totales
const N = nacimientos.reduce((s, n) => s + n.total, 0); // 379.111
const Nvarones = nacimientos.reduce((s, n) => s + n.varones, 0); // 195.192
const Nmujeres = nacimientos.reduce((s, n) => s + n.mujeres, 0); // 183.919

// Población media total
const pMedia = (pInicio + pFin) / 2; // 40.350.974

// Población femenina 15-49 media
const pfInicio = mujeresResidentes.reduce((s, m) => s + m.inicio, 0); // 10.418.965
const pfFin = mujeresResidentes.reduce((s, m) => s + m.fin, 0); // 10.516.809
const pfMedia = (pfInicio + pfFin) / 2; // 10.467.887

// a) TBN
const TBN = (N / pMedia) * 1000; // 9,3953...

// b) TGF
const TGF = (N / pfMedia) * 1000; // 36,2166...

// c) TEF por edad y sexo
const tefData = nacimientos.map((n, i) => {
  const m = mujeresResidentes[i];
  const pfm = (m.inicio + m.fin) / 2;
  return {
    edad: n.edad,
    pfMedia: pfm,
    tefTotal: (n.total / pfm) * 1000,
    tefVarones: (n.varones / pfm) * 1000,
    tefMujeres: (n.mujeres / pfm) * 1000,
  };
});

const sumaTEF = tefData.reduce((s, t) => s + t.tefTotal, 0);
const sumaTEFf = tefData.reduce((s, t) => s + t.tefMujeres, 0);

// d) ISF
const ISF_simple = (TGF / 1000) * 35;
const ISF_preciso = (5 / 1000) * sumaTEF;

// e) TBR
const GR = Nmujeres / N;
const TBR_simple = ISF_preciso * GR;
const TBR_precisa = (5 / 1000) * sumaTEFf;

/* ================================================================
   COMPONENTE
   ================================================================ */

function fmt(n: number, dec: number = 2): string {
  return formatNumber(n, dec);
}

export function Exercise1() {
  return (
    <div className="space-y-8">
      {/* Titulo */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
            1
          </span>
          <h1 className="text-2xl font-bold">
            Indicadores de Natalidad y Fecundidad - España 1999
          </h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>TBN</Badge>
          <Badge>TGF</Badge>
          <Badge>TEF</Badge>
          <Badge>ISF</Badge>
          <Badge>TBR</Badge>
        </div>
      </div>

      {/* Enunciado */}
      <Card>
        <CardHeader>
          <CardTitle>Enunciado</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            En 1999 las mujeres residentes en España, de 15 a 49 años de edad, tuvieron
            en España los hijos que se indican en la siguiente tabla:
          </p>

          {/* Tabla de nacimientos */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Edad</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="text-right">Varones</TableHead>
                  <TableHead className="text-right">Mujeres</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {nacimientos.map((n) => (
                  <TableRow key={n.edad}>
                    <TableCell className="font-medium">{n.edad}</TableCell>
                    <TableCell className="text-right">{formatNumber(n.total)}</TableCell>
                    <TableCell className="text-right">{formatNumber(n.varones)}</TableCell>
                    <TableCell className="text-right">{formatNumber(n.mujeres)}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="font-bold border-t-2">
                  <TableCell>Total</TableCell>
                  <TableCell className="text-right">{formatNumber(N)}</TableCell>
                  <TableCell className="text-right">{formatNumber(Nvarones)}</TableCell>
                  <TableCell className="text-right">{formatNumber(Nmujeres)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <p>La población residente en España era:</p>

          {/* Tabla de población femenina */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Edad</TableHead>
                  <TableHead className="text-right">01.01.1999</TableHead>
                  <TableHead className="text-right">01.01.2000</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mujeresResidentes.map((m) => (
                  <TableRow key={m.edad}>
                    <TableCell className="font-medium">{m.edad}</TableCell>
                    <TableCell className="text-right">{formatNumber(m.inicio)}</TableCell>
                    <TableCell className="text-right">{formatNumber(m.fin)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Tabla de población total */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Población total</TableHead>
                  <TableHead className="text-right">01.01.1999</TableHead>
                  <TableHead className="text-right">01.01.2000</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Total</TableCell>
                  <TableCell className="text-right">{formatNumber(pInicio)}</TableCell>
                  <TableCell className="text-right">{formatNumber(pFin)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* ========== APARTADO a) TBN ========== */}
      <Card>
        <CardHeader>
          <CardTitle>a) Tasa Bruta de Natalidad (TBN) - 1999</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            La TBN mide la frecuencia de nacimientos en relación con la población media total.
          </p>

          <div className="space-y-3">
            <p className="font-semibold">Paso 1: Fórmula</p>
            <FormulaDisplay
              math="TBN = \frac{N}{\bar{P}} \times 1000"
              block
            />

            <p className="font-semibold">Paso 2: Calcular la población media</p>
            <FormulaDisplay
              math={`\\bar{P} = \\frac{P_{01/01/1999} + P_{01/01/2000}}{2} = \\frac{${formatNumber(pInicio)} + ${formatNumber(pFin)}}{2} = ${formatNumber(pMedia)}`}
              block
            />

            <p className="font-semibold">Paso 3: Calcular total de nacimientos</p>
            <p className="text-sm">
              Sumando todos los grupos de edad: N = {formatNumber(N)}
            </p>

            <p className="font-semibold">Paso 4: Sustituir en la fórmula</p>
            <FormulaDisplay
              math={`TBN = \\frac{${formatNumber(N)}}{${formatNumber(pMedia)}} \\times 1000 = ${fmt(TBN, 2)}\\text{‰}`}
              block
            />
          </div>

          <ResultHighlight
            label="TBN 1999"
            value={fmt(TBN, 2) + "\u2030"}
            unit="nacimientos por cada 1.000 habitantes"
          />
        </CardContent>
      </Card>

      {/* ========== APARTADO b) TGF ========== */}
      <Card>
        <CardHeader>
          <CardTitle>b) Tasa General de Fecundidad (TGF) - 1999</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            La TGF relaciona los nacimientos con la población femenina en edad fértil (15-49 años).
            Es más precisa que la TBN porque restringe el denominador a la población expuesta al riesgo.
          </p>

          <div className="space-y-3">
            <p className="font-semibold">Paso 1: Fórmula</p>
            <FormulaDisplay
              math="TGF = \frac{N}{\bar{P}^f_{15\text{-}49}} \times 1000"
              block
            />

            <p className="font-semibold">Paso 2: Calcular la población media femenina 15-49</p>
            <FormulaDisplay
              math={`\\bar{P}^f_{15\\text{-}49} = \\frac{${formatNumber(pfInicio)} + ${formatNumber(pfFin)}}{2} = ${formatNumber(pfMedia)}`}
              block
            />

            <p className="font-semibold">Paso 3: Sustituir</p>
            <FormulaDisplay
              math={`TGF = \\frac{${formatNumber(N)}}{${formatNumber(pfMedia)}} \\times 1000 = ${fmt(TGF, 2)}\\text{‰}`}
              block
            />
          </div>

          <ResultHighlight
            label="TGF 1999"
            value={fmt(TGF, 2) + "\u2030"}
            unit="nacimientos por cada 1.000 mujeres en edad fértil"
          />
        </CardContent>
      </Card>

      {/* ========== APARTADO c) TEF ========== */}
      <Card>
        <CardHeader>
          <CardTitle>
            c) Tasas Específicas de Fecundidad (TEF) por edad y sexo - 1999
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Las TEF miden la fecundidad para cada grupo de edad de las madres,
            relacionando los nacimientos con la población media de mujeres de ese grupo.
            Cuando se consideran solo los nacidos varones o mujeres, se obtienen las TEF por sexo.
          </p>

          <div className="space-y-3">
            <p className="font-semibold">Fórmula</p>
            <FormulaDisplay
              math="TEF_x = \frac{N_x}{\bar{P}^f_x} \times 1000"
              block
            />

            <p className="font-semibold">Cálculo de población media femenina por grupo de edad</p>
            <FormulaDisplay
              math="\bar{P}^f_x = \frac{P^f_x(01/01/1999) + P^f_x(01/01/2000)}{2}"
              block
            />
          </div>

          {/* Tabla de resultados TEF */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Edad</TableHead>
                  <TableHead className="text-right">Pf media</TableHead>
                  <TableHead className="text-right">N total</TableHead>
                  <TableHead className="text-right">TEF total (&permil;)</TableHead>
                  <TableHead className="text-right">N varones</TableHead>
                  <TableHead className="text-right">TEF varones (&permil;)</TableHead>
                  <TableHead className="text-right">N mujeres</TableHead>
                  <TableHead className="text-right">TEF mujeres (&permil;)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tefData.map((t, i) => (
                  <TableRow key={t.edad}>
                    <TableCell className="font-medium">{t.edad}</TableCell>
                    <TableCell className="text-right">{formatNumber(t.pfMedia, 1)}</TableCell>
                    <TableCell className="text-right">
                      {formatNumber(nacimientos[i].total)}
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      {fmt(t.tefTotal, 4)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatNumber(nacimientos[i].varones)}
                    </TableCell>
                    <TableCell className="text-right">{fmt(t.tefVarones, 4)}</TableCell>
                    <TableCell className="text-right">
                      {formatNumber(nacimientos[i].mujeres)}
                    </TableCell>
                    <TableCell className="text-right">{fmt(t.tefMujeres, 4)}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="font-bold border-t-2">
                  <TableCell>Suma</TableCell>
                  <TableCell />
                  <TableCell className="text-right">{formatNumber(N)}</TableCell>
                  <TableCell className="text-right">{fmt(sumaTEF, 4)}</TableCell>
                  <TableCell className="text-right">{formatNumber(Nvarones)}</TableCell>
                  <TableCell />
                  <TableCell className="text-right">{formatNumber(Nmujeres)}</TableCell>
                  <TableCell className="text-right">{fmt(sumaTEFf, 4)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <p className="text-sm font-semibold">Ejemplo de cálculo (grupo 30-34):</p>
          <FormulaDisplay
            math={`TEF_{30\\text{-}34} = \\frac{${formatNumber(nacimientos[3].total)}}{${formatNumber(tefData[3].pfMedia, 1)}} \\times 1000 = ${fmt(tefData[3].tefTotal, 4)}\\text{‰}`}
            block
          />

          {/* Grafico de curva de fecundidad */}
          <div className="rounded-lg border p-4 bg-muted/30">
            <FertilityCurveChart
              data={tefData}
              title="Curva de fecundidad por edad - España 1999"
            />
          </div>

          <p className="text-sm text-muted-foreground">
            La curva de fecundidad muestra que el grupo de edad 30-34 presenta la mayor
            tasa específica de fecundidad ({fmt(tefData[3].tefTotal, 2)}&permil;),
            seguido del grupo 25-29 ({fmt(tefData[2].tefTotal, 2)}&permil;).
            Las TEF de varones son ligeramente superiores a las de mujeres en todos los
            grupos, reflejando el índice de masculinidad al nacimiento.
          </p>
        </CardContent>
      </Card>

      {/* ========== APARTADO d) ISF ========== */}
      <Card>
        <CardHeader>
          <CardTitle>d) Índice Sintetico de Fecundidad (ISF) - 1999</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            El ISF estima el número medio de hijos que tendria una mujer a lo largo de su vida fértil
            (35 años, de 15 a 49) si se mantuvieran las tasas de fecundidad actuales.
            Se calcula por dos métodos.
          </p>

          {/* Método 1: Simple */}
          <div className="rounded-lg border p-4 space-y-3">
            <h4 className="font-semibold">Método 1: A partir de la TGF (simplificado)</h4>
            <p className="text-sm text-muted-foreground">
              Se multiplica la TGF (que mide hijos por 1.000 mujeres por ano) por la amplitud
              del período fértil (35 años) y se divide entre 1.000.
            </p>
            <FormulaDisplay
              math="ISF = \frac{TGF}{1000} \times 35"
              block
            />
            <FormulaDisplay
              math={`ISF = \\frac{${fmt(TGF, 4)}}{1000} \\times 35 = ${fmt(ISF_simple, 4)}`}
              block
            />
            <div className="inline-block rounded-md border border-primary/30 bg-primary/5 px-3 py-1.5 text-sm font-semibold text-primary">
              ISF (método simplificado) = {fmt(ISF_simple, 4)} hijos por mujer
            </div>
          </div>

          {/* Método 2: Preciso */}
          <div className="rounded-lg border p-4 space-y-3">
            <h4 className="font-semibold">Método 2: A partir de las TEF (preciso)</h4>
            <p className="text-sm text-muted-foreground">
              Se suman las TEF de todos los grupos de edad y se multiplican por la amplitud
              del grupo (5 años, por ser grupos quinquenales) dividido entre 1.000.
            </p>
            <FormulaDisplay
              math="ISF = \frac{a}{1000} \times \sum TEF_x"
              block
            />
            <p className="text-sm">
              Donde <FormulaDisplay math="a = 5" /> (amplitud del grupo quinquenal).
            </p>
            <FormulaDisplay
              math={`\\sum TEF_x = ${fmt(sumaTEF, 4)}`}
              block
            />
            <FormulaDisplay
              math={`ISF = \\frac{5}{1000} \\times ${fmt(sumaTEF, 4)} = ${fmt(ISF_preciso, 4)}`}
              block
            />
            <div className="inline-block rounded-md border border-primary/30 bg-primary/5 px-3 py-1.5 text-sm font-semibold text-primary">
              ISF (método preciso) = {fmt(ISF_preciso, 4)} hijos por mujer
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            El método preciso ({fmt(ISF_preciso, 4)}) es más fiable que el simplificado ({fmt(ISF_simple, 4)})
            porque no esta afectado por la estructura de edades de la población femenina.
            En ambos casos, el valor esta muy por debajo de 2,1 (nivel de reemplazo generacional).
          </p>

          <ResultHighlight
            label="ISF 1999 (método preciso)"
            value={fmt(ISF_preciso, 4)}
            unit="hijos por mujer"
          />
        </CardContent>
      </Card>

      {/* ========== APARTADO e) TBR ========== */}
      <Card>
        <CardHeader>
          <CardTitle>e) Tasa Bruta de Reproducción (TBR) - 1999</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            La TBR mide el número medio de hijas que tendria una mujer a lo largo de su vida fértil.
            Indica la capacidad de reemplazo de la población femenina.
            Se calcula por dos métodos.
          </p>

          {/* Gender Ratio */}
          <div className="space-y-2">
            <p className="font-semibold">Paso previo: Gender Ratio</p>
            <FormulaDisplay
              math={`GR = \\frac{N^{\\text{mujeres}}}{N^{\\text{total}}} = \\frac{${formatNumber(Nmujeres)}}{${formatNumber(N)}} = ${fmt(GR, 4)}`}
              block
            />
          </div>

          {/* Método 1: Simple */}
          <div className="rounded-lg border p-4 space-y-3">
            <h4 className="font-semibold">Método 1: A partir del ISF y Gender Ratio</h4>
            <FormulaDisplay
              math="TBR = ISF \times GR"
              block
            />
            <FormulaDisplay
              math={`TBR = ${fmt(ISF_preciso, 4)} \\times ${fmt(GR, 4)} = ${fmt(TBR_simple, 4)}`}
              block
            />
            <div className="inline-block rounded-md border border-primary/30 bg-primary/5 px-3 py-1.5 text-sm font-semibold text-primary">
              TBR (método simplificado) = {fmt(TBR_simple, 4)} hijas por mujer
            </div>
          </div>

          {/* Método 2: Preciso */}
          <div className="rounded-lg border p-4 space-y-3">
            <h4 className="font-semibold">Método 2: A partir de las TEF femeninas (preciso)</h4>
            <p className="text-sm text-muted-foreground">
              Se suman las TEF calculadas solo con nacimientos femeninos y se aplica la misma
              fórmula que para el ISF.
            </p>
            <FormulaDisplay
              math="TBR = \frac{a}{1000} \times \sum TEF^f_x"
              block
            />
            <FormulaDisplay
              math={`\\sum TEF^f_x = ${fmt(sumaTEFf, 4)}`}
              block
            />
            <FormulaDisplay
              math={`TBR = \\frac{5}{1000} \\times ${fmt(sumaTEFf, 4)} = ${fmt(TBR_precisa, 4)}`}
              block
            />
            <div className="inline-block rounded-md border border-primary/30 bg-primary/5 px-3 py-1.5 text-sm font-semibold text-primary">
              TBR (método preciso) = {fmt(TBR_precisa, 4)} hijas por mujer
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Ambos métodos dan resultados muy similares (simplificado: {fmt(TBR_simple, 4)};
            preciso: {fmt(TBR_precisa, 4)}).
            Un valor de TBR inferior a 1 indica que, a las tasas actuales, las mujeres
            no se están reemplazando a si mismas. En este caso, cada mujer tendria
            aproximadamente {fmt(TBR_precisa, 2)} hijas, muy lejos del nivel de reemplazo (1,0).
          </p>

          <ResultHighlight
            label="TBR 1999 (método preciso)"
            value={fmt(TBR_precisa, 4)}
            unit="hijas por mujer"
          />
        </CardContent>
      </Card>
    </div>
  );
}
