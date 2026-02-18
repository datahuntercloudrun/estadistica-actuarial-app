"use client";

import { ConceptCard } from "@/components/theory/concept-card";
import { DefinitionBlock } from "@/components/theory/definition-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LexisDiagram } from "@/components/lexis/lexis-diagram";
import type { LexisConfig } from "@/types/lexis";
import {
  Grid3X3,
  TrendingUp,
  Lightbulb,
  AlertTriangle,
  ArrowRight,
  HelpCircle,
  BookOpen,
  Layers,
  Camera,
  Film,
  Triangle,
  Table,
} from "lucide-react";

/* ---------------------------------------------------------------
   Configuraciones de los diagramas de ejemplo
   --------------------------------------------------------------- */

/** Diagrama b&aacute;sico: solo cuadricula */
const gridConfig: LexisConfig = {
  startYear: 2020,
  endYear: 2026,
  minAge: 0,
  maxAge: 5,
  cellSize: 60,
  showGrid: true,
  showLifelines: false,
};

/** Diagrama con lineas de vida */
const lifelinesConfig: LexisConfig = {
  startYear: 2020,
  endYear: 2026,
  minAge: 0,
  maxAge: 5,
  cellSize: 60,
  showGrid: true,
  showLifelines: true,
  lifelines: [
    { cohort: 2020.2, color: "#e11d48", startAge: 0, endAge: 5 },
    { cohort: 2021.0, color: "#e11d48", startAge: 0, endAge: 5 },
    { cohort: 2021.7, color: "#e11d48", startAge: 0, endAge: 4.3 },
    { cohort: 2022.5, color: "#e11d48", startAge: 0, endAge: 3.5 },
    { cohort: 2023.3, color: "#e11d48", startAge: 0, endAge: 2.7 },
  ],
};

/** Diagrama con stocks (lineas) */
const stocksConfig: LexisConfig = {
  startYear: 2020,
  endYear: 2026,
  minAge: 0,
  maxAge: 5,
  cellSize: 60,
  showGrid: true,
  showLifelines: true,
  lifelines: [
    { cohort: 2020.2, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 5 },
    { cohort: 2021.0, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 5 },
    { cohort: 2021.7, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 4.3 },
    { cohort: 2022.5, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 3.5 },
  ],
  stockLines: [
    // Linea horizontal: edad exacta 1 en 20x2
    {
      type: "horizontal",
      year: 2021,
      age: 1,
      endYear: 2022,
      color: "#e11d48",
      label: "Cumplen 1 a\u00f1o en 2022",
      thickness: 3,
    },
    // Linea vertical: cohorte con 2 a&ntilde;os cumplidos a inicio de 2022
    {
      type: "vertical",
      year: 2022,
      age: 2,
      endAge: 3,
      color: "#38bdf8",
      label: "2 a\u00f1os cumplidos inicio 2022",
      thickness: 3,
    },
    // Linea vertical: 1 a&ntilde;o de edad el 30/06/2025
    {
      type: "vertical",
      year: 2025.5,
      age: 1,
      endAge: 2,
      color: "#22c55e",
      label: "1 a\u00f1o el 30/06/2025",
      thickness: 3,
    },
  ],
};

/** Superficie edad-per&iacute;odo (cuadrado) */
const edadPeriodoConfig: LexisConfig = {
  startYear: 2020,
  endYear: 2026,
  minAge: 0,
  maxAge: 5,
  cellSize: 60,
  showGrid: true,
  showLifelines: true,
  lifelines: [
    { cohort: 2020.3, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 5 },
    { cohort: 2021.5, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 4.5 },
    { cohort: 2022.2, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 3.8 },
    { cohort: 2023.0, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 3 },
  ],
  surfaces: [
    {
      type: "edad-per\u00edodo",
      year: 2023,
      age: 1,
      color: "#f59e0b",
      label: "Edad-Periodo",
      opacity: 0.6,
    },
  ],
};

