import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Grid3X3,
  ArrowRight,
  Lightbulb,
  BookOpen,
  PenTool,
  Clock,
  BarChart3,
  ListChecks,
} from "lucide-react";

/* ---------- datos ---------- */

const secciones = [
  {
    num: 1,
    title: "2.1 Conceptos y Definiciones",
    href: "/tema-2/conceptos",
    description:
      "Tiempo biom\u00e9trico y f\u00edsico, tiempo cronol\u00f3gico, duraci\u00f3n, cohortes, generaciones, l\u00edneas de vida, identidad fundamental",
  },
  {
    num: 2,
    title: "2.2 El Diagrama de Lexis",
    href: "/tema-2/diagrama-lexis",
    description:
      "Cuadr\u00edcula edad-calendario, l\u00edneas de vida, stocks (l\u00edneas), flujos (superficies): edad-per\u00edodo, per\u00edodo-cohorte, cohorte-edad",
  },
];

const ejercicios = [
  {
    num: 1,
    title: "Hoja T2-1: Lexis B\u00e1sico",
    href: "/tema-2/ejercicios/t2-1",
    count: "4 ejercicios",
    description: "Interpretar l\u00edneas y \u00e1reas, representar eventos, construir diagramas",
  },
  {
    num: 2,
    title: "Hoja T2-2: Lexis Avanzado",
    href: "/tema-2/ejercicios/t2-2",
    count: "4 ejercicios",
    description: "Poblaciones, flujos y stocks num\u00e9ricos, datos del padr\u00f3n, emigraci\u00f3n",
  },
];

const conceptosClave = [
  {
    concepto: "Tiempo biom\u00e9trico",
    idea: "La edad exacta de un individuo, medida desde su nacimiento con precisi\u00f3n continua.",
  },
  {
    concepto: "Tiempo cronol\u00f3gico",
    idea: "La fecha de calendario (d\u00eda, mes, a\u00f1o) en que ocurre un evento demogr\u00e1fico.",
  },
  {
    concepto: "L\u00ednea de vida",
    idea: "Segmento a 45\u00b0 en el diagrama de Lexis que representa la trayectoria de un individuo.",
  },
  {
    concepto: "Cohorte y generaci\u00f3n",
    idea: "Grupo de individuos que comparten un evento en el mismo per\u00edodo (nacer, casarse, etc.).",
  },
  {
    concepto: "Stocks y flujos",
    idea: "Stocks: poblaci\u00f3n en un instante (l\u00edneas en Lexis). Flujos: eventos en un per\u00edodo (superficies).",
  },
  {
    concepto: "Superficies de Lexis",
    idea: "Regiones del diagrama donde se cuentan eventos: edad-per\u00edodo, per\u00edodo-cohorte o cohorte-edad.",
  },
];

/* ---------- componente ---------- */

