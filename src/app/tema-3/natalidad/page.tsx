import { FormulaDisplay } from "@/components/theory/formula-display";
import { FormulaCard } from "@/components/theory/formula-card";
import { ConceptCard } from "@/components/theory/concept-card";
import { DefinitionBlock } from "@/components/theory/definition-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Baby,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  ArrowRight,
  Thermometer,
  Eye,
  Scale,
  Heart,
  TrendingUp,
  Link2,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function NatalidadPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
      {/* ===== HERO HEADER ===== */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-cyan-950/30 border border-white/50 dark:border-white/5 p-6 sm:p-8">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-300/20 dark:bg-emerald-700/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-teal-300/20 dark:bg-teal-700/10 rounded-full blur-3xl" />
        <div className="relative space-y-3">
          <Badge className="bg-emerald-100/80 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs backdrop-blur-sm">
            Tema 3 &mdash; Secci&oacute;n 1 de 2
          </Badge>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-sm shadow-sm">
              <Baby className="h-6 w-6 text-emerald-500" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-300 dark:via-teal-300 dark:to-cyan-300 bg-clip-text text-transparent">
              3.1 Natalidad y Fecundidad
            </h1>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            El nacimiento es un suceso demogr&aacute;fico con doble imputaci&oacute;n: al propio nacido o a la madre.
            En el an&aacute;lisis demogr&aacute;fico, el flujo de nacimientos define dos fen&oacute;menos
            distintos &mdash; la <strong>natalidad</strong> y la <strong>fecundidad</strong> &mdash;
            que constituyen uno de los tres componentes fundamentales del crecimiento de una poblaci&oacute;n.
          </p>
        </div>
      </div>

      {/* ===== ANTES DE EMPEZAR ===== */}
      <Card className="bg-amber-50/50 dark:bg-amber-950/10 border-amber-200 dark:border-amber-800">
        <CardContent className="p-4 text-sm space-y-2">
          <div className="flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-200">
            <BookOpen className="h-4 w-4" />
            Antes de empezar
          </div>
          <p className="text-amber-900 dark:text-amber-100">
            Esta secci&oacute;n asume que ya conoces los conceptos b&aacute;sicos de demograf&iacute;a
            y el diagrama de Lexis. Si a&uacute;n no los has visto, rev&iacute;salos primero:
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            <Link href="/tema-1/conceptos">
              <Badge variant="outline" className="cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-900/30 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300">
                Tema 1: Conceptos b&aacute;sicos <ChevronRight className="h-3 w-3 inline" />
              </Badge>
            </Link>
            <Link href="/tema-2/conceptos">
              <Badge variant="outline" className="cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-900/30 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300">
                Tema 2: Tiempo y Lexis <ChevronRight className="h-3 w-3 inline" />
              </Badge>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* ===== PREGUNTA CENTRAL ===== */}
      <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
        <CardContent className="p-4 text-sm space-y-3">
          <div className="flex items-center gap-2 font-semibold text-emerald-800 dark:text-emerald-200">
            <Lightbulb className="h-4 w-4" />
            &iquest;Qu&eacute; pregunta responde esta secci&oacute;n?
          </div>
          <p className="text-center font-semibold text-emerald-800 dark:text-emerald-200 text-base">
            &iquest;Cu&aacute;ntos hijos tienen las mujeres de un pa&iacute;s y c&oacute;mo
            medimos si son suficientes para mantener la poblaci&oacute;n?
          </p>
          <p className="text-emerald-900 dark:text-emerald-100">
            Piensa en un pa&iacute;s como en una empresa: necesitas saber si est&aacute;
            &ldquo;contratando&rdquo; (nacimientos) al ritmo suficiente para reemplazar a quienes
            se &ldquo;jubilan&rdquo; (defunciones). Las herramientas de esta secci&oacute;n te
            permiten medir eso con precisi&oacute;n creciente, desde el term&oacute;metro m&aacute;s
            b&aacute;sico (TBN) hasta el m&aacute;s sofisticado (TNR).
          </p>
        </CardContent>
      </Card>

      {/* ===== CONCEPTOS BASICOS ===== */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Eye className="h-5 w-5 text-emerald-500" />
          <h2 className="text-2xl font-semibold">Conceptos b&aacute;sicos</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <DefinitionBlock term="Natalidad">
            <p>
              Mide la frecuencia con que se produce el suceso nacimiento en el <em>conjunto</em> de
              una poblaci&oacute;n. Es un concepto adecuado para hacer valoraciones sobre el crecimiento y
              sobre la din&aacute;mica de la estructura por edad y sexo.
            </p>
          </DefinitionBlock>

          <DefinitionBlock term="Fecundidad">
            <p>
              Mide la frecuencia del suceso nacimiento en relaci&oacute;n con la poblaci&oacute;n susceptible de
              protagonizarlo, es decir, las mujeres en <strong>edad f&eacute;rtil</strong> (poblaci&oacute;n de
              riesgo). Es el enfoque m&aacute;s adecuado para analizar el comportamiento reproductivo.
            </p>
          </DefinitionBlock>
        </div>

        {/* --- Cuidado con... --- */}
        <Card className="bg-amber-50/50 dark:bg-amber-950/10 border-amber-200 dark:border-amber-800">
          <CardContent className="p-4 text-sm space-y-2">
            <div className="flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-200">
              <AlertTriangle className="h-4 w-4" />
              Cuidado con...
            </div>
            <p className="text-amber-900 dark:text-amber-100">
              No confundas <strong>fertilidad</strong> (capacidad biol&oacute;gica para tener hijos)
              con <strong>fecundidad</strong> (hijos realmente tenidos). Ni <strong>natalidad</strong>{" "}
              (respecto a toda la poblaci&oacute;n) con <strong>fecundidad</strong> (respecto a
              mujeres en edad f&eacute;rtil).
            </p>
          </CardContent>
        </Card>

        <ConceptCard title="Definiciones clave">
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Edad f&eacute;rtil:</strong> Per&iacute;odo de tiempo en el que una mujer es f&eacute;rtil. Va desde
              la menarquia hasta la menopausia (15-49 a&ntilde;os a efectos pr&aacute;cticos).
            </li>
            <li>
              <strong>Fertilidad:</strong> Capacidad biol&oacute;gica para tener hijos.
            </li>
            <li>
              <strong>Fecundidad:</strong> N&uacute;mero de nacidos entre el subconjunto de mujeres en edad
              f&eacute;rtil.
            </li>
            <li>
              <strong>Natalidad:</strong> N&uacute;mero de nacimientos entre el total de la poblaci&oacute;n.
            </li>
            <li>
              <strong>Reproducci&oacute;n:</strong> Capacidad de la poblaci&oacute;n de reproducirse o reemplazarse.
            </li>
          </ul>
        </ConceptCard>
      </section>

      {/* ===== ECUACION COMPENSADORA ===== */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Scale className="h-5 w-5 text-emerald-500" />
          <h2 className="text-2xl font-semibold">La ecuaci&oacute;n compensadora</h2>
        </div>

        <p className="text-sm text-muted-foreground">
          En el esquema b&aacute;sico del crecimiento de una poblaci&oacute;n se entienden como componentes
          principales los nacimientos, defunciones, inmigraciones y emigraciones. La poblaci&oacute;n
          final se determina por el volumen anterior m&aacute;s el <strong>saldo vegetativo</strong>{" "}
          (nacimientos menos defunciones) m&aacute;s el <strong>saldo migratorio</strong> (inmigraciones
          menos emigraciones).
        </p>

        {/* Analogia */}
        <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
          <CardContent className="p-4 text-sm">
            <p className="font-medium text-emerald-800 dark:text-emerald-200 mb-1">
              <Lightbulb className="h-4 w-4 inline mr-1" />
              Analog&iacute;a: el balance de una cuenta bancaria
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Piensa en la poblaci&oacute;n como el saldo de una cuenta corriente. Entran ingresos
              (nacimientos + inmigrantes) y salen gastos (defunciones + emigrantes). El saldo
              final es tu nueva poblaci&oacute;n. Si ingresas m&aacute;s de lo que gastas, la poblaci&oacute;n
              crece; si gastas m&aacute;s, decrece.
            </p>
          </CardContent>
        </Card>

        <FormulaCard
          name="Ecuaci&oacute;n compensadora"
          abbreviation="EC"
          fórmula="P_{t+1} = P_t + N_t - D_t + I_t - E_t"
          description="La poblaci&oacute;n en el instante t+1 es igual a la poblaci&oacute;n en t m&aacute;s los nacimientos, menos las defunciones, m&aacute;s las inmigraciones, menos las emigraciones ocurridas en el per&iacute;odo."
          variables={[
            { symbol: "P_t", meaning: "Poblaci\u00f3n en el instante t" },
            { symbol: "N_t", meaning: "Nacimientos en el per\u00edodo" },
            { symbol: "D_t", meaning: "Defunciones en el per\u00edodo" },
            { symbol: "I_t", meaning: "Inmigraciones en el per\u00edodo" },
            { symbol: "E_t", meaning: "Emigraciones en el per\u00edodo" },
          ]}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <FormulaCard
            name="Crecimiento vegetativo"
            abbreviation="CV"
            fórmula="CV = N - D"
            description="Diferencia entre nacimientos y defunciones. Tambi&eacute;n denominado saldo vegetativo."
            variables={[
              { symbol: "N", meaning: "Nacimientos en el per\u00edodo" },
              { symbol: "D", meaning: "Defunciones en el per\u00edodo" },
            ]}
          />

          <FormulaCard
            name="Saldo migratorio"
            abbreviation="SM"
            fórmula="SM = I - E"
            description="Diferencia entre inmigraciones y emigraciones registradas en el per&iacute;odo."
            variables={[
              { symbol: "I", meaning: "Inmigraciones en el per\u00edodo" },
              { symbol: "E", meaning: "Emigraciones en el per\u00edodo" },
            ]}
          />
        </div>

        <ConceptCard title="Componentes del movimiento de la poblaci&oacute;n">
          <p className="text-sm text-muted-foreground">
            As&iacute; pues, el movimiento de la poblaci&oacute;n se define por sus tres componentes fundamentales:
          </p>
          <ul className="mt-2 list-disc list-inside text-sm space-y-1">
            <li>Fecundidad</li>
            <li>Mortalidad</li>
            <li>Movilidad espacial (migraciones)</li>
          </ul>
          <p className="mt-2 text-sm text-muted-foreground">
            La interacci&oacute;n de las tres componentes determina en el tiempo un crecimiento que puede ser
            positivo, nulo o negativo.
          </p>
        </ConceptCard>
      </section>

      {/* ===== TIPOS DE ANALISIS ===== */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Link2 className="h-5 w-5 text-emerald-500" />
          <h2 className="text-2xl font-semibold">Tipos de an&aacute;lisis</h2>
        </div>

        <p className="text-sm text-muted-foreground">
          F&iacute;jate en que hay dos formas de &ldquo;mirar&rdquo; la fecundidad.
          Es como la diferencia entre hacer una <strong>foto</strong> (transversal) y rodar
          una <strong>pel&iacute;cula</strong> (longitudinal):
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <ConceptCard title="An&aacute;lisis transversal (de momento)">
            <p className="text-sm text-muted-foreground">
              El evento demogr&aacute;fico se estudia sobre un intervalo de tiempo espec&iacute;fico y limitado.
              Todos los nacimientos corresponden al mismo a&ntilde;o y a mujeres de distintas edades y
              generaciones.
            </p>
            <p className="mt-2 text-sm italic text-emerald-700 dark:text-emerald-300">
              En otras palabras: es una fotograf&iacute;a de un solo a&ntilde;o. Mezcla mujeres de todas las edades.
            </p>
          </ConceptCard>

          <ConceptCard title="An&aacute;lisis longitudinal (de cohorte)">
            <p className="text-sm text-muted-foreground">
              Permite el seguimiento de la fecundidad de cohortes femeninas seg&uacute;n avanzan a lo largo
              de sus a&ntilde;os f&eacute;rtiles, ilustrando su historial reproductivo. Los nacimientos observados
              corresponden a una misma generaci&oacute;n de mujeres.
            </p>
            <p className="mt-2 text-sm italic text-emerald-700 dark:text-emerald-300">
              En otras palabras: es una pel&iacute;cula que sigue a las mismas mujeres durante 35 a&ntilde;os.
            </p>
          </ConceptCard>
        </div>
      </section>

      {/* ===== INDICADORES ===== */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Thermometer className="h-5 w-5 text-emerald-500" />
          <h2 className="text-2xl font-semibold">Indicadores de natalidad y fecundidad</h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Las <strong>tasas brutas</strong> se obtienen dividiendo los nacimientos, defunciones,
          inmigrantes y emigrantes registrados en un per&iacute;odo entre la poblaci&oacute;n media{" "}
          <FormulaDisplay math="\\bar{P}" /> de dicho per&iacute;odo. Se expresan habitualmente en tantos
          por mil.
        </p>

        <p className="text-sm text-muted-foreground">
          Piensa en los indicadores como <strong>term&oacute;metros</strong> de precisi&oacute;n
          creciente. Cada uno elimina una fuente de distorsi&oacute;n m&aacute;s que el anterior:
        </p>

        {/* --- TBN --- */}
        <div className="space-y-3">
          <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-4 text-sm">
              <p className="font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                <Lightbulb className="h-4 w-4 inline mr-1" />
                &iquest;Por qu&eacute; usamos esta f&oacute;rmula?
              </p>
              <p className="text-emerald-900 dark:text-emerald-100">
                La TBN es el <strong>term&oacute;metro m&aacute;s b&aacute;sico</strong> de natalidad. Como tomar la
                temperatura en la frente: te da una idea general, pero es impreciso porque no
                distingue qui&eacute;n puede tener hijos de qui&eacute;n no. Un pa&iacute;s con muchos ancianos
                tendr&aacute; una TBN baja aunque sus mujeres j&oacute;venes tengan muchos hijos.
              </p>
            </CardContent>
          </Card>

          <FormulaCard
            name="Tasa Bruta de Natalidad"
            abbreviation="TBN"
            fórmula="TBN(t, t+n) = \\frac{N(t, t+n)}{\\dfrac{P(t) + P(t+n)}{2}} \\times 1000"
            description="Mide la frecuencia de nacimientos en relaci&oacute;n con la poblaci&oacute;n media a lo largo de un a&ntilde;o natural. Es el indicador b&aacute;sico pero tiene el inconveniente de estar muy condicionado por la estructura de edad de la poblaci&oacute;n."
            variables={[
              { symbol: "N(t, t+n)", meaning: "Nacimientos entre los instantes t y t+n" },
              { symbol: "P(t)", meaning: "Poblaci\u00f3n en el instante t" },
              { symbol: "P(t+n)", meaning: "Poblaci\u00f3n en el instante t+n" },
            ]}
          />
        </div>

        {/* --- TGF --- */}
        <div className="space-y-3">
          <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-4 text-sm">
              <p className="font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                <Lightbulb className="h-4 w-4 inline mr-1" />
                &iquest;Por qu&eacute; usamos esta f&oacute;rmula?
              </p>
              <p className="text-emerald-900 dark:text-emerald-100">
                La TGF es como <strong>tomar la temperatura bajo el brazo</strong>: m&aacute;s precisa
                porque solo mide a las mujeres en edad f&eacute;rtil (15-49 a&ntilde;os). Eliminamos a
                ni&ntilde;os, hombres y mujeres mayores del denominador, centr&aacute;ndonos en quienes
                realmente pueden tener hijos.
              </p>
            </CardContent>
          </Card>

          <FormulaCard
            name="Tasa General de Fecundidad"
            abbreviation="TGF"
            fórmula="TGF(t, t+n) = \\frac{N(t, t+n)}{\\dfrac{Pf_{15\\text{-}49}(t) + Pf_{15\\text{-}49}(t+n)}{2}} \\times 1000"
            description="Mide la frecuencia del suceso nacimiento entre las mujeres en edad f&eacute;rtil (15-49 a&ntilde;os). Aporta mayor precisi&oacute;n al relacionar el suceso con la poblaci&oacute;n determinante del mismo, evitando distorsiones por composici&oacute;n de sexo y edad."
            variables={[
              { symbol: "N(t, t+n)", meaning: "Nacimientos en el per\u00edodo" },
              { symbol: "Pf_{15\\text{-}49}(t)", meaning: "Poblaci\u00f3n femenina de 15 a 49 a\u00f1os en el instante t" },
            ]}
          />
        </div>

        {/* --- TEFx --- */}
        <div className="space-y-3">
          <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-4 text-sm">
              <p className="font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                <Lightbulb className="h-4 w-4 inline mr-1" />
                &iquest;Por qu&eacute; usamos esta f&oacute;rmula?
              </p>
              <p className="text-emerald-900 dark:text-emerald-100">
                La TEF es el <strong>term&oacute;metro digital</strong>: mide la fecundidad edad por
                edad, eliminando toda distorsi&oacute;n. Una mujer de 25 a&ntilde;os tiene un comportamiento
                reproductivo muy diferente al de una de 40. La TEF captura esas diferencias.
              </p>
            </CardContent>
          </Card>

          <FormulaCard
            name="Tasa Espec&iacute;fica de Fecundidad por Edad"
            abbreviation="TEF_x"
            fórmula="TEF_x^t = \\frac{N_x^t}{\\bar{P}_{f,x}^t} \\times 1000"
            description="Calcula la frecuencia de nacimientos para subpoblaciones de mujeres de una edad concreta (x). Elimina totalmente el efecto de la estructura por edades. Cuando se consideran exclusivamente los nacidos mujeres, se denomina Tasa Espec&iacute;fica de Fecundidad Femenina por Edad (TEFf_x)."
            variables={[
              { symbol: "N_x^t", meaning: "Nacimientos de madres de edad x en el a\u00f1o t" },
              { symbol: "\\bar{P}_{f,x}^t", meaning: "Poblaci\u00f3n media de mujeres de edad x en el a\u00f1o t" },
            ]}
          />
        </div>

        {/* --- ISF --- */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">&Iacute;ndice Sint&eacute;tico de Fecundidad (ISF)</h3>

          <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-4 text-sm">
              <p className="font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                <Lightbulb className="h-4 w-4 inline mr-1" />
                &iquest;Qu&eacute; nos dice el ISF?
              </p>
              <p className="text-emerald-900 dark:text-emerald-100">
                Si las mujeres de hoy mantuvieran su ritmo de hijos toda la vida,
                &iquest;cu&aacute;ntos tendr&iacute;an en total? Es una <strong>pel&iacute;cula
                imaginaria</strong> construida con fotos de un solo a&ntilde;o. Tomamos las tasas de
                fecundidad de cada edad en un a&ntilde;o concreto y las sumamos, como si una &uacute;nica mujer
                ficticia viviera cada edad con las condiciones de ese a&ntilde;o.
              </p>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground">
            Tambi&eacute;n conocido como Tasa Global de Fecundidad o n&uacute;mero medio de hijos por mujer. Es un
            indicador de coyuntura con apariencia de an&aacute;lisis longitudinal. A partir de las tasas de
            fecundidad de un a&ntilde;o determinado, se calcula el n&uacute;mero medio de hijos que cada mujer
            tendr&iacute;a a lo largo de los 35 a&ntilde;os de su vida f&eacute;rtil, suponiendo que se mantienen estables
            las tasas del a&ntilde;o de referencia.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <FormulaCard
              name="ISF (m&eacute;todo simplificado)"
              abbreviation="ISF"
              fórmula="ISF_t = \\frac{TGF_t}{1000} \\times 35"
              description="M&eacute;todo m&aacute;s simple: parte de la TGF y la multiplica por la amplitud del per&iacute;odo f&eacute;rtil (35 a&ntilde;os). Puede arrastrar sesgos de la estructura por edades sobre la TGF."
              variables={[
                { symbol: "TGF_t", meaning: "Tasa General de Fecundidad del a\u00f1o t" },
              ]}
            />

            <FormulaCard
              name="ISF (m&eacute;todo preciso)"
              abbreviation="ISF"
              fórmula="ISF_t = \\frac{1}{1000} \\sum_{x=15}^{49} TEF_x^t"
              description="M&eacute;todo m&aacute;s preciso: suma de todas las tasas espec&iacute;ficas de fecundidad por edades simples, dividida entre 1000. Equivale a la suma de los nacimientos reducidos de cada grupo de edad."
              variables={[
                { symbol: "TEF_x^t", meaning: "Tasa espec\u00edfica de fecundidad a la edad x, en el a\u00f1o t" },
              ]}
            />
          </div>

          <ConceptCard title="Nota sobre grupos quinquenales">
            <p className="text-sm text-muted-foreground">
              Cuando las TEF est&aacute;n referidas a grupos quinquenales de edad (15-19, 20-24, ..., 45-49),
              es preciso multiplicar por 5 el resultado final de la suma, ya que cada tasa representa
              5 a&ntilde;os de edad, y despu&eacute;s dividir entre 1000:
            </p>
            <FormulaDisplay
              math="ISF_t = \\frac{\\sum TEF_{\\text{grupo}} \\times 5}{1000}"
              block
            />
          </ConceptCard>
        </div>

        {/* --- TBR --- */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Tasa Bruta de Reproducci&oacute;n (TBR)</h3>

          <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-4 text-sm">
              <p className="font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                <Lightbulb className="h-4 w-4 inline mr-1" />
                &iquest;Por qu&eacute; nos importan solo las hijas?
              </p>
              <p className="text-emerald-900 dark:text-emerald-100">
                &iquest;Cu&aacute;ntas <strong>hijas</strong> tendr&iacute;a cada mujer? Solo nos interesan las
                hijas porque son quienes pueden tener hijos en el futuro. Si cada mujer tiene exactamente
                una hija que sobrevive, la poblaci&oacute;n se mantiene estable. La TBR mide eso sin
                considerar la mortalidad.
              </p>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground">
            El ISF mide el n&uacute;mero medio de hijos por mujer, pero para simular la capacidad de
            reemplazo de la poblaci&oacute;n se limita a medir la intensidad de los nacimientos{" "}
            <strong>femeninos</strong>. El indicador se denomina Tasa Bruta de Reproducci&oacute;n o de
            Reemplazo y puede obtenerse a partir del ISF multiplicando por la proporci&oacute;n de nacimientos
            femeninos respecto del total (<em>gender ratio</em>).
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <FormulaCard
              name="TBR (m&eacute;todo simplificado)"
              abbreviation="TBR"
              fórmula="TBR_t = ISF_t \\times \\frac{N^f_t}{N_t}"
              description="Se multiplica el ISF por la proporci&oacute;n de nacimientos femeninos (gender ratio). M&eacute;todo m&aacute;s simple."
              variables={[
                { symbol: "ISF_t", meaning: "\u00cdndice Sint\u00e9tico de Fecundidad del a\u00f1o t" },
                { symbol: "N^f_t", meaning: "Nacimientos femeninos en el a\u00f1o t" },
                { symbol: "N_t", meaning: "Nacimientos totales en el a\u00f1o t" },
              ]}
            />

            <FormulaCard
              name="TBR (m&eacute;todo preciso)"
              abbreviation="TBR"
              fórmula="TBR_t = \\frac{1}{1000} \\sum_{x=15}^{49} TEFf_x^t"
              description="Se suman las tasas espec&iacute;ficas de fecundidad femenina por edad (solo nacidos mujeres). Resultado m&aacute;s preciso."
              variables={[
                { symbol: "TEFf_x^t", meaning: "Tasa espec\u00edfica de fecundidad femenina a la edad x" },
              ]}
            />
          </div>
        </div>

        {/* --- Fecundidad de reemplazo --- */}
        <div className="space-y-4">
          <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-4 text-sm">
              <p className="font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                <Lightbulb className="h-4 w-4 inline mr-1" />
                &iquest;Por qu&eacute; 2,1 hijos y no exactamente 2?
              </p>
              <p className="text-emerald-900 dark:text-emerald-100">
                Si cada pareja tiene 2 hijos, parece que se reemplazar&iacute;an exactamente. Pero hacen
                falta un poco m&aacute;s (2,1) por dos razones: nacen un poco m&aacute;s varones que mujeres
                (y solo las mujeres pueden tener hijos en el futuro), y no todas las ni&ntilde;as
                sobreviven hasta la edad f&eacute;rtil.
              </p>
            </CardContent>
          </Card>

          <ConceptCard title="Fecundidad de reemplazo">
            <p className="text-sm text-muted-foreground">
              En una hip&oacute;tesis de poblaci&oacute;n cerrada (sin migraciones), se entiende como fecundidad
              de reemplazo el n&uacute;mero medio de hijos que debe tener cada mujer para que la poblaci&oacute;n
              se mantenga estable. Se acepta como tasa m&iacute;nima de reemplazo un ISF de{" "}
              <strong>2,1 hijos por mujer</strong>. Esta cifra tiene en cuenta:
            </p>
            <ul className="mt-2 list-disc list-inside text-sm space-y-1 text-muted-foreground">
              <li>Que sobre los nacidos exista un alto &iacute;ndice de feminidad (bajo &iacute;ndice de masculinidad)</li>
              <li>Que la mortalidad infantil sea baja</li>
            </ul>
          </ConceptCard>
        </div>

        {/* --- TNR --- */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Tasa Neta de Reproducci&oacute;n (TNR)</h3>

          <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-4 text-sm">
              <p className="font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                <Lightbulb className="h-4 w-4 inline mr-1" />
                &iquest;Por qu&eacute; ajustar por mortalidad?
              </p>
              <p className="text-emerald-900 dark:text-emerald-100">
                La TBR asume que todas las ni&ntilde;as reci&eacute;n nacidas llegar&aacute;n a la edad f&eacute;rtil.
                En la realidad, no todas sobreviven. La TNR corrige esto multiplicando por la
                probabilidad de supervivencia a cada edad. Es el indicador m&aacute;s realista de la
                capacidad de reemplazo.
              </p>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground">
            Dado que no todas las ni&ntilde;as reci&eacute;n nacidas sobrevivir&aacute;n hasta la edad f&eacute;rtil ni todas
            vivir&aacute;n hasta los 50 a&ntilde;os, es conveniente incorporar el efecto de la mortalidad,
            obteniendo as&iacute; la Tasa Neta de Reproducci&oacute;n. Se ajusta la TBR por la probabilidad de
            supervivencia a cada edad.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <FormulaCard
              name="TNR (m&eacute;todo simplificado)"
              abbreviation="TNR"
              fórmula="TNR_t = ISF_t \\times \\frac{L_x}{L_0} \\times \\frac{N^f_t}{N_t}"
              description="Se multiplica el ISF por la proporci&oacute;n de supervivientes (tabla de mortalidad) y por el gender ratio."
              variables={[
                { symbol: "L_x", meaning: "Supervivientes a la edad x seg\u00fan la tabla de mortalidad" },
                { symbol: "L_0", meaning: "Radix de la tabla de mortalidad (supervivientes al nacimiento)" },
              ]}
            />

            <FormulaCard
              name="TNR (m&eacute;todo preciso)"
              abbreviation="TNR"
              fórmula="TNR_t = \\frac{1}{1000} \\sum_{x=15}^{49} TEFf_x^t \\times \\frac{L_x}{L_0}"
              description="Se ponderan las tasas espec&iacute;ficas de fecundidad femenina por la probabilidad de sobrevivir hasta cada edad. Resultado m&aacute;s preciso."
              variables={[
                { symbol: "TEFf_x^t", meaning: "Tasa espec\u00edfica de fecundidad femenina a la edad x" },
                { symbol: "L_x / L_0", meaning: "Proporci\u00f3n de supervivientes a la edad x" },
              ]}
            />
          </div>
        </div>

        {/* --- Otros indicadores --- */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Otros indicadores</h3>

          <div className="grid gap-4 md:grid-cols-2">
            <FormulaCard
              name="&Iacute;ndice de masculinidad al nacimiento"
              abbreviation="IM"
              fórmula="IM_t = \\frac{N^m_t}{N^f_t}"
              description="Relaci&oacute;n entre nacidos varones y nacidas mujeres. Suele ser mayor que 1 al nacimiento (nacen m&aacute;s varones). A edades m&aacute;s altas disminuye porque la mortalidad masculina es mayor que la femenina."
              variables={[
                { symbol: "N^m_t", meaning: "Nacidos varones en el a\u00f1o t" },
                { symbol: "N^f_t", meaning: "Nacidas mujeres en el a\u00f1o t" },
              ]}
            />

            <ConceptCard title="Resumen de la jerarqu&iacute;a de indicadores">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 shrink-0 text-xs">TBN</Badge>
                  <span>Nacimientos / toda la poblaci&oacute;n</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 shrink-0 text-xs">TGF</Badge>
                  <span>Nacimientos / mujeres 15-49</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 shrink-0 text-xs">TEF</Badge>
                  <span>Nacimientos / mujeres de edad x</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 shrink-0 text-xs">ISF</Badge>
                  <span>Hijos por mujer (suma de TEF)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 shrink-0 text-xs">TBR</Badge>
                  <span>Hijas por mujer (solo nacidos femeninos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 shrink-0 text-xs">TNR</Badge>
                  <span>Hijas por mujer ajustado por mortalidad</span>
                </li>
              </ul>
            </ConceptCard>
          </div>
        </div>
      </section>

      {/* ===== FUENTES DE INFORMACION ===== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Fuentes de informaci&oacute;n</h2>
        <ConceptCard title="Principales fuentes espa&ntilde;olas">
          <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
            <li>Movimiento Natural de la Poblaci&oacute;n Espa&ntilde;ola (MNP)</li>
            <li>Censos de Poblaci&oacute;n y Padrones Municipales de Habitantes</li>
            <li>Encuesta de Fecundidad (&uacute;ltima edici&oacute;n: 2018)</li>
          </ul>
          <p className="mt-2 text-sm text-muted-foreground">
            Aunque el MNP es la principal publicaci&oacute;n estad&iacute;stica referente a los nacimientos y partos,
            para el an&aacute;lisis de la fecundidad se recurre tambi&eacute;n a los censos y padrones, que
            suministran los denominadores necesarios para el c&aacute;lculo de indicadores.
          </p>
        </ConceptCard>
      </section>

      {/* ===== FACTORES ===== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Factores que afectan a los niveles de fecundidad</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <ConceptCard title="Variables explicativas">
            <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
              <li><strong>Factores biol&oacute;gicos:</strong> edad f&eacute;rtil, esterilidad, fecundabilidad, infecundidad posparto</li>
              <li><strong>Factores nutricionales</strong></li>
              <li><strong>Mortalidad en el nacimiento</strong> (madres e hijos)</li>
              <li><strong>Factores socioecon&oacute;micos:</strong> nivel de ingresos, creencias religiosas, pol&iacute;ticas de conciliaci&oacute;n familiar</li>
            </ul>
          </ConceptCard>

          <ConceptCard title="Variables intermedias">
            <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
              <li>Proporci&oacute;n de mujeres en relaciones de pareja</li>
              <li>Porcentaje de mujeres que usan m&eacute;todos anticonceptivos</li>
              <li>Proporci&oacute;n de mujeres que actualmente no son f&eacute;rtiles</li>
              <li>Nivel de abortos provocados</li>
              <li>Proporci&oacute;n de personas casadas</li>
              <li>Formaci&oacute;n y planificaci&oacute;n familiar, cultura y pr&aacute;cticas abortivas</li>
              <li>Recursos y anticoncepci&oacute;n</li>
            </ul>
          </ConceptCard>
        </div>
      </section>

      {/* ===== CONEXION FINAL ===== */}
      <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
        <CardContent className="p-5 space-y-4">
          <div className="flex items-center gap-2 font-semibold text-emerald-800 dark:text-emerald-200">
            <TrendingUp className="h-5 w-5" />
            Lo que has aprendido
          </div>
          <ul className="text-sm space-y-1 text-emerald-900 dark:text-emerald-100">
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
              La ecuaci&oacute;n compensadora: c&oacute;mo crece (o decrece) una poblaci&oacute;n.
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
              La jerarqu&iacute;a de indicadores: TBN &rarr; TGF &rarr; TEF &rarr; ISF &rarr; TBR &rarr; TNR.
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
              Qu&eacute; significa la fecundidad de reemplazo (2,1 hijos) y por qu&eacute;.
            </li>
          </ul>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-emerald-200 dark:border-emerald-800">
            <Link href="/tema-3/ejercicios/t3-a">
              <Badge className="cursor-pointer bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-800/50">
                Practica con los ejercicios de natalidad <ChevronRight className="h-3 w-3 inline" />
              </Badge>
            </Link>
            <Link href="/tema-3/migraciones">
              <Badge variant="outline" className="cursor-pointer border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30">
                Siguiente: Migraciones <ChevronRight className="h-3 w-3 inline" />
              </Badge>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
