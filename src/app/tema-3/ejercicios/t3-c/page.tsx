import { ExerciseCard } from "@/components/exercises/exercise-card";
import type { Exercise } from "@/types/exercise";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRightLeft,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  Calculator,
} from "lucide-react";

const exercises: Exercise[] = [
  {
    id: "1",
    sheet: "T3-C",
    number: 1,
    title: "Saldo migratorio simple",
    tags: ["Saldo migratorio", "Tasa neta de migraci\u00f3n"],
    enunciado:
      "En el a\u00f1o 2024 un municipio registr\u00f3 1.250 inmigraciones y 820 emigraciones. La poblaci\u00f3n media anual fue 24.500 habitantes. Calcular el saldo migratorio y la tasa de migraci\u00f3n neta.",
    hasLexisDiagram: false,
    hasDataTable: false,
  },
  {
    id: "2",
    sheet: "T3-C",
    number: 2,
    title: "Tasas brutas de inmigraci\u00f3n y emigraci\u00f3n",
    tags: ["TBI", "TBE"],
    enunciado:
      "En una provincia hubo 3.600 inmigraciones y 2.400 emigraciones durante el a\u00f1o. La poblaci\u00f3n a mitad de a\u00f1o fue 600.000 habitantes. Calcular las tasas brutas de inmigraci\u00f3n y emigraci\u00f3n.",
    hasLexisDiagram: false,
    hasDataTable: false,
  },
  {
    id: "3",
    sheet: "T3-C",
    number: 3,
    title: "Ecuaci\u00f3n compensadora inversa",
    tags: ["Ecuaci\u00f3n compensadora", "Saldo migratorio intercensal"],
    enunciado:
      "Dos censos muestran que la poblaci\u00f3n de un municipio era 28.400 en 2011 y 29.900 en 2021. Entre censos se registraron 1.200 nacimientos y 1.100 defunciones. Calcular el saldo migratorio neto acumulado.",
    hasLexisDiagram: false,
    hasDataTable: false,
  },
  {
    id: "4",
    sheet: "T3-C",
    number: 4,
    title: "Matriz migratoria 3x3 (origen-destino)",
    tags: ["Matriz de migraci\u00f3n", "Saldo migratorio", "Atracci\u00f3n neta"],
    enunciado:
      "Tres comunidades A, B y C intercambian poblaci\u00f3n en un a\u00f1o. Construir la matriz de migraci\u00f3n, calcular el saldo migratorio neto de cada regi\u00f3n y determinar la regi\u00f3n con mayor capacidad de atracci\u00f3n neta.",
    hasLexisDiagram: false,
    hasDataTable: false,
  },
  {
    id: "5",
    sheet: "T3-C",
    number: 5,
    title: "Saldo migratorio acumulado y tasa media anual",
    tags: ["Saldo migratorio acumulado", "Tasa media anual"],
    enunciado:
      "Un municipio ten\u00eda 52.000 habitantes a 1/01/2015 y 55.200 a 1/01/2020. Se registraron 3.400 nacimientos y 2.600 defunciones. Calcular el saldo migratorio acumulado y la tasa media anual neta de migraci\u00f3n.",
    hasLexisDiagram: false,
    hasDataTable: false,
  },
  {
    id: "6",
    sheet: "T3-C",
    number: 6,
    title: "Tasas medias anuales de inmigraci\u00f3n y emigraci\u00f3n",
    tags: ["TBI media anual", "TBE media anual", "Tasa neta media"],
    enunciado:
      "Una provincia registr\u00f3 entre 2012 y 2016 (4 a\u00f1os) un total acumulado de 18.000 inmigraciones y 10.000 emigraciones. La poblaci\u00f3n media fue 900.000 habitantes. Calcular tasas brutas medias anuales.",
    hasLexisDiagram: false,
    hasDataTable: false,
  },
  {
    id: "7",
    sheet: "T3-C",
    number: 7,
    title: "Saldo intercensal y an\u00e1lisis por cohorte",
    tags: ["Saldo intercensal", "An\u00e1lisis de cohorte", "Tasa neta"],
    enunciado:
      "Entre el censo de 2010 y el de 2020 un \u00e1rea pas\u00f3 de 410.000 a 428.500 habitantes. Calcular el saldo migratorio, la tasa media anual y analizar el saldo migratorio de una cohorte espec\u00edfica.",
    hasLexisDiagram: false,
    hasDataTable: false,
  },
  {
    id: "8",
    sheet: "T3-C",
    number: 8,
    title: "ISM con tasas espec\u00edficas por edad",
    tags: ["Tasa espec\u00edfica de migraci\u00f3n", "ISM", "Grupos quinquenales"],
    enunciado:
      "Datos simplificados de migraciones netas en un a\u00f1o para una regi\u00f3n (grupos quinquenales). Calcular tasas espec\u00edficas y el \u00edndice sint\u00e9tico de movilidad (ISM).",
    hasLexisDiagram: false,
    hasDataTable: true,
    dataTable: {
      headers: ["Grupo de edad", "Poblaci\u00f3n", "Migraci\u00f3n neta"],
      rows: [
        ["15-19", 30000, "+900"],
        ["20-24", 28000, "+1.400"],
        ["25-29", 26000, "+2.300"],
        ["30-34", 24000, "+4.700"],
      ],
    },
  },
];