/** Superficie per&iacute;odo-cohorte (paralelogramo) */
const períodoCohorteConfig: LexisConfig = {
  startYear: 2020,
  endYear: 2026,
  minAge: 0,
  maxAge: 5,
  cellSize: 60,
  showGrid: true,
  showLifelines: true,
  lifelines: [
    { cohort: 2020.3, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 5 },
    { cohort: 2021.0, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 5 },
    { cohort: 2022.2, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 3.8 },
    { cohort: 2023.0, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 3 },
  ],
  surfaces: [
    {
      type: "per\u00edodo-cohorte",
      year: 2023,
      age: 1,
      cohort: 2021,
      color: "#38bdf8",
      label: "Periodo-Cohorte",
      opacity: 0.6,
    },
  ],
};

/** Superficie cohorte-edad (paralelogramo) */
const cohorteEdadConfig: LexisConfig = {
  startYear: 2020,
  endYear: 2026,
  minAge: 0,
  maxAge: 5,
  cellSize: 60,
  showGrid: true,
  showLifelines: true,
  lifelines: [
    { cohort: 2020.3, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 5 },
    { cohort: 2021.0, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 5 },
    { cohort: 2022.2, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 3.8 },
    { cohort: 2023.0, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 3 },
  ],
  surfaces: [
    {
      type: "cohorte-edad",
      year: 2023,
      age: 2,
      cohort: 2021,
      color: "#3b82f6",
      label: "Cohorte-Edad",
      opacity: 0.6,
    },
  ],
};

/** Triangulos: superior e inferior */
const triangulosConfig: LexisConfig = {
  startYear: 2020,
  endYear: 2026,
  minAge: 0,
  maxAge: 5,
  cellSize: 60,
  showGrid: true,
  showLifelines: true,
  lifelines: [
    { cohort: 2020.3, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 5 },
    { cohort: 2021.0, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 5 },
    { cohort: 2022.2, color: "#d4d4d8", dashed: true, startAge: 0, endAge: 3.8 },
  ],
  surfaces: [
    {
      type: "triangulo-sup",
      year: 2023,
      age: 1,
      cohort: 2022,
      color: "#3b82f6",
      label: "Triangulo superior",
      opacity: 0.55,
    },
    {
      type: "triangulo-inf",
      year: 2023,
      age: 1,
      cohort: 2021,
      color: "#22c55e",
      label: "Triangulo inferior",
      opacity: 0.55,
    },
  ],
};

/* --------------------------------------------------------------- */

