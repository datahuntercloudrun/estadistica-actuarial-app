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
    title: "Representaci\u00f3n de 14 conceptos demogr\u00e1ficos",
    description:
      "Representar en el diagrama de Lexis poblaciones, supervivientes, nacimientos y defunciones con distintas restricciones de edad, generaci\u00f3n y per\u00edodo.",
    tags: ["Stocks", "Flujos", "Superficies", "L\u00edneas"],
  },
  {
    id: "2",
    title: "Stocks y flujos con datos de poblaci\u00f3n",
    description:
      "Dada una poblaci\u00f3n con nacimientos, defunciones y supervivientes, clasificar cada dimensi\u00f3n como stock o flujo y representar en Lexis.",
    tags: ["Stock", "Flujo", "Nacimientos", "Defunciones"],
  },
  {
    id: "3",
    title: "Datos censales espa\u00f1oles (edad 75)",
    description:
      "Con datos del Padr\u00f3n Municipal y del MNP sobre varones de 75 a\u00f1os, representar stocks y flujos indicando el tipo de observaci\u00f3n.",
    tags: ["Censo", "Padr\u00f3n", "Tipo observaci\u00f3n"],
  },
  {
    id: "4",
    title: "Lexis con emigraci\u00f3n y c\u00e1lculos num\u00e9ricos",
    description:
      "A partir de un diagrama de Lexis con datos de emigraci\u00f3n de una generaci\u00f3n (sin mortalidad ni inmigraci\u00f3n), calcular stocks y flujos.",
    tags: ["Emigraci\u00f3n", "C\u00e1lculo num\u00e9rico", "Generaci\u00f3n"],
  },
];

export default function T22ListPage() {
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
                Hoja de Problemas T2-2
              </h1>
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 border-purple-300 dark:border-purple-700">
                4 ejercicios
              </Badge>
            </div>
            <p className="text-purple-800/80 dark:text-purple-300/80 text-lg">
              Diagrama de Lexis avanzado: representaciones complejas, datos
              censales reales, tipos de observaci&oacute;n y c&aacute;lculos
              num&eacute;ricos.
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
            Nivel avanzado: datos reales del padr&oacute;n, c&aacute;lculos
            num&eacute;ricos, tipos de observaci&oacute;n y representaciones
            complejas en el diagrama de Lexis.
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
            Necesitas dominar la hoja T2-1 y la secci&oacute;n de teor&iacute;a
            de Lexis antes de abordar estos ejercicios:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/tema-2/ejercicios/t2-1">
              <Badge
                variant="outline"
                className="cursor-pointer border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/50"
              >
                <BookOpen className="mr-1 h-3 w-3" />
                Hoja T2-1
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
            href={`/tema-2/ejercicios/t2-2/${ej.id}`}
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
              Tema 3: Natalidad, Fecundidad y Migraciones
            </p>
            <p className="text-sm text-muted-foreground">
              Indicadores de natalidad, fecundidad y movimientos migratorios con
              datos reales de Espa&ntilde;a.
            </p>
          </div>
          <Link href="/tema-3">
            <Badge className="cursor-pointer gap-1 bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800">
              Ir a Tema 3
              <ArrowRight className="h-3 w-3" />
            </Badge>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
