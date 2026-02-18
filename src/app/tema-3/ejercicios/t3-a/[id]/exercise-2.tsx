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
import { formatNumber } from "@/lib/format";

/* ================================================================
   DATOS DEL EJERCICIO 2 - España 2021-2022
   ================================================================ */

// STOCKS - Poblaciones medias
const pMedia2021 = 47400798;
const pMedia2022 = 47486727;
const pH2021 = 23248611;
const pH2022 = 23288747;
const pM2021 = 24152187;
const pM2022 = 24197980;

// STOCKS - Poblaciones a 1 de enero
const pf_01_2021 = 10408643;
const pf_01_2022 = 10518440;
const pf_01_2023 = 10580963;
const pm_01_2021 = 10688660;
const pm_01_2022 = 10776194;
const pm_01_2023 = 10580412;

// FLUJOS
const I2021 = 1258894;
const I2022 = 887960;
const E2021 = 531889;
const E2022 = 696866;
const N2021 = 337380;
const N2022 = 329251;
const Nv2021 = 174148;
const Nv2022 = 169602;
const Nm2021 = 163232;
const Nm2022 = 159649;

/* ================================================================
   CALCULOS
   ================================================================ */

// f) TBN 2021
const TBN2021 = (N2021 / pMedia2021) * 1000;

// g) TGF 2022
const pfMedia2022 = (pf_01_2022 + pf_01_2023) / 2;
const TGF2022 = (N2022 / pfMedia2022) * 1000;

// h) Gender Ratio 2021
const GR2021 = Nm2021 / N2021;

// i) ISF 2021
const pfMedia2021 = (pf_01_2021 + pf_01_2022) / 2;
const TGF2021 = (N2021 / pfMedia2021) * 1000;
const ISF2021 = (TGF2021 / 1000) * 35;

// j) TBR 2022
const GR2022 = Nm2022 / N2022;
const ISF2022 = (TGF2022 / 1000) * 35;
const TBR2022 = ISF2022 * GR2022;

// k) TEF masculina 2021
const pmMedia2021 = (pm_01_2021 + pm_01_2022) / 2;
const TEFm2021 = (N2021 / pmMedia2021) * 1000;

// l) Índice de masculinidad 2022
const IM2022 = Nv2022 / Nm2022;

// m) TBI y TBE 2021
const TBI2021 = (I2021 / pMedia2021) * 1000;
const TBE2021 = (E2021 / pMedia2021) * 1000;

// n) TBI acumulada 2021-2022
const Itotal = I2021 + I2022;
const pMediaConjunta = (pMedia2021 + pMedia2022) / 2;
const TBIacum = (Itotal / pMediaConjunta) * 1000;

// o) Saldo migratorio 2022
const SM2022 = I2022 - E2022;

// p) Tasa neta de migración 2021
const SM2021 = I2021 - E2021;
const TNM2021 = (SM2021 / pMedia2021) * 1000;

// q) Razon de intercambio 2022
const RI2022 = I2022 / E2022;

// r) Saldo vegetativo 2021
// SV = N - D. Sin dato de defunciones, usamos la ec. compensadora como aproximacion.
// Aproximacion: deltaP = P_media(2022) - P_media(2021) ≈ SV + SM (para un período)
const deltaP = pMedia2022 - pMedia2021;
const SV2021_aprox = deltaP - SM2021;

/* ================================================================
   COMPONENTE
   ================================================================ */

function fmt(n: number, dec: number = 2): string {
  return formatNumber(n, dec);
}

