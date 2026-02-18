import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Baby, ArrowRightLeft, ArrowRight, Sparkles, GraduationCap, Calculator, Grid3X3 } from "lucide-react";
import Link from "next/link";

const temas = [
  {
    numero: 1,
    titulo: "Introducci\u00f3n a la Demograf\u00eda",
    pregunta: "\u00bfQu\u00e9 estudia la demograf\u00eda y de d\u00f3nde sacamos los datos?",
    descripcion: "Conceptos b\u00e1sicos de poblaci\u00f3n, grupos demogr\u00e1ficos, fuentes de informaci\u00f3n: INE, Padr\u00f3n, Censo.",
    icon: BookOpen,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    gradientFrom: "from-blue-500/10",
    gradientTo: "to-blue-600/5",
    ejercicios: 0,
    url: "/tema-1",
    temas: ["Poblaci\u00f3n", "Demograf\u00eda", "INE", "Padr\u00f3n", "Censo"],
  },
  {
    numero: 2,
    titulo: "El Tiempo y Diagrama de Lexis",
    pregunta: "\u00bfC\u00f3mo representamos la vida de las personas en un gr\u00e1fico?",
    descripcion: "Tiempo biom\u00e9trico vs f\u00edsico, l\u00edneas de vida, stocks, flujos, superficies y la identidad fundamental.",
    icon: Grid3X3,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    gradientFrom: "from-purple-500/10",
    gradientTo: "to-purple-600/5",
    ejercicios: 8,
    url: "/tema-2",
    temas: ["Lexis", "L\u00edneas de vida", "Stocks", "Flujos", "Superficies"],
  },
  {
    numero: 3,
    titulo: "Natalidad, Fecundidad y Migraciones",
    pregunta: "\u00bfC\u00f3mo medimos si un pa\u00eds crece o decrece?",
    descripcion: "Ecuaci\u00f3n compensadora, TBN, TGF, TEF, ISF, TBR, TNR, saldo migratorio y tasas de migraci\u00f3n.",
    icon: Users,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    gradientFrom: "from-emerald-500/10",
    gradientTo: "to-emerald-600/5",
    ejercicios: 11,
    url: "/tema-3",
    temas: ["TBN", "TGF", "ISF", "TBR", "Migraciones"],
  },
];

