"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { LexisDiagram } from "@/components/lexis/lexis-diagram";
import { LexisLegend } from "@/components/lexis/lexis-legend";
import type { LexisLegendItem } from "@/components/lexis/lexis-legend";
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
import type { LexisConfig } from "@/types/lexis";
import { BookOpen, ArrowLeft, ArrowRight, Lightbulb, AlertTriangle } from "lucide-react";

/* ────────────────────────────────────────────
   Ejercicio 1 - Interpretación de líneas y areas
   ──────────────────────────────────────────── */
function Ejercicio1() {
  /* Diagrama del enunciado: years 2009-2015, ages 0-4
     a) = cuadrado (edad-período) en year=2011, age=2 → area
     b) = linea horizontal en age=1, years 2014-2015 → stock line
     c) = paralelogramo (cohorte-edad) en cohort=2011, age=2 → area
     d) = triangulo inferior en year=2012, age=0 → area (triangulo)
     Looking at the image more carefully:
     - a) is a square at year≈2010-2011, age 2-3 → edad-período surface
     - d) is a triangle at year≈2011-2012, age 0-1
     - c) is a parallelogram extending right at age 2-3 ≈ years 2013-2014
     - b) is a horizontal line segment at age ~0.5 ≈ years 2014-2015

     From the PDF image analysis:
     a) = cuadrado edad-período at (2011, 2): defunciones con 2 años cumplidos durante 2011
     b) = linea horizontal en age=1, year≈2015: stock
     c) = paralelogramo cohorte-edad at cohort≈2011, age=2-3: defunciones de generación 2011 a los 2 años
     d) = triangulo inferior at (2012, 0): defunciones de nacidos en 2012 con 0 años en 2012
  */

  const configEnunciado: LexisConfig = {
    startYear: 2009,
    endYear: 2016,
    minAge: 0,
    maxAge: 5,
    cellSize: 60,
    lifelines: [
      { cohort: 2009, color: "#d1d5db", dashed: true },
      { cohort: 2010, color: "#d1d5db", dashed: true },
      { cohort: 2011, color: "#d1d5db", dashed: true },
      { cohort: 2012, color: "#d1d5db", dashed: true },
      { cohort: 2013, color: "#d1d5db", dashed: true },
      { cohort: 2014, color: "#d1d5db", dashed: true },
      { cohort: 2015, color: "#d1d5db", dashed: true },
    ],
    surfaces: [
      // a) cuadrado edad-período en year=2010, age=2
      { type: "edad-período", year: 2010, age: 2, color: "#ef4444", label: "a", opacity: 0.35 },
      // c) paralelogramo cohorte-edad: cohort=2011, age=2
      { type: "cohorte-edad", year: 2013, age: 2, cohort: 2011, color: "#ef4444", label: "c", opacity: 0.35 },
      // d) triangulo inferior en year=2012, age=0
      { type: "triangulo-inf", year: 2012, age: 0, color: "#ef4444", label: "d", opacity: 0.35 },
    ],
    stockLines: [
      // b) linea horizontal en age=1, entre years 2014-2015
      { type: "horizontal", year: 2014, age: 1, endYear: 2016, color: "#ef4444", label: "b", thickness: 3 },
    ],
  };

  const legendItems: LexisLegendItem[] = [
    { color: "#ef4444", label: "a) Superficie edad-período", type: "surface" },
    { color: "#ef4444", label: "b) Linea de stock (horizontal)", type: "line" },
    { color: "#ef4444", label: "c) Superficie cohorte-edad", type: "surface" },
    { color: "#ef4444", label: "d) Triangulo inferior", type: "surface" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Enunciado</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Considerando que el fenómeno estudiado es la <strong>mortalidad</strong>, indique
            que representan las líneas y areas (a, b, c y d, respectivamente) del siguiente
            diagrama de Lexis.
          </p>
          <div className="max-w-2xl mx-auto">
            <LexisDiagram config={configEnunciado} />
            <LexisLegend items={legendItems} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Solución</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="rounded-lg border p-4 bg-red-50 dark:bg-red-950/20">
              <h4 className="font-semibold mb-2">a) Superficie edad-período (cuadrado)</h4>
              <p className="text-sm">
                El area <strong>a)</strong> es un <strong>cuadrado</strong> que corresponde a una
                observación de tipo <strong>edad-período</strong>. Representa las{" "}
                <strong>defunciones de personas con 2 años cumplidos durante el año 2010</strong>.
              </p>
              <p className="text-sm mt-2 text-muted-foreground">
                Abarca dos generaciones (nacidos en 2007 y 2008) que tenían 2 años cumplidos
                en algun momento de 2010. El cuadrado delimita: año 2010-2011 en el eje
                horizontal y edades 2-3 en el eje vertical.
              </p>
            </div>

            <div className="rounded-lg border p-4 bg-red-50 dark:bg-red-950/20">
              <h4 className="font-semibold mb-2">b) Linea horizontal (stock)</h4>
              <p className="text-sm">
                La linea <strong>b)</strong> es un <strong>segmento horizontal</strong> a la
                edad exacta de 1 año, que representa un{" "}
                <strong>stock: los supervivientes de edad exacta 1 año</strong> (es decir, las
                personas que cumplen 1 año) entre los años 2014 y 2016. Es un segmento
                sobre una linea de aniversarios.
              </p>
              <p className="text-sm mt-2 text-muted-foreground">
                Al ser horizontal (edad constante), recoge los individuos de distintas
                generaciones que van alcanzando esa edad exacta a lo largo de ese período.
              </p>
            </div>

            <div className="rounded-lg border p-4 bg-red-50 dark:bg-red-950/20">
              <h4 className="font-semibold mb-2">c) Superficie cohorte-edad (paralelogramo)</h4>
              <p className="text-sm">
                El area <strong>c)</strong> es un <strong>paralelogramo</strong> que corresponde
                a una observación de tipo <strong>cohorte-edad</strong>. Representa las{" "}
                <strong>
                  defunciones de la generación de 2011 con 2 años de edad cumplidos
                </strong>.
              </p>
              <p className="text-sm mt-2 text-muted-foreground">
                Abarca individuos de la misma generación (2011) y la misma edad cumplida (2),
                pero el suceso puede ocurrir en dos años de calendario distintos (2013 y 2014).
                Se fijan cohorte y edad; el período queda libre.
              </p>
            </div>

            <div className="rounded-lg border p-4 bg-red-50 dark:bg-red-950/20">
              <h4 className="font-semibold mb-2">d) Triangulo inferior</h4>
              <p className="text-sm">
                El area <strong>d)</strong> es un <strong>triangulo inferior</strong> dentro
                del cuadrado edad-período (2012, edad 0). Representa las{" "}
                <strong>
                  defunciones de nacidos en 2012 con 0 años cumplidos, ocurridas durante el
                  año 2012
                </strong>.
              </p>
              <p className="text-sm mt-2 text-muted-foreground">
                Es una observación de tipo <strong>edad-período-cohorte</strong> (triangulo):
                se fija simultaneamente la edad (0 cumplidos), el período (2012) y la cohorte
                (generación 2012). Solo incluye el triangulo inferior del cuadrado
                porque la generación de 2012 nace durante 2012 y tiene 0 años en 2012.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ────────────────────────────────────────────
   Ejercicio 2 - Representar stocks y flujos
   ──────────────────────────────────────────── */
