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
  Grid3X3,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  BookOpen,
} from "lucide-react";

const ejercicios = [
  {
    id: "1",
    title: "Interpretaci\u00f3n de l\u00edneas y \u00e1reas en Lexis",
    description:
      "Dado un diagrama de Lexis con el fen\u00f3meno de mortalidad, identificar qu\u00e9 representan las l\u00edneas y \u00e1reas se\u00f1aladas (a, b, c, d).",
    tags: ["Superficies", "Stocks", "Mortalidad"],
  },
  {
    id: "2",
    title: "Representaci\u00f3n de stocks y flujos",
    description:
      "Representar 6 conceptos demogr\u00e1ficos sobre el diagrama de Lexis: efectivos, nacimientos, supervivientes y defunciones de distintas generaciones.",
    tags: ["Stocks", "Flujos", "Generaciones"],
  },
  {
    id: "3",
    title: "Construcci\u00f3n de diagrama con datos reales",
    description:
      "A partir de datos de nacimientos (1996-2000) y defunciones por a\u00f1o de nacimiento, edad y a\u00f1o de defunci\u00f3n, construir un diagrama de Lexis completo.",
    tags: ["Nacimientos", "Defunciones", "C\u00e1lculo"],
  },
  {
    id: "4",
    title: "Clasificaci\u00f3n de indicadores demogr\u00e1ficos",
    description:
      "Clasificar 19 indicadores demogr\u00e1ficos (A-S) como raz\u00f3n, tasa, proporci\u00f3n o probabilidad.",
    tags: ["Razones", "Tasas", "Proporciones", "Probabilidades"],
  },
];

export default function T21ListPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero header */}
      <div className="rounded-xl bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 dark:from-purple-950/30 dark:via-violet-950/20 dark:to-fuchsia-950/10 border border-purple-200/60 dark:border-purple-800/40 p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-900/50">
            <Grid3X3 className="h-7 w-7 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-purple-950 dark:text-purple-100">
                Hoja de Problemas T2-1
              </h1>
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 border-purple-300 dark:border-purple-700">
                4 ejercicios
              </Badge>
            </div>
            <p className="text-purple-800/80 dark:text-purple-300/80 text-lg">
              Diagrama de Lexis: conceptos b&aacute;sicos, representaci&oacute;n
              de stocks y flujos, y clasificaci&oacute;n de indicadores
              demogr&aacute;ficos.
            </p>
          </div>
        </div>
      </div>

      {/* Qué vas a aprender */}
      <Card className="border-purple-200 dark:border-purple-800/50">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <CardTitle className="text-lg text-purple-900 dark:text-purple-100">
              &iquest;Qu&eacute; vas a aprender?
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">
            Interpretar y construir diagramas de Lexis. Identificar superficies,
            stocks y flujos. Clasificar indicadores demogr&aacute;ficos seg&uacute;n
            su naturaleza matem&aacute;tica.
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
            Aseg&uacute;rate de haber le&iacute;do la teor&iacute;a antes de
            abordar los ejercicios:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/tema-2/conceptos">
              <Badge
                variant="outline"
                className="cursor-pointer border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/50"
              >
                <BookOpen className="mr-1 h-3 w-3" />
                2.1 Conceptos b&aacute;sicos
              </Badge>
            </Link>
            <Link href="/tema-2/lexis">
              <Badge
                variant="outline"
                className="cursor-pointer border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/50"
              >
                <BookOpen className="mr-1 h-3 w-3" />
                2.2 Diagrama de Lexis
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
            href={`/tema-2/ejercicios/t2-1/${ej.id}`}
            className="group block"
          >
            <Card className="overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <div className="h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500" />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-violet-600 text-sm font-bold text-white">
                    {ej.id}
                  </span>
                  <CardTitle className="text-base flex-1">{ej.title}</CardTitle>
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{ej.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {ej.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Qué sigue */}
      <Card className="border-purple-200/60 dark:border-purple-800/40 bg-purple-50/30 dark:bg-purple-950/10">
        <CardContent className="flex items-center justify-between p-6">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">
              &iquest;Qu&eacute; sigue?
            </p>
            <p className="font-semibold text-purple-900 dark:text-purple-100">
              Hoja T2-2: Lexis avanzado
            </p>
            <p className="text-sm text-muted-foreground">
              Datos reales del padr&oacute;n, c&aacute;lculos num&eacute;ricos y
              tipos de observaci&oacute;n.
            </p>
          </div>
          <Link href="/tema-2/ejercicios/t2-2">
            <Badge className="cursor-pointer gap-1 bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800">
              Ir a T2-2
              <ArrowRight className="h-3 w-3" />
            </Badge>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