const pasos = [
  {
    paso: 1,
    titulo: "Conceptos b\u00e1sicos",
    descripcion: "Qu\u00e9 es la demograf\u00eda, de d\u00f3nde vienen los datos.",
    url: "/tema-1",
    badgeColor: "bg-blue-200 dark:bg-blue-800/50 text-blue-800 dark:text-blue-200",
    borderColor: "border-blue-200 dark:border-blue-700",
    hoverBg: "hover:bg-blue-50/50 dark:hover:bg-blue-950/10",
  },
  {
    paso: 2,
    titulo: "Diagrama de Lexis",
    descripcion: "El mapa que conecta tiempo, edad y generaciones.",
    url: "/tema-2",
    badgeColor: "bg-purple-200 dark:bg-purple-800/50 text-purple-800 dark:text-purple-200",
    borderColor: "border-purple-200 dark:border-purple-700",
    hoverBg: "hover:bg-purple-50/50 dark:hover:bg-purple-950/10",
  },
  {
    paso: 3,
    titulo: "Natalidad",
    descripcion: "Tasas de natalidad, fecundidad e \u00edndices sint\u00e9ticos.",
    url: "/tema-3/natalidad",
    badgeColor: "bg-emerald-200 dark:bg-emerald-800/50 text-emerald-800 dark:text-emerald-200",
    borderColor: "border-emerald-200 dark:border-emerald-700",
    hoverBg: "hover:bg-emerald-50/50 dark:hover:bg-emerald-950/10",
  },
  {
    paso: 4,
    titulo: "Migraciones",
    descripcion: "Saldos, tasas y ecuaci\u00f3n compensadora.",
    url: "/tema-3/migraciones",
    badgeColor: "bg-teal-200 dark:bg-teal-800/50 text-teal-800 dark:text-teal-200",
    borderColor: "border-teal-200 dark:border-teal-700",
    hoverBg: "hover:bg-teal-50/50 dark:hover:bg-teal-950/10",
  },
];

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 dark:from-blue-950/30 dark:via-purple-950/20 dark:to-emerald-950/30 border border-white/50 dark:border-white/5 p-6 sm:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent dark:from-blue-800/10" />
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-300/20 dark:bg-purple-700/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-300/20 dark:bg-emerald-700/10 rounded-full blur-3xl" />
        <div className="relative space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs">
              For Dummies Edition
            </Badge>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-700 via-purple-700 to-emerald-700 dark:from-blue-300 dark:via-purple-300 dark:to-emerald-300 bg-clip-text text-transparent">
            Estad&iacute;stica Actuarial y Demograf&iacute;a
          </h1>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl">
            Todos los ejercicios del curso resueltos paso a paso, explicados como si fuera la primera vez que ves una f&oacute;rmula demogr&aacute;fica.
          </p>
        </div>
      </div>

      {/* Empieza aqu&iacute; */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          <h2 className="font-semibold text-base sm:text-lg">&iquest;Primera vez? Sigue este orden</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {pasos.map((p) => (
            <Link key={p.paso} href={p.url} className="block group">
              <div className={`border ${p.borderColor} rounded-xl p-4 bg-white dark:bg-gray-900/50 ${p.hoverBg} transition-all group-hover:shadow-md group-hover:-translate-y-0.5 h-full`}>
                <Badge className={`${p.badgeColor} text-xs mb-2`}>
                  Paso {p.paso}
                </Badge>
                <p className="font-semibold text-foreground text-sm">{p.titulo}</p>
                <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{p.descripcion}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Roadmap visual */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 text-sm text-muted-foreground py-1">
        <Link href="/tema-1" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
          <BookOpen className="h-4 w-4 text-blue-500" />
          <span className="hidden sm:inline">Conceptos</span>
        </Link>
        <ArrowRight className="h-3 w-3 shrink-0" />
        <Link href="/tema-2" className="flex items-center gap-1 hover:text-purple-500 transition-colors">
          <Grid3X3 className="h-4 w-4 text-purple-500" />
          <span className="hidden sm:inline">Lexis</span>
        </Link>
        <ArrowRight className="h-3 w-3 shrink-0" />
        <Link href="/tema-3/natalidad" className="flex items-center gap-1 hover:text-emerald-500 transition-colors">
          <Baby className="h-4 w-4 text-emerald-500" />
          <span className="hidden sm:inline">Natalidad</span>
        </Link>
        <ArrowRight className="h-3 w-3 shrink-0" />
        <Link href="/tema-3/migraciones" className="flex items-center gap-1 hover:text-teal-500 transition-colors">
          <ArrowRightLeft className="h-4 w-4 text-teal-500" />
          <span className="hidden sm:inline">Migraciones</span>
        </Link>
      </div>

      {/* Cards de temas */}
      <div className="grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {temas.map((tema) => (
          <Link key={tema.numero} href={tema.url} className="group">
            <Card className={`h-full transition-all group-hover:shadow-lg group-hover:-translate-y-1 cursor-pointer border ${tema.borderColor} overflow-hidden`}>
              <div className={`h-1.5 w-full bg-gradient-to-r ${tema.gradientFrom} ${tema.gradientTo}`} />
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl ${tema.bgColor} transition-transform group-hover:scale-110`}>
                    <tema.icon className={`h-5 w-5 ${tema.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {tema.ejercicios > 0 ? `${tema.ejercicios} ejercicios` : "Teor\u00eda"}
                  </Badge>
                </div>
                <CardTitle className="text-lg">Tema {tema.numero}</CardTitle>
                <CardDescription className="font-medium text-foreground/80">
                  {tema.titulo}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-foreground/60 mb-3 italic leading-relaxed">
                  {tema.pregunta}
                </p>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {tema.descripcion}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tema.temas.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Herramientas destacadas */}
      <div className="grid gap-4 md:grid-cols-2">
        <Link href="/lexis" className="block group">
          <Card className="border-purple-200 dark:border-purple-800 transition-all group-hover:shadow-lg group-hover:-translate-y-0.5 cursor-pointer overflow-hidden h-full">
            <div className="h-1 w-full bg-gradient-to-r from-purple-400 to-violet-400 dark:from-purple-600 dark:to-violet-600" />
            <CardContent className="p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 shrink-0 transition-transform group-hover:scale-110">
                  <Grid3X3 className="h-6 w-6 text-purple-500" />
                </div>
                <div className="space-y-1.5">
                  <p className="font-semibold">Diagrama de Lexis Interactivo</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Construye y explora diagramas de Lexis arrastrando l&iacute;neas de vida, superficies y stocks.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/calculadoras" className="block group">
          <Card className="border-orange-200 dark:border-orange-800 transition-all group-hover:shadow-lg group-hover:-translate-y-0.5 cursor-pointer overflow-hidden h-full">
            <div className="h-1 w-full bg-gradient-to-r from-orange-400 to-amber-400 dark:from-orange-600 dark:to-amber-600" />
            <CardContent className="p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 shrink-0 transition-transform group-hover:scale-110">
                  <Calculator className="h-6 w-6 text-orange-500" />
                </div>
                <div className="space-y-1.5">
                  <p className="font-semibold">Calculadoras</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Calcula indicadores demogr&aacute;ficos paso a paso: ecuaci&oacute;n compensadora, natalidad y migraciones.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Sobre esta app */}
      <Card className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/30 border-gray-200 dark:border-gray-700">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-muted-foreground" />
            <CardTitle className="text-lg">Sobre esta aplicaci&oacute;n</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-3">
          <p className="leading-relaxed">
            Esta app resuelve <strong className="text-foreground">todos los ejercicios</strong> de Estad&iacute;stica Actuarial del curso,
            explicados como si fuera la primera vez que ves demograf&iacute;a. Cada ejercicio incluye:
          </p>
          <ul className="list-none space-y-2 pl-0">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-0.5 shrink-0">&#9679;</span>
              <span><strong className="text-foreground">Contexto</strong>: por qu&eacute; este indicador es &uacute;til y qu&eacute; pregunta responde</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5 shrink-0">&#9679;</span>
              <span><strong className="text-foreground">Paso a paso</strong>: cada c&aacute;lculo explicado con la f&oacute;rmula y su sustituci&oacute;n</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-0.5 shrink-0">&#9679;</span>
              <span><strong className="text-foreground">Diagramas de Lexis</strong>: visualiza stocks, flujos y superficies de forma interactiva</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-0.5 shrink-0">&#9679;</span>
              <span><strong className="text-foreground">Gr&aacute;ficos</strong>: curvas de fecundidad, pir&aacute;mides de poblaci&oacute;n y m&aacute;s</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 mt-0.5 shrink-0">&#9679;</span>
              <span><strong className="text-foreground">Calculadoras</strong>: introduce tus datos y obt&eacute;n resultados instant&aacute;neos</span>
            </li>
          </ul>
          <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground/70">
            <span>19 ejercicios resueltos</span>
            <span>&middot;</span>
            <span>3 calculadoras interactivas</span>
            <span>&middot;</span>
            <span>Diagrama de Lexis</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