function Ejercicio2() {
  // a) Efectivos de población con 1 año cumplido el 1 de enero de 1901
  //    → linea vertical en year=1901, de age=1 a age=2
  const configA: LexisConfig = {
    startYear: 1897,
    endYear: 1907,
    minAge: 0,
    maxAge: 6,
    cellSize: 55,
    lifelines: [
      { cohort: 1899, color: "#d1d5db", dashed: true },
      { cohort: 1900, color: "#d1d5db", dashed: true },
      { cohort: 1901, color: "#d1d5db", dashed: true },
      { cohort: 1902, color: "#d1d5db", dashed: true },
    ],
    stockLines: [
      { type: "vertical", year: 1901, age: 1, endAge: 2, color: "#3b82f6", label: "P₁(1901)", thickness: 4 },
    ],
  };

  // b) Efectivos iniciales de la generación 1901 = nacimientos a lo largo de 1901
  //    → linea horizontal en age=0, de year=1901 a year=1902
  const configB: LexisConfig = {
    startYear: 1897,
    endYear: 1907,
    minAge: 0,
    maxAge: 6,
    cellSize: 55,
    lifelines: [
      { cohort: 1901, color: "#d1d5db", dashed: true },
    ],
    stockLines: [
      { type: "horizontal", year: 1901, age: 0, endYear: 1902, color: "#22c55e", label: "N(1901)", thickness: 4 },
    ],
  };

  // c) Supervivientes de generación 1901 en su primer aniversario
  //    l₁(gen 1901) = supervivientes a edad exacta 1
  //    En Lexis: segmento horizontal a edad 1, desde año 1902 hasta 1903
  //    (la generación 1901 nace a lo largo de todo 1901, así que alcanzan
  //    edad exacta 1 a lo largo de todo 1902, desde 1/1/1902 hasta 31/12/1902)
  const configC: LexisConfig = {
    startYear: 1897,
    endYear: 1907,
    minAge: 0,
    maxAge: 6,
    cellSize: 55,
    lifelines: [
      { cohort: 1901, color: "#3b82f6", startAge: 0, endAge: 3 },
    ],
    stockLines: [
      { type: "horizontal", year: 1902, age: 1, endYear: 1903, color: "#ef4444", label: "l₁(1901)", thickness: 3 },
    ],
    annotations: [
      { x: 1902.5, y: 1.3, text: "l₁(gen.1901)", fontSize: 11, color: "#ef4444" },
    ],
  };

  // d) Defunciones con 2 años cumplidos durante 1902 → cuadrado edad-período
  const configD: LexisConfig = {
    startYear: 1897,
    endYear: 1907,
    minAge: 0,
    maxAge: 6,
    cellSize: 55,
    lifelines: [
      { cohort: 1899, color: "#d1d5db", dashed: true },
      { cohort: 1900, color: "#d1d5db", dashed: true },
      { cohort: 1901, color: "#d1d5db", dashed: true },
    ],
    surfaces: [
      { type: "edad-período", year: 1902, age: 2, color: "#f59e0b", label: "d", opacity: 0.45 },
    ],
  };

  // e) Defunciones durante 1902 de la generación 1897 → período-cohorte
  //    gen 1897 en 1902: edad = 1902-1897=5, así que year=1902, cohort=1897
  const configE: LexisConfig = {
    startYear: 1897,
    endYear: 1907,
    minAge: 0,
    maxAge: 6,
    cellSize: 55,
    lifelines: [
      { cohort: 1897, color: "#3b82f6" },
    ],
    surfaces: [
      { type: "período-cohorte", year: 1902, age: 5, cohort: 1897, color: "#8b5cf6", label: "e", opacity: 0.45 },
    ],
  };

  // f) Defunciones de personas de 3 años cumplidos, generación 1901 → cohorte-edad
  const configF: LexisConfig = {
    startYear: 1897,
    endYear: 1907,
    minAge: 0,
    maxAge: 6,
    cellSize: 55,
    lifelines: [
      { cohort: 1901, color: "#3b82f6" },
    ],
    surfaces: [
      { type: "cohorte-edad", year: 1904, age: 3, cohort: 1901, color: "#06b6d4", label: "f", opacity: 0.45 },
    ],
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Enunciado</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">Se pide representar:</p>
          <ol className="list-[lower-alpha] list-inside space-y-2 text-sm">
            <li>
              Los efectivos de la población con un año de edad cumplidos el 1 de enero de 1901.
            </li>
            <li>
              Los efectivos iniciales de la generación de 1901. Es decir, los nacimientos
              ocurridos a lo largo de 1901.
            </li>
            <li>
              Los individuos de la generación de 1901 que han sobrevivido en su primer
              aniversario. Tambien se puede expresar como el número de individuos que han
              cumplido un año durante el año 1902.
            </li>
            <li>
              El flujo de defunciones ocurridas entre individuos con dos años de edad cumplidos
              durante el año 1902.
            </li>
            <li>
              Las defunciones observadas durante el año 1902, de la generación nacida durante
              el año 1897.
            </li>
            <li>
              Las defunciones ocurridas de personas de tres años de edad cumplidos
              pertenecientes a la generación nacida durante el año 1901.
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Solución</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* a) */}
          <div className="space-y-3">
            <h4 className="font-semibold text-blue-700">
              a) Efectivos con 1 año cumplido el 01/01/1901 → Linea vertical (Stock)
            </h4>
            <p className="text-sm">
              Se trata de un <strong>stock</strong>: un recuento de población en un instante
              concreto (1 de enero de 1901). La población con 1 año cumplido se representa
              como un <strong>segmento vertical</strong> en el año 1901, entre las edades 1 y 2.
            </p>
            <p className="text-sm text-muted-foreground">
              Incluye a los nacidos en 1899 que aún no han cumplido 2 años.
              La generación de 1900 no se incluye porque a 1/01/1901 tienen 0 años
              cumplidos (nacieron durante 1900, así que aún no han cumplido su
              primer aniversario).
            </p>
            <div className="max-w-xl mx-auto">
              <LexisDiagram config={configA} />
            </div>
          </div>

          {/* b) */}
          <div className="space-y-3">
            <h4 className="font-semibold text-green-700">
              b) Nacimientos de 1901 (efectivos iniciales) → Segmento horizontal (Stock)
            </h4>
            <p className="text-sm">
              Los <strong>efectivos iniciales</strong> de la generación 1901 son los
              nacimientos ocurridos a lo largo de 1901. En Lexis, las{" "}
              <strong>líneas siempre representan stocks</strong> (recuentos de personas).
              Este segmento horizontal en edad 0, de 1/01/1901 a 31/12/1901,
              cuenta las personas que nacen (alcanzan edad 0) durante ese año.
            </p>
            <div className="max-w-xl mx-auto">
              <LexisDiagram config={configB} />
            </div>
          </div>

          {/* c) */}
          <div className="space-y-3">
            <h4 className="font-semibold text-red-700">
              c) Supervivientes al primer aniversario, generación 1901 → Segmento horizontal a edad 1
            </h4>
            <p className="text-sm">
              Los supervivientes de la generación 1901 que llegan a su primer aniversario
              se denotan como <strong>l₁(gen. 1901)</strong>. Se trata de un{" "}
              <strong>stock</strong> que se representa como un{" "}
              <strong>segmento horizontal sobre la linea de edad exacta 1</strong>,
              desde el año 1902 hasta el año 1903.
            </p>
            <p className="text-sm text-muted-foreground">
              ¿Por qué de 1902 a 1903? Porque la generación 1901 nace a lo largo de
              todo el año 1901: los nacidos el 1/1/1901 cumplen 1 año el 1/1/1902, y
              los nacidos el 31/12/1901 cumplen 1 año el 31/12/1902. Por tanto, el
              conjunto de supervivientes a edad exacta 1 se extiende a lo largo de
              todo el año 1902 sobre la linea horizontal de edad 1.
            </p>
            <div className="max-w-xl mx-auto">
              <LexisDiagram config={configC} />
            </div>
          </div>

          {/* d) */}
          <div className="space-y-3">
            <h4 className="font-semibold text-amber-700">
              d) Defunciones con 2 años cumplidos durante 1902 → Cuadrado edad-período
            </h4>
            <p className="text-sm">
              Es un <strong>flujo</strong> observado con tipo{" "}
              <strong>edad-período</strong>: se fija la edad cumplida (2 años) y el período
              (ano 1902). El area es un cuadrado que abarca dos generaciones (nacidos en 1899
              y en 1900).
            </p>
            <div className="max-w-xl mx-auto">
              <LexisDiagram config={configD} />
            </div>
          </div>

          {/* e) */}
          <div className="space-y-3">
            <h4 className="font-semibold text-purple-700">
              e) Defunciones en 1902, generación 1897 → Paralelogramo período-cohorte
            </h4>
            <p className="text-sm">
              Se fija el <strong>período</strong> (1902) y la <strong>cohorte</strong>{" "}
              (generación 1897). Es una observación de tipo{" "}
              <strong>período-cohorte</strong>. La generación 1897 tiene edades cumplidas
              4 y 5 durante 1902 (cumplen 5 años a lo largo de ese año), así que el
              paralelogramo abarca desde edad 4 hasta edad 6.
            </p>
            <div className="max-w-xl mx-auto">
              <LexisDiagram config={configE} />
            </div>
          </div>

          {/* f) */}
          <div className="space-y-3">
            <h4 className="font-semibold text-cyan-700">
              f) Defunciones a los 3 años, generación 1901 → Paralelogramo cohorte-edad
            </h4>
            <p className="text-sm">
              Se fija la <strong>cohorte</strong> (generación 1901) y la{" "}
              <strong>edad cumplida</strong> (3 años). Es una observación de tipo{" "}
              <strong>cohorte-edad</strong>. El paralelogramo se sitúa entre los años 1904 y
              1906 (cuando la generación de 1901 tiene 3 años cumplidos), entre las edades 3 y 4.
              Abarca dos años de calendario porque los nacidos a principio de 1901 cumplen 3 en
              1904 y los nacidos a final de 1901 cumplen 4 a finales de 1905.
            </p>
            <div className="max-w-xl mx-auto">
              <LexisDiagram config={configF} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ────────────────────────────────────────────
   Ejercicio 3 - Construir Lexis con datos
   ──────────────────────────────────────────── */
