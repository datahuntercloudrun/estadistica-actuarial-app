import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  ArrowRight,
  Lightbulb,
  BookOpen,
  Database,
  BarChart3,
  Building2,
  Globe,
} from "lucide-react";

/* ---------- datos ---------- */

const secciones = [
  {
    num: 1,
    title: "1.1 Conceptos y Definiciones",
    href: "/tema-1/conceptos",
    description:
      "Qu\u00e9 estudia la demograf\u00eda, concepto de poblaci\u00f3n, grupos demogr\u00e1ficos, stocks y flujos",
  },
  {
    num: 2,
    title: "1.2 Fuentes de Informaci\u00f3n",
    href: "/tema-1/fuentes",
    description:
      "INEbase, Padr\u00f3n Continuo, Censos, fen\u00f3menos demogr\u00e1ficos (migraciones, matrimonios, nacimientos, defunciones)",
  },
];

const conceptosClave = [
  {
    concepto: "Poblaci\u00f3n",
    idea: "Conjunto de individuos vinculados a un territorio, definido por criterios jur\u00eddicos o residenciales.",
  },
  {
    concepto: "Stocks y Flujos",
    idea: "Stocks: poblaci\u00f3n en un instante. Flujos: eventos (nacimientos, defunciones, migraciones) en un per\u00edodo.",
  },
  {
    concepto: "Grupos demogr\u00e1ficos",
    idea: "Clasificaci\u00f3n por edad, sexo, estado civil, nacionalidad u otras caracter\u00edsticas.",
  },
  {
    concepto: "Fuentes estad\u00edsticas",
    idea: "Censos, padrones, registros civiles y encuestas: las herramientas para medir la poblaci\u00f3n.",
  },
  {
    concepto: "Fen\u00f3menos demogr\u00e1ficos",
    idea: "Natalidad, mortalidad, nupcialidad y migraciones: los motores del cambio poblacional.",
  },
  {
    concepto: "INE e INEbase",
    idea: "El Instituto Nacional de Estad\u00edstica y su portal web: la fuente oficial de datos en Espa\u00f1a.",
  },
];

/* ---------- componente ---------- */

export default function Tema1Page() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
      {/* ===== HERO ===== */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-sky-950/30 border border-white/50 dark:border-white/5 p-6 sm:p-8">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-300/20 dark:bg-blue-700/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-indigo-300/20 dark:bg-indigo-700/10 rounded-full blur-3xl" />
        <div className="relative space-y-3">
          <Badge className="bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs backdrop-blur-sm">
            Tema 1 de 3
          </Badge>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-sm shadow-sm">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-blue-300 dark:via-indigo-300 dark:to-sky-300 bg-clip-text text-transparent">
              Introducci&oacute;n a la Demograf&iacute;a
            </h1>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            Conceptos b&aacute;sicos de demograf&iacute;a, tipos de poblaci&oacute;n, grupos demogr&aacute;ficos y fuentes de informaci&oacute;n estad&iacute;stica en Espa&ntilde;a.
          </p>
        </div>
      </div>

      {/* ===== 1. DE QUE TRATA ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-blue-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            1. &iquest;De qu&eacute; trata este tema?
          </h2>
        </div>

        <Card className="bg-blue-50/50 dark:bg-blue-950/10 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 sm:p-5 space-y-3 text-sm sm:text-base">
            <p>
              Antes de calcular tasas de natalidad o dibujar diagramas de Lexis, necesitas entender{" "}
              <strong>qu&eacute; es la demograf&iacute;a</strong> y con qu&eacute; datos trabaja.
              La pregunta central de este tema es:
            </p>
            <p className="text-blue-800 dark:text-blue-200 font-medium text-center text-base sm:text-lg">
              &laquo;&iquest;C&oacute;mo medimos y clasificamos a una poblaci&oacute;n
              para poder estudiar su evoluci&oacute;n?&raquo;
            </p>
            <p>
              Este tema sienta las bases: define los conceptos clave (poblaci&oacute;n, stocks, flujos,
              fen&oacute;menos demogr&aacute;ficos) y presenta las{" "}
              <strong>fuentes de informaci&oacute;n oficiales</strong> del INE que usaremos en
              todos los ejercicios posteriores.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* ===== 2. CONCEPTOS CLAVE ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            2. Conceptos clave
          </h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Estos son los pilares del tema. Los ir&aacute;s profundizando en las p&aacute;ginas de teor&iacute;a,
          pero aqu&iacute; tienes la visi&oacute;n general.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {conceptosClave.map((item) => (
            <Card
              key={item.concepto}
              className="border-blue-200 dark:border-blue-800"
            >
              <CardContent className="p-3 sm:p-4 space-y-2">
                <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm">
                  {item.concepto}
                </p>
                <p className="text-muted-foreground text-sm">{item.idea}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== 3. CONTENIDO DEL TEMA ===== */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Database className="h-5 w-5 text-blue-500" />
          <h2 className="text-base sm:text-lg font-semibold">
            3. Contenido del tema
          </h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Dos bloques de teor&iacute;a que cubren los fundamentos y las fuentes de datos.
        </p>

        <div className="space-y-3">
          {secciones.map((s) => (
            <Link key={s.href} href={s.href} className="group block">
              <div className="relative overflow-hidden rounded-xl border border-blue-200/40 dark:border-blue-800/40 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/5 group-hover:-translate-y-0.5 group-hover:border-blue-300/60 dark:group-hover:border-blue-700/60">
                <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between p-3.5 sm:p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-white text-xs font-bold shadow-sm">
                      {s.num}
                    </div>
                    <div>
                      <span className="font-medium text-sm sm:text-base group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                        {s.title}
                      </span>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {s.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-blue-500 group-hover:translate-x-0.5 shrink-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
