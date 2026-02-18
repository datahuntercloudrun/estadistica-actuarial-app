import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Baby,
  ArrowRight,
  Lightbulb,
  BookOpen,
  ArrowRightLeft,
  BarChart3,
  ListChecks,
  TrendingUp,
} from "lucide-react";

/* ---------- datos ---------- */

const secciones = [
  {
    num: 1,
    title: "3.1 Natalidad y Fecundidad",
    href: "/tema-3/natalidad",
    description:
      "Ecuaci\u00f3n compensadora, tasas brutas, TBN, TGF, TEFx, ISF, TBR, TNR, \u00edndice de masculinidad",
  },
  {
    num: 2,
    title: "3.2 Movimientos Migratorios",
    href: "/tema-3/migraciones",
    description:
      "Saldo migratorio, TBI, TBE, tasa neta de migraci\u00f3n, raz\u00f3n de intercambio, ISM",
  },
];

const ejercicios = [
  {
    num: 1,
    title: "T3-A: Natalidad",
    href: "/tema-3/ejercicios/t3-a",
    count: "2 ejercicios",
    description: "C\u00e1lculos completos con datos de Espa\u00f1a",
  },
  {
    num: 2,
    title: "T3-B: Migraciones",
    href: "/tema-3/ejercicios/t3-b",
    count: "1 ejercicio",
    description: "Espa\u00f1a 2000-2004: saldo migratorio y tasas",
  },
  {
    num: 3,
    title: "T3-C: Migraciones 2",
    href: "/tema-3/ejercicios/t3-c",
    count: "8 ejercicios",
    description: "Matrices, tasas espec\u00edficas, ISM",
  },
];

const conceptosClave = [
  {
    concepto: "Ecuaci\u00f3n compensadora",
    idea: "La f\u00f3rmula que relaciona poblaci\u00f3n inicial, nacimientos, defunciones y migraciones con la poblaci\u00f3n final.",
  },
  {
    concepto: "Tasa Bruta de Natalidad (TBN)",
    idea: "Nacimientos por cada 1.000 habitantes. El indicador m\u00e1s b\u00e1sico de natalidad.",
  },
  {
    concepto: "Tasa Espec\u00edfica de Fecundidad (TEF)",
    idea: "Nacimientos de madres de edad x por cada 1.000 mujeres de esa edad. Permite construir la curva de fecundidad.",
  },
  {
    concepto: "\u00cdndice Sint\u00e9tico de Fecundidad (ISF)",
    idea: "N\u00famero medio de hijos por mujer si mantuviera las tasas actuales toda su vida f\u00e9rtil.",
  },
  {
    concepto: "Saldo migratorio",
    idea: "Diferencia entre inmigraciones y emigraciones. Positivo: entran m\u00e1s de los que salen.",
  },
  {
    concepto: "\u00cdndice Sint\u00e9tico de Migraci\u00f3n (ISM)",
    idea: "Suma de tasas espec\u00edficas de migraci\u00f3n por edad. An\u00e1logo al ISF pero para migraciones.",
  },
];

/* ---------- componente ---------- */

export default function Tema3Page() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
      {/* ===== HERO ===== */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-cyan-950/30 border border-white/50 dark:border-white/5 p-6 sm:p-8">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-300/20 dark:bg-emerald-700/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-teal-300/20 dark:bg-teal-700/10 rounded-full blur-3xl" />
        <div className="relative space-y-3">
          <Badge className="bg-emerald-100/80 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs backdrop-blur-sm">
            Tema 3 de 3
          </Badge>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-sm shadow-sm">
              <Baby className="h-6 w-6 text-emerald-500" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-300 dark:via-teal-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Natalidad, Fecundidad y Migraciones
            </h1>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            Indicadores de natalidad, fecundidad y migraciones. Ecuaci&oacute;n compensadora y medidas de crecimiento poblacional.
          </p>
        </div>
      </div>

      {/* ===== 1. DE QUE TRATA ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-emerald-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            1. &iquest;De qu&eacute; trata este tema?
          </h2>
        </div>

        <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
          <CardContent className="p-4 sm:p-5 space-y-3 text-sm sm:text-base">
            <p>
              Ya sabes qu&eacute; es la demograf&iacute;a y c&oacute;mo representar el tiempo con Lexis.
              Ahora toca <strong>medir lo que pasa</strong>: &iquest;cu&aacute;ntos ni&ntilde;os nacen?,
              &iquest;cu&aacute;nta gente emigra?, &iquest;la poblaci&oacute;n crece o decrece?
              La pregunta central es:
            </p>
            <p className="text-emerald-800 dark:text-emerald-200 font-medium text-center text-base sm:text-lg">
              &laquo;&iquest;C&oacute;mo calculamos y comparamos la natalidad, la fecundidad
              y los movimientos migratorios de una poblaci&oacute;n?&raquo;
            </p>
            <p>
              Este tema introduce la <strong>ecuaci&oacute;n compensadora</strong> (la identidad
              contable de la demograf&iacute;a) y un arsenal de tasas e &iacute;ndices que permiten
              comparar pa&iacute;ses, regiones y &eacute;pocas: TBN, TGF, TEF, ISF, TBR para
              natalidad; y TBI, TBE, saldo migratorio e ISM para migraciones.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* ===== 2. CONCEPTOS CLAVE ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-emerald-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            2. Conceptos clave
          </h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Los indicadores fundamentales del tema. Los ir&aacute;s dominando al resolver los
          ejercicios, pero aqu&iacute; tienes el mapa completo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {conceptosClave.map((item) => (
            <Card
              key={item.concepto}
              className="border-emerald-200 dark:border-emerald-800"
            >
              <CardContent className="p-3 sm:p-4 space-y-2">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200 text-sm">
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
          <TrendingUp className="h-5 w-5 text-emerald-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            3. Teor&iacute;a
          </h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Dos bloques: natalidad y fecundidad por un lado, y movimientos migratorios por otro.
        </p>

        <div className="space-y-3">
          {secciones.map((s) => (
            <Link key={s.href} href={s.href} className="group block">
              <div className="relative overflow-hidden rounded-xl border border-emerald-200/40 dark:border-emerald-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/5 group-hover:-translate-y-0.5 group-hover:border-emerald-300/60 dark:group-hover:border-emerald-700/60">
                <div className="h-0.5 w-full bg-gradient-to-r from-emerald-400 to-teal-400 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between p-3.5 sm:p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-white text-xs font-bold shadow-sm">
                      {s.num}
                    </div>
                    <div>
                      <span className="font-medium text-sm sm:text-base group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                        {s.title}
                      </span>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {s.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-emerald-500 group-hover:translate-x-0.5 shrink-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== 4. EJERCICIOS RESUELTOS ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <ListChecks className="h-5 w-5 text-emerald-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            4. Ejercicios resueltos
          </h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Tres hojas de ejercicios resueltos paso a paso con datos reales de Espa&ntilde;a.
        </p>

        <div className="space-y-3">
          {ejercicios.map((ej) => (
            <Link key={ej.href} href={ej.href} className="group block">
              <div className="relative overflow-hidden rounded-xl border border-emerald-200/40 dark:border-emerald-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/5 group-hover:-translate-y-0.5 group-hover:border-emerald-300/60 dark:group-hover:border-emerald-700/60">
                <div className="h-0.5 w-full bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between p-3.5 sm:p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-white text-xs font-bold shadow-sm">
                      {ej.num}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm sm:text-base group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
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
                  <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-emerald-500 group-hover:translate-x-0.5 shrink-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
