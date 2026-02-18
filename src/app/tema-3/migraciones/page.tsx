import { FormulaDisplay } from "@/components/theory/formula-display";
import { FormulaCard } from "@/components/theory/formula-card";
import { ConceptCard } from "@/components/theory/concept-card";
import { DefinitionBlock } from "@/components/theory/definition-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRightLeft,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  ArrowRight,
  Eye,
  Map,
  TrendingUp,
  Grid3X3,
  BarChart3,
  Users,
  Building2,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function MigracionesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
      {/* ===== HERO HEADER ===== */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-cyan-950/30 border border-white/50 dark:border-white/5 p-6 sm:p-8">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-300/20 dark:bg-emerald-700/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-teal-300/20 dark:bg-teal-700/10 rounded-full blur-3xl" />
        <div className="relative space-y-3">
          <Badge className="bg-emerald-100/80 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs backdrop-blur-sm">
            Tema 3 &mdash; Secci&oacute;n 2 de 2
          </Badge>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-sm shadow-sm">
              <ArrowRightLeft className="h-6 w-6 text-emerald-500" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-300 dark:via-teal-300 dark:to-cyan-300 bg-clip-text text-transparent">
              3.2 Movimientos Migratorios
            </h1>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            Partiendo de la ecuaci&oacute;n compensadora{" "}
            <FormulaDisplay math="P_{t+1} = P_t + N_t - D_t + I_t - E_t" />, el saldo migratorio
            constituye uno de los tres componentes fundamentales del crecimiento de una poblaci&oacute;n.
            Su estudio presenta dificultades espec&iacute;ficas: la migraci&oacute;n es opcional, renovable,
            reversible y compleja de registrar.
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
            Esta secci&oacute;n asume que ya manejas la ecuaci&oacute;n compensadora y los indicadores
            de natalidad. Si a&uacute;n no los has visto, rev&iacute;salos primero:
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            <Link href="/tema-3/natalidad">
              <Badge variant="outline" className="cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-900/30 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300">
                Secci&oacute;n 3.1: Natalidad <ChevronRight className="h-3 w-3 inline" />
              </Badge>
            </Link>
            <Link href="/tema-2/diagrama-lexis">
              <Badge variant="outline" className="cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-900/30 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300">
                Tema 2: Diagrama de Lexis <ChevronRight className="h-3 w-3 inline" />
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
            &iquest;C&oacute;mo medimos la gente que entra y sale de un territorio,
            y qu&eacute; impacto tiene en su poblaci&oacute;n?
          </p>
          <p className="text-emerald-900 dark:text-emerald-100">
            Piensa en un territorio como una casa con puertas de entrada y salida. La natalidad
            y la mortalidad son &ldquo;autom&aacute;ticas&rdquo; (todos nacen y todos mueren), pero las
            migraciones son <strong>voluntarias</strong>: la gente elige irse o venir. Eso las hace
            m&aacute;s dif&iacute;ciles de predecir y de medir. Aqu&iacute; aprender&aacute;s las herramientas
            para cuantificar esos movimientos.
          </p>
        </CardContent>
      </Card>

      {/* ===== EL FENOMENO MIGRATORIO ===== */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Eye className="h-5 w-5 text-emerald-500" />
          <h2 className="text-2xl font-semibold">El fen&oacute;meno migratorio</h2>
        </div>

        <DefinitionBlock term="Migraci&oacute;n">
          <p>
            Generalmente se define migraci&oacute;n en referencia al paso de una frontera de &iacute;ndole
            administrativa, descartando cualquier traslado que no tenga visos de permanente (se
            descartan vacaciones y visitas). El traslado ha de constituir un espacio significativo
            en la vida del migrante (un a&ntilde;o generalmente).
          </p>
        </DefinitionBlock>

        <ConceptCard title="Caracter&iacute;sticas del fen&oacute;meno migratorio">
          <p className="text-sm text-muted-foreground mb-2">
            F&iacute;jate en que la migraci&oacute;n es muy diferente a la natalidad o la mortalidad:
          </p>
          <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
            <li>Es <strong>opcional</strong> (a diferencia de nacer o morir, que no son opcionales)</li>
            <li>La natalidad y mortalidad de la poblaci&oacute;n migrante es compleja de seguir</li>
            <li>Es <strong>renovable y reversible</strong></li>
            <li>Es <strong>compleja de registrar</strong></li>
          </ul>
          <p className="mt-2 text-sm italic text-emerald-700 dark:text-emerald-300">
            En otras palabras: puedes emigrar, volver, y volver a irte. Nacer solo puedes una vez.
          </p>
        </ConceptCard>
      </section>

      {/* ===== CONCEPTOS BASICOS ===== */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-emerald-500" />
          <h2 className="text-2xl font-semibold">Conceptos b&aacute;sicos</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <DefinitionBlock term="Migrante">
            <p>
              Persona que en el per&iacute;odo de estudio declara haber hecho al menos un cambio de
              residencia.
            </p>
          </DefinitionBlock>

          <DefinitionBlock term="Saldo migratorio">
            <p>
              Diferencia entre las inmigraciones y las emigraciones de un territorio en un per&iacute;odo
              determinado.
            </p>
          </DefinitionBlock>

          <DefinitionBlock term="Inmigraci&oacute;n">
            <p>
              Procedente de fuera de las fronteras de la divisi&oacute;n territorial. Altera el volumen de
              la poblaci&oacute;n. Puede ser espa&ntilde;ola (de un territorio a otro dentro de Espa&ntilde;a) o
              extranjera (procedente de otro pa&iacute;s).
            </p>
          </DefinitionBlock>

          <DefinitionBlock term="Emigraci&oacute;n">
            <p>
              Personas que abandonan la divisi&oacute;n territorial durante el per&iacute;odo. Altera el volumen
              de poblaci&oacute;n.
            </p>
          </DefinitionBlock>

          <DefinitionBlock term="Inmigraci&oacute;n de retorno">
            <p>Emigrantes que retornan a su territorio de origen.</p>
          </DefinitionBlock>

          <DefinitionBlock term="Poblaci&oacute;n vinculada">
            <p>
              Concepto que abarca a toda persona que tiene alg&uacute;n tipo de vinculaci&oacute;n con un
              territorio, ya sea por residencia, trabajo u otros motivos.
            </p>
          </DefinitionBlock>
        </div>

        {/* Analogia: zona de atraccion vs expulsion */}
        <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
          <CardContent className="p-4 text-sm">
            <p className="font-medium text-emerald-800 dark:text-emerald-200 mb-1">
              <Lightbulb className="h-4 w-4 inline mr-1" />
              Analog&iacute;a: atracci&oacute;n vs. expulsi&oacute;n
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              &iquest;Tu pueblo tiene m&aacute;s gente llegando o y&eacute;ndose? Si llegan m&aacute;s de los que se
              van, es una <strong>zona de atracci&oacute;n</strong> (saldo positivo). Si se van m&aacute;s de los
              que llegan, es una <strong>zona de expulsi&oacute;n</strong> (saldo negativo). Madrid,
              por ejemplo, suele ser zona de atracci&oacute;n; muchos pueblos rurales son zonas de expulsi&oacute;n.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <ConceptCard title="Zona de atracci&oacute;n">
            <p className="text-sm text-muted-foreground">
              Territorio donde la migraci&oacute;n neta resulta <strong>positiva</strong> (m&aacute;s inmigrantes
              que emigrantes).
            </p>
          </ConceptCard>

          <ConceptCard title="Zona de expulsi&oacute;n">
            <p className="text-sm text-muted-foreground">
              Territorio donde la migraci&oacute;n neta resulta <strong>negativa</strong> (m&aacute;s emigrantes
              que inmigrantes).
            </p>
          </ConceptCard>
        </div>
      </section>

      {/* ===== TIPOS DE DESPLAZAMIENTOS ===== */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Map className="h-5 w-5 text-emerald-500" />
          <h2 className="text-2xl font-semibold">Tipos de desplazamientos</h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Los diferentes tipos de desplazamientos se caracterizan por la distancia recorrida y por
          la duraci&oacute;n de la estancia.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <ConceptCard title="Seg&uacute;n &aacute;mbito geogr&aacute;fico">
            <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
              <li>
                <strong>Migraci&oacute;n interior:</strong> Su recorrido se circunscribe a la divisi&oacute;n
                territorial y no altera el volumen de la poblaci&oacute;n total.
              </li>
              <li>
                <strong>Migraci&oacute;n exterior (internacional):</strong> Los protagonistas se mueven de
                un pa&iacute;s a otro.
              </li>
              <li>
                <strong>Movimientos de relocalizaci&oacute;n:</strong> Dentro del mismo &aacute;mbito funcional o
                aglomeraci&oacute;n urbana.
              </li>
              <li>
                <strong>Movimientos inter&aacute;mbitos:</strong> Movimientos interiores fuera del &aacute;mbito
                funcional (por ejemplo, de Madrid a Pozuelo).
              </li>
            </ul>
          </ConceptCard>

          <ConceptCard title="Seg&uacute;n escala y duraci&oacute;n">
            <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
              <li>
                <strong>Interregional:</strong> Entre distintas regiones.
              </li>
              <li>
                <strong>Intrarregional:</strong> Dentro de un &aacute;mbito regional.
              </li>
              <li>
                Tambi&eacute;n se habla de migraci&oacute;n interprovincial, intermunicipal o intramunicipal.
              </li>
              <li>
                <strong>Temporal vs definitiva:</strong> Se considera permanente cuando supera el a&ntilde;o
                de duraci&oacute;n.
              </li>
            </ul>
          </ConceptCard>
        </div>

        <ConceptCard title="Transici&oacute;n vs movimiento">
          <p className="text-sm text-muted-foreground">
            Autores como Shen (1994) distinguen entre <strong>transici&oacute;n</strong> (n&uacute;mero de
            migrantes que se mueven en un per&iacute;odo, fijo o no) y <strong>movimiento</strong>. Cada
            movimiento se cuenta una &uacute;nica vez, si bien un migrante puede hacer varios movimientos
            en un per&iacute;odo y ser contado varias veces.
          </p>
        </ConceptCard>
      </section>

      {/* ===== INDICADORES ===== */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-emerald-500" />
          <h2 className="text-2xl font-semibold">Indicadores de migraci&oacute;n</h2>
        </div>

        {/* --- Saldo migratorio --- */}
        <div className="space-y-3">
          <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-4 text-sm">
              <p className="font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                <Lightbulb className="h-4 w-4 inline mr-1" />
                Analog&iacute;a: el balance de tu cuenta corriente
              </p>
              <p className="text-emerald-900 dark:text-emerald-100">
                El saldo migratorio funciona como el balance de tu cuenta corriente: ingresos
                (inmigraci&oacute;n) menos gastos (emigraci&oacute;n). Si el saldo es positivo, &ldquo;ganas&rdquo;
                poblaci&oacute;n; si es negativo, &ldquo;pierdes&rdquo;.
              </p>
            </CardContent>
          </Card>

          <FormulaCard
            name="Saldo migratorio (Migraci&oacute;n neta)"
            abbreviation="SM"
            fórmula="SM_t = I_t - E_t"
            description="Diferencia entre inmigraciones y emigraciones en un per&iacute;odo. Se suele obtener por m&eacute;todos de estimaci&oacute;n indirecta a trav&eacute;s de la ecuaci&oacute;n compensadora. Un signo positivo indica que las entradas superan a las salidas (zona de atracci&oacute;n); un signo negativo indica lo contrario (zona de expulsi&oacute;n)."
            variables={[
              { symbol: "I_t", meaning: "Inmigraciones en el per\u00edodo t" },
              { symbol: "E_t", meaning: "Emigraciones en el per\u00edodo t" },
            ]}
          />

          {/* Cuidado con... */}
          <Card className="bg-amber-50/50 dark:bg-amber-950/10 border-amber-200 dark:border-amber-800">
            <CardContent className="p-4 text-sm space-y-2">
              <div className="flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-200">
                <AlertTriangle className="h-4 w-4" />
                Cuidado con...
              </div>
              <p className="text-amber-900 dark:text-amber-100">
                El saldo migratorio casi nunca se puede medir directamente (es muy dif&iacute;cil
                saber cu&aacute;nta gente se va realmente). Se suele <strong>estimar</strong> por la
                ecuaci&oacute;n compensadora:
              </p>
              <FormulaDisplay math="SM = P_{t+1} - P_t - N_t + D_t" block />
              <p className="text-amber-900 dark:text-amber-100">
                Es decir: el saldo migratorio es &ldquo;lo que sobra&rdquo; despu&eacute;s de restar el
                crecimiento vegetativo al cambio total de poblaci&oacute;n.
              </p>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground">
            El saldo migratorio puede estimarse indirectamente a partir de la ecuaci&oacute;n compensadora:
          </p>
          <FormulaDisplay math="I_t - E_t = P_{t+1} - P_t - N_t + D_t" block />
        </div>

        {/* --- TBI --- */}
        <div className="space-y-3">
          <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-4 text-sm">
              <p className="font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                <Lightbulb className="h-4 w-4 inline mr-1" />
                &iquest;Por qu&eacute; la TBI no es una verdadera tasa?
              </p>
              <p className="text-emerald-900 dark:text-emerald-100">
                F&iacute;jate: para que algo sea una &ldquo;tasa&rdquo; en sentido estricto, el denominador
                debe contener a las personas <strong>en riesgo</strong> de experimentar el evento.
                Los que ya est&aacute;n en el territorio <strong>no est&aacute;n en riesgo de inmigrar</strong>
                (ya est&aacute;n ah&iacute;). Sin embargo, la TBE s&iacute; es una verdadera tasa porque
                los del denominador <strong>podr&iacute;an irse</strong>.
              </p>
            </CardContent>
          </Card>

          <FormulaCard
            name="Tasa Bruta de Inmigraci&oacute;n (&Iacute;ndice de atracci&oacute;n)"
            abbreviation="TBI"
            fórmula="TBI_t = \frac{I_t}{\bar{P}_t} \times 1000"
            description="N&uacute;mero de inmigrantes por cada 1.000 habitantes. Si bien se le suele llamar tasa, en realidad no lo es estrictamente, ya que los individuos del denominador no est&aacute;n expuestos al riesgo de inmigrar (ya pertenecen a la poblaci&oacute;n). Tambi&eacute;n se denomina &iacute;ndice de atracci&oacute;n."
            variables={[
              { symbol: "I_t", meaning: "N\u00famero total de inmigrantes en el a\u00f1o t" },
              { symbol: "\\bar{P}_t", meaning: "Poblaci\u00f3n media censal del a\u00f1o t" },
            ]}
          />
        </div>

        {/* --- TBE --- */}
        <FormulaCard
          name="Tasa Bruta de Emigraci&oacute;n"
          abbreviation="TBE"
          fórmula="TBE_t = \frac{E_t}{\bar{P}_t} \times 1000"
          description="N&uacute;mero de emigrantes por cada 1.000 habitantes. En este caso s&iacute; se trata de una verdadera tasa, ya que los individuos del denominador est&aacute;n sometidos al riesgo de emigrar."
          variables={[
            { symbol: "E_t", meaning: "N\u00famero total de emigrantes en el a\u00f1o t" },
            { symbol: "\\bar{P}_t", meaning: "Poblaci\u00f3n media censal del a\u00f1o t" },
          ]}
        />

        {/* --- TMB --- */}
        <FormulaCard
          name="Tasa de Migraci&oacute;n Bruta"
          abbreviation="TMB"
          fórmula="TMB_t = \frac{I_t + E_t}{\bar{P}_t} \times 1000"
          description="Flujo total de migrantes (inmigraci&oacute;n m&aacute;s emigraci&oacute;n) por cada 1.000 habitantes. Mide la intensidad global de la movilidad migratoria. Se puede obtener tambi&eacute;n como TMB = TBI + TBE."
          variables={[
            { symbol: "I_t + E_t", meaning: "Migraci\u00f3n bruta (total de entradas y salidas)" },
            { symbol: "\\bar{P}_t", meaning: "Poblaci\u00f3n media censal del a\u00f1o t" },
          ]}
        />

        {/* --- TNM --- */}
        <FormulaCard
          name="Tasa Neta de Migraci&oacute;n (Tasa de Saldo Migratorio)"
          abbreviation="TNM"
          fórmula="TNM_t = \frac{I_t - E_t}{\bar{P}_t} \times 1000"
          description="Saldo migratorio por cada 1.000 habitantes. No es una verdadera tasa ya que el denominador contiene personas que no est&aacute;n expuestas al riesgo de inmigrar. Se puede obtener tambi&eacute;n como TNM = TBI - TBE."
          variables={[
            { symbol: "I_t - E_t", meaning: "Saldo migratorio del per\u00edodo" },
            { symbol: "\\bar{P}_t", meaning: "Poblaci\u00f3n media censal del a\u00f1o t" },
          ]}
        />

        {/* --- Razon de intercambio --- */}
        <FormulaCard
          name="Raz&oacute;n de intercambio"
          abbreviation="RI"
          fórmula="RI_t = \frac{I_t}{E_t} \times 100"
          description="Relaci&oacute;n entre inmigraciones y emigraciones, expresada en porcentaje. Valores superiores a 100 indican que las entradas superan a las salidas."
          variables={[
            { symbol: "I_t", meaning: "Inmigraciones en el per\u00edodo" },
            { symbol: "E_t", meaning: "Emigraciones en el per\u00edodo" },
          ]}
        />

        {/* --- Tasas acumuladas --- */}
        <ConceptCard title="Tasas acumuladas (per&iacute;odos plurianuales)">
          <p className="text-sm text-muted-foreground">
            Cuando se trabaja con per&iacute;odos de 5, 10 o m&aacute;s a&ntilde;os, se utilizan las tasas acumuladas.
            Se dividen los flujos migratorios del per&iacute;odo entre la amplitud del intervalo (n) y la
            poblaci&oacute;n media censal del per&iacute;odo:
          </p>
          <div className="mt-3 space-y-2">
            <FormulaDisplay
              math="TBI_{t,t+n} = \frac{I(t, t+n)}{n \times \bar{P}_{t,t+n}} \times 1000"
              block
            />
            <FormulaDisplay
              math="TBE_{t,t+n} = \frac{E(t, t+n)}{n \times \bar{P}_{t,t+n}} \times 1000"
              block
            />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Si se quiere obtener una tasa de dimensi&oacute;n anual, se divide el n&uacute;mero de migraciones por
            la amplitud del intervalo considerado.
          </p>
        </ConceptCard>
      </section>

      {/* ===== TASAS ESPECIFICAS E ISM ===== */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-emerald-500" />
          <h2 className="text-2xl font-semibold">Tasas espec&iacute;ficas e &Iacute;ndice Sint&eacute;tico de Migraci&oacute;n</h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Las tasas brutas presentadas anteriormente no tienen en cuenta que el comportamiento
          migratorio var&iacute;a seg&uacute;n la edad y el sexo. La magnitud de la migraci&oacute;n var&iacute;a con la edad,
          siendo m&aacute;s frecuente la migraci&oacute;n masculina (si bien cada vez hay mayor presencia femenina).
          Por ello se hace necesario analizar la migraci&oacute;n por edades.
        </p>

        {/* --- TEM_x --- */}
        <FormulaCard
          name="Tasa Espec&iacute;fica de Migraci&oacute;n por Edad"
          abbreviation="TEM_x"
          fórmula="m_x = \frac{M_{x, x+n}}{P_x} \times 1000"
          description="Para cada edad x, se obtiene dividiendo las migraciones observadas entre la edad x y x+n entre la poblaci&oacute;n de esa edad al comienzo del per&iacute;odo. Se calcula usando el mismo principio que las tasas de fecundidad espec&iacute;ficas."
          variables={[
            { symbol: "M_{x, x+n}", meaning: "Migraciones de personas de edad entre x y x+n" },
            { symbol: "P_x", meaning: "Poblaci\u00f3n de edad x al comienzo del per\u00edodo" },
          ]}
        />

        {/* --- ISM --- */}
        <div className="space-y-3">
          <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-4 text-sm">
              <p className="font-medium text-emerald-800 dark:text-emerald-200 mb-1">
                <Lightbulb className="h-4 w-4 inline mr-1" />
                &iquest;Qu&eacute; nos dice el ISM?
              </p>
              <p className="text-emerald-900 dark:text-emerald-100">
                Igual que el ISF para la fecundidad: &iquest;cu&aacute;ntas veces se mudar&iacute;a una persona
                ficticia si viviera toda su vida con los patrones migratorios de este a&ntilde;o? Es una
                construcci&oacute;n te&oacute;rica que resume en un solo n&uacute;mero la intensidad migratoria
                de un a&ntilde;o concreto.
              </p>
            </CardContent>
          </Card>

          <FormulaCard
            name="&Iacute;ndice Sint&eacute;tico de Migraci&oacute;n (Movilidad)"
            abbreviation="ISM"
            fórmula="ISM_t = \frac{1}{1000} \sum_{x=0}^{w} m_x"
            description="Representa el n&uacute;mero de migraciones que har&iacute;a una persona hipot&eacute;tica a lo largo de su vida si adoptara en cada momento las condiciones de migrabilidad observadas en el a&ntilde;o de referencia. Se calcula como la suma de las tasas espec&iacute;ficas por edad, dividida entre 1000. Siendo m_x la tasa espec&iacute;fica por edad y w la edad m&aacute;xima."
            variables={[
              { symbol: "m_x", meaning: "Tasa espec\u00edfica de migraci\u00f3n a la edad x" },
              { symbol: "w", meaning: "Edad m\u00e1xima considerada" },
            ]}
          />
        </div>

        <ConceptCard title="N&uacute;mero de migraciones reducido">
          <p className="text-sm text-muted-foreground">
            Es el n&uacute;mero de migraciones que tendr&iacute;a una persona ficticia a lo largo de su vida,
            siguiendo los patrones de migrabilidad para cada grupo de edad. Se calcula como la tasa
            espec&iacute;fica para dicho grupo multiplicada por el n&uacute;mero de edades del grupo (generalmente
            5 o 10) y dividida entre 1000 si la tasa est&aacute; expresada en tantos por mil. La suma de
            los n&uacute;meros de migraciones reducidos de todos los grupos de edad es el ISM.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Cuando las tasas est&aacute;n referidas a grupos quinquenales:
          </p>
          <FormulaDisplay
            math="ISM_t = \frac{1}{1000} \sum m_x \times 5"
            block
          />
        </ConceptCard>
      </section>

      {/* ===== MATRICES MIGRATORIAS ===== */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Grid3X3 className="h-5 w-5 text-emerald-500" />
          <h2 className="text-2xl font-semibold">Matrices migratorias (origen-destino)</h2>
        </div>

        {/* Analogia */}
        <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
          <CardContent className="p-4 text-sm">
            <p className="font-medium text-emerald-800 dark:text-emerald-200 mb-1">
              <Lightbulb className="h-4 w-4 inline mr-1" />
              Analog&iacute;a: una tabla de Excel
            </p>
            <p className="text-emerald-900 dark:text-emerald-100">
              Piensa en una tabla de Excel donde las filas son &ldquo;de d&oacute;nde sales&rdquo; y las
              columnas &ldquo;a d&oacute;nde llegas&rdquo;. La diagonal son los que se quedan en casa
              (no migran). Si sumas una fila sin la diagonal, obtienes la emigraci&oacute;n total desde
              esa regi&oacute;n. Si sumas una columna sin la diagonal, obtienes la inmigraci&oacute;n total
              hacia esa regi&oacute;n.
            </p>
          </CardContent>
        </Card>

        <p className="text-sm text-muted-foreground">
          Para estudiar los flujos migratorios entre las distintas demarcaciones geogr&aacute;ficas se
          utiliza una <strong>matriz cuadrada de flujos migratorios</strong> de dimensi&oacute;n k &times; k
          (siendo k el n&uacute;mero de regiones). Cada celda <FormulaDisplay math="a_{ij}" /> representa el
          n&uacute;mero de personas que han abandonado la regi&oacute;n i para trasladarse a la regi&oacute;n j.
        </p>

        <FormulaDisplay
          math="\begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \cdots & a_{nn} \end{pmatrix}"
          block
        />

        <ConceptCard title="Matriz de transici&oacute;n">
          <p className="text-sm text-muted-foreground">
            Si tomamos <FormulaDisplay math="P_i" /> como la poblaci&oacute;n a principio de a&ntilde;o en la
            regi&oacute;n i, podemos calcular:
          </p>
          <FormulaDisplay math="p_{ij} = \frac{a_{ij}}{P_i}" block />
          <p className="mt-2 text-sm text-muted-foreground">
            Donde <FormulaDisplay math="p_{ij}" /> es la probabilidad de que un individuo que est&aacute;
            en la regi&oacute;n i a inicio de a&ntilde;o se traslade a la regi&oacute;n j. Es una{" "}
            <strong>probabilidad de transici&oacute;n</strong>. La matriz formada por las diferentes{" "}
            <FormulaDisplay math="p_{ij}" /> es una <strong>matriz estoc&aacute;stica</strong>, cuyas
            filas suman uno, y se denomina <strong>Matriz de transici&oacute;n IP</strong>.
          </p>
        </ConceptCard>

        <ConceptCard title="Lectura de la matriz de flujos">
          <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground">
            <li>
              <strong>Filas:</strong> Representan el origen. La suma de los elementos fuera de la
              diagonal de una fila indica la <strong>emigraci&oacute;n interna</strong> de esa regi&oacute;n.
            </li>
            <li>
              <strong>Columnas:</strong> Representan el destino. La suma de los elementos fuera de la
              diagonal de una columna indica la <strong>inmigraci&oacute;n interna</strong> hacia esa regi&oacute;n.
            </li>
            <li>
              <strong>Diagonal:</strong> Representa las personas que permanecen en la misma regi&oacute;n
              (no migrantes).
            </li>
            <li>
              <strong>Saldo migratorio interno:</strong> Inmigraci&oacute;n interna menos emigraci&oacute;n interna
              de cada regi&oacute;n.
            </li>
          </ul>
        </ConceptCard>
      </section>

      {/* ===== FUENTES ESTADISTICAS ===== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Fuentes estad&iacute;sticas</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <ConceptCard title="Encuesta de Migraciones">
            <p className="text-sm text-muted-foreground">
              Se elabora simult&aacute;neamente con la Encuesta de Poblaci&oacute;n Activa (EPA). Si bien
              subestima el fen&oacute;meno migratorio (estima &uacute;nicamente a dos tercios del total de
              inmigrantes), ya que se dirige al mercado de trabajo y solo recoge datos de quienes
              residen en viviendas familiares y tienen intenci&oacute;n de permanencia superior a uno o
              dos a&ntilde;os.
            </p>
          </ConceptCard>

          <ConceptCard title="Estad&iacute;stica de Variaci&oacute;n Residencial">
            <p className="text-sm text-muted-foreground">
              Elaborada por el INE a partir de los padrones municipales. Desde 2003, se obtienen
              los flujos migratorios anuales (interiores y exteriores). Se toman las{" "}
              <strong>migraciones</strong> (no los migrantes): se computan los cambios que realice
              una persona en el mismo per&iacute;odo. Los datos se publican a nivel agregado pero se
              tienen a nivel municipal.
            </p>
          </ConceptCard>
        </div>
      </section>

      {/* ===== MODELOS DE ESTIMACION ===== */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Modelos de estimaci&oacute;n migratoria</h2>

        <p className="text-sm text-muted-foreground">
          Dada la complejidad del fen&oacute;meno, se proponen varios tipos de modelos en los que se asumen
          distintas hip&oacute;tesis de trabajo para llegar a proyecciones lo m&aacute;s adecuadas posibles.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <ConceptCard title="M&eacute;todo exacto">
            <p className="text-sm text-muted-foreground">
              A trav&eacute;s de la ecuaci&oacute;n de componentes principales (ecuaci&oacute;n compensadora).
            </p>
          </ConceptCard>

          <ConceptCard title="M&eacute;todo del lugar de nacimiento">
            <p className="text-sm text-muted-foreground">
              Se basa en la informaci&oacute;n contenida en los censos poblacionales: lugar de nacimiento,
              residencia anterior, duraci&oacute;n de la residencia. La migraci&oacute;n neta se estima comparando
              dos censos consecutivos:
            </p>
            <FormulaDisplay
              math="MN = [I(t,t+n) - I(t)] - [E(t,t+n) - E(t)]"
              block
            />
          </ConceptCard>

          <ConceptCard title="M&eacute;todo del balance migratorio">
            <p className="text-sm text-muted-foreground">
              Para calcular la migraci&oacute;n neta intercensal a partir del crecimiento de la poblaci&oacute;n.
              Es el m&eacute;todo m&aacute;s seguido y sencillo, aunque depende de la calidad del dato censal.
            </p>
            <FormulaDisplay math="MN = [P(t+n) - P(t)] - [N - D]" block />
          </ConceptCard>

          <ConceptCard title="M&eacute;todo de la poblaci&oacute;n esperada">
            <p className="text-sm text-muted-foreground">
              Basado en probabilidades de supervivencia intercensal. Se aplican tasas de
              supervivencia a la poblaci&oacute;n del primer censo para estimar qui&eacute;nes pasar&aacute;n al censo
              siguiente. La diferencia entre los supervivientes de ambos censos es el saldo
              migratorio. Se puede hacer de forma <strong>prospectiva</strong> o{" "}
              <strong>retrospectiva</strong>:
            </p>
            <div className="mt-2 space-y-1">
              <FormulaDisplay math="N_1(x) = P(x+n, t+n) - S \cdot P(x, t)" block />
              <FormulaDisplay
                math="N_2(x) = \frac{P(x+n, t+n)}{S} - P(x, t)"
                block
              />
            </div>
          </ConceptCard>
        </div>
      </section>

      {/* ===== CAUSAS Y CONSECUENCIAS ===== */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-emerald-500" />
          <h2 className="text-2xl font-semibold">Causas y consecuencias de las migraciones</h2>
        </div>

        <p className="text-sm text-muted-foreground">
          El conocimiento de los movimientos migratorios es importante no &uacute;nicamente desde un punto
          de vista demogr&aacute;fico y acad&eacute;mico, sino que es clave en la intervenci&oacute;n p&uacute;blica y las
          pol&iacute;ticas a desarrollar.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <ConceptCard title="Envejecimiento de la estructura demogr&aacute;fica">
            <p className="text-sm text-muted-foreground">
              Las migraciones suelen afectar a las personas j&oacute;venes. Los territorios en v&iacute;as de
              desarrollo ven envejecer su poblaci&oacute;n al emigrar los j&oacute;venes econ&oacute;micamente activos a
              otras zonas, provocando un aumento de las tasas de dependencia y de mortalidad, y
              reduciendo la natalidad.
            </p>
          </ConceptCard>

          <ConceptCard title="Rejuvenecimiento de estructuras demogr&aacute;ficas">
            <p className="text-sm text-muted-foreground">
              En los pa&iacute;ses desarrollados que reciben flujo migratorio (j&oacute;venes y econ&oacute;micamente
              activos) se produce un rejuvenecimiento de la poblaci&oacute;n, incrementando el n&uacute;mero de
              activos y contribuyendo al sistema social a medio y largo plazo.
            </p>
          </ConceptCard>

          <ConceptCard title="Pa&iacute;ses desarrollados">
            <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
              <li>Prima la inmigraci&oacute;n sobre la emigraci&oacute;n</li>
              <li>La inmigraci&oacute;n incrementa la oferta de trabajo</li>
              <li>Posible reducci&oacute;n de salarios e incremento de la tasa de paro a corto plazo</li>
              <li>Contribuci&oacute;n al sistema social a largo plazo</li>
            </ul>
          </ConceptCard>

          <ConceptCard title="Pa&iacute;ses en desarrollo">
            <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
              <li>Prima la emigraci&oacute;n sobre la inmigraci&oacute;n</li>
              <li>La emigraci&oacute;n provoca envejecimiento de sus poblaciones</li>
              <li>Se reduce la oferta de empleo pero puede producir desamortizaci&oacute;n y deflaci&oacute;n</li>
            </ul>
          </ConceptCard>
        </div>

        <ConceptCard title="Demandas de la poblaci&oacute;n">
          <p className="text-sm text-muted-foreground">
            Los movimientos migratorios alteran las demandas sobre los equipamientos y servicios
            p&uacute;blicos, tanto en t&eacute;rminos absolutos (por cambios en el volumen total poblacional) como
            relativos (demanda diferenciada de servicios seg&uacute;n composici&oacute;n interna de la poblaci&oacute;n).
            Para la planificaci&oacute;n territorial es clave tener previsiones significativas sobre los
            posibles futuros movimientos migratorios.
          </p>
        </ConceptCard>
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
              El saldo migratorio y c&oacute;mo se estima (casi nunca se mide directamente).
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
              La diferencia entre tasas brutas (TBI, TBE, TMB, TNM) y por qu&eacute; la TBI no es una verdadera tasa.
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
              El ISM como resumen sint&eacute;tico de la movilidad migratoria.
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-0.5 shrink-0 text-emerald-500" />
              C&oacute;mo leer una matriz de flujos origen-destino.
            </li>
          </ul>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-emerald-200 dark:border-emerald-800">
            <Link href="/tema-3/ejercicios/t3-b">
              <Badge className="cursor-pointer bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-800/50">
                Practica con los ejercicios de migraciones <ChevronRight className="h-3 w-3 inline" />
              </Badge>
            </Link>
            <Link href="/tema-3/natalidad">
              <Badge variant="outline" className="cursor-pointer border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30">
                Anterior: Natalidad <ChevronRight className="h-3 w-3 inline" />
              </Badge>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