export default function Tema2Page() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
      {/* ===== HERO ===== */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 dark:from-purple-950/30 dark:via-violet-950/20 dark:to-fuchsia-950/30 border border-white/50 dark:border-white/5 p-6 sm:p-8">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-300/20 dark:bg-purple-700/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-violet-300/20 dark:bg-violet-700/10 rounded-full blur-3xl" />
        <div className="relative space-y-3">
          <Badge className="bg-purple-100/80 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs backdrop-blur-sm">
            Tema 2 de 3
          </Badge>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-sm shadow-sm">
              <Grid3X3 className="h-6 w-6 text-purple-500" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 dark:from-purple-300 dark:via-violet-300 dark:to-fuchsia-300 bg-clip-text text-transparent">
              El Tiempo y Diagrama de Lexis
            </h1>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            El tratamiento del tiempo en demograf&iacute;a y la herramienta visual fundamental: el Diagrama de Lexis.
          </p>
        </div>
      </div>

      {/* ===== 1. DE QUE TRATA ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-purple-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            1. &iquest;De qu&eacute; trata este tema?
          </h2>
        </div>

        <Card className="bg-purple-50/50 dark:bg-purple-950/10 border-purple-200 dark:border-purple-800">
          <CardContent className="p-4 sm:p-5 space-y-3 text-sm sm:text-base">
            <p>
              En demograf&iacute;a, el tiempo tiene <strong>dos dimensiones</strong>: la edad de las
              personas (tiempo biom&eacute;trico) y la fecha del calendario (tiempo cronol&oacute;gico).
              La pregunta central es:
            </p>
            <p className="text-purple-800 dark:text-purple-200 font-medium text-center text-base sm:text-lg">
              &laquo;&iquest;C&oacute;mo representamos gr&aacute;ficamente la relaci&oacute;n
              entre edad, fecha y generaci&oacute;n de una poblaci&oacute;n?&raquo;
            </p>
            <p>
              La respuesta es el <strong>Diagrama de Lexis</strong>: una cuadr&iacute;cula donde el eje
              X es el a&ntilde;o calendario, el eje Y es la edad, y cada persona es una l&iacute;nea a
              45&deg;. Con &eacute;l podemos localizar y contar cualquier evento demogr&aacute;fico
              (nacimientos, defunciones, migraciones) seg&uacute;n edad, per&iacute;odo y cohorte.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* ===== 2. CONCEPTOS CLAVE ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-purple-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            2. Conceptos clave
          </h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Los pilares de este tema. Los dominar&aacute;s al resolver los ejercicios, pero
          aqu&iacute; tienes el mapa completo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {conceptosClave.map((item) => (
            <Card
              key={item.concepto}
              className="border-purple-200 dark:border-purple-800"
            >
              <CardContent className="p-3 sm:p-4 space-y-2">
                <p className="font-semibold text-purple-800 dark:text-purple-200 text-sm">
                  {item.concepto}
                </p>
                <p className="text-muted-foreground text-sm">{item.idea}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== 3. TEORIA ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <PenTool className="h-5 w-5 text-purple-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            3. Teor&iacute;a
          </h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Dos bloques de teor&iacute;a: primero los conceptos temporales y luego el diagrama en s&iacute;.
        </p>

        <div className="space-y-3">
          {secciones.map((s) => (
            <Link key={s.href} href={s.href} className="group block">
              <div className="relative overflow-hidden rounded-xl border border-purple-200/40 dark:border-purple-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/5 group-hover:-translate-y-0.5 group-hover:border-purple-300/60 dark:group-hover:border-purple-700/60">
                <div className="h-0.5 w-full bg-gradient-to-r from-purple-400 to-violet-400 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between p-3.5 sm:p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 text-white text-xs font-bold shadow-sm">
                      {s.num}
                    </div>
                    <div>
                      <span className="font-medium text-sm sm:text-base group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                        {s.title}
                      </span>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {s.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-purple-500 group-hover:translate-x-0.5 shrink-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== 4. EJERCICIOS RESUELTOS ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <ListChecks className="h-5 w-5 text-purple-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            4. Ejercicios resueltos
          </h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Cada hoja contiene ejercicios resueltos paso a paso con diagramas de Lexis interactivos.
        </p>

        <div className="space-y-3">
          {ejercicios.map((ej) => (
            <Link key={ej.href} href={ej.href} className="group block">
              <div className="relative overflow-hidden rounded-xl border border-purple-200/40 dark:border-purple-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/5 group-hover:-translate-y-0.5 group-hover:border-purple-300/60 dark:group-hover:border-purple-700/60">
                <div className="h-0.5 w-full bg-gradient-to-r from-purple-400 to-fuchsia-400 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between p-3.5 sm:p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-500 text-white text-xs font-bold shadow-sm">
                      {ej.num}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm sm:text-base group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                          {ej.title}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {ej.count}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {ej.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-purple-500 group-hover:translate-x-0.5 shrink-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
