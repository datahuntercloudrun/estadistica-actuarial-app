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
import { ResultHighlight } from "@/components/exercises/result-highlight";
import { BookOpen, ArrowLeft, ArrowRight, Lightbulb } from "lucide-react";
import type { LexisConfig } from "@/types/lexis";

/* ────────────────────────────────────────────
   Ejercicio 1 - Representacion de 14 conceptos
   ──────────────────────────────────────────── */
function Ejercicio1() {
  // a) Población de 2 a 4 años exactos el 31/12/1996
  //    → vertical line at year=1997 (31/12/1996 = 1/1/1997), from age=2 to age=4
  const configA: LexisConfig = {
    startYear: 1982,
    endYear: 2000,
    minAge: 0,
    maxAge: 11,
    cellSize: 40,
    lifelines: [
      { cohort: 1992, color: "#d1d5db", dashed: true },
      { cohort: 1993, color: "#d1d5db", dashed: true },
      { cohort: 1994, color: "#d1d5db", dashed: true },
    ],
    stockLines: [
      { type: "vertical", year: 1997, age: 2, endAge: 4, color: "#3b82f6", label: "P₂₋₄(31/12/96)", thickness: 4 },
    ],
  };

  // b) Población media de 4-6 años cumplidos en 1988
  //    → vertical line at year=1988.5 (mitad del ano), from age=4 to age=7
  //    (4-6 cumplidos means ages 4,5,6 → from 4 to 7 on the vertical axis)
  const configB: LexisConfig = {
    startYear: 1982,
    endYear: 2000,
    minAge: 0,
    maxAge: 11,
    cellSize: 40,
    lifelines: [
      { cohort: 1982, color: "#d1d5db", dashed: true },
      { cohort: 1983, color: "#d1d5db", dashed: true },
      { cohort: 1984, color: "#d1d5db", dashed: true },
    ],
    stockLines: [
      { type: "vertical", year: 1988.5, age: 4, endAge: 7, color: "#22c55e", label: "Pm₄₋₆(1988)", thickness: 4 },
    ],
  };

  // c) Población media de 6 años en 1983
  //    → vertical at year=1983.5, from age=6 to age=7
  const configC: LexisConfig = {
    startYear: 1975,
    endYear: 1990,
    minAge: 4,
    maxAge: 9,
    cellSize: 50,
    lifelines: [
      { cohort: 1976, color: "#d1d5db", dashed: true },
      { cohort: 1977, color: "#d1d5db", dashed: true },
    ],
    stockLines: [
      { type: "vertical", year: 1983.5, age: 6, endAge: 7, color: "#f59e0b", label: "Pm₆(1983)", thickness: 4 },
    ],
  };

  // d) Población de 0-2 años exactos del censo 31/03/1991
  //    → vertical at year=1991.25 (31 de marzo), from age=0 to age=2
  const configD: LexisConfig = {
    startYear: 1988,
    endYear: 1993,
    minAge: 0,
    maxAge: 4,
    cellSize: 60,
    lifelines: [
      { cohort: 1989, color: "#d1d5db", dashed: true },
      { cohort: 1990, color: "#d1d5db", dashed: true },
      { cohort: 1991, color: "#d1d5db", dashed: true },
    ],
    stockLines: [
      { type: "vertical", year: 1991.25, age: 0, endAge: 2, color: "#ef4444", label: "P₀₋₂(31/3/91)", thickness: 4 },
    ],
  };

  // e) Supervivientes de edad exacta 3, generación 1984
  //    → point at the intersection of lifeline cohort=1984 and age=3
  //    That's at year=1987 (midpoint), age=3. We represent as a short diagonal segment.
  const configE: LexisConfig = {
    startYear: 1983,
    endYear: 1990,
    minAge: 0,
    maxAge: 7,
    cellSize: 50,
    lifelines: [
      { cohort: 1984, color: "#3b82f6" },
    ],
    stockLines: [
      { type: "horizontal", year: 1987, age: 3, endYear: 1988, color: "#ef4444", label: "l₃(1984)", thickness: 4 },
    ],
    annotations: [
      { x: 1987.5, y: 3.4, text: "l₃(gen.1984)", fontSize: 10, color: "#ef4444" },
    ],
  };

  // f) Supervivientes de edad exacta 5, generaciones 1988 y 1989
  //    → two points: cohort 1988 at age 5 (year 1993), cohort 1989 at age 5 (year 1994)
  const configF: LexisConfig = {
    startYear: 1987,
    endYear: 1996,
    minAge: 3,
    maxAge: 7,
    cellSize: 50,
    lifelines: [
      { cohort: 1988, color: "#3b82f6" },
      { cohort: 1989, color: "#22c55e" },
    ],
    stockLines: [
      { type: "horizontal", year: 1993, age: 5, endYear: 1994, color: "#ef4444", label: "l₅(1988)", thickness: 4 },
      { type: "horizontal", year: 1994, age: 5, endYear: 1995, color: "#f59e0b", label: "l₅(1989)", thickness: 4 },
    ],
  };

  // g) Nacimientos de los años 1984, 1987-1988 y 1992
  //    → horizontal segments on age=0
  const configG: LexisConfig = {
    startYear: 1983,
    endYear: 1994,
    minAge: 0,
    maxAge: 4,
    cellSize: 45,
    lifelines: [],
    stockLines: [
      { type: "horizontal", year: 1984, age: 0, endYear: 1985, color: "#3b82f6", label: "N(1984)", thickness: 4 },
      { type: "horizontal", year: 1987, age: 0, endYear: 1989, color: "#22c55e", label: "N(87-88)", thickness: 4 },
      { type: "horizontal", year: 1992, age: 0, endYear: 1993, color: "#f59e0b", label: "N(1992)", thickness: 4 },
    ],
  };

  // h) Defunciones de menores de 2 años, generación 1985
  //    → cohorte-edad: cohort=1985, ages 0 and 1 (two parallelograms)
  const configH: LexisConfig = {
    startYear: 1984,
    endYear: 1989,
    minAge: 0,
    maxAge: 4,
    cellSize: 60,
    lifelines: [
      { cohort: 1985, color: "#3b82f6" },
    ],
    surfaces: [
      { type: "cohorte-edad", year: 1985, age: 0, cohort: 1985, color: "#ef4444", label: "d₀", opacity: 0.4 },
      { type: "cohorte-edad", year: 1986, age: 1, cohort: 1985, color: "#ef4444", label: "d₁", opacity: 0.4 },
    ],
  };

  // i) Defunciones entre 7 y 10 años, generación 1989
  //    → cohorte-edad at ages 7, 8, 9 for cohort 1989
  const configI: LexisConfig = {
    startYear: 1988,
    endYear: 2001,
    minAge: 6,
    maxAge: 11,
    cellSize: 45,
    lifelines: [
      { cohort: 1989, color: "#3b82f6" },
    ],
    surfaces: [
      { type: "cohorte-edad", year: 1996, age: 7, cohort: 1989, color: "#8b5cf6", label: "d₇", opacity: 0.4 },
      { type: "cohorte-edad", year: 1997, age: 8, cohort: 1989, color: "#8b5cf6", label: "d₈", opacity: 0.4 },
      { type: "cohorte-edad", year: 1998, age: 9, cohort: 1989, color: "#8b5cf6", label: "d₉", opacity: 0.4 },
    ],
  };

  // j) Defunciones de generación 1984 durante 1988
  //    → período-cohorte: cohort=1984, year=1988 (age=4 at start of year)
  const configJ: LexisConfig = {
    startYear: 1983,
    endYear: 1991,
    minAge: 2,
    maxAge: 7,
    cellSize: 50,
    lifelines: [
      { cohort: 1984, color: "#3b82f6" },
    ],
    surfaces: [
      { type: "período-cohorte", year: 1988, age: 4, cohort: 1984, color: "#f59e0b", label: "d", opacity: 0.4 },
    ],
  };

  // k) Defunciones de ninos de 1 año durante 1995
  //    → edad-período: year=1995, age=1
  const configK: LexisConfig = {
    startYear: 1993,
    endYear: 1998,
    minAge: 0,
    maxAge: 4,
    cellSize: 60,
    lifelines: [
      { cohort: 1993, color: "#d1d5db", dashed: true },
      { cohort: 1994, color: "#d1d5db", dashed: true },
    ],
    surfaces: [
      { type: "edad-período", year: 1995, age: 1, color: "#06b6d4", label: "d₁(1995)", opacity: 0.4 },
    ],
  };

  // l) Defunciones de menores de 3 años durante 1998
  //    → edad-período at ages 0, 1, 2 during year 1998
  const configL: LexisConfig = {
    startYear: 1996,
    endYear: 2001,
    minAge: 0,
    maxAge: 5,
    cellSize: 55,
    lifelines: [
      { cohort: 1996, color: "#d1d5db", dashed: true },
      { cohort: 1997, color: "#d1d5db", dashed: true },
      { cohort: 1998, color: "#d1d5db", dashed: true },
    ],
    surfaces: [
      { type: "edad-período", year: 1998, age: 0, color: "#22c55e", label: "d₀", opacity: 0.35 },
      { type: "edad-período", year: 1998, age: 1, color: "#22c55e", label: "d₁", opacity: 0.35 },
      { type: "edad-período", year: 1998, age: 2, color: "#22c55e", label: "d₂", opacity: 0.35 },
    ],
  };

  // m) Defunciones de 7 años, generación 1987, durante 1995
  //    → edad-período-cohorte (triangle): cohort=1987, age=7, year=1995
  //    Check: 1987 + 7 = 1994, 1987 + 7 + 1 = 1995 → upper triangle at (year=1995, age=7)
  const configM: LexisConfig = {
    startYear: 1993,
    endYear: 1998,
    minAge: 6,
    maxAge: 10,
    cellSize: 55,
    lifelines: [
      { cohort: 1987, color: "#3b82f6" },
    ],
    surfaces: [
      { type: "triangulo-sup", year: 1995, age: 7, color: "#ef4444", label: "d", opacity: 0.45 },
    ],
  };

  // n) Defunciones de menores de 4 años, generación 1988, producidas en 1992
  //    → período-cohorte but restricted to ages <4: cohort 1988 in year 1992 has age 3-4
  //    So we need the part of the período-cohorte parallelogram that is below age 4.
  //    cohort=1988, year=1992: age at start = 1992-1988 = 4, age at end = 1992+1-1988 = 5
  //    Wait: at 1.1.1992, gen 1988 has age 3-4 cumplidos (ages 3 to 4 exact).
  //    During 1992, gen 1988 goes from age ~3-4 to age ~4-5.
  //    Menores de 4 años = age <4. So we need the triangle where age is still <4.
  //    That's the lower triangle at (year=1992, age=3): cohort=1992-3=1989? No.
  //    Let me reconsider: gen 1988, age=3 cumplidos in year 1992:
  //    1988 + 3 = 1991 (lower tri at year=1991, age=3)
  //    1988 + 3 + 1 = 1992 (upper tri at year=1992, age=3)
  //    So during 1992, gen 1988 with 3 cumplidos = upper triangle at (year=1992, age=3).
  //    Also need age<4 which means just age 0,1,2,3. But ages 0,1,2 are in earlier years.
  //    In year 1992, gen 1988 has ages 3-4 cumplidos. So menores de 4 = those with 3 cumplidos.
  //    → upper triangle at (year=1992, age=3) with cohort=1988
  const configN: LexisConfig = {
    startYear: 1987,
    endYear: 1994,
    minAge: 0,
    maxAge: 6,
    cellSize: 50,
    lifelines: [
      { cohort: 1988, color: "#3b82f6" },
    ],
    surfaces: [
      { type: "triangulo-sup", year: 1992, age: 3, color: "#f59e0b", label: "d", opacity: 0.45 },
    ],
  };

  const items = [
    {
      label: "a",
      title: "Población de 2 a 4 años exactos el 31/12/1996",
      type: "Stock - Linea vertical",
      explanation: "El 31/12/1996 equivale al 1/01/1997. Se traza una linea vertical en el año 1997, entre las edades exactas 2 y 4. Incluye a personas que han cumplido 2 años pero no han cumplido 4 (es decir, edades cumplidas 2 y 3).",
      config: configA,
      legend: [{ color: "#3b82f6", label: "Stock: P de 2-4 años exactos", type: "line" as const }],
    },
    {
      label: "b",
      title: "Población media de 4-6 años cumplidos en 1988",
      type: "Stock - Linea vertical a mitad de año",
      explanation: "La población media de un año se aproxima como el stock a 1 de julio (mitad del ano). Se traza una linea vertical en 1988.5 (1 de julio de 1988), entre las edades 4 y 7 (personas con 4, 5 o 6 años cumplidos).",
      config: configB,
      legend: [{ color: "#22c55e", label: "Stock medio: Pm de 4-6 cumplidos", type: "line" as const }],
    },
    {
      label: "c",
      title: "Población media de 6 años en 1983",
      type: "Stock - Linea vertical a mitad de año",
      explanation: "Población media con 6 años cumplidos en 1983. Linea vertical en 1983.5, entre edades 6 y 7.",
      config: configC,
      legend: [{ color: "#f59e0b", label: "Stock medio: Pm de 6 cumplidos", type: "line" as const }],
    },
    {
      label: "d",
      title: "Población de 0-2 años exactos del censo del 31/03/1991",
      type: "Stock - Linea vertical en fecha censal",
      explanation: "El censo se realiza el 31 de marzo de 1991. Se traza una linea vertical en 1991.25 (31 de marzo), entre las edades exactas 0 y 2 (personas con 0 o 1 años cumplidos).",
      config: configD,
      legend: [{ color: "#ef4444", label: "Stock censal: P de 0-2 años exactos", type: "line" as const }],
    },
    {
      label: "e",
      title: "Supervivientes de edad exacta 3, generación 1984",
      type: "Stock puntual sobre la linea de vida",
      explanation: "Es el punto donde la linea de vida de la generación 1984 cruza la edad exacta 3. Ocurre entre 1987 y 1988 (la generación 1984 cumple 3 años durante esos años). Es el stock l₃ de la generación 1984.",
      config: configE,
      legend: [
        { color: "#3b82f6", label: "Generación 1984", type: "lifeline" as const },
        { color: "#ef4444", label: "l₃(1984)", type: "line" as const },
      ],
    },
    {
      label: "f",
      title: "Supervivientes de edad exacta 5, generaciones 1988 y 1989",
      type: "Stock puntual sobre las líneas de vida",
      explanation: "Dos puntos donde las líneas de vida de las generaciones 1988 y 1989 cruzan la edad exacta 5. Gen 1988 cruza edad 5 entre 1993-1994. Gen 1989 cruza edad 5 entre 1994-1995.",
      config: configF,
      legend: [
        { color: "#3b82f6", label: "Generación 1988", type: "lifeline" as const },
        { color: "#22c55e", label: "Generación 1989", type: "lifeline" as const },
        { color: "#ef4444", label: "l₅(1988)", type: "line" as const },
        { color: "#f59e0b", label: "l₅(1989)", type: "line" as const },
      ],
    },
    {
      label: "g",
      title: "Nacimientos de los años 1984, 1987-1988 y 1992",
      type: "Stock - Segmentos sobre el eje de edad 0",
      explanation: "Los efectivos iniciales de cada generación se representan como segmentos horizontales sobre edad 0. En Lexis, las líneas siempre son stocks (recuentos de personas).",
      config: configG,
      legend: [
        { color: "#3b82f6", label: "N(1984)", type: "line" as const },
        { color: "#22c55e", label: "N(1987-1988)", type: "line" as const },
        { color: "#f59e0b", label: "N(1992)", type: "line" as const },
      ],
    },
    {
      label: "h",
      title: "Defunciones de menores de 2 años, generación 1985",
      type: "Flujo - Superficie cohorte-edad",
      explanation: "Se fija la cohorte (1985) y las edades (0 y 1 cumplidos, es decir menores de 2). Son dos paralelogramos cohorte-edad: uno para edad 0 y otro para edad 1.",
      config: configH,
      legend: [
        { color: "#3b82f6", label: "Generación 1985", type: "lifeline" as const },
        { color: "#ef4444", label: "Defunciones <2 años", type: "surface" as const },
      ],
    },
    {
      label: "i",
      title: "Defunciones entre 7 y 10 años, generación 1989",
      type: "Flujo - Superficie cohorte-edad",
      explanation: "Se fija la cohorte (1989) y las edades de 7 a 9 cumplidos (\"entre 7 y 10\" en años exactos significa edades cumplidas 7, 8 y 9). Son tres paralelogramos cohorte-edad.",
      config: configI,
      legend: [
        { color: "#3b82f6", label: "Generación 1989", type: "lifeline" as const },
        { color: "#8b5cf6", label: "Defunciones 7-9 cumplidos", type: "surface" as const },
      ],
    },
    {
      label: "j",
      title: "Defunciones de generación 1984 durante 1988",
      type: "Flujo - Superficie período-cohorte",
      explanation: "Se fija el período (1988) y la cohorte (1984). La generación 1984 tiene 3-4 años cumplidos durante 1988 (cumplen 4 a lo largo del año). El paralelogramo período-cohorte abarca las edades cumplidas 3 y 4 (edades exactas 3 a 5 en el diagrama).",
      config: configJ,
      legend: [
        { color: "#3b82f6", label: "Generación 1984", type: "lifeline" as const },
        { color: "#f59e0b", label: "Defunciones gen.1984 en 1988", type: "surface" as const },
      ],
    },
    {
      label: "k",
      title: "Defunciones de ninos de 1 año durante 1995",
      type: "Flujo - Superficie edad-período",
      explanation: "Se fija la edad (1 año cumplido) y el período (1995). Es un cuadrado edad-período que abarca dos generaciones (nacidos en 1993 y 1994).",
      config: configK,
      legend: [
        { color: "#06b6d4", label: "Defunciones 1 año en 1995", type: "surface" as const },
      ],
    },
    {
      label: "l",
      title: "Defunciones de menores de 3 años durante 1998",
      type: "Flujo - Superficies edad-período",
      explanation: "Se fija el período (1998) y las edades 0, 1 y 2 cumplidos (menores de 3). Son tres cuadrados edad-período apilados verticalmente en el año 1998.",
      config: configL,
      legend: [
        { color: "#22c55e", label: "Defunciones <3 años en 1998", type: "surface" as const },
      ],
    },
    {
      label: "m",
      title: "Defunciones de 7 años, generación 1987, durante 1995",
      type: "Flujo - Triangulo (edad-período-cohorte)",
      explanation: "Se fijan las tres coordenadas: edad (7 cumplidos), cohorte (1987) y período (1995). Esto determina un único triangulo. Como 1987 + 7 + 1 = 1995, se trata del triangulo superior del cuadrado (1995, 7).",
      config: configM,
      legend: [
        { color: "#3b82f6", label: "Generación 1987", type: "lifeline" as const },
        { color: "#ef4444", label: "Triangulo superior (edad-período-cohorte)", type: "surface" as const },
      ],
    },
    {
      label: "n",
      title: "Defunciones de menores de 4 años, generación 1988, durante 1992",
      type: "Flujo - Triangulo (edad-período-cohorte)",
      explanation: "Durante 1992, la generación 1988 tiene 3-4 años cumplidos. \"Menores de 4\" limita a los que tienen 3 cumplidos. Como 1988 + 3 + 1 = 1992, es el triangulo superior del cuadrado (1992, 3).",
      config: configN,
      legend: [
        { color: "#3b82f6", label: "Generación 1988", type: "lifeline" as const },
        { color: "#f59e0b", label: "Triangulo superior (menores de 4)", type: "surface" as const },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Enunciado</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">Se pide representar en el diagrama de Lexis:</p>
          <ol className="list-[lower-alpha] list-inside space-y-2 text-sm">
            <li>Población de 2 a 4 años exactos el 31/12/1996.</li>
            <li>Población media de 4-6 años cumplidos en 1988.</li>
            <li>Población media de 6 años en 1983.</li>
            <li>La población de 0-2 años exactos del censo realizado el 31 de marzo de 1991.</li>
            <li>Supervivientes de edad exacta 3, pertenecientes a la generación nacida en 1984.</li>
            <li>Supervivientes de edad exacta 5, pertenecientes a las generaciones 1988 y 1989.</li>
            <li>Nacimientos de los años 1984, 1987-1988 y 1992.</li>
            <li>Defunciones de menores de dos años de la generación nacida en 1985.</li>
            <li>Defunciones entre 7 y 10 años de la generación nacida el año 1989.</li>
            <li>Defunciones de miembros de la generación 1984 producidas durante el año 1988.</li>
            <li>Defunciones de ninos de 1 año acontecidas durante 1995.</li>
            <li>Defunciones de menores de 3 años producidas durante 1998.</li>
            <li>Defunciones de 7 años de la generación 1987 durante el año 1995.</li>
            <li>Defunciones de menores de 4 años pertenecientes a la generación 1988 y producidas en 1992.</li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Solución</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {items.map((item) => (
            <div key={item.label} className="space-y-3 border-b pb-6 last:border-b-0">
              <h4 className="font-semibold">
                {item.label}) {item.title}
              </h4>
              <Badge variant="outline">{item.type}</Badge>
              <p className="text-sm">{item.explanation}</p>
              <div className="max-w-xl mx-auto">
                <LexisDiagram config={item.config} />
                <LexisLegend items={item.legend} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

/* ────────────────────────────────────────────
   Ejercicio 2 - Stocks y flujos con datos
   ──────────────────────────────────────────── */
function Ejercicio2() {
  /* Data:
     - 2003 nacieron 50.000 → stock (efectivos iniciales gen. 2003)
     - 2003: 300 fallecimientos nacidos en 2003, 0 años → flujo (triangulo inf at (2003,0))
     - 2003: 50 fallecimientos nacidos en 2002, 0 años → flujo (triangulo sup at (2003,0))
     - Población 0 cumplidos a 1.01.2004 = 49.700 → stock (vertical line at 2004, age 0-1)
       Verify: We'd need to know births in 2003 minus deaths of gen 2003 in lower tri age 0 in 2003
       minus deaths of gen 2002 in upper tri age 0 in 2003... but the stock at 1.1.2004 with 0 cumplidos
       includes gen 2003 survivors in the lower triangle part:
       From gen 2003: 50000 - 300 = 49700 ✓
       (Gen 2002 at 1.1.2004 has 1 year completed, not 0)
     - 2004: 60 fallecidos nacidos en 2003, 0 años → flujo (upper tri at (2004,0) for cohort 2003)
     - Supervivientes primer aniversario gen 2003 = 49.640 → stock
       Verify: 50000 - 300 - 60 = 49640 ✓ (after lower tri + upper tri at age 0)
     - 2004: 25 fallecidos nacidos 2003, 1 año cumplido → flujo (lower tri at (2004,1) for cohort 2003)
     - Población 1 cumplido a 1.1.2005 = 49.615 → stock
       Verify: 49640 - 25 = 49615 ✓
  */

  const configLexis: LexisConfig = {
    startYear: 2002,
    endYear: 2006,
    minAge: 0,
    maxAge: 3,
    cellSize: 80,
    lifelines: [
      { cohort: 2002, color: "#9ca3af", dashed: true },
      { cohort: 2003, color: "#3b82f6" },
    ],
    surfaces: [
      { type: "triangulo-inf", year: 2003, age: 0, color: "#ef4444", label: "300", opacity: 0.35 },
      { type: "triangulo-sup", year: 2003, age: 0, color: "#f59e0b", label: "50", opacity: 0.35 },
      { type: "triangulo-sup", year: 2004, age: 0, color: "#ef4444", label: "60", opacity: 0.35 },
      { type: "triangulo-inf", year: 2004, age: 1, color: "#ef4444", label: "25", opacity: 0.35 },
    ],
    stockLines: [
      { type: "horizontal", year: 2003, age: 0, endYear: 2004, color: "#22c55e", label: "N=50000", thickness: 3 },
      { type: "vertical", year: 2004, age: 0, endAge: 1, color: "#8b5cf6", label: "P₀=49700", thickness: 3 },
      { type: "vertical", year: 2005, age: 1, endAge: 2, color: "#06b6d4", label: "P₁=49615", thickness: 3 },
    ],
    annotations: [
      { x: 2004.1, y: 0.6, text: "l₁=49640", fontSize: 9, color: "#3b82f6" },
    ],
  };

  const legendItems: LexisLegendItem[] = [
    { color: "#3b82f6", label: "Generación 2003", type: "lifeline" },
    { color: "#22c55e", label: "Nacimientos (N=50.000)", type: "line" },
    { color: "#ef4444", label: "Defunciones gen. 2003", type: "surface" },
    { color: "#f59e0b", label: "Defunciones gen. 2002", type: "surface" },
    { color: "#8b5cf6", label: "Stock P₀ a 1.1.2004", type: "line" },
    { color: "#06b6d4", label: "Stock P₁ a 1.1.2005", type: "line" },
  ];

  const dimensions = [
    { dim: "Durante 2003 nacieron 50.000 individuos", tipo: "Stock", nota: "Efectivos iniciales de la generación 2003. En Lexis se representan como segmento horizontal sobre edad 0 (línea = stock)." },
    { dim: "300 fallecimientos (nacidos 2003, 0 años, en 2003)", tipo: "Flujo", nota: "Defunciones: triangulo inferior de (2003, edad 0). Cohort=2003, age=0, year=2003 → 2003+0=2003 → tri. inferior." },
    { dim: "50 fallecimientos (nacidos 2002, 0 años, en 2003)", tipo: "Flujo", nota: "Defunciones: triangulo superior de (2003, edad 0). Cohort=2002, age=0, year=2003 → 2002+0+1=2003 → tri. superior." },
    { dim: "Población 0 cumplidos a 1.01.2004 = 49.700", tipo: "Stock", nota: "Recuento en un instante concreto (1 de enero). Linea vertical en 2004, entre edades 0 y 1." },
    { dim: "60 fallecidos (nacidos 2003, 0 años, en 2004)", tipo: "Flujo", nota: "Defunciones: triangulo superior de (2004, edad 0). Cohort=2003, age=0, year=2004 → 2003+0+1=2004 → tri. superior." },
    { dim: "Supervivientes 1er aniversario gen. 2003 = 49.640", tipo: "Stock", nota: "Stock puntual: donde la linea de vida de gen. 2003 cruza edad exacta 1. Verificacion: 50.000 - 300 - 60 = 49.640." },
    { dim: "25 fallecidos (nacidos 2003, 1 cumplido, en 2004)", tipo: "Flujo", nota: "Defunciones: triangulo inferior de (2004, edad 1). Cohort=2003, age=1, year=2004 → 2003+1=2004 → tri. inferior." },
    { dim: "Población 1 cumplido a 1.01.2005 = 49.615", tipo: "Stock", nota: "Recuento en un instante: linea vertical en 2005, entre edades 1 y 2. Verificacion: 49.640 - 25 = 49.615." },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Enunciado</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p>Supongamos una población de la que conocemos las siguientes dimensiones:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Durante el año 2003 nacieron 50.000 individuos.</li>
            <li>Durante 2003 se produjeron 300 fallecimientos de individuos nacidos en 2003 y con 0 años de edad.</li>
            <li>Durante 2003 se produjeron 50 fallecimientos de individuos nacidos en 2002 y con 0 años de edad.</li>
            <li>La población de 0 años cumplidos a 1.01.2004 es de 49.700 individuos.</li>
            <li>Durante 2004 fallecieron 60 individuos nacidos en 2003 y con 0 años de edad.</li>
            <li>Los supervivientes en el primer aniversario de la generación de 2003 son 49.640.</li>
            <li>Durante 2004 han fallecido 25 individuos, nacidos durante 2003 y con un año cumplido.</li>
            <li>La población con un año cumplido a 1.01.2005 es de 49.615.</li>
          </ul>
          <p className="font-medium mt-3">Se pide:</p>
          <p className="text-sm">2.1 Indicar para cada dimension si se trata de un flujo o de un stock.</p>
          <p className="text-sm">2.2 Representar todas las dimensiones en el diagrama de Lexis.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Solución 2.1: Clasificación flujo/stock</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dimension</TableHead>
                <TableHead className="w-24">Tipo</TableHead>
                <TableHead>Justificacion</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dimensions.map((d, i) => (
                <TableRow key={i}>
                  <TableCell className="text-sm">{d.dim}</TableCell>
                  <TableCell>
                    <Badge variant={d.tipo === "Stock" ? "default" : "secondary"}>
                      {d.tipo}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">{d.nota}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p className="text-sm mt-4 text-muted-foreground">
            <strong>Regla general:</strong> Los stocks son recuentos en un instante concreto
            (foto fija). Los flujos son acontecimientos que ocurren a lo largo de un período.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Solución 2.2: Diagrama de Lexis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="max-w-2xl mx-auto">
            <LexisDiagram config={configLexis} />
            <LexisLegend items={legendItems} />
          </div>
          <div className="space-y-2 text-sm">
            <h4 className="font-semibold">Verificacion de coherencia:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>P₀(1.1.2004) = N(2003) - d(tri.inf, age 0, 2003) = 50.000 - 300 = 49.700 ✓</li>
              <li>l₁(gen 2003) = 50.000 - 300 - 60 = 49.640 ✓</li>
              <li>P₁(1.1.2005) = l₁(gen 2003) - d(tri.inf, age 1, 2004) = 49.640 - 25 = 49.615 ✓</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ────────────────────────────────────────────
   Ejercicio 3 - Datos censales espanoles
   ──────────────────────────────────────────── */
function Ejercicio3() {
  /* Data table:
     Residentes 75 años en 1.01.2001: Total=320111, V=136968, M=183143
     Residentes 75 años en 1.01.2002: Total=333451, V=143912, M=189539
     Residentes 76 años en 1.01.2002: Total=309937, V=130898, M=179039
     Fallecidos 2001 con 75 cumplidos: Total=9848, V=5956, M=3892
     Fallecidos 2002 con 75 cumplidos: Total=10018, V=6166, M=3852
     Fallecidos 2001 con 75 cumpl. nacidos 1925: Total=4663, V=2773, M=1890
     Fallecidos 2001 con 75 cumpl. nacidos 1926: Total=5185, V=3183, M=2002
     Fallecidos 2001 con 76 cumpl. nacidos 1925: Total=5445, V=3251, M=2194
     Fallecidos 2002 con 75 cumpl. nacidos 1926: Total=5113, V=3124, M=1989
     Fallecidos 2002 con 75 cumpl. nacidos 1927: Total=4905, V=3042, M=1863
  */

  // Diagrama: años 2000-2004, edades 74-78, cohorts 1925-1927
  const config31: LexisConfig = {
    startYear: 2000,
    endYear: 2004,
    minAge: 74,
    maxAge: 78,
    cellSize: 70,
    lifelines: [
      { cohort: 1925, color: "#3b82f6" },
      { cohort: 1926, color: "#22c55e" },
      { cohort: 1927, color: "#f59e0b" },
    ],
    stockLines: [
      // 3.1 Stocks de varones de 75 cumplidos
      { type: "vertical", year: 2001, age: 75, endAge: 76, color: "#ef4444", label: "V=136968", thickness: 3 },
      { type: "vertical", year: 2002, age: 75, endAge: 76, color: "#8b5cf6", label: "V=143912", thickness: 3 },
    ],
  };

  const config32: LexisConfig = {
    startYear: 2000,
    endYear: 2004,
    minAge: 74,
    maxAge: 78,
    cellSize: 70,
    lifelines: [
      { cohort: 1925, color: "#d1d5db", dashed: true },
      { cohort: 1926, color: "#d1d5db", dashed: true },
    ],
    surfaces: [
      // 3.2 Flujo varones fallecidos 2001 con 75 cumplidos → edad-período
      { type: "edad-período", year: 2001, age: 75, color: "#ef4444", label: "V=5956", opacity: 0.4 },
    ],
  };

  const config33: LexisConfig = {
    startYear: 2000,
    endYear: 2004,
    minAge: 74,
    maxAge: 78,
    cellSize: 70,
    lifelines: [
      { cohort: 1926, color: "#22c55e" },
    ],
    surfaces: [
      // 3.3 Varones fallecidos con 75 cumplidos nacidos en 1926 → cohorte-edad
      { type: "cohorte-edad", year: 2001, age: 75, cohort: 1926, color: "#3b82f6", label: "V=6307", opacity: 0.4 },
    ],
  };

  const config34: LexisConfig = {
    startYear: 2000,
    endYear: 2004,
    minAge: 74,
    maxAge: 78,
    cellSize: 70,
    lifelines: [
      { cohort: 1925, color: "#3b82f6" },
    ],
    surfaces: [
      // 3.4 Varones fallecidos 2001, generación 1925 → período-cohorte
      { type: "período-cohorte", year: 2001, age: 76, cohort: 1925, color: "#f59e0b", label: "V=?", opacity: 0.4 },
    ],
  };

  const config35: LexisConfig = {
    startYear: 2000,
    endYear: 2004,
    minAge: 74,
    maxAge: 78,
    cellSize: 70,
    lifelines: [
      { cohort: 1927, color: "#f59e0b" },
    ],
    surfaces: [
      // 3.5 Varones fallecidos 2002, 75 cumplidos, gen 1927 → triangulo
      //     cohort=1927, age=75, year=2002: 1927+75=2002 → lower triangle at (2002, 75)
      //     Wait: 1927+75+1=2003 ≠ 2002. Let me check: 1927+75=2002 → lower tri at (2002,75). ✓
      //     But wait: gen 1927 at age 75 in year 2002. Since c+x=1927+75=2002=year, this is lower tri.
      //     But gen 1927 turns 75 during 2002 (born 1927, age 75 in 2002). In the lower triangle
      //     of square (2002, 75), the cohort = 2002-75 = 1927 ✓
      { type: "triangulo-inf", year: 2002, age: 75, color: "#8b5cf6", label: "V=3042", opacity: 0.45 },
    ],
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Enunciado</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Disponemos de los siguientes datos sobre la población espanola, obtenidos del
            Padrón Municipal de Habitantes y de la estadística del Movimiento Natural de la Población.
          </p>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Concepto</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="text-right">Varones</TableHead>
                  <TableHead className="text-right">Mujeres</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Residentes de 75 años en 1.01.2001</TableCell>
                  <TableCell className="text-right">320.111</TableCell>
                  <TableCell className="text-right">136.968</TableCell>
                  <TableCell className="text-right">183.143</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Residentes de 75 años en 1.01.2002</TableCell>
                  <TableCell className="text-right">333.451</TableCell>
                  <TableCell className="text-right">143.912</TableCell>
                  <TableCell className="text-right">189.539</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Residentes de 76 años en 1.01.2002</TableCell>
                  <TableCell className="text-right">309.937</TableCell>
                  <TableCell className="text-right">130.898</TableCell>
                  <TableCell className="text-right">179.039</TableCell>
                </TableRow>
                <TableRow className="border-t-2">
                  <TableCell>Fallecidos durante 2001 con 75 cumplidos</TableCell>
                  <TableCell className="text-right">9.848</TableCell>
                  <TableCell className="text-right">5.956</TableCell>
                  <TableCell className="text-right">3.892</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fallecidos durante 2002 con 75 cumplidos</TableCell>
                  <TableCell className="text-right">10.018</TableCell>
                  <TableCell className="text-right">6.166</TableCell>
                  <TableCell className="text-right">3.852</TableCell>
                </TableRow>
                <TableRow className="border-t-2">
                  <TableCell>Fallecidos 2001 con 75 cumpl., nacidos 1925</TableCell>
                  <TableCell className="text-right">4.663</TableCell>
                  <TableCell className="text-right">2.773</TableCell>
                  <TableCell className="text-right">1.890</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fallecidos 2001 con 75 cumpl., nacidos 1926</TableCell>
                  <TableCell className="text-right">5.185</TableCell>
                  <TableCell className="text-right">3.183</TableCell>
                  <TableCell className="text-right">2.002</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fallecidos 2001 con 76 cumpl., nacidos 1925</TableCell>
                  <TableCell className="text-right">5.445</TableCell>
                  <TableCell className="text-right">3.251</TableCell>
                  <TableCell className="text-right">2.194</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fallecidos 2002 con 75 cumpl., nacidos 1926</TableCell>
                  <TableCell className="text-right">5.113</TableCell>
                  <TableCell className="text-right">3.124</TableCell>
                  <TableCell className="text-right">1.989</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fallecidos 2002 con 75 cumpl., nacidos 1927</TableCell>
                  <TableCell className="text-right">4.905</TableCell>
                  <TableCell className="text-right">3.042</TableCell>
                  <TableCell className="text-right">1.863</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="text-sm mt-3">
            Representar en el diagrama de Lexis indicando, en su caso, el tipo de observación.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Solución</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* 3.1 */}
          <div className="space-y-3">
            <h4 className="font-semibold">3.1 Stocks de varones de 75 años cumplidos</h4>
            <p className="text-sm">
              Los residentes con 75 años cumplidos en una fecha concreta son <strong>stocks</strong>.
              Se representan como líneas verticales entre las edades 75 y 76 en las fechas 1.01.2001
              y 1.01.2002. Los datos del Padrón son de tipo <strong>edad-período</strong> (edad cumplida
              en un instante del calendario).
            </p>
            <div className="max-w-xl mx-auto">
              <LexisDiagram config={config31} />
              <LexisLegend items={[
                { color: "#ef4444", label: "V=136.968 (1.1.2001)", type: "line" },
                { color: "#8b5cf6", label: "V=143.912 (1.1.2002)", type: "line" },
                { color: "#3b82f6", label: "Gen. 1925", type: "lifeline" },
                { color: "#22c55e", label: "Gen. 1926", type: "lifeline" },
                { color: "#f59e0b", label: "Gen. 1927", type: "lifeline" },
              ]} />
            </div>
          </div>

          {/* 3.2 */}
          <div className="space-y-3">
            <h4 className="font-semibold">3.2 Flujo de varones fallecidos durante 2001 con 75 cumplidos</h4>
            <p className="text-sm">
              Observacion de tipo <strong>edad-período</strong> (cuadrado): se fija la edad (75 cumplidos)
              y el período (2001). Abarca dos generaciones (1925 y 1926). Varones fallecidos = 5.956.
            </p>
            <p className="text-sm text-muted-foreground">
              Verificacion: 2.773 (gen 1925) + 3.183 (gen 1926) = 5.956 ✓
            </p>
            <div className="max-w-xl mx-auto">
              <LexisDiagram config={config32} />
              <LexisLegend items={[
                { color: "#ef4444", label: "Edad-período: V=5.956", type: "surface" },
              ]} />
            </div>
          </div>

          {/* 3.3 */}
          <div className="space-y-3">
            <h4 className="font-semibold">3.3 Flujo de varones fallecidos con 75 cumplidos entre los nacidos en 1926</h4>
            <p className="text-sm">
              Observacion de tipo <strong>cohorte-edad</strong> (paralelogramo): se fija la cohorte (1926)
              y la edad (75 cumplidos). Abarca dos años de calendario (2001 y 2002).
              Total varones: 3.183 (en 2001) + 3.124 (en 2002) = 6.307.
            </p>
            <div className="max-w-xl mx-auto">
              <LexisDiagram config={config33} />
              <LexisLegend items={[
                { color: "#22c55e", label: "Gen. 1926", type: "lifeline" },
                { color: "#3b82f6", label: "Cohorte-edad: V=6.307", type: "surface" },
              ]} />
            </div>
          </div>

          {/* 3.4 */}
          <div className="space-y-3">
            <h4 className="font-semibold">3.4 Flujo de varones fallecidos durante 2001, generación 1925</h4>
            <p className="text-sm">
              Observacion de tipo <strong>período-cohorte</strong> (paralelogramo): se fija el período (2001)
              y la cohorte (1925). La generación 1925 tiene 75-76 años cumplidos durante 2001.
              Total varones: 2.773 (con 75 cumplidos) + 3.251 (con 76 cumplidos) = 6.024.
            </p>
            <div className="max-w-xl mx-auto">
              <LexisDiagram config={config34} />
              <LexisLegend items={[
                { color: "#3b82f6", label: "Gen. 1925", type: "lifeline" },
                { color: "#f59e0b", label: "Periodo-cohorte: V=6.024", type: "surface" },
              ]} />
            </div>
            <ResultHighlight
              label="Varones fallecidos en 2001, gen. 1925"
              value="6.024"
              unit="2.773 (75 cumpl.) + 3.251 (76 cumpl.)"
            />
          </div>

          {/* 3.5 */}
          <div className="space-y-3">
            <h4 className="font-semibold">3.5 Flujo de varones fallecidos durante 2002, con 75 cumplidos, generación 1927</h4>
            <p className="text-sm">
              Se fijan las tres coordenadas: período (2002), edad (75 cumplidos) y cohorte (1927).
              Esto determina un <strong>triangulo</strong> (observación edad-período-cohorte).
              Cohorte 1927 + edad 75 = año 2002, por lo que es el <strong>triangulo inferior</strong>
              del cuadrado (2002, edad 75).
              Varones: 3.042.
            </p>
            <div className="max-w-xl mx-auto">
              <LexisDiagram config={config35} />
              <LexisLegend items={[
                { color: "#f59e0b", label: "Gen. 1927", type: "lifeline" },
                { color: "#8b5cf6", label: "Triangulo inferior: V=3.042", type: "surface" },
              ]} />
            </div>
            <p className="text-sm text-muted-foreground">
              Verificacion del cuadrado edad-período 2002, 75 cumplidos: 3.124 (gen 1926, tri.sup) + 3.042 (gen 1927, tri.inf) = 6.166 ✓
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ────────────────────────────────────────────
   Ejercicio 4 - Emigración y cálculos numéricos
   ──────────────────────────────────────────── */
function Ejercicio4() {
  /*
     Datos del diagrama PDF:
     - Generación 1976 (a 1.1.2001 tienen 25 años cumplidos → 2001 - 25 = 1976)
     - Stock inicial: 30.000 (etiquetado al inicio de la línea de vida)
     - Emigraciones en 7 triángulos sucesivos a lo largo de la línea de vida:
       Tri inf (2001,25)=500, Tri sup (2002,25)=600,
       Tri inf (2002,26)=750, Tri sup (2003,26)=900,
       Tri inf (2003,27)=1.000, Tri sup (2004,27)=1.200,
       Tri inf (2004,28)=800
     - No hay mortalidad ni inmigración → solo se pierde población por emigración

     Cálculos:
     - l₂₇ = 30.000 - 500 - 600 - 750 - 900 = 27.250 (supervivientes a edad exacta 27)
     - P₂₈(1.1.2005) = 27.250 - 1.000 - 1.200 - 800 = 24.250 (stock a 1.1.2005)
  */

  const configLexis: LexisConfig = {
    startYear: 2001,
    endYear: 2006,
    minAge: 25,
    maxAge: 30,
    cellSize: 65,
    lifelines: [
      { cohort: 1976, color: "#3b82f6" },
    ],
    surfaces: [
      // Emigraciones en 7 triángulos sucesivos a lo largo de la línea de vida gen 1976
      { type: "triangulo-inf", year: 2001, age: 25, color: "#ef4444", label: "500", opacity: 0.3 },
      { type: "triangulo-sup", year: 2002, age: 25, color: "#f59e0b", label: "600", opacity: 0.3 },
      { type: "triangulo-inf", year: 2002, age: 26, color: "#ef4444", label: "750", opacity: 0.3 },
      { type: "triangulo-sup", year: 2003, age: 26, color: "#f59e0b", label: "900", opacity: 0.3 },
      { type: "triangulo-inf", year: 2003, age: 27, color: "#ef4444", label: "1.000", opacity: 0.3 },
      { type: "triangulo-sup", year: 2004, age: 27, color: "#f59e0b", label: "1.200", opacity: 0.3 },
      { type: "triangulo-inf", year: 2004, age: 28, color: "#ef4444", label: "800", opacity: 0.3 },
    ],
    stockLines: [],
    annotations: [
      { x: 2001.05, y: 25.4, text: "30.000", fontSize: 11, color: "#22c55e" },
    ],
  };

  const legendItemsLexis: LexisLegendItem[] = [
    { color: "#3b82f6", label: "Generación 1976", type: "lifeline" },
    { color: "#ef4444", label: "Emigración (tri. inferior)", type: "surface" },
    { color: "#f59e0b", label: "Emigración (tri. superior)", type: "surface" },
  ];

  // Solution diagram showing the computed stocks
  const configSolution: LexisConfig = {
    startYear: 2001,
    endYear: 2006,
    minAge: 25,
    maxAge: 30,
    cellSize: 65,
    lifelines: [
      { cohort: 1976, color: "#3b82f6" },
    ],
    surfaces: [
      { type: "triangulo-inf", year: 2001, age: 25, color: "#ef4444", label: "500", opacity: 0.25 },
      { type: "triangulo-sup", year: 2002, age: 25, color: "#f59e0b", label: "600", opacity: 0.25 },
      { type: "triangulo-inf", year: 2002, age: 26, color: "#ef4444", label: "750", opacity: 0.25 },
      { type: "triangulo-sup", year: 2003, age: 26, color: "#f59e0b", label: "900", opacity: 0.25 },
      { type: "triangulo-inf", year: 2003, age: 27, color: "#ef4444", label: "1.000", opacity: 0.25 },
      { type: "triangulo-sup", year: 2004, age: 27, color: "#f59e0b", label: "1.200", opacity: 0.25 },
      { type: "triangulo-inf", year: 2004, age: 28, color: "#ef4444", label: "800", opacity: 0.25 },
    ],
    stockLines: [
      // Stock at 1.1.2005, 28 cumplidos
      { type: "vertical", year: 2005, age: 28, endAge: 29, color: "#8b5cf6", label: "P₂₈=24.250", thickness: 4 },
      // Survivors at exact age 27
      { type: "horizontal", year: 2003, age: 27, endYear: 2004, color: "#22c55e", label: "l₂₇=27.250", thickness: 4 },
    ],
    annotations: [
      { x: 2001.05, y: 25.4, text: "30.000", fontSize: 10, color: "#22c55e" },
    ],
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Enunciado</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Los datos que aparecen en el diagrama de Lexis corresponden a las salidas por
            <strong> emigración</strong> y a los <strong>stocks</strong> de los individuos de
            una generación, suponiendo la ausencia de mortalidad y de inmigración.
          </p>
          <p className="text-sm text-muted-foreground">
            La generación corresponde a los nacidos en 1976. El stock inicial es de 30.000
            individuos. Los números dentro de los triángulos representan las emigraciones
            en cada período (500, 600, 750, 900, 1.000, 1.200 y 800).
          </p>
          <div className="max-w-xl mx-auto">
            <LexisDiagram config={configLexis} />
            <LexisLegend items={legendItemsLexis} />
          </div>
          <p className="font-medium mt-3">Se pide calcular:</p>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>El número de individuos con 28 años cumplidos en 01.01.2005.</li>
            <li>Los individuos que no han emigrado a la edad exacta de 27 años.</li>
            <li>Representar sobre el diagrama de Lexis el stock y el flujo a edad exacta de los ejercicios anteriores.</li>
            <li>Indicar la generación a la que pertenecen los emigrantes.</li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Solución</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 4.1 */}
          <div className="space-y-3">
            <h4 className="font-semibold">4.1 Individuos con 28 cumplidos en 01.01.2005</h4>
            <p className="text-sm">
              En ausencia de mortalidad e inmigración, el stock solo disminuye por emigración.
              Partimos del stock inicial de <strong>30.000</strong> y restamos todas las
              emigraciones en los 7 triángulos que recorre la generación 1976:
            </p>
            <p className="text-sm font-mono bg-muted p-2 rounded">
              P₂₈(1.1.2005) = 30.000 - 500 - 600 - 750 - 900 - 1.000 - 1.200 - 800 = 24.250
            </p>
            <ResultHighlight
              label="P₂₈(01.01.2005)"
              value="24.250"
              unit="individuos con 28 años cumplidos"
            />
          </div>

          {/* 4.2 */}
          <div className="space-y-3">
            <h4 className="font-semibold">4.2 Individuos que no han emigrado a la edad exacta de 27 años</h4>
            <p className="text-sm">
              Los supervivientes a la edad exacta 27 (l₂₇) son los individuos de la generación
              1976 que alcanzan su 27.º cumpleaños sin haber emigrado. Este momento ocurre
              durante el año 2003 (1976 + 27 = 2003).
            </p>
            <p className="text-sm">
              Partimos del stock inicial de <strong>30.000</strong> y restamos las emigraciones
              que ocurren <strong>antes</strong> de cumplir 27 años (triángulos a edades 24, 25 y 26):
            </p>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Triángulo inferior (2001, edad 25): emigran 500</li>
              <li>Triángulo superior (2002, edad 25): emigran 600</li>
              <li>Triángulo inferior (2002, edad 26): emigran 750</li>
              <li>Triángulo superior (2003, edad 26): emigran 900</li>
            </ul>
            <p className="text-sm font-mono bg-muted p-2 rounded">
              l₂₇ = 30.000 - 500 - 600 - 750 - 900 = 27.250
            </p>
            <ResultHighlight
              label="Supervivientes a edad exacta 27 (l₂₇)"
              value="27.250"
              unit="individuos que no han emigrado al cumplir 27 años"
            />
          </div>

          {/* 4.3 */}
          <div className="space-y-3">
            <h4 className="font-semibold">4.3 Representacion en el diagrama de Lexis</h4>
            <p className="text-sm">
              El stock P₂₈(1.1.2005) se representa como una <strong>linea vertical</strong> en
              el año 2005, entre las edades 28 y 29. Los supervivientes l₂₇ (edad exacta 27) se
              representan como un <strong>segmento horizontal</strong> a la edad 27, cruzando la
              linea de vida de la generación 1976 (entre 2003 y 2004).
            </p>
            <div className="max-w-xl mx-auto">
              <LexisDiagram config={configSolution} />
              <LexisLegend items={[
                { color: "#3b82f6", label: "Generación 1976", type: "lifeline" },
                { color: "#8b5cf6", label: "Stock P₂₈(1.1.2005) = 24.250", type: "line" },
                { color: "#22c55e", label: "l₂₇ = 27.250 (edad exacta 27)", type: "line" },
              ]} />
            </div>
          </div>

          {/* 4.4 */}
          <div className="space-y-3">
            <h4 className="font-semibold">4.4 Generación a la que pertenecen los emigrantes</h4>
            <p className="text-sm">
              Todos los emigrantes representados en el diagrama pertenecen a la{" "}
              <strong>generación de 1976</strong>, ya que toda la emigración mostrada ocurre a lo
              largo de la linea de vida de dicha generación. Los triangulos superior e inferior en
              cada cuadrado pertenecen a la misma generación (1976), diferenciandose unicamente en
              el año de calendario y la edad exacta en que se produce la emigración.
            </p>
            <ResultHighlight
              label="Generación de los emigrantes"
              value="Generación 1976"
              unit="Todos los emigrantes pertenecen a una unica generación"
            />
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
  learned: string[];
  nextTopic: { label: string; href: string } | null;
}> = {
  "1": {
    title: "Ejercicio 1: Representaci\u00f3n de 14 conceptos demogr\u00e1ficos",
    component: Ejercicio1,
    question: "Representar 14 conceptos demogr\u00e1ficos en el diagrama de Lexis: stocks, flujos, superficies",
    learned: [
      "C\u00f3mo representar stocks (l\u00edneas verticales y horizontales) en Lexis",
      "C\u00f3mo representar flujos (superficies) diferenciando periodo, cohorte y edad",
      "La diferencia visual entre tri\u00e1ngulos superiores e inferiores en Lexis",
    ],
    nextTopic: { label: "Ejercicio 2: C\u00e1lculos num\u00e9ricos sobre stocks y flujos", href: "/tema-2/ejercicios/t2-2/2" },
  },
  "2": {
    title: "Ejercicio 2: Stocks y flujos con datos de poblaci\u00f3n",
    component: Ejercicio2,
    question: "Calcular stocks y flujos num\u00e9ricos a partir de datos de poblaci\u00f3n",
    learned: [
      "C\u00f3mo extraer datos num\u00e9ricos de un diagrama de Lexis",
      "C\u00e1lculo de poblaci\u00f3n media a partir de stocks",
      "C\u00f3mo sumar flujos en diferentes superficies (tri\u00e1ngulos, cuadrados, paralelogramos)",
    ],
    nextTopic: { label: "Ejercicio 3: Datos censales reales del INE", href: "/tema-2/ejercicios/t2-2/3" },
  },
  "3": {
    title: "Ejercicio 3: Datos censales espa\u00f1oles (edad 75)",
    component: Ejercicio3,
    question: "Trabajar con datos censales reales espa\u00f1oles (edad 75) en el diagrama de Lexis",
    learned: [
      "C\u00f3mo ubicar datos reales del INE (padr\u00f3n, censo) en el diagrama de Lexis",
      "La relaci\u00f3n entre stocks del padr\u00f3n y superficies de Lexis",
      "C\u00e1lculo de indicadores para una edad espec\u00edfica usando datos reales",
    ],
    nextTopic: { label: "Ejercicio 4: Emigraci\u00f3n y c\u00e1lculos de flujos", href: "/tema-2/ejercicios/t2-2/4" },
  },
  "4": {
    title: "Ejercicio 4: Emigraci\u00f3n y c\u00e1lculos num\u00e9ricos",
    component: Ejercicio4,
    question: "Analizar emigraci\u00f3n de una generaci\u00f3n y calcular stocks a partir de flujos",
    learned: [
      "C\u00f3mo representar emigraci\u00f3n (flujo de salida) en Lexis",
      "Calcular stocks futuros a partir de flujos conocidos",
      "La identidad fundamental aplicada a una generaci\u00f3n con emigraci\u00f3n",
    ],
    nextTopic: { label: "Natalidad y fecundidad (Tema 3)", href: "/tema-3/natalidad" },
  },
};

const exerciseNavLabels: Record<string, string> = {
  "1": "Ej. 1: 14 conceptos",
  "2": "Ej. 2: Stocks y flujos",
  "3": "Ej. 3: Datos censales",
  "4": "Ej. 4: Emigraci\u00f3n",
};

export default function T22ExercisePage() {
  const params = useParams();
  const id = params.id as string;
  const exercise = exercises[id];

  if (!exercise) {
    return (
      <div className="max-w-4xl space-y-4">
        <h1 className="text-2xl font-bold">Ejercicio no encontrado</h1>
        <p>
          El ejercicio solicitado no existe.{" "}
          <Link href="/tema-2/ejercicios/t2-2" className="text-primary underline">
            Volver a la lista
          </Link>
        </p>
      </div>
    );
  }

  const ExerciseComponent = exercise.component;
  const prevId = Number(id) > 1 ? String(Number(id) - 1) : null;
  const nextId = Number(id) < 4 ? String(Number(id) + 1) : null;

  return (
    <div className="max-w-4xl space-y-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/tema-2" className="hover:underline">Tema 2</Link>
        <span>/</span>
        <Link href="/tema-2/ejercicios/t2-2" className="hover:underline">Hoja T2-2</Link>
        <span>/</span>
        <span>Ejercicio {id}</span>
      </div>

      {/* ===== ANTES DE EMPEZAR ===== */}
      <Card className="bg-amber-50/50 dark:bg-amber-950/10 border-amber-200 dark:border-amber-800">
        <CardContent className="p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 mt-0.5">
              <BookOpen className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm">
                Antes de empezar
              </p>
              <p className="text-sm text-muted-foreground">
                Este ejercicio usa el diagrama de Lexis de forma avanzada.
                Aseg&uacute;rate de haber repasado la teor&iacute;a y los ejercicios b&aacute;sicos:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Link
                  href="/tema-2/diagrama-lexis"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-700 dark:text-amber-300 hover:underline"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  Teor&iacute;a del diagrama de Lexis
                </Link>
                <Link
                  href="/tema-2/ejercicios/t2-1"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-700 dark:text-amber-300 hover:underline"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  Hoja T2-1 (ejercicios b&aacute;sicos)
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ===== QUE PREGUNTA RESPONDE ===== */}
      <Card className="bg-blue-50/50 dark:bg-blue-950/10 border-blue-200 dark:border-blue-800">
        <CardContent className="p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40 mt-0.5">
              <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm">
                &iquest;Qu&eacute; pregunta responde este ejercicio?
              </p>
              <p className="text-blue-800 dark:text-blue-200 font-medium text-center text-base sm:text-lg py-1">
                &laquo;{exercise.question}&raquo;
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <h1 className="text-2xl font-bold">{exercise.title}</h1>
      <Badge variant="outline">Hoja T2-2</Badge>

      <ExerciseComponent />

      {/* ===== PREV / NEXT NAVIGATION ===== */}
      <div className="flex justify-between items-center pt-4 gap-4">
        {prevId ? (
          <Link
            href={`/tema-2/ejercicios/t2-2/${prevId}`}
            className="flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{exerciseNavLabels[prevId]}</span>
          </Link>
        ) : (
          <Link
            href="/tema-2/ejercicios/t2-1"
            className="flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Hoja T2-1</span>
          </Link>
        )}
        {nextId ? (
          <Link
            href={`/tema-2/ejercicios/t2-2/${nextId}`}
            className="flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <span>{exerciseNavLabels[nextId]}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <Link
            href="/tema-3/natalidad"
            className="flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <span>Tema 3: Natalidad</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      {/* ===== CONEXION FINAL ===== */}
      <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
        <CardContent className="p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 mt-0.5">
              <Lightbulb className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200 text-sm">
                Lo que has aprendido en este ejercicio
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                {exercise.learned.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {exercise.nextTopic && (
                <Link
                  href={exercise.nextTopic.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-300 hover:underline pt-1"
                >
                  Siguiente: {exercise.nextTopic.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
