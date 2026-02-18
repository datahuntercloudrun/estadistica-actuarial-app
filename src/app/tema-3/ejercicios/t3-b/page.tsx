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
} from "lucide-react";

const exercises: Exercise[] = [
  {
    id: "1",
    sheet: "T3-B",
    number: 1,
    title: "Migraciones en Espa\u00f1a 2000-2004",
    tags: [
      "Saldo migratorio",
      "Tasa neta de migraci\u00f3n",
      "Crecimiento vegetativo",
      "TBN",
    ],
    enunciado:
      "A partir del Padr\u00f3n Municipal de Habitantes y el Movimiento Natural de la Poblaci\u00f3n, calcular el saldo migratorio, la tasa de migraci\u00f3n neta, el crecimiento vegetativo y la TBN para el quinquenio 2000-2004 y para cada per\u00edodo anual.",
    hasLexisDiagram: false,
    hasDataTable: true,
    dataTable: {
      headers: ["A\u00f1o", "Poblaci\u00f3n a 01/01", "Defunciones", "Nacimientos"],
      rows: [
        ["2005", 43296335, "", ""],
        ["2004", 42547454, 371934, 454591],
        ["2003", 41827836, 384828, 441881],
        ["2002", 41035271, 368618, 418846],
        ["2001", 40665545, 360131, 406380],
        ["2000", 40470182, 360391, 397632],
      ],
    },
  },
];

export default function T3BPage() {
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
                Hoja T3-B: Migraciones
              </h1>
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700">
                1 ejercicio
              </Badge>
            </div>
            <p className="text-emerald-800/80 dark:text-emerald-300/80 text-lg">
              Ejercicio sobre migraciones en Espa&ntilde;a durante el
              per&iacute;odo 2000-2004. C&aacute;lculo del saldo migratorio,
              tasas de migraci&oacute;n neta, crecimiento vegetativo y tasa bruta
              de natalidad.
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
            Aplicar la ecuaci&oacute;n compensadora a datos reales para estimar
            saldos migratorios. Calcular tasas de migraci&oacute;n neta y
            crecimiento vegetativo con datos del Padr&oacute;n Municipal.
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
            Revisa la teor&iacute;a de movimientos migratorios y la
            ecuaci&oacute;n compensadora antes de abordar este ejercicio:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
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
            href={`/tema-3/ejercicios/t3-b/${exercise.id}`}
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
              Hoja T3-C: Migraciones (2)
            </p>
            <p className="text-sm text-muted-foreground">
              Dominar matrices migratorias, tasas espec&iacute;ficas e ISM con 8
              ejercicios adicionales.
            </p>
          </div>
          <Link href="/tema-3/ejercicios/t3-c">
            <Badge className="cursor-pointer gap-1 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300 dark:hover:bg-emerald-800">
              Ir a T3-C
              <ArrowRight className="h-3 w-3" />
            </Badge>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