export default function T3CPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero header */}
      <div className="rounded-xl bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-cyan-950/10 border border-emerald-200/60 dark:border-emerald-800/40 p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/50">
            <ArrowRightLeft className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-emerald-950 dark:text-emerald-100">
                Hoja T3-C: Migraciones (2)
              </h1>
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700">
                8 ejercicios
              </Badge>
            </div>
            <p className="text-emerald-800/80 dark:text-emerald-300/80 text-lg">
              Saldos migratorios, tasas brutas, matrices de migraci&oacute;n,
              ecuaci&oacute;n compensadora, an&aacute;lisis por cohorte e
              &iacute;ndice sint&eacute;tico de movilidad.
            </p>
          </div>
        </div>
      </div>

      {/* Qué vas a aprender */}
      <Card className="border-emerald-200 dark:border-emerald-800/50">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <CardTitle className="text-lg text-emerald-900 dark:text-emerald-100">
              &iquest;Qu&eacute; vas a aprender?
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">
            Dominar matrices migratorias, tasas espec&iacute;ficas e ISM.
            Resolver problemas progresivos desde saldos simples hasta
            an&aacute;lisis complejos por cohorte.
          </CardDescription>
        </CardContent>
      </Card>

      {/* Antes de empezar */}
      <Card className="border-amber-200 dark:border-amber-800/50 bg-amber-50/50 dark:bg-amber-950/20">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <CardTitle className="text-lg text-amber-900 dark:text-amber-100">
              Antes de empezar
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-amber-800 dark:text-amber-200">
            Necesitas dominar la hoja T3-B y la secci&oacute;n de matrices
            migratorias antes de abordar estos ejercicios:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/tema-3/ejercicios/t3-b">
              <Badge
                variant="outline"
                className="cursor-pointer border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/50"
              >
                <BookOpen className="mr-1 h-3 w-3" />
                Hoja T3-B
              </Badge>
            </Link>
            <Link href="/tema-3/migraciones">
              <Badge
                variant="outline"
                className="cursor-pointer border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/50"
              >
                <BookOpen className="mr-1 h-3 w-3" />
                3.2 Movimientos Migratorios
              </Badge>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Exercise cards */}
      <div className="grid gap-4">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            href={`/tema-3/ejercicios/t3-c/${exercise.id}`}
          />
        ))}
      </div>

      {/* Qué sigue */}
      <Card className="border-emerald-200/60 dark:border-emerald-800/40 bg-emerald-50/30 dark:bg-emerald-950/10">
        <CardContent className="flex items-center justify-between p-6">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">
              &iquest;Qu&eacute; sigue?
            </p>
            <p className="font-semibold text-emerald-900 dark:text-emerald-100">
              Calculadoras interactivas
            </p>
            <p className="text-sm text-muted-foreground">
              Practica con las calculadoras de ecuaci&oacute;n compensadora,
              natalidad y migraciones.
            </p>
          </div>
          <Link href="/herramientas/calculadora-compensadora">
            <Badge className="cursor-pointer gap-1 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300 dark:hover:bg-emerald-800">
              <Calculator className="h-3 w-3" />
              Calculadoras
              <ArrowRight className="h-3 w-3" />
            </Badge>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