export default function Tema2DiagramaLexisPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* ============================================================
          HERO HEADER con gradiente p&uacute;rpura
          ============================================================ */}
      <div className="relative overflow-hidden rounded-xl border border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 dark:from-purple-950/30 dark:via-violet-950/30 dark:to-fuchsia-950/30 p-6 sm:p-8">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Badge className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700">
              Tema 2
            </Badge>
            <Badge variant="outline">Teor&iacute;a</Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 dark:from-purple-300 dark:via-violet-300 dark:to-fuchsia-300 bg-clip-text text-transparent">
            2.2 El Diagrama de Lexis
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Herramienta gr&aacute;fica fundamental de la demograf&iacute;a que permite
            representar simult&aacute;neamente las tres dimensiones temporales: edad,
            tiempo calendario y cohorte.
          </p>
        </div>
        {/* Decoraci&oacute;n de fondo */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-fuchsia-200/30 dark:bg-fuchsia-800/20 rounded-full blur-3xl" />
      </div>

      {/* ============================================================
          ANTES DE EMPEZAR - Prerequisitos
          ============================================================ */}
      <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/10">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
            <BookOpen className="h-5 w-5 text-amber-500" />
            Antes de empezar
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-amber-900 dark:text-amber-100 space-y-2">
          <p>
            Este diagrama cobra sentido cuando ya conoces los conceptos de la
            secci&oacute;n anterior. Aseg&uacute;rate de tener claros:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Las{" "}
              <a
                href="/tema-2/conceptos"
                className="font-medium underline underline-offset-2 hover:text-amber-700 dark:hover:text-amber-300"
              >
                tres dimensiones temporales
              </a>{" "}
              (tiempo cronol&oacute;gico, duraci&oacute;n y cohorte)
            </li>
            <li>
              La identidad fundamental <strong>c + d = t</strong>
            </li>
            <li>
              La diferencia entre stocks (foto) y flujos (pel&iacute;cula)
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* ============================================================
          &iquest;QU&Eacute; PREGUNTA RESPONDE ESTA SECCI&Oacute;N?
          ============================================================ */}
      <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/10">
        <CardContent className="flex items-start gap-3 pt-5 pb-5">
          <HelpCircle className="h-6 w-6 text-purple-500 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-purple-800 dark:text-purple-200">
              &iquest;Qu&eacute; pregunta responde esta secci&oacute;n?
            </p>
            <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
              &iquest;C&oacute;mo podemos dibujar en un solo gr&aacute;fico la edad, el
              a&ntilde;o calendario y la generaci&oacute;n de cada persona? &iquest;Y
              c&oacute;mo nos ayuda ese dibujo a clasificar y contar fen&oacute;menos
              demogr&aacute;ficos (muertes, nacimientos, migraciones) de forma
              sistem&aacute;tica?
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ============================================================
          ANALOG&Iacute;A GENERAL - El mapa de huellas
          ============================================================ */}
      <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/10">
        <CardContent className="flex items-start gap-3 pt-5 pb-5">
          <Lightbulb className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
          <div className="text-sm text-purple-800 dark:text-purple-200">
            <p className="font-medium">
              El diagrama de Lexis es como un mapa donde cada persona deja su huella
            </p>
            <p className="mt-2">
              Imagina un papel cuadriculado gigante donde:
            </p>
            <ul className="mt-1 space-y-1 list-disc pl-5">
              <li>
                El <strong>eje horizontal</strong> es el{" "}
                <strong>calendario colgado en la pared</strong> (a&ntilde;os: 2020, 2021,
                2022...)
              </li>
              <li>
                El <strong>eje vertical</strong> son las{" "}
                <strong>edades, como pisos de un edificio</strong> (planta 0 = reci&eacute;n
                nacido, planta 1 = un a&ntilde;o, planta 2 = dos a&ntilde;os...)
              </li>
              <li>
                Cada persona deja una <strong>l&iacute;nea diagonal</strong> que sube como
                una <strong>escalera mec&aacute;nica</strong>: por cada a&ntilde;o que pasa,
                subes un piso
              </li>
            </ul>
            <p className="mt-2">
              Con este mapa, los dem&oacute;grafos pueden &laquo;colorear
              zonas&raquo; para contar cu&aacute;ntas muertes, nacimientos o migraciones
              ocurrieron en una edad y a&ntilde;o concretos.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ============================================================
          &iquest;QU&Eacute; ES EL DIAGRAMA DE LEXIS?
          ============================================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Grid3X3 className="h-6 w-6 text-purple-500" />
          &iquest;Qu&eacute; es el diagrama de Lexis?
        </h2>

        <DefinitionBlock term="Diagrama de Lexis">
          <p>
            Cuadr&iacute;cula bidimensional en la que el eje{" "}
            <strong>horizontal</strong> representa el{" "}
            <strong>tiempo calendario</strong> (fechas) y el eje{" "}
            <strong>vertical</strong> representa la{" "}
            <strong>edad (duraci&oacute;n)</strong>. Cada celda corresponde a la
            intersecci&oacute;n de un a&ntilde;o calendario con un a&ntilde;o de edad.
          </p>
        </DefinitionBlock>

        <Card>
          <CardHeader>
            <CardTitle>
              <h3 className="text-lg">Cuadr&iacute;cula b&aacute;sica</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              El diagrama se construye con una cuadr&iacute;cula donde cada celda
              representa un a&ntilde;o de edad en un a&ntilde;o calendario. El eje
              horizontal muestra las fechas del calendario y el eje vertical muestra
              las edades (duraci&oacute;n).
            </p>
            <div className="flex justify-center">
              <LexisDiagram config={gridConfig} width="100%" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ============================================================
          L&Iacute;NEAS DE VIDA
          ============================================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-purple-500" />
          L&iacute;neas de vida
        </h2>

        {/* Analog&iacute;a Feynman */}
        <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/10">
          <CardContent className="flex items-start gap-3 pt-5 pb-5">
            <Lightbulb className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
            <div className="text-sm text-purple-800 dark:text-purple-200">
              <p className="font-medium">
                La escalera mec&aacute;nica de la vida
              </p>
              <p className="mt-1">
                Piensa en cada persona como alguien subido a una escalera
                mec&aacute;nica que avanza en diagonal: por cada a&ntilde;o que pasa en
                el calendario (un paso a la derecha), la persona sube un piso de
                edad (un paso arriba). El resultado es una l&iacute;nea a 45 grados.
                Si alguien muere, su l&iacute;nea se interrumpe. Si nacen en el mismo
                a&ntilde;o, sus l&iacute;neas son paralelas porque &laquo;se subieron a
                la escalera al mismo tiempo&raquo;.
              </p>
            </div>
          </CardContent>
        </Card>

        <ConceptCard title="Representaci&oacute;n de las l&iacute;neas de vida">
          <p className="text-sm text-muted-foreground">
            Cada individuo se representa mediante una{" "}
            <strong>l&iacute;nea diagonal a 45 grados</strong> que parte del eje
            horizontal (momento de nacimiento) y asciende hacia la derecha. El
            &aacute;ngulo de 45 grados se debe a que por cada a&ntilde;o calendario que
            pasa, la persona envejece exactamente un a&ntilde;o.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            La l&iacute;nea de vida comienza en el nacimiento y termina en el momento de
            la muerte (o del evento que se estudia). Personas de la misma
            generaci&oacute;n tienen l&iacute;neas de vida paralelas.
          </p>
        </ConceptCard>

        <Card>
          <CardHeader>
            <CardTitle>
              <h3 className="text-lg">Diagrama con l&iacute;neas de vida</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Las l&iacute;neas rojas representan las vidas de individuos nacidos en
              diferentes momentos. F&iacute;jate en c&oacute;mo todas tienen pendiente 1
              (45 grados).
            </p>
            <div className="flex justify-center">
              <LexisDiagram config={lifelinesConfig} width="100%" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ============================================================
          STOCKS (L&Iacute;NEAS)
          ============================================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Camera className="h-6 w-6 text-purple-500" />
          Stocks (l&iacute;neas)
        </h2>

        <p className="text-muted-foreground">
          Los stocks se representan como <strong>l&iacute;neas</strong> en el diagrama
          de Lexis. Recuerda: un stock es una &laquo;foto instant&aacute;nea&raquo;.
          Existen tres tipos seg&uacute;n la dimensi&oacute;n que fijan:
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <ConceptCard title="L&iacute;nea horizontal">
            <p className="text-sm text-muted-foreground">
              Fija una <strong>edad exacta</strong>. Representa a todas las
              personas que cumplen esa edad en un per&iacute;odo determinado.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              <span className="inline-block w-3 h-3 bg-red-500 rounded-sm mr-1" />
              Ejemplo: personas que cumplen 1 a&ntilde;o durante el a&ntilde;o 2022.
            </p>
          </ConceptCard>

          <ConceptCard title="L&iacute;nea vertical">
            <p className="text-sm text-muted-foreground">
              Fija un <strong>momento calendario</strong>. Representa a la
              poblaci&oacute;n con una edad determinada en un instante del calendario.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              <span className="inline-block w-3 h-3 bg-sky-400 rounded-sm mr-1" />
              Ejemplo: poblaci&oacute;n con 2 a&ntilde;os cumplidos a inicio de 2022.
            </p>
          </ConceptCard>

          <ConceptCard title="L&iacute;nea diagonal">
            <p className="text-sm text-muted-foreground">
              Fija una <strong>cohorte</strong>. Representa a todos los
              individuos de la misma generaci&oacute;n a medida que envejecen.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Las l&iacute;neas de vida (diagonales grises discontinuas) ya representan
              esto.
            </p>
          </ConceptCard>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              <h3 className="text-lg">Stocks en el diagrama</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Se muestran tres tipos de l&iacute;neas de stock: horizontal (rojo),
              vertical inicio de a&ntilde;o (azul claro) y vertical a mitad de a&ntilde;o
              (verde).
            </p>
            <div className="flex justify-center">
              <LexisDiagram config={stocksConfig} width="100%" />
            </div>
          </CardContent>
        </Card>

        {/* CUIDADO CON... */}
        <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/10">
          <CardContent className="flex items-start gap-3 pt-5 pb-5">
            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
            <div className="text-sm text-amber-900 dark:text-amber-100">
              <p className="font-semibold">
                Cuidado con confundir stocks y flujos
              </p>
              <p className="mt-1">
                Una l&iacute;nea en el diagrama siempre es un <strong>stock</strong>:
                es una foto en un momento o edad concretos. Los{" "}
                <strong>flujos</strong> necesitan un <em>&aacute;rea</em> (superficie
                coloreada) porque cuentan lo que ocurre <em>durante</em> un
                per&iacute;odo, no en un instante. Si ves una l&iacute;nea, piensa
                &laquo;foto&raquo;; si ves un &aacute;rea coloreada, piensa
                &laquo;pel&iacute;cula&raquo;.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ============================================================
          FLUJOS / SUPERFICIES
          ============================================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Film className="h-6 w-6 text-purple-500" />
          Flujos (superficies)
        </h2>

        <p className="text-muted-foreground">
          Los flujos demogr&aacute;ficos se representan como{" "}
          <strong>superficies</strong> (&aacute;reas sombreadas) en el diagrama de
          Lexis. Delimitan los acontecimientos ocurridos seg&uacute;n las dos
          dimensiones que los definen. Existen tres tipos principales de
          superficies y sus subdivisiones en tri&aacute;ngulos.
        </p>

        {/* Analog&iacute;a general de superficies */}
        <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/10">
          <CardContent className="flex items-start gap-3 pt-5 pb-5">
            <Lightbulb className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
            <div className="text-sm text-purple-800 dark:text-purple-200">
              <p className="font-medium">
                Piensa en ventanas de observaci&oacute;n
              </p>
              <p className="mt-1">
                Cada superficie es como una &laquo;ventana&raquo; que colocas sobre
                el diagrama para mirar un subconjunto de personas. Seg&uacute;n{" "}
                <em>qu&eacute; dimensiones</em> fije tu ventana, ver&aacute;s cosas
                distintas:
              </p>
              <ul className="mt-1 space-y-1 list-disc pl-5">
                <li>
                  <strong>Edad + Per&iacute;odo</strong> (cuadrado): miras por la
                  ventana y ves a todos los que tienen cierta edad en un a&ntilde;o
                  concreto
                </li>
                <li>
                  <strong>Per&iacute;odo + Cohorte</strong> (paralelogramo): sigues a
                  tu &laquo;promoci&oacute;n&raquo; de nacimiento durante un a&ntilde;o
                </li>
                <li>
                  <strong>Cohorte + Edad</strong> (paralelogramo): ves qu&eacute; le
                  pasa a tu promoci&oacute;n cuando todos cumplen cierta edad
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 1. Edad-Periodo */}
        <Card>
          <CardHeader>
            <CardTitle>
              <h3 className="text-lg flex items-center gap-2">
                <Layers className="h-5 w-5 text-amber-500" />
                1. Observaci&oacute;n Edad-Per&iacute;odo (cuadrado)
              </h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Delimita los sucesos ocurridos entre individuos pertenecientes a{" "}
              <strong>dos generaciones diferentes</strong>, con la{" "}
              <strong>misma edad</strong>, en un{" "}
              <strong>a&ntilde;o concreto</strong>. Es la superficie del{" "}
              <strong>an&aacute;lisis transversal</strong> por excelencia.
            </p>
            <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/10">
              <CardContent className="flex items-start gap-3 pt-4 pb-4">
                <Lightbulb className="h-4 w-4 text-purple-500 mt-0.5 shrink-0" />
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  <strong>En otras palabras:</strong> es como mirar por una ventana
                  y ver a todos los que tienen cierta edad en un a&ntilde;o concreto,
                  sin importar cu&aacute;ndo nacieron exactamente.
                </p>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground">
              <strong>Ejemplo:</strong> fallecidos con un a&ntilde;o de edad cumplido
              durante el a&ntilde;o 2023.
            </p>
            <div className="flex justify-center">
              <LexisDiagram config={edadPeriodoConfig} width="100%" />
            </div>
          </CardContent>
        </Card>

        {/* 2. Periodo-Cohorte */}
        <Card>
          <CardHeader>
            <CardTitle>
              <h3 className="text-lg flex items-center gap-2">
                <Layers className="h-5 w-5 text-sky-500" />
                2. Observaci&oacute;n Per&iacute;odo-Cohorte (paralelogramo)
              </h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Delimita los sucesos ocurridos entre individuos pertenecientes a
              una <strong>misma cohorte</strong> durante un{" "}
              <strong>per&iacute;odo del calendario</strong>. Se trata de individuos de{" "}
              <strong>dos edades diferentes</strong>, pertenecientes a la misma
              generaci&oacute;n.
            </p>
            <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/10">
              <CardContent className="flex items-start gap-3 pt-4 pb-4">
                <Lightbulb className="h-4 w-4 text-purple-500 mt-0.5 shrink-0" />
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  <strong>En otras palabras:</strong> es como seguir a tu
                  &laquo;promoci&oacute;n&raquo; de nacimiento durante un a&ntilde;o
                  completo. Algunos habr&aacute;n cumplido a&ntilde;os durante ese
                  per&iacute;odo, por eso la superficie abarca dos edades.
                </p>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground">
              <strong>Ejemplo:</strong> nacidos en 2021 que fallecieron (o
              migraron, se casaron, etc.) durante el a&ntilde;o 2023.
            </p>
            <div className="flex justify-center">
              <LexisDiagram config={períodoCohorteConfig} width="100%" />
            </div>
          </CardContent>
        </Card>

        {/* 3. Cohorte-Edad */}
        <Card>
          <CardHeader>
            <CardTitle>
              <h3 className="text-lg flex items-center gap-2">
                <Layers className="h-5 w-5 text-blue-500" />
                3. Observaci&oacute;n Cohorte-Edad (paralelogramo)
              </h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Delimita los sucesos ocurridos entre individuos de la{" "}
              <strong>misma edad</strong>, pertenecientes a una{" "}
              <strong>misma generaci&oacute;n</strong>. El suceso ocurre en{" "}
              <strong>dos a&ntilde;os diferentes</strong> del calendario. Es la
              superficie del <strong>an&aacute;lisis longitudinal</strong> por
              excelencia.
            </p>
            <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/10">
              <CardContent className="flex items-start gap-3 pt-4 pb-4">
                <Lightbulb className="h-4 w-4 text-purple-500 mt-0.5 shrink-0" />
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  <strong>En otras palabras:</strong> es como ver qu&eacute; le pasa a
                  tu promoci&oacute;n cuando todos cumplen cierta edad, pero como
                  no todos cumplen a&ntilde;os el mismo d&iacute;a, la ventana abarca
                  dos a&ntilde;os del calendario.
                </p>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground">
              <strong>Ejemplo:</strong> fallecidos de la generaci&oacute;n de 2021 a
              los dos a&ntilde;os de edad.
            </p>
            <div className="flex justify-center">
              <LexisDiagram config={cohorteEdadConfig} width="100%" />
            </div>
          </CardContent>
        </Card>

        {/* 4. Triangulos */}
        <Card>
          <CardHeader>
            <CardTitle>
              <h3 className="text-lg flex items-center gap-2">
                <Triangle className="h-5 w-5 text-purple-500" />
                4. Tri&aacute;ngulos: subdivisi&oacute;n del cuadrado Edad-Per&iacute;odo
              </h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              El cuadrado Edad-Per&iacute;odo se puede subdividir en dos tri&aacute;ngulos
              mediante la diagonal de cohorte. Cada tri&aacute;ngulo combina las tres
              dimensiones (edad, per&iacute;odo y cohorte):
            </p>

            {/* Analog&iacute;a de tri&aacute;ngulos */}
            <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/10">
              <CardContent className="flex items-start gap-3 pt-4 pb-4">
                <Lightbulb className="h-4 w-4 text-purple-500 mt-0.5 shrink-0" />
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  <strong>Piensa en ello as&iacute;:</strong> cuando la ventana del
                  cuadrado (Edad-Per&iacute;odo) la divides en dos mitades con una
                  diagonal, cada mitad te dice algo distinto. La mitad superior
                  corresponde a la generaci&oacute;n m&aacute;s joven (nacidos ese mismo
                  a&ntilde;o) y la inferior a la generaci&oacute;n m&aacute;s mayor
                  (nacidos el a&ntilde;o anterior). As&iacute; puedes ser a&uacute;n
                  m&aacute;s preciso en tu conteo.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-3 md:grid-cols-2 text-sm text-muted-foreground">
              <div>
                <p>
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-sm mr-1 opacity-60" />
                  <strong>Tri&aacute;ngulo superior:</strong> nacidos en la generaci&oacute;n
                  del mismo a&ntilde;o del per&iacute;odo, con la edad cumplida en ese
                  a&ntilde;o. Ej: nacidos en 2022 fallecidos con 1 a&ntilde;o cumplido en
                  2023.
                </p>
              </div>
              <div>
                <p>
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-sm mr-1 opacity-60" />
                  <strong>Tri&aacute;ngulo inferior:</strong> nacidos en la generaci&oacute;n
                  del a&ntilde;o anterior al per&iacute;odo, con la edad cumplida en ese
                  a&ntilde;o. Ej: nacidos en 2021 fallecidos con 1 a&ntilde;o en 2023.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <LexisDiagram config={triangulosConfig} width="100%" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ============================================================
          TIPOS DE AN&Aacute;LISIS EN EL DIAGRAMA
          ============================================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Tipos de an&aacute;lisis en el diagrama de Lexis
        </h2>

        <p className="text-muted-foreground">
          F&iacute;jate en c&oacute;mo las superficies del diagrama se corresponden
          directamente con los dos enfoques de an&aacute;lisis que ya conoces del tema
          anterior:
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-l-4 border-l-pink-500">
            <CardHeader>
              <CardTitle>
                <h3 className="text-lg">An&aacute;lisis transversal</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>
                Se corresponde con la observaci&oacute;n{" "}
                <strong>Per&iacute;odo-Edad</strong> (cuadrado). Estudia la ocurrencia
                de un fen&oacute;meno durante un per&iacute;odo de tiempo, involucrando a
                todas las cohortes.
              </p>
              <p>
                Es el enfoque m&aacute;s com&uacute;n en la pr&aacute;ctica al disponer
                de datos de un a&ntilde;o concreto para todas las edades.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-cyan-500">
            <CardHeader>
              <CardTitle>
                <h3 className="text-lg">An&aacute;lisis longitudinal</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>
                Se corresponde con las observaciones{" "}
                <strong>Per&iacute;odo-Cohorte</strong> y{" "}
                <strong>Cohorte-Edad</strong> (paralelogramos). Estudia un
                fen&oacute;meno en una cohorte a lo largo del tiempo.
              </p>
              <p>
                Requiere largas series temporales. Es poco pr&aacute;ctico en la
                realidad; suele abordarse de forma retrospectiva.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ============================================================
          RESUMEN DE SUPERFICIES
          ============================================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Table className="h-6 w-6 text-purple-500" />
          Resumen de superficies
        </h2>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-4 text-left font-semibold">
                      Superficie
                    </th>
                    <th className="py-2 pr-4 text-left font-semibold">Forma</th>
                    <th className="py-2 pr-4 text-left font-semibold">
                      Dimensiones fijadas
                    </th>
                    <th className="py-2 text-left font-semibold">
                      Tipo de an&aacute;lisis
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium text-foreground">
                      Edad-Per&iacute;odo
                    </td>
                    <td className="py-2 pr-4">Cuadrado</td>
                    <td className="py-2 pr-4">Edad + Per&iacute;odo</td>
                    <td className="py-2">Transversal</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium text-foreground">
                      Per&iacute;odo-Cohorte
                    </td>
                    <td className="py-2 pr-4">Paralelogramo</td>
                    <td className="py-2 pr-4">Per&iacute;odo + Cohorte</td>
                    <td className="py-2">Longitudinal</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium text-foreground">
                      Cohorte-Edad
                    </td>
                    <td className="py-2 pr-4">Paralelogramo</td>
                    <td className="py-2 pr-4">Cohorte + Edad</td>
                    <td className="py-2">Longitudinal</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium text-foreground">
                      Tri&aacute;ngulo superior
                    </td>
                    <td className="py-2 pr-4">Tri&aacute;ngulo</td>
                    <td className="py-2 pr-4">Edad + Per&iacute;odo + Cohorte</td>
                    <td className="py-2">Mixto</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-foreground">
                      Tri&aacute;ngulo inferior
                    </td>
                    <td className="py-2 pr-4">Tri&aacute;ngulo</td>
                    <td className="py-2 pr-4">Edad + Per&iacute;odo + Cohorte</td>
                    <td className="py-2">Mixto</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ============================================================
          CUIDADO CON... - Error com&uacute;n
          ============================================================ */}
      <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/10">
        <CardContent className="flex items-start gap-3 pt-5 pb-5">
          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
          <div className="text-sm text-amber-900 dark:text-amber-100">
            <p className="font-semibold">
              Cuidado con confundir las superficies
            </p>
            <p className="mt-1">
              El error m&aacute;s frecuente en los ex&aacute;menes es confundir{" "}
              <strong>Edad-Per&iacute;odo</strong> (cuadrado, transversal) con{" "}
              <strong>Per&iacute;odo-Cohorte</strong> (paralelogramo, longitudinal).
              La clave es fijarse en la <em>forma</em>: si es un cuadrado, fija
              edad y per&iacute;odo (mezcla generaciones). Si es un paralelogramo
              inclinado siguiendo las diagonales, sigue a una misma
              generaci&oacute;n.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ============================================================
          CONEXI&Oacute;N CON EL SIGUIENTE TEMA
          ============================================================ */}
      <Card className="border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/10">
        <CardContent className="pt-5 pb-5 space-y-3">
          <div className="flex items-center gap-2">
            <ArrowRight className="h-5 w-5 text-emerald-500" />
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Lo que has aprendido y lo que viene
            </p>
          </div>
          <div className="text-sm text-emerald-900 dark:text-emerald-100 space-y-2">
            <p>
              <strong>En esta secci&oacute;n has aprendido</strong> a leer y construir
              el diagrama de Lexis: la cuadr&iacute;cula, las l&iacute;neas de vida (escaleras
              mec&aacute;nicas a 45&deg;), los stocks (l&iacute;neas) y los flujos
              (superficies). Tambi&eacute;n has visto las tres superficies principales
              (cuadrado y dos paralelogramos) y c&oacute;mo subdivir el cuadrado en
              tri&aacute;ngulos.
            </p>
            <p>
              <strong>En el siguiente tema</strong> ver&aacute;s c&oacute;mo aplicar todo
              esto a fen&oacute;menos demogr&aacute;ficos concretos:{" "}
              <a
                href="/tema-3/natalidad"
                className="font-medium underline underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-300"
              >
                natalidad y fecundidad
              </a>
              ,{" "}
              <a
                href="/tema-3/migraciones"
                className="font-medium underline underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-300"
              >
                migraciones
              </a>{" "}
              y la ecuaci&oacute;n compensadora. El diagrama de Lexis ser&aacute; tu
              herramienta para clasificar los indicadores que calcular&aacute;s en esos
              ejercicios.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
