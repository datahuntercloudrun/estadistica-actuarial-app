import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ExerciseLayoutProps {
  title: string;
  enunciado: ReactNode;
  solution: ReactNode;
  tema?: number;
  exerciseNumber?: number | string;
  difficulty?: "Bajo" | "Bajo-Medio" | "Medio" | "Medio-Alto" | "Alto";
  category?: string;
  prevUrl?: string;
  nextUrl?: string;
}

const difficultyColors: Record<string, string> = {
  Bajo: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  "Bajo-Medio": "bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300",
  Medio: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "Medio-Alto": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  Alto: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
};

const temaColors: Record<number, string> = {
  1: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  2: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  3: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
};

export function ExerciseLayout({
  title,
  enunciado,
  solution,
  tema,
  exerciseNumber,
  difficulty,
  category,
  prevUrl,
  nextUrl,
}: ExerciseLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Badges */}
      {(tema || difficulty || category) && (
        <div className="flex flex-wrap items-center gap-2">
          {tema && (
            <Badge className={temaColors[tema] || "bg-gray-100 text-gray-800"}>
              Tema {tema}
            </Badge>
          )}
          {difficulty && (
            <Badge className={difficultyColors[difficulty]}>
              {difficulty}
            </Badge>
          )}
          {category && (
            <Badge variant="outline">{category}</Badge>
          )}
        </div>
      )}

      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
        {exerciseNumber && `Ejercicio ${exerciseNumber}: `}{title}
      </h1>

      {/* Enunciado */}
      <Card className="border-2 border-primary/20 bg-primary/5 dark:bg-primary/5">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Enunciado</CardTitle>
        </CardHeader>
        <CardContent className="text-sm sm:text-base leading-relaxed">
          {enunciado}
        </CardContent>
      </Card>

      {/* Resolucion */}
      <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
        Resoluci&oacute;n paso a paso
      </h2>

      {solution}

      {/* Navegacion */}
      {(prevUrl || nextUrl) && (
        <div className="flex items-center justify-between pt-4 border-t">
          {prevUrl ? (
            <Button variant="outline" asChild>
              <Link href={prevUrl}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Anterior
              </Link>
            </Button>
          ) : (
            <div />
          )}
          {nextUrl ? (
            <Button variant="outline" asChild>
              <Link href={nextUrl}>
                Siguiente
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          ) : (
            <div />
          )}
        </div>
      )}
    </div>
  );
}