function Ejercicio3() {
  /* Data from the exercise:
     Births: 1996=2164, 1997=2120, 1998=2037, 1999=2170, 2000=2209

     Deaths table (cohort, age_death, year_death):
     Cohort 1996: age0 in 1996=21, age0 in 1997=1, age1 in 1997=1, age1 in 1998=0,
                  age2 in 1998=1, age2 in 1999=1, age3 in 1999=0, age3 in 2000=0, age4 in 2000=0
     Cohort 1997: age0 in 1997=36, age0 in 1998=7, age1 in 1998=3, age1 in 1999=3,
                  age2 in 1999=1, age2 in 2000=1, age3 in 2000=1
     Cohort 1998: age0 in 1998=23, age0 in 1999=2, age1 in 1999=1, age1 in 2000=2, age2 in 2000=0
     Cohort 1999: age0 in 1999=20, age0 in 2000=4, age1 in 2000=1
     Cohort 2000: age0 in 2000=23

     Each death at (cohort, age, year) falls in a specific triangle:
     - If year = cohort + age → lower triangle (same year as birth + age years)
     - If year = cohort + age + 1 → upper triangle

     For cohort c, age x, death year t:
     - t = c + x → lower triangle (triangulo-inf) at (year=t, age=x)
     - t = c + x + 1 → upper triangle (triangulo-sup) at (year=t, age=x)
     Wait, let me reconsider. The triangles:
     - triangulo-inf at (year, age): cohort = year, age = x, year = year → nacidos en year con x cumplidos en year
     - triangulo-sup at (year, age): cohort = year-1-age...

     Actually for the Lexis triangle placement:
     - Lower triangle at cell (year=y, age=x): contains events for cohort=y-x at age x during year y
       Actually no. Let me think more carefully.

     In a Lexis square at (year=y, age=x):
     - The lower-left triangle (triangulo-inf) contains: cohort y-x, age x, year y
       (born in y-x, have age x, die in year y). The diagonal goes from (y, x) to (y+1, x+1).
       Below the diagonal: events where the person hasn't yet had their birthday in year y.
       For cohort c=y-x: born in year c, reach age x at some point. In year y=c+x, they start
       the year at age x-1 (if birthday hasn't happened) or age x (if birthday has happened).
       Wait, this is getting complex. Let me use the standard convention:

     Standard Lexis triangle convention:
     - In square (year t, age x):
       - Lower triangle (triangulo-inf): cohort = t-x, death at age x during year t
         (cohort born in t-x, die at age x during year t)
         This means: c + x = t, so t = c + x
       - Upper triangle (triangulo-sup): cohort = t-x-1, death at age x during year t
         (cohort born in t-x-1, die at age x during year t)
         This means: c + x + 1 = t, or c + x = t - 1

     Wait, actually:
     For cohort c at age x:
     - If they die in year t = c + x: they are in the LOWER triangle of square (year=c+x, age=x)
       Because year - age = c, and the lower triangle of square (y, x) has cohort = y - x.
       Let me verify: square (y=c+x, x), lower triangle: cohort = y - x = c+x - x = c. Correct!
     - If they die in year t = c + x + 1: they are in the UPPER triangle of square (year=c+x, age=x)
       Wait no: square (y=c+x+1, x), upper triangle: cohort = y - x - 1 = c+x+1 - x - 1 = c.
       So: upper triangle of square (year=c+x+1, age=x).

     Let me verify with cohort 1996, age 0:
     - Deaths in 1996 (year=1996): t = c + x = 1996 + 0 = 1996. → lower triangle at (year=1996, age=0). Value=21 ✓
     - Deaths in 1997 (year=1997): t = c + x + 1 = 1996 + 0 + 1 = 1997. → upper triangle at (year=1997, age=0).
       Wait: upper triangle of (year=1997, age=0) has cohort = 1997-0-1 = 1996. ✓ Value=1

     So the rule is:
     - Cohort c, age x, dies in year t:
       - If t = c + x → lower triangle (triangulo-inf) at square (year=t, age=x)
       - If t = c + x + 1 → upper triangle (triangulo-sup) at square (year=t, age=x)
         Wait, which square for upper? Let me recheck:
         Upper triangle of square (year=t, age=x) has cohort = t - x - 1.
         For c=1996, x=0, t=1997: cohort = 1997 - 0 - 1 = 1996 ✓
         So upper triangle at (year=1997, age=0). ✓

     Now let me compute all surviving populations.

     I'll compute step by step. First, let me map out which triangle each death entry goes to.

     Cohort 1996:
       (age=0, year=1996): t=c+x → lower tri at (1996, 0) = 21
       (age=0, year=1997): t=c+x+1 → upper tri at (1997, 0) = 1
       (age=1, year=1997): t=c+x → lower tri at (1997, 1) = 1
       (age=1, year=1998): t=c+x+1 → upper tri at (1998, 1) = 0
       (age=2, year=1998): t=c+x → lower tri at (1998, 2) = 1
       (age=2, year=1999): t=c+x+1 → upper tri at (1999, 2) = 1
       (age=3, year=1999): t=c+x → lower tri at (1999, 3) = 0
       (age=3, year=2000): t=c+x+1 → upper tri at (2000, 3) = 0
       (age=4, year=2000): t=c+x → lower tri at (2000, 4) = 0

     Cohort 1997:
       (age=0, year=1997): lower tri at (1997, 0) = 36
       (age=0, year=1998): upper tri at (1998, 0) = 7
       (age=1, year=1998): lower tri at (1998, 1) = 3
       (age=1, year=1999): upper tri at (1999, 1) = 3
       (age=2, year=1999): lower tri at (1999, 2) = 1
       (age=2, year=2000): upper tri at (2000, 2) = 1
       (age=3, year=2000): lower tri at (2000, 3) = 1

     Cohort 1998:
       (age=0, year=1998): lower tri at (1998, 0) = 23
       (age=0, year=1999): upper tri at (1999, 0) = 2
       (age=1, year=1999): lower tri at (1999, 1) = 1
       (age=1, year=2000): upper tri at (2000, 1) = 2
       (age=2, year=2000): lower tri at (2000, 2) = 0

     Cohort 1999:
       (age=0, year=1999): lower tri at (1999, 0) = 20
       (age=0, year=2000): upper tri at (2000, 0) = 4
       (age=1, year=2000): lower tri at (2000, 1) = 1

     Cohort 2000:
       (age=0, year=2000): lower tri at (2000, 0) = 23

     Now compute survivors. Zero migration assumed.

     For generation c, survivors at exact age x (denoted l_x(c)):
     l_0(c) = births(c) = N(c)

     After lower triangle deaths at age x: survivors at the "kink" in year c+x
     After upper triangle deaths at age x: survivors reach exact age x+1 at start of year c+x+1

     More precisely:
     l_x(c) = survivors at exact age x

     In the lower triangle at (year=c+x, age=x): deaths = d_inf(c,x)
     In the upper triangle at (year=c+x+1, age=x): deaths = d_sup(c,x)
     (Note: upper tri at (year=c+x, age=x) has cohort c-1, not c)

     Hmm, let me reconsider. The upper triangle at (year=c+x+1, age=x) has cohort = (c+x+1)-x-1 = c ✓

     So for cohort c, age x:
     d_inf(c, x) = deaths in lower triangle at (year=c+x, age=x)
     d_sup(c, x) = deaths in upper triangle at (year=c+x+1, age=x)

     Survivors at start of year t who have x years completed, for cohort c:
     P_x(c, 1.1.t) = l_x(c) - d_inf(c, x) if t = c+x+1
     Wait, let me think about this differently.

     Stock at 1.1. of year t for people with x years completed:
     This vertical line crosses the diagonal of cohort t-x-1 (upper part) and cohort t-x (lower part).

     Let me just compute the survivors by cohort:

     Gen 1996 (N=2164):
       l_0 = 2164
       After lower tri age 0: 2164 - 21 = 2143  (surviving at end of 1996, i.e. 1.1.1997, with 0 years completed from gen 1996)
       After upper tri age 0: 2143 - 1 = 2142 → l_1(1996) = 2142
       After lower tri age 1: 2142 - 1 = 2141
       After upper tri age 1: 2141 - 0 = 2141 → l_2(1996) = 2141
       After lower tri age 2: 2141 - 1 = 2140
       After upper tri age 2: 2140 - 1 = 2139 → l_3(1996) = 2139
       After lower tri age 3: 2139 - 0 = 2139
       After upper tri age 3: 2139 - 0 = 2139 → l_4(1996) = 2139
       After lower tri age 4: 2139 - 0 = 2139

     Gen 1997 (N=2120):
       l_0 = 2120
       After lower tri age 0: 2120 - 36 = 2084
       After upper tri age 0: 2084 - 7 = 2077 → l_1 = 2077
       After lower tri age 1: 2077 - 3 = 2074
       After upper tri age 1: 2074 - 3 = 2071 → l_2 = 2071
       After lower tri age 2: 2071 - 1 = 2070
       After upper tri age 2: 2070 - 1 = 2069 → l_3 = 2069
       After lower tri age 3: 2069 - 1 = 2068

     Gen 1998 (N=2037):
       l_0 = 2037
       After lower tri age 0: 2037 - 23 = 2014
       After upper tri age 0: 2014 - 2 = 2012 → l_1 = 2012
       After lower tri age 1: 2012 - 1 = 2011
       After upper tri age 1: 2011 - 2 = 2009 → l_2 = 2009
       After lower tri age 2: 2009 - 0 = 2009

     Gen 1999 (N=2170):
       l_0 = 2170
       After lower tri age 0: 2170 - 20 = 2150
       After upper tri age 0: 2150 - 4 = 2146 → l_1 = 2146
       After lower tri age 1: 2146 - 1 = 2145

     Gen 2000 (N=2209):
       l_0 = 2209
       After lower tri age 0: 2209 - 23 = 2186

     Stock at 1.1.t, x years completed = P_x(1.1.t):
     P_x(1.1.t) includes people from gen t-x-1 (who have x completed, in upper part)
                 and from gen t-x (who have x completed, in lower part)

     Actually the stock at 1.1.t with x years completed is just the sum:
     - From gen c=t-x-1: survivors after lower triangle at age x = l_x(c) - d_inf(c, x)
     - From gen c=t-x: this gen has age x at 1.1.t only if t - (t-x) = x, but since
       these are people born in year t-x, at 1.1.t they have age either x-1 or x depending
       on when in the year they were born...

     Actually, let's use the simpler interpretation. At 1.1.t, people with x years completed:
     - gen c = t-x-1: born in t-x-1, at 1.1.t they are (t-(t-x-1)) = x+1 years if birthday passed, or x years if not.
       But since we're at 1.1.t and they were born sometime in t-x-1, some have already turned x+1 (born before 1.1) and some haven't. Under integer ages, at 1.1.t:
       People born in year t-x-1 have age t-1-(t-x-1) = x at end of previous year
       Wait this is getting complicated. Let me use the standard demographic identity:

     People with x years completed at 1.1.t = people who've had their x-th birthday but not their (x+1)-th.
     These are people born between 1.1.(t-x-1) and 31.12.(t-x-1), i.e., gen t-x-1.
     Wait no: if born on 1.1.(t-x), at 1.1.t they'd be exactly x, so they'd have x completed.
     If born on 31.12.(t-x-1), at 1.1.t they'd be x years and 1 day, so x completed.
     If born on 1.1.(t-x-1), at 1.1.t they'd be x+1 years exactly.
     If born on 31.12.(t-x-2), at 1.1.t they'd be x+1 years and 1 day.

     So at 1.1.t, people with EXACTLY x years completed (i.e., between birthdays x and x+1):
     Were born between 1.1.(t-x-1) and 31.12.(t-x-1), plus those born on 1.1.(t-x) who are exactly x.
     Essentially: generation t-x-1. But also late gen t-x... In practice with integer years,
     the stock P_x(1.1.t) on a vertical line in Lexis crosses:
     - The upper part of gen t-x-1's age-x band (above the diagonal)
     - The lower part of gen t-x's age-x band (below the diagonal)
     But NO! At 1.1.t, gen t-x hasn't had any birthdays yet in year t, so at 1.1.t their age is
     t-1-(t-x)=x-1. So gen t-x has x-1 completed at 1.1.t (before their birthday in year t).
     And gen t-x-1 has x completed at 1.1.t (they turned x sometime in year t-1, and won't turn x+1 until sometime in year t).

     So actually P_x(1.1.t) consists entirely of gen t-x-1 survivors at 1.1.t.

     Hmm wait, that's also not right. gen t-x-1: born sometime in year t-x-1, so at 1.1.t their age is:
     - If born 1.1.(t-x-1): age = x+1 on their next birthday in year t (actually x on 1.1.t if birthday is 1.1)
     No wait: born 1.1.(t-x-1), on 1.1.t they are exactly t - (t-x-1) = x+1 years old.
     Born 31.12.(t-x-1), on 1.1.t they are exactly t - (t-x-1) ≈ x years and 2 days old.

     So gen t-x-1 at 1.1.t: ages range from x (born end of year) to x+1 (born start of year).
     So those with x years completed are the ones born later in the year who haven't turned x+1 yet.
     And gen t-x at 1.1.t: born sometime in year t-x, at 1.1.t age = t-(t-x) = x years at most (born 1.1) to x-1 years and a day (born 31.12.(t-x)).
     So gen t-x at 1.1.t has ages from x-1 to x. Those with x completed... only if born exactly 1.1.(t-x).

     OK, I think the standard Lexis convention is clearer:
     The vertical line at 1.1.t, between ages x and x+1, crosses:
     - The band of gen t-x-1 (above the diagonal line of gen t-x-1)
     This represents people with x years completed at 1.1.t.

     P_x(1.1.t) = survivors of gen t-x-1 who are still alive at 1.1.t and have age x completed
     = l_x(gen t-x-1) - deaths in lower triangle of (year=t-1, age=x) for gen t-x-1
       Actually this = survivors of gen t-x-1 after the lower tri at age x in year t-1, MINUS
       the upper tri deaths at age x in year t... hmm no.

     Let me just compute from the survivors data directly:

     For gen c:
     - At 1.1.(c+1), survivors with 0 completed from gen c = N(c) - d_inf(c,0)
       (survived through the lower triangle of age 0 in year c)
     - At 1.1.(c+1), total 0-completed = survivors from gen c after lower tri at age 0
       (gen c-1 contributes x=0 survivors but gen c-1 at 1.1.(c+1) has age 1+ so doesn't count for age 0)
       Wait: gen c at 1.1.(c+1) has age between 0 and 1 → 0 years completed ✓
       gen c-1 at 1.1.(c+1) has age between 1 and 2 → 1 year completed
       So P_0(1.1.(c+1)) = N(c) - d_inf(c, 0)

     Wait, but the problem also mentions gen c+1 hasn't been born yet at 1.1.(c+1), so:
     P_0(1.1.1997) = N(1996) - d_inf(1996, 0) = 2164 - 21 = 2143
     P_0(1.1.1998) = N(1997) - d_inf(1997, 0) = 2120 - 36 = 2084
     P_0(1.1.1999) = N(1998) - d_inf(1998, 0) = 2037 - 23 = 2014
     P_0(1.1.2000) = N(1999) - d_inf(1999, 0) = 2170 - 20 = 2150
     P_0(1.1.2001) = N(2000) - d_inf(2000, 0) = 2209 - 23 = 2186

     P_1(1.1.1998) = l_1(1996) - d_inf(1996, 1) = 2142 - 1 = 2141
       Wait: l_1(1996)=2142, then at 1.1.1998 gen 1996 has age between 1 and 2 → 1 completed.
       But at 1.1.1998, have they gone through the lower triangle at age 1?
       Lower tri at age 1 for gen 1996: year = 1996+1 = 1997, deaths = 1
       At 1.1.1998 (end of 1997), gen 1996 has survived through both the lower tri at age 1 (in 1997)
       and NOT yet through the upper tri at age 1 (which is in 1998).
       So P_1(1.1.1998) from gen 1996 = l_1(1996) - d_inf(1996, 1) = 2142 - 1 = 2141 ✓

     P_1(1.1.1999) = l_1(1997) - d_inf(1997, 1) = 2077 - 3 = 2074
     P_1(1.1.2000) = l_1(1998) - d_inf(1998, 1) = 2012 - 1 = 2011
     P_1(1.1.2001) = l_1(1999) - d_inf(1999, 1) = 2146 - 1 = 2145

     P_2(1.1.1999) = l_2(1996) - d_inf(1996, 2) = 2141 - 1 = 2140
     P_2(1.1.2000) = l_2(1997) - d_inf(1997, 2) = 2071 - 1 = 2070
     P_2(1.1.2001) = l_2(1998) - d_inf(1998, 2) = 2009 - 0 = 2009

     P_3(1.1.2000) = l_3(1996) - d_inf(1996, 3) = 2139 - 0 = 2139
     P_3(1.1.2001) = l_3(1997) - d_inf(1997, 3) = 2069 - 1 = 2068

     P_4(1.1.2001) = l_4(1996) - d_inf(1996, 4) = 2139 - 0 = 2139
  */

  const configLexis: LexisConfig = {
    startYear: 1996,
    endYear: 2001,
    minAge: 0,
    maxAge: 5,
    cellSize: 70,
    lifelines: [
      { cohort: 1996, color: "#3b82f6" },
      { cohort: 1997, color: "#22c55e" },
      { cohort: 1998, color: "#f59e0b" },
      { cohort: 1999, color: "#ef4444" },
      { cohort: 2000, color: "#8b5cf6" },
    ],
    surfaces: [],
    births: [
      { year: 1996, value: "2.164", color: "#3b82f6" },
      { year: 1997, value: "2.120", color: "#22c55e" },
      { year: 1998, value: "2.037", color: "#f59e0b" },
      { year: 1999, value: "2.170", color: "#ef4444" },
      { year: 2000, value: "2.209", color: "#8b5cf6" },
    ],
    annotations: [
      // Triángulo inferior: centroide en (año+0.67, edad+0.33)
      // Triángulo superior: centroide en (año+0.33, edad+0.67)

      // Lower triangles (gen 1996): año=c+x, edad=x
      { x: 1996.67, y: 0.33, text: "21", fontSize: 10, color: "#9ca3af" },
      { x: 1997.67, y: 1.33, text: "1", fontSize: 10, color: "#9ca3af" },
      { x: 1998.67, y: 2.33, text: "1", fontSize: 10, color: "#9ca3af" },
      { x: 1999.67, y: 3.33, text: "0", fontSize: 10, color: "#9ca3af" },
      { x: 2000.67, y: 4.33, text: "0", fontSize: 10, color: "#9ca3af" },

      // Upper triangles (gen 1996): año=c+x+1, edad=x
      { x: 1997.33, y: 0.67, text: "1", fontSize: 10, color: "#9ca3af" },
      { x: 1998.33, y: 1.67, text: "0", fontSize: 10, color: "#9ca3af" },
      { x: 1999.33, y: 2.67, text: "1", fontSize: 10, color: "#9ca3af" },
      { x: 2000.33, y: 3.67, text: "0", fontSize: 10, color: "#9ca3af" },

      // Lower triangles (gen 1997)
      { x: 1997.67, y: 0.33, text: "36", fontSize: 10, color: "#9ca3af" },
      { x: 1998.67, y: 1.33, text: "3", fontSize: 10, color: "#9ca3af" },
      { x: 1999.67, y: 2.33, text: "1", fontSize: 10, color: "#9ca3af" },
      { x: 2000.67, y: 3.33, text: "1", fontSize: 10, color: "#9ca3af" },

      // Upper triangles (gen 1997)
      { x: 1998.33, y: 0.67, text: "7", fontSize: 10, color: "#9ca3af" },
      { x: 1999.33, y: 1.67, text: "3", fontSize: 10, color: "#9ca3af" },
      { x: 2000.33, y: 2.67, text: "1", fontSize: 10, color: "#9ca3af" },

      // Lower triangles (gen 1998)
      { x: 1998.67, y: 0.33, text: "23", fontSize: 10, color: "#9ca3af" },
      { x: 1999.67, y: 1.33, text: "1", fontSize: 10, color: "#9ca3af" },
      { x: 2000.67, y: 2.33, text: "0", fontSize: 10, color: "#9ca3af" },

      // Upper triangles (gen 1998)
      { x: 1999.33, y: 0.67, text: "2", fontSize: 10, color: "#9ca3af" },
      { x: 2000.33, y: 1.67, text: "2", fontSize: 10, color: "#9ca3af" },

      // Lower triangles (gen 1999)
      { x: 1999.67, y: 0.33, text: "20", fontSize: 10, color: "#9ca3af" },
      { x: 2000.67, y: 1.33, text: "1", fontSize: 10, color: "#9ca3af" },

      // Upper triangles (gen 1999)
      { x: 2000.33, y: 0.67, text: "4", fontSize: 10, color: "#9ca3af" },

      // Lower triangle (gen 2000)
      { x: 2000.67, y: 0.33, text: "23", fontSize: 10, color: "#9ca3af" },

      // ── Supervivientes en edad cumplida (cian) ──
      // Gen c, edad exacta x → posición (c+x+0.15, x-0.12): justo debajo de la línea de edad
      // Gen 1996: l₁=2.142, l₂=2.141, l₃=2.139, l₄=2.139
      { x: 1997.18, y: 0.88, text: "2.142", fontSize: 7, color: "#22d3ee" },
      { x: 1998.18, y: 1.88, text: "2.141", fontSize: 7, color: "#22d3ee" },
      { x: 1999.18, y: 2.88, text: "2.139", fontSize: 7, color: "#22d3ee" },
      { x: 2000.18, y: 3.88, text: "2.139", fontSize: 7, color: "#22d3ee" },
      // Gen 1997: l₁=2.077, l₂=2.071, l₃=2.069
      { x: 1998.18, y: 0.88, text: "2.077", fontSize: 7, color: "#22d3ee" },
      { x: 1999.18, y: 1.88, text: "2.071", fontSize: 7, color: "#22d3ee" },
      { x: 2000.18, y: 2.88, text: "2.069", fontSize: 7, color: "#22d3ee" },
      // Gen 1998: l₁=2.012, l₂=2.009
      { x: 1999.18, y: 0.88, text: "2.012", fontSize: 7, color: "#22d3ee" },
      { x: 2000.18, y: 1.88, text: "2.009", fontSize: 7, color: "#22d3ee" },
      // Gen 1999: l₁=2.146
      { x: 2000.18, y: 0.88, text: "2.146", fontSize: 7, color: "#22d3ee" },

      // ── Población según calendario (magenta) ──
      // P_x(1.1.t) → posición (t+0.12, x+0.5): a la derecha de la línea vertical
      // P₀ a 1 de enero
      { x: 1997.12, y: 0.5, text: "2.143", fontSize: 7, color: "#f472b6" },
      { x: 1998.12, y: 0.5, text: "2.084", fontSize: 7, color: "#f472b6" },
      { x: 1999.12, y: 0.5, text: "2.014", fontSize: 7, color: "#f472b6" },
      { x: 2000.12, y: 0.5, text: "2.150", fontSize: 7, color: "#f472b6" },
      { x: 2001.12, y: 0.5, text: "2.186", fontSize: 7, color: "#f472b6" },
      // P₁ a 1 de enero
      { x: 1998.12, y: 1.5, text: "2.141", fontSize: 7, color: "#f472b6" },
      { x: 1999.12, y: 1.5, text: "2.074", fontSize: 7, color: "#f472b6" },
      { x: 2000.12, y: 1.5, text: "2.011", fontSize: 7, color: "#f472b6" },
      { x: 2001.12, y: 1.5, text: "2.145", fontSize: 7, color: "#f472b6" },
      // P₂ a 1 de enero
      { x: 1999.12, y: 2.5, text: "2.140", fontSize: 7, color: "#f472b6" },
      { x: 2000.12, y: 2.5, text: "2.070", fontSize: 7, color: "#f472b6" },
      { x: 2001.12, y: 2.5, text: "2.009", fontSize: 7, color: "#f472b6" },
      // P₃ a 1 de enero
      { x: 2000.12, y: 3.5, text: "2.139", fontSize: 7, color: "#f472b6" },
      { x: 2001.12, y: 3.5, text: "2.068", fontSize: 7, color: "#f472b6" },
      // P₄ a 1 de enero
      { x: 2001.12, y: 4.5, text: "2.139", fontSize: 7, color: "#f472b6" },
    ],
  };

  const legendItems: LexisLegendItem[] = [
    { color: "#3b82f6", label: "Generación 1996", type: "lifeline" },
    { color: "#22c55e", label: "Generación 1997", type: "lifeline" },
    { color: "#f59e0b", label: "Generación 1998", type: "lifeline" },
    { color: "#ef4444", label: "Generación 1999", type: "lifeline" },
    { color: "#8b5cf6", label: "Generación 2000", type: "lifeline" },
    { color: "#22d3ee", label: "Supervivientes (lₓ)", type: "line" },
    { color: "#f472b6", label: "Población a 1 de enero", type: "line" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Enunciado</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Considere los siguientes datos de nacimientos para determinado lugar, según ano
            de ocurrencia:
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ano</TableHead>
                <TableHead className="text-right">Nacimientos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                [1996, "2.164"],
                [1997, "2.120"],
                [1998, "2.037"],
                [1999, "2.170"],
                [2000, "2.209"],
              ].map(([year, births]) => (
                <TableRow key={String(year)}>
                  <TableCell>{year}</TableCell>
                  <TableCell className="text-right">{births}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <p>
            Para el mismo lugar, las defunciones ocurridas según año de nacimiento, año de
            defuncion y edad de la persona son las siguientes:
          </p>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ano nac.</TableHead>
                  <TableHead>Edad def.</TableHead>
                  <TableHead className="text-right">1996</TableHead>
                  <TableHead className="text-right">1997</TableHead>
                  <TableHead className="text-right">1998</TableHead>
                  <TableHead className="text-right">1999</TableHead>
                  <TableHead className="text-right">2000</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell rowSpan={5} className="font-semibold">1996</TableCell><TableCell>0</TableCell><TableCell className="text-right">21</TableCell><TableCell className="text-right">1</TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell></TableRow>
                <TableRow><TableCell>1</TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right">1</TableCell><TableCell className="text-right">0</TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell></TableRow>
                <TableRow><TableCell>2</TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right">1</TableCell><TableCell className="text-right">1</TableCell><TableCell className="text-right"></TableCell></TableRow>
                <TableRow><TableCell>3</TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right">0</TableCell><TableCell className="text-right">0</TableCell></TableRow>
                <TableRow><TableCell>4</TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right">0</TableCell></TableRow>

                <TableRow><TableCell rowSpan={4} className="font-semibold">1997</TableCell><TableCell>0</TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right">36</TableCell><TableCell className="text-right">7</TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell></TableRow>
                <TableRow><TableCell>1</TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right">3</TableCell><TableCell className="text-right">3</TableCell><TableCell className="text-right"></TableCell></TableRow>
                <TableRow><TableCell>2</TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right">1</TableCell><TableCell className="text-right">1</TableCell></TableRow>
                <TableRow><TableCell>3</TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right">1</TableCell></TableRow>

                <TableRow><TableCell rowSpan={3} className="font-semibold">1998</TableCell><TableCell>0</TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right">23</TableCell><TableCell className="text-right">2</TableCell><TableCell className="text-right"></TableCell></TableRow>
                <TableRow><TableCell>1</TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right">1</TableCell><TableCell className="text-right">2</TableCell></TableRow>
                <TableRow><TableCell>2</TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right">0</TableCell></TableRow>

                <TableRow><TableCell rowSpan={2} className="font-semibold">1999</TableCell><TableCell>0</TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right">20</TableCell><TableCell className="text-right">4</TableCell></TableRow>
                <TableRow><TableCell>1</TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right">1</TableCell></TableRow>

                <TableRow><TableCell className="font-semibold">2000</TableCell><TableCell>0</TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right"></TableCell><TableCell className="text-right">23</TableCell></TableRow>
              </TableBody>
            </Table>
          </div>

          <p>
            A partir de estos datos, construya un diagrama de Lexis entre las edades 0 y 5
            años, para las cohortes de 1996 al 2001. Asuma cero migración.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Solución</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="font-semibold">Paso 1: Ubicar las defunciones en triangulos de Lexis</h4>
            <p className="text-sm">
              Cada dato de defuncion tiene tres coordenadas: <strong>ano de nacimiento (cohorte c)</strong>,{" "}
              <strong>edad de defuncion (x)</strong> y <strong>ano de defuncion (t)</strong>. Esto permite ubicar
              cada defuncion en un triangulo concreto del diagrama:
            </p>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Si t = c + x → <strong>triangulo inferior</strong> del cuadrado (ano=t, edad=x)</li>
              <li>Si t = c + x + 1 → <strong>triangulo superior</strong> del cuadrado (ano=t, edad=x)</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Paso 2: Diagrama de Lexis completo</h4>
            <p className="text-sm">
              Los números dentro de cada triangulo representan las defunciones. Los nacimientos
              de cada generación se muestran en la base del diagrama.
            </p>
            <div className="max-w-2xl mx-auto">
              <LexisDiagram config={configLexis} />
              <LexisLegend items={legendItems} />
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Paso 3: Cálculo de supervivientes por generación</h4>
            <p className="text-sm mb-3">
              Asumiendo cero migración, los supervivientes se calculan restando sucesivamente
              las defunciones de cada triangulo a los nacimientos iniciales.
            </p>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Generación</TableHead>
                    <TableHead className="text-right">N (nacim.)</TableHead>
                    <TableHead className="text-right">l₁</TableHead>
                    <TableHead className="text-right">l₂</TableHead>
                    <TableHead className="text-right">l₃</TableHead>
                    <TableHead className="text-right">l₄</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">1996</TableCell>
                    <TableCell className="text-right">2.164</TableCell>
                    <TableCell className="text-right">2.142</TableCell>
                    <TableCell className="text-right">2.141</TableCell>
                    <TableCell className="text-right">2.139</TableCell>
                    <TableCell className="text-right">2.139</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">1997</TableCell>
                    <TableCell className="text-right">2.120</TableCell>
                    <TableCell className="text-right">2.077</TableCell>
                    <TableCell className="text-right">2.071</TableCell>
                    <TableCell className="text-right">2.069</TableCell>
                    <TableCell className="text-right">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">1998</TableCell>
                    <TableCell className="text-right">2.037</TableCell>
                    <TableCell className="text-right">2.012</TableCell>
                    <TableCell className="text-right">2.009</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">1999</TableCell>
                    <TableCell className="text-right">2.170</TableCell>
                    <TableCell className="text-right">2.146</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">2000</TableCell>
                    <TableCell className="text-right">2.209</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <p className="text-sm text-muted-foreground">
              Ejemplo de cálculo para generación 1996: l₁ = 2164 - 21 (tri.inf age 0) - 1 (tri.sup age 0) = 2142.
              l₂ = 2142 - 1 (tri.inf age 1) - 0 (tri.sup age 1) = 2141. Y así sucesivamente.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Paso 4: Stocks de población a 1 de enero</h4>
            <p className="text-sm mb-3">
              La población con x años cumplidos a 1 de enero del año t corresponde a los
              supervivientes de la generación t-x-1 tras haber pasado por el triangulo inferior
              de edad x.
            </p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Edad cumplida</TableHead>
                    <TableHead className="text-right">1.1.1997</TableHead>
                    <TableHead className="text-right">1.1.1998</TableHead>
                    <TableHead className="text-right">1.1.1999</TableHead>
                    <TableHead className="text-right">1.1.2000</TableHead>
                    <TableHead className="text-right">1.1.2001</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">0</TableCell>
                    <TableCell className="text-right">2.143</TableCell>
                    <TableCell className="text-right">2.084</TableCell>
                    <TableCell className="text-right">2.014</TableCell>
                    <TableCell className="text-right">2.150</TableCell>
                    <TableCell className="text-right">2.186</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">1</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">2.141</TableCell>
                    <TableCell className="text-right">2.074</TableCell>
                    <TableCell className="text-right">2.011</TableCell>
                    <TableCell className="text-right">2.145</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">2</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">2.140</TableCell>
                    <TableCell className="text-right">2.070</TableCell>
                    <TableCell className="text-right">2.009</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">3</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">2.139</TableCell>
                    <TableCell className="text-right">2.068</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">4</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right">2.139</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ────────────────────────────────────────────
   Ejercicio 4 - Clasificación de indicadores
   ──────────────────────────────────────────── */
function Ejercicio4() {
  /*
   Classification rules:
   - Razon: comparison of two different, non-overlapping groups (numerator NOT part of denominator)
   - Tasa: flow / mean stock (events per unit of exposure, with time dimension)
   - Proporción: part / whole (numerator IS subset of denominator, both stocks or both flows, 0-1)
   - Probabilidad: similar to proportion but with a longitudinal/cohort dimension (risk of event happening to an initial cohort)

   A: personas 0-15 / población total → PROPORCION (part of whole, same moment)
   B: personas 0-15 / personas 65+ → RAZON (two distinct groups, numerator not in denominator)
   C: muertes en un año / población media → TASA (flow / mean stock, i.e. tasa bruta de mortalidad)
   D: hombres / mujeres → RAZON (two distinct groups)
   E: televisores / telefonos → RAZON (different things entirely)
   F: telefonos fijos / telefonos de todo tipo → PROPORCION (subset of total)
   G: coches matriculados / parque medio de coches → TASA (flow / mean stock)
   H: llegan vivas a 40 / llegaron vivas a 30 (10 años antes) → PROBABILIDAD (survival probability of a cohort from age 30 to 40)
   I: fallecidos antes de 80 / nacimientos iniciales (gen 1920) → PROBABILIDAD (probability of dying before 80 for that cohort)
   J: nacimientos femeninos / total nacimientos → PROPORCION (part of whole)
   K: mujeres divorciadas / mujeres que empezaron casadas → PROBABILIDAD (risk of divorce during the year from initial cohort)
      Actually this could also be a tasa... Let me reconsider: "mujeres que empezaron ese año estando casadas" is a stock at start.
      "número de mujeres divorciadas" during the year is a flow. Flow/initial stock = probability (if we think of it as the risk for that initial group).
      Yes, this is a PROBABILIDAD (probability of divorce for the initial married cohort).
   L: coches matriculados / total vehiculos matriculados → PROPORCION (subset of total flow)
   M: personas en paro / personas en edad de trabajar → PROPORCION (subset of whole group, both stocks)
      Actually "personas en edad de trabajar pero que están en paro" = subset of "personas en edad de trabajar". So PROPORCION (tasa de paro).
   N: sillas / mesas → RAZON (different objects)
   Ñ: obtienen carnet / se presentan a pruebas → PROBABILIDAD (success probability for those who attempted)
      Or could be PROPORCION. Since denominator is "personas que se presentan ese año" (a flow/cohort entering the exam)
      and numerator is "personas que obtienen el carnet" (subset that succeed). This is a PROBABILIDAD.
   O: conciertos de rock / conciertos de jazz → RAZON (different types)
   P: personas que fallecen / personas vivas al empezar el año → PROBABILIDAD (mortality probability q_x)
      Flow / initial stock = probability of death for that group.
   Q: nacimientos / población media → TASA (flow / mean stock = tasa bruta de natalidad)
   R: personas de 40 con estudios superiores / todas las personas de 40 → PROPORCION (subset of total)
   S: mujeres / población total → PROPORCION (subset of total)
  */

  const indicators = [
    { id: "A", desc: "Personas de 0-15 años / población total", type: "Proporción", explanation: "¿Los jóvenes están dentro de la población total? Sí → parte del todo. ¿Hay flujo? No, ambos son stocks. → Proporción." },
    { id: "B", desc: "Personas de 0-15 años / personas de 65 o más años", type: "Razon", explanation: "¿Los jóvenes están dentro de los mayores? No, son grupos distintos que no se solapan. Es como comparar manzanas con naranjas → Razón." },
    { id: "C", desc: "Muertes registradas en un año / población media del año", type: "Tasa", explanation: "Defunciones (evento que ocurre = flujo) ÷ población MEDIA (stock medio). Mide la intensidad de la mortalidad. Es la TBM → Tasa." },
    { id: "D", desc: "Hombres / mujeres", type: "Razon", explanation: "¿Un hombre es una mujer? No. Dos grupos disjuntos. El numerador no cabe dentro del denominador → Razón (de masculinidad)." },
    { id: "E", desc: "Televisores / teléfonos", type: "Razon", explanation: "¿Un televisor es un teléfono? No. Objetos de naturaleza completamente distinta → Razón." },
    { id: "F", desc: "Teléfonos fijos / teléfonos de todo tipo", type: "Proporción", explanation: "¿Los fijos están dentro de «todos los teléfonos»? Sí, son un trozo de la tarta. Ambos stocks → Proporción." },
    { id: "G", desc: "Coches matriculados durante un año / parque medio de coches", type: "Tasa", explanation: "Matriculaciones (flujo, evento durante el año) ÷ parque medio (stock medio). Es el «velocímetro» de la renovación → Tasa." },
    { id: "H", desc: "Personas que llegan vivas a los 40 / personas que llegaron vivas a los 30", type: "Probabilidad", explanation: "Sigues al MISMO grupo desde los 30 (stock inicial) y miras cuántos sobreviven a los 40. Es seguimiento de cohorte → Probabilidad de supervivencia \u2081\u2080p\u2083\u2080." },
    { id: "I", desc: "Gen. 1920: fallecidos antes de 80 / nacimientos iniciales", type: "Probabilidad", explanation: "Partes de los nacidos en 1920 (stock inicial de la generación) y cuentas cuántos mueren antes de 80. Seguimiento longitudinal → Probabilidad \u2088\u2080q\u2080." },
    { id: "J", desc: "Nacimientos femeninos / total de nacimientos (en un año)", type: "Proporción", explanation: "¿Los nacimientos femeninos están dentro del total? Sí. ¿Ambos son flujos del mismo período? Sí. Parte del todo, sin seguimiento temporal → Proporción." },
    { id: "K", desc: "Mujeres divorciadas / mujeres que empezaron casadas (en un año)", type: "Probabilidad", explanation: "Partes de las casadas al inicio del año (stock INICIAL) y mides cuántas se divorcian. Es el riesgo de divorcio para ese grupo de partida → Probabilidad." },
    { id: "L", desc: "Coches matriculados / total de vehículos matriculados", type: "Proporción", explanation: "¿Los coches están dentro de «todos los vehículos»? Sí. Ambos flujos del mismo período. La parte está dentro del todo → Proporción." },
    { id: "M", desc: "Personas en paro / personas en edad de trabajar", type: "Proporción", explanation: "¿Los parados en edad de trabajar están dentro de las personas en edad de trabajar? Sí. Ambos stocks. ¡Ojo! Se llama «tasa de paro» pero es Proporción." },
    { id: "N", desc: "Sillas / mesas", type: "Razon", explanation: "¿Una silla es una mesa? No. Cosas de naturaleza distinta. El numerador no cabe en el denominador → Razón." },
    { id: "N2", desc: "Personas que obtienen el carnet / personas que se presentan al examen", type: "Probabilidad", explanation: "Partes del grupo que se presenta (stock inicial = los que entran al examen) y mides cuántos aprueban. Es el riesgo/oportunidad de éxito → Probabilidad." },
    { id: "O", desc: "Conciertos de rock / conciertos de jazz", type: "Razon", explanation: "¿Un concierto de rock es de jazz? No. Categorías distintas que no se solapan → Razón." },
    { id: "P", desc: "Personas que fallecen / personas vivas al empezar el año", type: "Probabilidad", explanation: "Defunciones (flujo) ÷ vivos al 1 de enero (stock INICIAL, no medio). Mides el riesgo de morir ese año para el grupo que empezó vivo → Probabilidad q\u2093. Compara con C: ahí usa población MEDIA." },
    { id: "Q", desc: "Nacimientos durante un año / población media del año", type: "Tasa", explanation: "Nacimientos (flujo) ÷ población MEDIA (stock medio). El velocímetro de la natalidad. Es la TBN → Tasa." },
    { id: "R", desc: "Personas de 40 años con estudios superiores / todas las personas de 40 años", type: "Proporción", explanation: "¿Los de 40 con estudios están dentro de todos los de 40? Sí. Ambos stocks, mismo instante → Proporción." },
    { id: "S", desc: "Mujeres / población total", type: "Proporción", explanation: "¿Las mujeres están dentro de la población total? Sí. Ambos stocks, misma foto → Proporción (de feminidad)." },
  ];

  const colorMap: Record<string, string> = {
    Razon: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    Tasa: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
    Proporción: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Probabilidad: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Enunciado</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            De los siguientes indicadores indique cuáles corresponden a{" "}
            <strong>razones</strong>, <strong>tasas</strong>,{" "}
            <strong>proporciones</strong> y <strong>probabilidades</strong>.
          </p>
        </CardContent>
      </Card>

      {/* Guía de clasificación — Método Feynman */}
      <Card>
        <CardHeader>
          <CardTitle>Antes de resolver: ¿cómo distinguirlos?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <p className="text-sm text-muted-foreground">
            Te dan un cociente A/B y tienes que clasificarlo. Parece difícil,
            pero solo necesitas hacerte <strong>tres preguntas</strong>.
            Primero, entiende cada tipo con ejemplos cotidianos:
          </p>

          {/* 4 concept cards */}
          <div className="grid gap-3">
            {/* RAZÓN */}
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Badge className={colorMap.Razon}>Razón</Badge>
                <span className="text-sm font-semibold">«Comparar manzanas con naranjas»</span>
              </div>
              <p className="text-sm">
                En tu clase hay 18 chicos y 12 chicas.
                Si calculas chicos ÷ chicas = 18/12 = 1,5.
                ¿Los chicos son chicas? <strong>No</strong>. Son grupos
                completamente separados. Eso es una razón.
              </p>
              <p className="text-sm">
                Otro ejemplo: televisores/teléfonos. Un televisor nunca
                será un teléfono. Puede dar <strong>cualquier valor</strong>{" "}
                (0,5; 1; 3; 100...), no está limitado a 0-1.
              </p>
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                Pregunta clave: ¿Puedo meter el numerador DENTRO del denominador?
                Si NO → Razón.
              </p>
            </div>

            {/* PROPORCIÓN */}
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50/50 dark:bg-green-950/30 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Badge className={colorMap["Proporción"]}>Proporción</Badge>
                <span className="text-sm font-semibold">«Una porción de la tarta»</span>
              </div>
              <p className="text-sm">
                Una pizza tiene 8 porciones y te comes 3.
                Tu parte es 3/8 = 0,375. Tus 3 trozos{" "}
                <strong>eran parte de los 8</strong>. El numerador siempre
                está dentro del denominador.
              </p>
              <p className="text-sm">
                Ambos deben ser del <strong>mismo tipo</strong>{" "}
                (stock/stock o flujo/flujo) y de la{" "}
                <strong>misma foto instantánea</strong> (mismo instante o período).
                Siempre sale entre 0 y 1.
              </p>
              <p className="text-xs font-semibold text-green-700 dark:text-green-300">
                Pregunta clave: ¿El numerador es un trozo del denominador,
                sin seguimiento temporal? → Proporción.
              </p>
            </div>

            {/* TASA */}
            <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Badge className={colorMap.Tasa}>Tasa</Badge>
                <span className="text-sm font-semibold">«El velocímetro de un fenómeno»</span>
              </div>
              <p className="text-sm">
                Un velocímetro mide km recorridos (lo que OCURRE) entre
                tiempo (exposición). Una tasa mide{" "}
                <strong>eventos que ocurren</strong> (flujo: nacimientos,
                defunciones) entre la <strong>población MEDIA</strong>{" "}
                expuesta durante ese período.
              </p>
              <p className="text-sm">
                Ejemplo: 5.000 nacimientos al año ÷ 500.000 habitantes de
                media = 10‰. Mide la <strong>intensidad</strong> del
                fenómeno. Tiene dimensión temporal (eventos por año).
              </p>
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300">
                Pregunta clave: ¿Flujo (evento) ÷ stock MEDIO? → Tasa.
              </p>
            </div>

            {/* PROBABILIDAD */}
            <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Badge className={colorMap.Probabilidad}>Probabilidad</Badge>
                <span className="text-sm font-semibold">«Un reality show: ¿quién sobrevive?»</span>
              </div>
              <p className="text-sm">
                En un reality entran 100 concursantes el día 1{" "}
                (stock <strong>INICIAL</strong>). Al final de la semana quedan 72.
                Probabilidad de sobrevivir = 72/100 = 0,72.
                Lo clave: <strong>sigues al MISMO grupo desde el INICIO</strong>.
              </p>
              <p className="text-sm">
                En demografía: 1.000 personas vivas el 1 de enero.
                Al final del año, 8 han fallecido.
                Probabilidad de morir = 8/1.000 = 0,008.
                Es el <strong>riesgo</strong> para ese colectivo de partida.
              </p>
              <p className="text-xs font-semibold text-purple-700 dark:text-purple-300">
                Pregunta clave: ¿Resultado ÷ stock INICIAL del grupo
                de partida? → Probabilidad.
              </p>
            </div>
          </div>

          {/* Diferencia clave TASA vs PROBABILIDAD */}
          <div className="rounded-lg border-2 border-dashed border-muted-foreground/30 p-4 space-y-2">
            <h4 className="font-semibold text-sm">La diferencia que más confunde: Tasa vs Probabilidad</h4>
            <p className="text-sm">
              Ambas tienen un <strong>flujo</strong> en el numerador y un{" "}
              <strong>stock</strong> en el denominador.
              La única diferencia es <strong>qué stock</strong> usas:
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm mt-2">
              <div className="rounded border p-3 bg-amber-50/50 dark:bg-amber-950/20">
                <Badge className={colorMap.Tasa}>Tasa</Badge>
                <p className="mt-1">Defunciones ÷ población <strong>MEDIA</strong></p>
                <p className="text-xs text-muted-foreground mt-1">Perspectiva transversal (foto media del período)</p>
              </div>
              <div className="rounded border p-3 bg-purple-50/50 dark:bg-purple-950/20">
                <Badge className={colorMap.Probabilidad}>Probabilidad</Badge>
                <p className="mt-1">Defunciones ÷ población <strong>INICIAL</strong></p>
                <p className="text-xs text-muted-foreground mt-1">Perspectiva longitudinal (sigues al grupo)</p>
              </div>
            </div>
          </div>

          {/* Decision tree */}
          <div className="rounded-lg border p-4 bg-muted/30 space-y-3">
            <h4 className="font-semibold">Árbol de decisión (memorízalo)</h4>
            <div className="space-y-3 text-sm">
              <div className="rounded border p-3 bg-background">
                <p className="font-semibold">Paso 1: ¿El numerador forma PARTE del denominador?</p>
                <div className="mt-2 ml-4 space-y-1">
                  <p>
                    <span className="font-bold text-red-500 dark:text-red-400">NO</span>{" → "}
                    <Badge className={`ml-1 ${colorMap.Razon}`}>Razón</Badge>
                    <span className="text-muted-foreground ml-2">(grupos distintos o cosas diferentes)</span>
                  </p>
                  <p>
                    <span className="font-bold text-green-500 dark:text-green-400">SÍ</span>
                    {" → Sigue al Paso 2 ↓"}
                  </p>
                </div>
              </div>

              <div className="rounded border p-3 bg-background">
                <p className="font-semibold">Paso 2: ¿Hay un FLUJO (evento) dividido entre un STOCK (población)?</p>
                <div className="mt-2 ml-4 space-y-1">
                  <p>
                    <span className="font-bold text-red-500 dark:text-red-400">NO</span>{" → "}
                    <Badge className={`ml-1 ${colorMap["Proporción"]}`}>Proporción</Badge>
                    <span className="text-muted-foreground ml-2">(ambos stocks o ambos flujos = parte del todo)</span>
                  </p>
                  <p>
                    <span className="font-bold text-green-500 dark:text-green-400">SÍ</span>
                    {" → Sigue al Paso 3 ↓"}
                  </p>
                </div>
              </div>

              <div className="rounded border p-3 bg-background">
                <p className="font-semibold">Paso 3: ¿El stock del denominador es MEDIO o INICIAL?</p>
                <div className="mt-2 ml-4 space-y-1">
                  <p>
                    <span className="font-bold text-amber-500 dark:text-amber-400">MEDIO</span>{" → "}
                    <Badge className={`ml-1 ${colorMap.Tasa}`}>Tasa</Badge>
                    <span className="text-muted-foreground ml-2">(promedio del período)</span>
                  </p>
                  <p>
                    <span className="font-bold text-purple-500 dark:text-purple-400">INICIAL</span>{" → "}
                    <Badge className={`ml-1 ${colorMap.Probabilidad}`}>Probabilidad</Badge>
                    <span className="text-muted-foreground ml-2">(grupo de partida, perspectiva de cohorte)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Common traps */}
          <div className="rounded-lg border border-red-200 dark:border-red-800 p-4 bg-red-50/50 dark:bg-red-950/20 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              Trampas de examen
            </h4>
            <ul className="text-sm space-y-3">
              <li>
                <strong>La «tasa de paro» es proporción:</strong>{" "}
                Parados/activos. Ambos son stocks en el mismo momento. No hay
                ningún flujo. El nombre oficial engaña, pero en el examen
                debes poner <Badge className={`text-xs ${colorMap["Proporción"]}`}>Proporción</Badge>.
              </li>
              <li>
                <strong>Tasa vs Probabilidad — la trampa clásica:</strong>{" "}
                «Defunciones/población» puede ser cualquiera de las dos.
                Fíjate en si dice{" "}
                <em>«población media»</em> o <em>«de mitad del año»</em>{" "}
                → <Badge className={`text-xs ${colorMap.Tasa}`}>Tasa</Badge>.
                Si dice <em>«al empezar el año»</em> o{" "}
                <em>«vivos a 1 de enero»</em>{" "}
                → <Badge className={`text-xs ${colorMap.Probabilidad}`}>Probabilidad</Badge>.
              </li>
              <li>
                <strong>Flujo/Flujo = Proporción, no tasa:</strong>{" "}
                Nacimientos femeninos / total nacimientos. Ambos son flujos del
                mismo período. Como la parte está dentro del todo{" "}
                → <Badge className={`text-xs ${colorMap["Proporción"]}`}>Proporción</Badge>.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Solución */}
      <Card>
        <CardHeader>
          <CardTitle>Solución</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {indicators.map((ind) => (
              <div
                key={ind.id}
                className="flex flex-col gap-2 rounded-lg border p-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg min-w-[2rem]">
                      {ind.id === "N2" ? "Ñ" : ind.id}
                    </span>
                    <span className="text-sm">{ind.desc}</span>
                  </div>
                  <Badge className={`shrink-0 ${colorMap[ind.type]}`}>
                    {ind.type}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground pl-10">
                  {ind.explanation}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border p-4 bg-muted/50">
            <h4 className="font-semibold mb-3">Resumen</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div>
                <Badge className={colorMap.Razon}>Razón</Badge>
                <p className="mt-1 font-mono text-xs">B, D, E, N, O</p>
              </div>
              <div>
                <Badge className={colorMap.Tasa}>Tasa</Badge>
                <p className="mt-1 font-mono text-xs">C, G, Q</p>
              </div>
              <div>
                <Badge className={colorMap["Proporción"]}>Proporción</Badge>
                <p className="mt-1 font-mono text-xs">A, F, J, L, M, R, S</p>
              </div>
              <div>
                <Badge className={colorMap.Probabilidad}>Probabilidad</Badge>
                <p className="mt-1 font-mono text-xs">H, I, K, Ñ, P</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ────────────────────────────────────────────
   Main page component with routing
   ──────────────────────────────────────────── */
const exercises: Record<string, {
  title: string;
  component: React.FC;
  question: string;
  takeaway: string;
  nextTopic: string;
  nextTopicHref: string;
}> = {
  "1": {
    title: "Ejercicio 1: Interpretación de líneas y áreas en Lexis",
    component: Ejercicio1,
    question: "Interpretar líneas, superficies y segmentos en el diagrama de Lexis",
    takeaway: "Ahora sabes distinguir los elementos básicos del diagrama de Lexis: líneas de vida, superficies y segmentos de stock.",
    nextTopic: "Representar stocks y flujos",
    nextTopicHref: "/tema-2/ejercicios/t2-1/2",
  },
  "2": {
    title: "Ejercicio 2: Representación de stocks y flujos",
    component: Ejercicio2,
    question: "Representar stocks y flujos demográficos en el plano de Lexis",
    takeaway: "Ya puedes identificar y representar stocks (población en un instante) y flujos (eventos en un periodo) sobre el diagrama.",
    nextTopic: "Construir un diagrama completo",
    nextTopicHref: "/tema-2/ejercicios/t2-1/3",
  },
  "3": {
    title: "Ejercicio 3: Construcción de diagrama con datos reales",
    component: Ejercicio3,
    question: "Construir un diagrama de Lexis completo con datos reales de nacimientos y defunciones",
    takeaway: "Has aprendido a construir un diagrama de Lexis desde cero con datos reales, integrando nacimientos y defunciones.",
    nextTopic: "Clasificar indicadores",
    nextTopicHref: "/tema-2/ejercicios/t2-1/4",
  },
  "4": {
    title: "Ejercicio 4: Clasificación de indicadores demográficos",
    component: Ejercicio4,
    question: "Clasificar indicadores demográficos en razones, tasas, proporciones y probabilidades",
    takeaway: "Ya dominas la clasificación de indicadores demográficos, una habilidad clave para el análisis actuarial.",
    nextTopic: "Hoja T2-2: Lexis avanzado",
    nextTopicHref: "/tema-2/ejercicios/t2-2",
  },
};

export default function T21ExercisePage() {
  const params = useParams();
  const id = params.id as string;
  const exercise = exercises[id];

  if (!exercise) {
    return (
      <div className="max-w-4xl space-y-4">
        <h1 className="text-2xl font-bold">Ejercicio no encontrado</h1>
        <p>
          El ejercicio solicitado no existe.{" "}
          <Link href="/tema-2/ejercicios/t2-1" className="text-primary underline">
            Volver a la lista
          </Link>
        </p>
      </div>
    );
  }

  const ExerciseComponent = exercise.component;
  const prevExercise = exercises[String(Number(id) - 1)];
  const nextExercise = exercises[String(Number(id) + 1)];

  return (
    <div className="max-w-4xl space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/tema-2" className="hover:underline">Tema 2</Link>
        <span>/</span>
        <Link href="/tema-2/ejercicios/t2-1" className="hover:underline">Hoja T2-1</Link>
        <span>/</span>
        <span>Ejercicio {id}</span>
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
                Repasa la teor&iacute;a del{" "}
                <Link
                  href="/tema-2/diagrama-lexis"
                  className="font-medium underline decoration-amber-400 underline-offset-2 hover:decoration-amber-600 dark:decoration-amber-500 dark:hover:decoration-amber-300"
                >
                  Diagrama de Lexis
                </Link>{" "}
                para entender los conceptos que usaremos.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Question context card */}
        <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/20">
          <CardContent className="flex items-start gap-3 pt-5">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                &iquest;Qu&eacute; pregunta responde este ejercicio?
              </p>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                {exercise.question}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Title + badge */}
      <div>
        <h1 className="text-2xl font-bold">{exercise.title}</h1>
        <Badge variant="outline" className="mt-2">Hoja T2-1</Badge>
      </div>

      {/* Exercise content */}
      <ExerciseComponent />

      {/* Prev / Next navigation with descriptive labels */}
      <div className="flex items-stretch justify-between gap-4 pt-4">
        {prevExercise ? (
          <Link
            href={`/tema-2/ejercicios/t2-1/${Number(id) - 1}`}
            className="group flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm transition-colors hover:bg-muted dark:bg-muted/20 dark:hover:bg-muted/40"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-0.5" />
            <div className="text-left">
              <span className="block text-xs text-muted-foreground">Anterior</span>
              <span className="font-medium text-foreground">Ej.&nbsp;{Number(id) - 1}: {prevExercise.title.split(": ")[1]}</span>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {nextExercise ? (
          <Link
            href={`/tema-2/ejercicios/t2-1/${Number(id) + 1}`}
            className="group flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm transition-colors hover:bg-muted dark:bg-muted/20 dark:hover:bg-muted/40"
          >
            <div className="text-right">
              <span className="block text-xs text-muted-foreground">Siguiente</span>
              <span className="font-medium text-foreground">Ej.&nbsp;{Number(id) + 1}: {nextExercise.title.split(": ")[1]}</span>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Connection / takeaway card */}
      <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20">
        <CardContent className="flex items-start gap-3 pt-5">
          <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
          <div className="space-y-2">
            <p className="text-sm font-semibold text-green-900 dark:text-green-100">
              Este ejercicio te ha ense&ntilde;ado&hellip;
            </p>
            <p className="text-sm text-green-800 dark:text-green-200">
              {exercise.takeaway}
            </p>
            <p className="text-sm text-green-700 dark:text-green-300">
              <Link
                href={exercise.nextTopicHref}
                className="font-medium underline decoration-green-400 underline-offset-2 hover:decoration-green-600 dark:decoration-green-500 dark:hover:decoration-green-300"
              >
                Siguiente paso: {exercise.nextTopic} &rarr;
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
