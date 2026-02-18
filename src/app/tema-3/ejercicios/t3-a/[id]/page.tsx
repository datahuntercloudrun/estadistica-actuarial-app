import { notFound } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowLeft, ArrowRight, Lightbulb, CheckCircle2 } from "lucide-react";
import { Exercise1 } from "./exercise-1";
import { Exercise2 } from "./exercise-2";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

/* ────────────────────────────────────────────
   Exercise metadata for pedagogical context
   ──────────────────────────────────────────── */
const exerciseMeta: Record<
  string,
  {
    title: string;
    question: string;
    learned: string[];
    prevLabel: string | null;
    prevHref: string | null;
    nextLabel: string | null;
    nextHref: string | null;
  }
> = {
  "1": {
    title: "Ejercicio 1: Indicadores de Natalidad y Fecundidad \u2014 Espa\u00f1a 1999",
    question:
      "Calcular TBN, TGF, TEF por edad, ISF simple e \u00edndice de masculinidad con datos reales de Espa\u00f1a",
    learned: [
      "La TBN usa la poblaci\u00f3n total media como denominador, mientras que la TGF se restringe a mujeres en edad f\u00e9rtil (15-49), dando un indicador m\u00e1s refinado.",
      "El ISF se puede calcular de forma simple (TGF \u00d7 35) o precisa (sumando las TEF \u00d7 amplitud del intervalo); la versi\u00f3n precisa es m\u00e1s fiable cuando hay datos por grupo de edad.",
      "La curva de fecundidad (TEF por edad) tiene forma de campana asim\u00e9trica: el pico en Espa\u00f1a 1999 se sit\u00faa en el grupo 30-34, reflejando el retraso de la maternidad.",
    ],
    prevLabel: null,
    prevHref: null,
    nextLabel: "Ejercicio 2: Indicadores demogr\u00e1ficos \u2014 Espa\u00f1a 2021-2022",
    nextHref: "/tema-3/ejercicios/t3-a/2",
  },
  "2": {
    title: "Ejercicio 2: Indicadores demogr\u00e1ficos \u2014 Espa\u00f1a 2021-2022",
    question:
      "Calcular todos los indicadores demogr\u00e1ficos (natalidad, fecundidad, migraciones) con datos de Espa\u00f1a 2021-2022",
    learned: [
      "La TBR combina fecundidad (ISF) con proporci\u00f3n de nacimientos femeninos (Gender Ratio): si la TBR < 1, cada generaci\u00f3n de mujeres no se reemplaza a s\u00ed misma.",
      "Los indicadores de migraci\u00f3n (TBI, TBE, saldo migratorio, raz\u00f3n de intercambio) se calculan con la misma l\u00f3gica de tasa que la natalidad: flujo dividido entre poblaci\u00f3n media.",
      "Cuando faltan datos directos (ej. defunciones), se puede despejar el saldo vegetativo de la ecuaci\u00f3n compensadora: \u0394P = SV + SM.",
    ],
    prevLabel: "Ejercicio 1: Natalidad y Fecundidad \u2014 Espa\u00f1a 1999",
    prevHref: "/tema-3/ejercicios/t3-a/1",
    nextLabel: null,
    nextHref: null,
  },
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function T3AExercisePage({ params }: PageProps) {
  const { id } = await params;

  if (id !== "1" && id !== "2") {
    notFound();
  }

  const meta = exerciseMeta[id];

  return (
    <div className="max-w-5xl space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/tema-3" className="hover:underline">
          Tema 3
        </Link>
        <span>/</span>
        <Link href="/tema-3/ejercicios/t3-a" className="hover:underline">
          Hoja T3-A
        </Link>
        <span>/</span>
        <span>Ejercicio {id}</span>
      </div>

      {/* Pedagogical context: prerequisite */}
      <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
        <CardContent className="flex items-start gap-3 pt-5">
          <BookOpen className="h-5 w-5 mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" />
          <div className="space-y-1">
            <p className="font-medium text-amber-900 dark:text-amber-100">
              Antes de empezar
            </p>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              Este ejercicio usa f&oacute;rmulas de natalidad y fecundidad. Si a&uacute;n no las
              conoces, revisa primero la{" "}
              <Link
                href="/tema-3/natalidad"
                className="underline font-medium hover:text-amber-950 dark:hover:text-amber-100"
              >
                teor&iacute;a de Natalidad y Fecundidad
              </Link>
              .
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Pedagogical context: what question does this exercise answer */}
      <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
        <CardContent className="flex items-start gap-3 pt-5">
          <Lightbulb className="h-5 w-5 mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
          <div className="space-y-1">
            <p className="font-medium text-blue-900 dark:text-blue-100">
              &iquest;Qu&eacute; pregunta responde este ejercicio?
            </p>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              {meta.question}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Title and badge */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{meta.title}</h1>
        <Badge variant="outline">Hoja T3-A: Natalidad y Fecundidad</Badge>
      </div>

      {/* Exercise content */}
      {id === "1" && <Exercise1 />}
      {id === "2" && <Exercise2 />}

      {/* Pedagogical takeaway: what you learned */}
      {meta.learned.length > 0 && (
        <div className="bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">Lo que has aprendido</p>
              <ul className="space-y-1">
                {meta.learned.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-emerald-700 dark:text-emerald-300 text-sm">
                    <ArrowRight className="w-3 h-3 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Prev / Next navigation with descriptive labels */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t">
        {meta.prevHref && meta.prevLabel ? (
          <Link
            href={meta.prevHref}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            <div className="text-left">
              <span className="block text-xs uppercase tracking-wide">
                Anterior
              </span>
              <span className="font-medium">{meta.prevLabel}</span>
            </div>
          </Link>
        ) : (
          <Link
            href="/tema-3/ejercicios/t3-a"
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            <span className="font-medium">Volver a Hoja T3-A</span>
          </Link>
        )}

        {meta.nextHref && meta.nextLabel ? (
          <Link
            href={meta.nextHref}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors text-right"
          >
            <div>
              <span className="block text-xs uppercase tracking-wide">
                Siguiente
              </span>
              <span className="font-medium">{meta.nextLabel}</span>
            </div>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <Link
            href="/tema-3/ejercicios/t3-b"
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors text-right"
          >
            <div>
              <span className="block text-xs uppercase tracking-wide">
                Siguiente hoja
              </span>
              <span className="font-medium">Hoja T3-B: Migraciones</span>
            </div>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>

      {/* Connection card to T3-B */}
      <Card className="border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-emerald-900 dark:text-emerald-100 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            &iquest;Qu&eacute; viene despu&eacute;s?
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-emerald-800 dark:text-emerald-200 space-y-2">
          <p>
            Una vez que domines los indicadores de natalidad y fecundidad, el siguiente paso es
            entender c&oacute;mo se mueve la poblaci&oacute;n: <strong>migraciones</strong>. En la
            Hoja T3-B calcular&aacute;s tasas de inmigraci&oacute;n, emigraci&oacute;n, saldo
            migratorio y la ecuaci&oacute;n compensadora.
          </p>
          <Link
            href="/tema-3/ejercicios/t3-b"
            className="inline-flex items-center gap-1 font-medium underline hover:text-emerald-950 dark:hover:text-emerald-100"
          >
            Ir a Hoja T3-B: Migraciones
            <ArrowRight className="h-4 w-4" />
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
