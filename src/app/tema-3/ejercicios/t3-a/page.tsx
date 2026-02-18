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
  Baby,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  BookOpen,
} from "lucide-react";

const ejercicios = [
  {
    id: "1",
    número: 1,
    title: "Indicadores de Natalidad y Fecundidad - España 1999",
    description:
      "Cálculo de TBN, TGF, TEF por edad y sexo, ISF y TBR a partir de datos de nacimientos y población residente en España en 1999.",
    tags: ["TBN", "TGF", "TEF", "ISF", "TBR", "Gender Ratio"],
    apartados: "a - e",
  },
  {
    id: "2",
    número: 2,
    title: "Indicadores demográficos - España 2021-2022",
    description:
      "Cálculo de múltiples indicadores de natalidad, fecundidad y migraciones con datos recientes de España: TBN, TGF, ISF, TBR, TEF masculina, índice de masculinidad, TBI, TBE, saldo migratorio y más.",
    tags: [
      "TBN",
      "TGF",
      "ISF",
      "TBR",
      "TBI",
      "TBE",
      "Saldo migratorio",
      "Masculinidad",
    ],
    apartados: "f - r",
  },
];

export default function T3APage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero header */}
      <div className="rounded-xl bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-cyan-950/10 border border-emerald-200/60 dark:border-emerald-800/40 p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/50">
            <Baby className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-emerald-950 dark:text-emerald-100">
                Hoja T3-A: Natalidad y Fecundidad
              </h1>
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700">
                2 ejercicios
              </Badge>
            </div>
            <p className="text-emerald-800/80 dark:text-emerald-300/80 text-lg">
              Ejercicios de c&aacute;lculo de indicadores de natalidad,
              fecundidad y migraciones con datos reales de Espa&ntilde;a.
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
            Calcular todos los indicadores de natalidad y fecundidad con datos
            reales de Espa&ntilde;a: TBN, TGF, TEF por edad y sexo, ISF, TBR e
            &iacute;ndice de masculinidad al nacimiento.
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
            Revisa la teor&iacute;a de natalidad y fecundidad antes de abordar
            estos ejercicios:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/tema-3/natalidad">
              <Badge
                variant="outline"
                className="cursor-pointer border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/50"
              >
                <BookOpen className="mr-1 h-3 w-3" />
                3.1 Natalidad y Fecundidad
              </Badge>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Exercise cards */}
      <div className="grid gap-4">
        {ejercicios.map((ej) => (
          <Link
            key={ej.id}
            href={`/tema-3/ejercicios/t3-a/${ej.id}`}
            className="group block"
          >
            <Card className="overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white">
                    {ej.número}
                  </span>
                  <div className="flex-1 space-y-1">
                    <CardTitle className="text-base">{ej.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      Apartados {ej.apartados}
                    </Badge>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {ej.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardDescription>{ej.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
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
              Hoja T3-B: Migraciones
            </p>
            <p className="text-sm text-muted-foreground">
              Aplicar la ecuaci&oacute;n compensadora a datos reales para estimar
              saldos migratorios.
            </p>
          </div>
          <Link href="/tema-3/ejercicios/t3-b">
            <Badge className="cursor-pointer gap-1 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300 dark:hover:bg-emerald-800">
              Ir a T3-B
              <ArrowRight className="h-3 w-3" />
            </Badge>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