export function Exercise2() {
  return (
    <div className="space-y-8">
      {/* Titulo */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
            2
          </span>
          <h1 className="text-2xl font-bold">
            Indicadores demográficos - España 2021-2022
          </h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>TBN</Badge>
          <Badge>TGF</Badge>
          <Badge>ISF</Badge>
          <Badge>TBR</Badge>
          <Badge>TBI</Badge>
          <Badge>TBE</Badge>
          <Badge>Saldo migratorio</Badge>
          <Badge>Masculinidad</Badge>
        </div>
      </div>

      {/* Enunciado */}
      <Card>
        <CardHeader>
          <CardTitle>Enunciado</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Se dispone de la siguiente información sobre la población espanola
            en los años 2021 y 2022:
          </p>

          {/* Tabla de stocks medios */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>STOCKS</TableHead>
                  <TableHead className="text-right">2021 (media)</TableHead>
                  <TableHead className="text-right">2022 (media)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Población total</TableCell>
                  <TableCell className="text-right">{formatNumber(pMedia2021)}</TableCell>
                  <TableCell className="text-right">{formatNumber(pMedia2022)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Población total (Hombres)</TableCell>
                  <TableCell className="text-right">{formatNumber(pH2021)}</TableCell>
                  <TableCell className="text-right">{formatNumber(pH2022)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Población total (Mujeres)</TableCell>
                  <TableCell className="text-right">{formatNumber(pM2021)}</TableCell>
                  <TableCell className="text-right">{formatNumber(pM2022)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Tabla de stocks a 01/01 */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>STOCKS</TableHead>
                  <TableHead className="text-right">01/01/2021</TableHead>
                  <TableHead className="text-right">01/01/2022</TableHead>
                  <TableHead className="text-right">01/01/2023</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Mujeres de 15 a 49 años</TableCell>
                  <TableCell className="text-right">{formatNumber(pf_01_2021)}</TableCell>
                  <TableCell className="text-right">{formatNumber(pf_01_2022)}</TableCell>
                  <TableCell className="text-right">{formatNumber(pf_01_2023)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Hombres de 15 a 49 años</TableCell>
                  <TableCell className="text-right">{formatNumber(pm_01_2021)}</TableCell>
                  <TableCell className="text-right">{formatNumber(pm_01_2022)}</TableCell>
                  <TableCell className="text-right">{formatNumber(pm_01_2023)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Tabla de flujos */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>FLUJOS</TableHead>
                  <TableHead className="text-right">Total 2021</TableHead>
                  <TableHead className="text-right">Total 2022</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Inmigraciones (externas)</TableCell>
                  <TableCell className="text-right">{formatNumber(I2021)}</TableCell>
                  <TableCell className="text-right">{formatNumber(I2022)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Emigraciones (externas)</TableCell>
                  <TableCell className="text-right">{formatNumber(E2021)}</TableCell>
                  <TableCell className="text-right">{formatNumber(E2022)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Nacimientos</TableCell>
                  <TableCell className="text-right">{formatNumber(N2021)}</TableCell>
                  <TableCell className="text-right">{formatNumber(N2022)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Nacimientos varones</TableCell>
                  <TableCell className="text-right">{formatNumber(Nv2021)}</TableCell>
                  <TableCell className="text-right">{formatNumber(Nv2022)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Nacimientos mujeres</TableCell>
                  <TableCell className="text-right">{formatNumber(Nm2021)}</TableCell>
                  <TableCell className="text-right">{formatNumber(Nm2022)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* ========== f) TBN 2021 ========== */}
      <Card>
        <CardHeader>
          <CardTitle>f) Tasa Bruta de Natalidad (TBN) - 2021</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            La TBN mide el número de nacimientos por cada mil habitantes.
            Utilizamos la población media proporcionada directamente.
          </p>
          <FormulaDisplay
            math="TBN = \\frac{N}{\\bar{P}} \\times 1000"
            block
          />
          <FormulaDisplay
            math={`TBN_{2021} = \\frac{${formatNumber(N2021)}}{${formatNumber(pMedia2021)}} \\times 1000 = ${fmt(TBN2021, 2)}\\text{‰}`}
            block
          />
          <ResultHighlight
            label="TBN 2021"
            value={fmt(TBN2021, 2) + "\u2030"}
            unit="nacimientos por cada 1.000 habitantes"
          />
        </CardContent>
      </Card>

      {/* ========== g) TGF 2022 ========== */}
      <Card>
        <CardHeader>
          <CardTitle>g) Tasa General de Fecundidad (TGF) - 2022</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            La TGF relaciona los nacimientos con la población femenina en edad fértil (15-49).
            La población media se calcula a partir de los stocks a 1 de enero.
          </p>
          <FormulaDisplay
            math="TGF = \\frac{N}{\\bar{P}^f_{15\\text{-}49}} \\times 1000"
            block
          />

          <p className="font-semibold text-sm">Población media femenina 15-49 en 2022:</p>
          <FormulaDisplay
            math={`\\bar{P}^f_{15\\text{-}49} = \\frac{${formatNumber(pf_01_2022)} + ${formatNumber(pf_01_2023)}}{2} = ${formatNumber(pfMedia2022, 1)}`}
            block
          />

          <FormulaDisplay
            math={`TGF_{2022} = \\frac{${formatNumber(N2022)}}{${formatNumber(pfMedia2022, 1)}} \\times 1000 = ${fmt(TGF2022, 2)}\\text{‰}`}
            block
          />
          <ResultHighlight
            label="TGF 2022"
            value={fmt(TGF2022, 2) + "\u2030"}
            unit="nacimientos por cada 1.000 mujeres en edad fértil"
          />
        </CardContent>
      </Card>

      {/* ========== h) Gender Ratio 2021 ========== */}
      <Card>
        <CardHeader>
          <CardTitle>h) Gender Ratio - 2021</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            El Gender Ratio representa la proporción de nacimientos femeninos
            sobre el total de nacimientos.
          </p>
          <FormulaDisplay
            math="GR = \\frac{N^{\\text{mujeres}}}{N^{\\text{total}}}"
            block
          />
          <FormulaDisplay
            math={`GR_{2021} = \\frac{${formatNumber(Nm2021)}}{${formatNumber(N2021)}} = ${fmt(GR2021, 4)}`}
            block
          />
          <ResultHighlight
            label="Gender Ratio 2021"
            value={fmt(GR2021, 4)}
            unit="proporción de nacimientos femeninos"
          />
        </CardContent>
      </Card>

      {/* ========== i) ISF 2021 ========== */}
      <Card>
        <CardHeader>
          <CardTitle>i) Índice Sintetico de Fecundidad (ISF) - 2021</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Sin disponer de TEF por edad, utilizamos el método simplificado a partir de la TGF.
          </p>

          <p className="font-semibold text-sm">Paso 1: Calcular la TGF 2021</p>
          <FormulaDisplay
            math={`\\bar{P}^f_{15\\text{-}49} = \\frac{${formatNumber(pf_01_2021)} + ${formatNumber(pf_01_2022)}}{2} = ${formatNumber(pfMedia2021, 1)}`}
            block
          />
          <FormulaDisplay
            math={`TGF_{2021} = \\frac{${formatNumber(N2021)}}{${formatNumber(pfMedia2021, 1)}} \\times 1000 = ${fmt(TGF2021, 2)}\\text{‰}`}
            block
          />

          <p className="font-semibold text-sm">Paso 2: Calcular el ISF</p>
          <FormulaDisplay
            math="ISF = \\frac{TGF}{1000} \\times 35"
            block
          />
          <FormulaDisplay
            math={`ISF_{2021} = \\frac{${fmt(TGF2021, 2)}}{1000} \\times 35 = ${fmt(ISF2021, 4)}`}
            block
          />
          <ResultHighlight
            label="ISF 2021"
            value={fmt(ISF2021, 4)}
            unit="hijos por mujer"
          />
        </CardContent>
      </Card>

      {/* ========== j) TBR 2022 ========== */}
      <Card>
        <CardHeader>
          <CardTitle>j) Tasa Bruta de Reproducción (TBR) - 2022</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            La TBR indica el número medio de hijas por mujer. Se obtiene multiplicando
            el ISF por el Gender Ratio.
          </p>

          <p className="font-semibold text-sm">Paso 1: Gender Ratio 2022</p>
          <FormulaDisplay
            math={`GR_{2022} = \\frac{${formatNumber(Nm2022)}}{${formatNumber(N2022)}} = ${fmt(GR2022, 4)}`}
            block
          />

          <p className="font-semibold text-sm">Paso 2: ISF 2022 (método simplificado)</p>
          <FormulaDisplay
            math={`ISF_{2022} = \\frac{TGF_{2022}}{1000} \\times 35 = \\frac{${fmt(TGF2022, 2)}}{1000} \\times 35 = ${fmt(ISF2022, 4)}`}
            block
          />

          <p className="font-semibold text-sm">Paso 3: TBR</p>
          <FormulaDisplay
            math="TBR = ISF \\times GR"
            block
          />
          <FormulaDisplay
            math={`TBR_{2022} = ${fmt(ISF2022, 4)} \\times ${fmt(GR2022, 4)} = ${fmt(TBR2022, 4)}`}
            block
          />
          <ResultHighlight
            label="TBR 2022"
            value={fmt(TBR2022, 4)}
            unit="hijas por mujer"
          />
        </CardContent>
      </Card>

      {/* ========== k) TEF masculina 2021 ========== */}
      <Card>
        <CardHeader>
          <CardTitle>k) TEF masculina - 2021</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            La Tasa Específica de Fecundidad masculina (o Tasa General de Fecundidad masculina)
            es analoga a la TGF pero referida a la población masculina en edad fértil (15-49).
            El numerador sigue siendo el total de nacimientos.
          </p>
          <FormulaDisplay
            math="TEF^m = \\frac{N}{\\bar{P}^m_{15\\text{-}49}} \\times 1000"
            block
          />

          <p className="font-semibold text-sm">Población media masculina 15-49 en 2021:</p>
          <FormulaDisplay
            math={`\\bar{P}^m_{15\\text{-}49} = \\frac{${formatNumber(pm_01_2021)} + ${formatNumber(pm_01_2022)}}{2} = ${formatNumber(pmMedia2021)}`}
            block
          />
          <FormulaDisplay
            math={`TEF^m_{2021} = \\frac{${formatNumber(N2021)}}{${formatNumber(pmMedia2021)}} \\times 1000 = ${fmt(TEFm2021, 2)}\\text{‰}`}
            block
          />
          <ResultHighlight
            label="TEF masculina 2021"
            value={fmt(TEFm2021, 2) + "\u2030"}
            unit="nacimientos por cada 1.000 hombres en edad fértil"
          />
        </CardContent>
      </Card>

      {/* ========== l) Índice de masculinidad 2022 ========== */}
      <Card>
        <CardHeader>
          <CardTitle>l) Índice de masculinidad al nacimiento - 2022</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            El índice de masculinidad al nacimiento mide la relación entre nacidos varones
            y nacidas mujeres. Valores tipicos oscilan alrededor de 1,05.
          </p>
          <FormulaDisplay
            math="IM = \\frac{N^{\\text{varones}}}{N^{\\text{mujeres}}}"
            block
          />
          <FormulaDisplay
            math={`IM_{2022} = \\frac{${formatNumber(Nv2022)}}{${formatNumber(Nm2022)}} = ${fmt(IM2022, 4)}`}
            block
          />
          <p className="text-sm text-muted-foreground">
            Esto significa que por cada 100 ninas nacidas, nacen aproximadamente {fmt(IM2022 * 100, 2)} ninos.
          </p>
          <ResultHighlight
            label="Índice de masculinidad 2022"
            value={fmt(IM2022, 4)}
            unit="varones por cada mujer nacida"
          />
        </CardContent>
      </Card>

      {/* ========== m) TBI y TBE 2021 ========== */}
      <Card>
        <CardHeader>
          <CardTitle>m) Tasa Bruta de Inmigración (TBI) y Tasa Bruta de Emigración (TBE) - 2021</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            La TBI mide la intensidad de la inmigración y la TBE la de la emigración,
            ambas en relación con la población media.
          </p>

          <div className="space-y-3">
            <p className="font-semibold text-sm">TBI 2021:</p>
            <FormulaDisplay
              math="TBI = \\frac{I}{\\bar{P}} \\times 1000"
              block
            />
            <FormulaDisplay
              math={`TBI_{2021} = \\frac{${formatNumber(I2021)}}{${formatNumber(pMedia2021)}} \\times 1000 = ${fmt(TBI2021, 2)}\\text{‰}`}
              block
            />
            <ResultHighlight
              label="TBI 2021"
              value={fmt(TBI2021, 2) + "\u2030"}
              unit="inmigrantes por cada 1.000 habitantes"
            />
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-sm">TBE 2021:</p>
            <FormulaDisplay
              math="TBE = \\frac{E}{\\bar{P}} \\times 1000"
              block
            />
            <FormulaDisplay
              math={`TBE_{2021} = \\frac{${formatNumber(E2021)}}{${formatNumber(pMedia2021)}} \\times 1000 = ${fmt(TBE2021, 2)}\\text{‰}`}
              block
            />
            <ResultHighlight
              label="TBE 2021"
              value={fmt(TBE2021, 2) + "\u2030"}
              unit="emigrantes por cada 1.000 habitantes"
            />
          </div>
        </CardContent>
      </Card>

      {/* ========== n) TBI acumulada 2021-2022 ========== */}
      <Card>
        <CardHeader>
          <CardTitle>n) TBI acumulada - período 2021-2022</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            La TBI acumulada para un período conjunto se calcula dividiendo el total de
            inmigraciones del período entre la población media del período completo.
          </p>
          <FormulaDisplay
            math="TBI_{\\text{acum}} = \\frac{I_{2021} + I_{2022}}{\\bar{P}_{\\text{período}}} \\times 1000"
            block
          />

          <p className="font-semibold text-sm">Total de inmigraciones:</p>
          <FormulaDisplay
            math={`I_{\\text{total}} = ${formatNumber(I2021)} + ${formatNumber(I2022)} = ${formatNumber(Itotal)}`}
            block
          />

          <p className="font-semibold text-sm">Población media del período:</p>
          <FormulaDisplay
            math={`\\bar{P}_{\\text{período}} = \\frac{\\bar{P}_{2021} + \\bar{P}_{2022}}{2} = \\frac{${formatNumber(pMedia2021)} + ${formatNumber(pMedia2022)}}{2} = ${formatNumber(pMediaConjunta, 1)}`}
            block
          />

          <FormulaDisplay
            math={`TBI_{\\text{acum}} = \\frac{${formatNumber(Itotal)}}{${formatNumber(pMediaConjunta, 1)}} \\times 1000 = ${fmt(TBIacum, 2)}\\text{‰}`}
            block
          />
          <ResultHighlight
            label="TBI acumulada 2021-2022"
            value={fmt(TBIacum, 2) + "\u2030"}
            unit="inmigrantes por cada 1.000 habitantes en el período"
          />
        </CardContent>
      </Card>

      {/* ========== o) Saldo migratorio 2022 ========== */}
      <Card>
        <CardHeader>
          <CardTitle>o) Saldo migratorio - 2022</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            El saldo migratorio es la diferencia entre inmigraciones y emigraciones.
            Un valor positivo indica inmigración neta.
          </p>
          <FormulaDisplay
            math="SM = I - E"
            block
          />
          <FormulaDisplay
            math={`SM_{2022} = ${formatNumber(I2022)} - ${formatNumber(E2022)} = ${formatNumber(SM2022)}`}
            block
          />
          <ResultHighlight
            label="Saldo migratorio 2022"
            value={formatNumber(SM2022)}
            unit="personas (inmigración neta positiva)"
          />
        </CardContent>
      </Card>

      {/* ========== p) Tasa neta de migración 2021 ========== */}
      <Card>
        <CardHeader>
          <CardTitle>p) Tasa neta de migración - 2021</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            La tasa neta de migración resume el efecto neto de las migraciones sobre la población.
          </p>
          <FormulaDisplay
            math="TNM = \\frac{SM}{\\bar{P}} \\times 1000"
            block
          />

          <p className="font-semibold text-sm">Saldo migratorio 2021:</p>
          <FormulaDisplay
            math={`SM_{2021} = ${formatNumber(I2021)} - ${formatNumber(E2021)} = ${formatNumber(SM2021)}`}
            block
          />

          <FormulaDisplay
            math={`TNM_{2021} = \\frac{${formatNumber(SM2021)}}{${formatNumber(pMedia2021)}} \\times 1000 = ${fmt(TNM2021, 2)}\\text{‰}`}
            block
          />
          <ResultHighlight
            label="Tasa neta de migración 2021"
            value={fmt(TNM2021, 2) + "\u2030"}
            unit="migración neta por cada 1.000 habitantes"
          />
        </CardContent>
      </Card>

      {/* ========== q) Razon de intercambio 2022 ========== */}
      <Card>
        <CardHeader>
          <CardTitle>q) Razon de intercambio - 2022</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            La razón de intercambio compara las inmigraciones con las emigraciones.
            Un valor mayor que 1 indica que entran más personas de las que salen.
          </p>
          <FormulaDisplay
            math="RI = \\frac{I}{E}"
            block
          />
          <FormulaDisplay
            math={`RI_{2022} = \\frac{${formatNumber(I2022)}}{${formatNumber(E2022)}} = ${fmt(RI2022, 4)}`}
            block
          />
          <p className="text-sm text-muted-foreground">
            Por cada emigrante, entraron aproximadamente {fmt(RI2022, 2)} inmigrantes.
          </p>
          <ResultHighlight
            label="Razon de intercambio 2022"
            value={fmt(RI2022, 4)}
            unit="inmigrantes por cada emigrante"
          />
        </CardContent>
      </Card>

      {/* ========== r) Saldo vegetativo 2021 ========== */}
      <Card>
        <CardHeader>
          <CardTitle>r) Saldo vegetativo - 2021</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            El saldo vegetativo (o crecimiento natural) es la diferencia entre nacimientos y
            defunciones. Es uno de los componentes de la ecuación compensadora.
          </p>

          <FormulaDisplay
            math="SV = N - D"
            block
          />

          <div className="rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950 p-4 space-y-3">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">
              Nota: No se proporcionan directamente las defunciones.
            </p>
            <p className="text-sm text-amber-700 dark:text-amber-300">
              Para obtener el saldo vegetativo sin el dato de defunciones,
              recurrimos a la ecuación compensadora. De ella sabemos que la variación
              de población se descompone en saldo vegetativo (SV) y saldo migratorio (SM):
            </p>
            <FormulaDisplay
              math="\\Delta P = SV + SM \\implies SV = \\Delta P - SM"
              block
            />
          </div>

          <p className="font-semibold text-sm">Paso 1: Variacion de la población (aproximacion)</p>
          <p className="text-sm text-muted-foreground">
            Utilizando las poblaciones medias como aproximacion:
          </p>
          <FormulaDisplay
            math={`\\Delta P \\approx \\bar{P}_{2022} - \\bar{P}_{2021} = ${formatNumber(pMedia2022)} - ${formatNumber(pMedia2021)} = ${formatNumber(deltaP)}`}
            block
          />

          <p className="font-semibold text-sm">Paso 2: Saldo migratorio 2021</p>
          <FormulaDisplay
            math={`SM_{2021} = I - E = ${formatNumber(I2021)} - ${formatNumber(E2021)} = ${formatNumber(SM2021)}`}
            block
          />

          <p className="font-semibold text-sm">Paso 3: Saldo vegetativo (aproximado)</p>
          <FormulaDisplay
            math={`SV_{2021} \\approx \\Delta P - SM = ${formatNumber(deltaP)} - ${formatNumber(SM2021)} = ${formatNumber(SV2021_aprox)}`}
            block
          />

          <div className="rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950 p-4 space-y-2">
            <p className="text-sm text-amber-700 dark:text-amber-300">
              <strong>Importante:</strong> Esta es una aproximacion, ya que la diferencia de
              poblaciones medias entre años consecutivos no coincide exactamente con la variación
              anual real (las medias solapan períodos). El signo negativo indica que las
              defunciones superaron a los nacimientos, lo cual es consistente con la
              situación demográfica de España.
            </p>
            <p className="text-sm text-amber-700 dark:text-amber-300">
              Las defunciones aproximadas serian: D &asymp; N - SV = {formatNumber(N2021)} - ({formatNumber(SV2021_aprox)}) = {formatNumber(N2021 - SV2021_aprox)}.
            </p>
          </div>

          <ResultHighlight
            label="Saldo vegetativo 2021 (aproximado)"
            value={formatNumber(SV2021_aprox)}
            unit="personas (crecimiento natural negativo)"
          />
        </CardContent>
      </Card>
    </div>
  );
}
