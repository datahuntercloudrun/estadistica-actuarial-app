import { ConceptCard } from "@/components/theory/concept-card";
import { DefinitionBlock } from "@/components/theory/definition-block";
import { FormulaDisplay } from "@/components/theory/formula-display";
import { FormulaCard } from "@/components/theory/formula-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Calendar,
  Users,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  HelpCircle,
  BookOpen,
  Timer,
  Layers,
  TrendingUp,
  Camera,
  Film,
  Link2,
} from "lucide-react";

export default function Tema2ConceptosPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* ============================================================
          HERO HEADER con gradiente p&uacute;rpura
          ============================================================ */}
      <div className="relative overflow-hidden rounded-xl border border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 dark:from-purple-950/30 dark:via-violet-950/30 dark:to-fuchsia-950/30 p-6 sm:p-8">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Badge className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700">
              Tema 2
            </Badge>
            <Badge variant="outline">Teor&iacute;a</Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 dark:from-purple-300 dark:via-violet-300 dark:to-fuchsia-300 bg-clip-text text-transparent">
            2.1 Conceptos y Definiciones
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            El tratamiento del tiempo en demograf&iacute;a: tiempo biom&eacute;trico y
            f&iacute;sico, la identidad fundamental, cohortes, generaciones, l&iacute;neas
            de vida, efectivos y acontecimientos.
          </p>
        </div>
        {/* Decoraci&oacute;n de fondo */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-fuchsia-200/30 dark:bg-fuchsia-800/20 rounded-full blur-3xl" />
      </div>

      {/* ============================================================
          ANTES DE EMPEZAR - Prerequisitos
          ============================================================ */}
      <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/10">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
            <BookOpen className="h-5 w-5 text-amber-500" />
            Antes de empezar
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-amber-900 dark:text-amber-100 space-y-2">
          <p>
            Para entender este tema necesitas tener claros los conceptos del{" "}
            <a
              href="/tema-1/conceptos"
              className="font-medium underline underline-offset-2 hover:text-amber-700 dark:hover:text-amber-300"
            >
              Tema 1: Conceptos b&aacute;sicos de demograf&iacute;a
            </a>{" "}
            y las{" "}
            <a
              href="/tema-1/fuentes"
              className="font-medium underline underline-offset-2 hover:text-amber-700 dark:hover:text-amber-300"
            >
              fuentes de datos demogr&aacute;ficos
            </a>
            . En particular:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              &iquest;Qu&eacute; es una poblaci&oacute;n en sentido demogr&aacute;fico?
            </li>
            <li>
              Diferencia entre poblaci&oacute;n abierta y cerrada
            </li>
            <li>
              An&aacute;lisis longitudinal vs. transversal (aqu&iacute; lo profundizaremos)
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* ============================================================
          &iquest;QU&Eacute; PREGUNTA RESPONDE ESTA SECCI&Oacute;N?
          ============================================================ */}
      <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/10">
        <CardContent className="flex items-start gap-3 pt-5 pb-5">
          <HelpCircle className="h-6 w-6 text-purple-500 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-purple-800 dark:text-purple-200">
              &iquest;Qu&eacute; pregunta responde esta secci&oacute;n?
            </p>
            <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
              &iquest;C&oacute;mo medimos y representamos el paso del tiempo en
              demograf&iacute;a? &iquest;Qu&eacute; relaci&oacute;n hay entre la edad de
              una persona, el a&ntilde;o en que naci&oacute; y la fecha actual? Y sobre
              todo: &iquest;c&oacute;mo organizamos a las personas en grupos para poder
              estudiar fen&oacute;menos como la mortalidad, la fecundidad o las
              migraciones?
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ============================================================
          TIEMPO BIOM&Eacute;TRICO Y F&Iacute;SICO
          ============================================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Clock className="h-6 w-6 text-purple-500" />
          Tiempo biom&eacute;trico y tiempo f&iacute;sico
        </h2>

        <p className="text-muted-foreground">
          En las ciencias sociales la dimensi&oacute;n temporal es esencial dado que los
          fen&oacute;menos demogr&aacute;ficos se mueven, var&iacute;an y evolucionan sobre
          el mismo. Para el dem&oacute;grafo o el actuario es fundamental conocer la
          estructura por edades de las personas que componen la poblaci&oacute;n.
        </p>

        {/* Analog&iacute;a Feynman */}
        <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/10">
          <CardContent className="flex items-start gap-3 pt-5 pb-5">
            <Lightbulb className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
            <div className="text-sm text-purple-800 dark:text-purple-200">
              <p className="font-medium">
                Piensa en dos relojes diferentes:
              </p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>
                  <strong>Tu reloj personal</strong> (biom&eacute;trico): mide
                  cu&aacute;nto has vivido, como un cron&oacute;metro que empez&oacute; a
                  correr cuando naciste. Para ti marca 20 a&ntilde;os, para tu abuela marca
                  75.
                </li>
                <li>
                  <strong>El calendario de la pared</strong> (cronol&oacute;gico): mide en
                  qu&eacute; fecha estamos, independientemente de tu edad. Para todos marca
                  el mismo d&iacute;a.
                </li>
              </ul>
              <p className="mt-2">
                En demograf&iacute;a necesitamos <em>ambos</em> relojes porque no basta
                saber <em>cu&aacute;ndo</em> pas&oacute; algo: tambi&eacute;n importa
                <em> a qu&eacute; edad</em> le ocurri&oacute; a esa persona.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <DefinitionBlock term="Tiempo biom&eacute;trico (duraci&oacute;n / edad exacta)">
            <p>
              Hace referencia a la <strong>medida de la vida</strong>, esto es, a
              la edad de las personas que componen el colectivo de estudio. Mide
              el tiempo transcurrido desde el evento o fen&oacute;meno demogr&aacute;fico
              hasta el momento de observaci&oacute;n.
            </p>
          </DefinitionBlock>

          <DefinitionBlock term="Tiempo f&iacute;sico (cronol&oacute;gico / calendario)">
            <p>
              Hace referencia a la <strong>&eacute;poca que se est&aacute; viviendo</strong>,
              a una fecha determinada, a un per&iacute;odo concreto. Se refiere al
              per&iacute;odo o momento en el que se observa el fen&oacute;meno o
              fen&oacute;menos demogr&aacute;ficos (fecha o per&iacute;odo).
            </p>
          </DefinitionBlock>
        </div>
      </section>

      {/* ============================================================
          TRES DIMENSIONES TEMPORALES
          ============================================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Layers className="h-6 w-6 text-purple-500" />
          Las tres dimensiones temporales
        </h2>

        <p className="text-muted-foreground">
          F&iacute;jate en que la demograf&iacute;a trabaja con <strong>tres
          coordenadas</strong>, no solo dos. Todo lo que le ocurre a una persona se
          puede localizar conociendo estas tres dimensiones (aunque basta con dos,
          porque la tercera se deduce):
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-t-4 border-t-blue-500">
            <CardHeader>
              <CardTitle>
                <h3 className="text-base flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  Tiempo cronol&oacute;gico
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                El per&iacute;odo o momento en el que se observa el fen&oacute;meno
                demogr&aacute;fico. Se representa con{" "}
                <FormulaDisplay math="t" /> (fecha o per&iacute;odo del calendario).
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-green-500">
            <CardHeader>
              <CardTitle>
                <h3 className="text-base flex items-center gap-1.5">
                  <Timer className="h-4 w-4 text-green-500" />
                  Duraci&oacute;n (edad exacta)
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                El tiempo que transcurre desde el evento o fen&oacute;meno demogr&aacute;fico
                hasta el momento en el que se hace el estudio. Se representa
                con <FormulaDisplay math="d" />.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-purple-500">
            <CardHeader>
              <CardTitle>
                <h3 className="text-base flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-purple-500" />
                  Cohorte
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                El momento del evento origen que define al grupo. Se representa
                con <FormulaDisplay math="c" />. Cuando el evento origen es el
                nacimiento, la cohorte se denomina{" "}
                <strong>generaci&oacute;n</strong>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ============================================================
          IDENTIDAD FUNDAMENTAL
          ============================================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Link2 className="h-6 w-6 text-purple-500" />
          La identidad fundamental
        </h2>

        {/* Analog&iacute;a Feynman */}
        <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/10">
          <CardContent className="flex items-start gap-3 pt-5 pb-5">
            <Lightbulb className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
            <div className="text-sm text-purple-800 dark:text-purple-200">
              <p className="font-medium">
                En otras palabras...
              </p>
              <p className="mt-1">
                Si naciste en 1990 (<FormulaDisplay math="c = 1990" />)
                y tienes 35 a&ntilde;os (<FormulaDisplay math="d = 35" />),
                el calendario marca 2025 (<FormulaDisplay math="t = 2025" />).
                <strong> Siempre se cumple.</strong> Es como decir:
                &laquo;a&ntilde;o de nacimiento + edad = a&ntilde;o actual&raquo;.
                Parece obvio, pero esta relaci&oacute;n tan simple es la que sostiene
                todo el diagrama de Lexis.
              </p>
            </div>
          </CardContent>
        </Card>

        <FormulaCard
          name="Identidad fundamental de la demograf&iacute;a"
          abbreviation="c + d = t"
          fórmula="c + d = t"
          description="Relaci&oacute;n que vincula las tres dimensiones temporales: el momento del evento origen (cohorte), la duraci&oacute;n transcurrida (edad exacta) y el momento calendario de observaci&oacute;n."
          variables={[
            { symbol: "c", meaning: "Cohorte (momento del evento origen)" },
            { symbol: "d", meaning: "Duraci\u00f3n (edad exacta)" },
            { symbol: "t", meaning: "Momento calendario (tiempo f\u00edsico)" },
          ]}
        />

        {/* CUIDADO CON... */}
        <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/10">
          <CardContent className="flex items-start gap-3 pt-5 pb-5">
            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
            <div className="text-sm text-amber-900 dark:text-amber-100">
              <p className="font-semibold">
                Cuidado con las edades enteras
              </p>
              <p className="mt-1">
                En la pr&aacute;ctica tomamos la edad como variable{" "}
                <strong>discreta</strong> (a&ntilde;os cumplidos), aunque en realidad es
                continua. Esto crea un problema: la identidad no siempre
                &laquo;cuadra&raquo; si no sabemos la fecha exacta del
                cumplea&ntilde;os.
              </p>
            </div>
          </CardContent>
        </Card>

        <ConceptCard title="Problemas de la identidad fundamental">
          <p className="text-sm text-muted-foreground">
            Generalmente se toma la edad como una variable de tipo discreto
            (siendo en realidad continua). Al tomar edades enteras, la igualdad
            presenta el problema de tener que definir el momento exacto en el que
            se realiza la identidad, para poder determinar si se incluye o no la
            edad cumplida en el a&ntilde;o de calendario.
          </p>
          <div className="mt-3 bg-muted/50 p-3 rounded-md text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Ejemplo:</p>
            <p>
              Una persona nacida en 1977 que cumple a&ntilde;os en abril, en el a&ntilde;o de
              calendario 2017, tendr&aacute; 39 a&ntilde;os a principio de a&ntilde;o y 40
              al final:
            </p>
            <ul className="mt-1 list-disc pl-5 space-y-1">
              <li>
                El 1/01/2017: <FormulaDisplay math="1977 + 39 = 2016" /> (no
                coincide con 2017)
              </li>
              <li>
                El 31/12/2017: <FormulaDisplay math="1977 + 40 = 2017" />{" "}
                (coincide)
              </li>
            </ul>
          </div>
        </ConceptCard>

        <ConceptCard title="Formas de expresar la edad">
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li>
              <strong>A&ntilde;os cumplidos:</strong> n&uacute;mero de a&ntilde;os enteros
              vividos y cumplidos desde el nacimiento
            </li>
            <li>
              <strong>A&ntilde;os iniciados:</strong> n&uacute;mero de a&ntilde;os que se han
              iniciado tras el nacimiento
            </li>
            <li>
              <strong>Edad redondeada:</strong> al aniversario m&aacute;s pr&oacute;ximo
            </li>
            <li>
              <strong>Mediante intervalos</strong> o como diferencia entre el a&ntilde;o
              actual y el de nacimiento
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-3">
            Generalmente se usar&aacute;n hip&oacute;tesis para las edades no enteras, siendo
            frecuente la <strong>hip&oacute;tesis de uniformidad</strong> (toda la
            poblaci&oacute;n produce el hecho demogr&aacute;fico a mitad de a&ntilde;o) u
            otros ajustes e interpolaciones.
          </p>
        </ConceptCard>
      </section>

      {/* ============================================================
          COHORTES Y GENERACIONES
          ============================================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Users className="h-6 w-6 text-purple-500" />
          Cohortes y generaciones
        </h2>

        {/* Analog&iacute;a Feynman */}
        <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/10">
          <CardContent className="flex items-start gap-3 pt-5 pb-5">
            <Lightbulb className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
            <div className="text-sm text-purple-800 dark:text-purple-200">
              <p className="font-medium">
                Piensa en una &laquo;promoci&oacute;n&raquo;
              </p>
              <p className="mt-1">
                Una <strong>cohorte</strong> es como la &laquo;promoci&oacute;n&raquo; de
                algo: la promoci&oacute;n de matrimonios del 94, la promoci&oacute;n de
                licenciados de 2018... Un grupo de personas que vivieron el mismo evento
                en el mismo per&iacute;odo. La <strong>generaci&oacute;n</strong> es
                simplemente la &laquo;promoci&oacute;n de nacimientos&raquo;: los que
                nacieron el mismo a&ntilde;o.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <DefinitionBlock term="Cohorte">
            <p>
              Grupo de personas sobre las que se da un hecho demogr&aacute;fico
              com&uacute;n, vivido en el mismo per&iacute;odo. Ejemplos: personas que han
              contra&iacute;do matrimonio en el a&ntilde;o 1995, personas que emigraron en
              1940, etc.
            </p>
          </DefinitionBlock>

          <DefinitionBlock term="Generaci&oacute;n">
            <p>
              Caso particular de la cohorte en la que el hecho demogr&aacute;fico
              considerado es el <strong>nacimiento</strong>. Es decir, el grupo
              de individuos nacidos el mismo a&ntilde;o.
            </p>
          </DefinitionBlock>
        </div>

        <Card className="bg-muted/40">
          <CardContent className="pt-4">
            <p className="text-sm">
              <strong>Nota:</strong> En otros pa&iacute;ses, a las cohortes que no se
              corresponden con la generaci&oacute;n de nacimientos se les denomina{" "}
              <strong>promoci&oacute;n</strong> (promoci&oacute;n de matrimonios del 94,
              promoci&oacute;n de licenciados del 2018, etc.).
            </p>
          </CardContent>
        </Card>
      </section>

      {/* ============================================================
          L&Iacute;NEAS DE VIDA
          ============================================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-purple-500" />
          L&iacute;neas de vida
        </h2>

        {/* Analog&iacute;a Feynman */}
        <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/10">
          <CardContent className="flex items-start gap-3 pt-5 pb-5">
            <Lightbulb className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
            <div className="text-sm text-purple-800 dark:text-purple-200">
              <p className="font-medium">
                Imagina un papel cuadriculado
              </p>
              <p className="mt-1">
                Cada persona dibuja una l&iacute;nea que sube en diagonal, como
                una <strong>escalera mec&aacute;nica</strong>. Por cada a&ntilde;o que
                pasa (avanzas un cuadro a la derecha), envejeces un a&ntilde;o (subes un
                cuadro). Por eso la l&iacute;nea siempre tiene un &aacute;ngulo de 45
                grados. Personas nacidas el mismo a&ntilde;o tienen l&iacute;neas paralelas
                (como varias personas subidas en la misma escalera mec&aacute;nica).
              </p>
            </div>
          </CardContent>
        </Card>

        <DefinitionBlock term="L&iacute;nea de vida">
          <p>
            La l&iacute;nea de vida se refiere a la cohorte de pertenencia de un
            individuo (generalmente la generaci&oacute;n). Si se estudian otros
            fen&oacute;menos demogr&aacute;ficos, se consideran l&iacute;neas de vida
            desde el momento del nacimiento de estos hechos (por ejemplo,
            matrimonio). En el diagrama de Lexis, las l&iacute;neas de vida se
            representan como{" "}
            <strong>diagonales a 45 grados</strong>, ya que por cada a&ntilde;o
            calendario que pasa, la persona envejece un a&ntilde;o exacto.
          </p>
        </DefinitionBlock>
      </section>

      {/* ============================================================
          EFECTIVOS (STOCKS) Y ACONTECIMIENTOS (FLUJOS)
          ============================================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Layers className="h-6 w-6 text-purple-500" />
          Efectivos (stocks) y acontecimientos (flujos)
        </h2>

        {/* Analog&iacute;a Feynman */}
        <Card className="border-purple-200 dark:border-purple-800 bg-purple-50/30 dark:bg-purple-950/10">
          <CardContent className="flex items-start gap-3 pt-5 pb-5">
            <Lightbulb className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
            <div className="text-sm text-purple-800 dark:text-purple-200">
              <p className="font-medium">
                Foto vs. pel&iacute;cula
              </p>
              <p className="mt-1">
                Un <strong>stock</strong> es como una{" "}
                <strong>foto instant&aacute;nea</strong>: congelas un momento y cuentas
                cu&aacute;ntas personas hay con una caracter&iacute;stica concreta
                (por ejemplo, cu&aacute;ntos tienen 30 a&ntilde;os el 1 de enero de 2025).
                Un <strong>flujo</strong> es como una{" "}
                <strong>pel&iacute;cula que grabas durante todo un a&ntilde;o</strong>:
                cuentas cu&aacute;ntos nacimientos, muertes o matrimonios ocurren a lo
                largo de un per&iacute;odo.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>
                <h3 className="text-lg flex items-center gap-2">
                  <Camera className="h-5 w-5 text-blue-500" />
                  Stocks
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>
                Recuentos de efectivos en un{" "}
                <strong>momento temporal concreto</strong> (foto fija). Corte
                transversal.
              </p>
              <p>
                <strong>Efectivos</strong> son aquellos que responden a la
                caracter&iacute;stica o hecho demogr&aacute;fico de estudio (nacidos,
                casados, muertos, migrantes, etc.).
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>
                <h3 className="text-lg flex items-center gap-2">
                  <Film className="h-5 w-5 text-green-500" />
                  Flujos (acontecimientos)
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>
                Afectan siempre a un{" "}
                <strong>per&iacute;odo de tiempo</strong> y no a un instante, fecha o
                momento concreto. Son los nacimientos, muertes, migraciones,
                matrimonios a lo largo de un per&iacute;odo.
              </p>
              <p>
                Se distinguen en <strong>Aniversarios</strong> (hechos expresados
                en edades exactas, sin amplitud temporal) y{" "}
                <strong>Flujos en sentido estricto</strong> (flujos b&aacute;sicos a lo
                largo de un per&iacute;odo).
              </p>
            </CardContent>
          </Card>
        </div>

        <ConceptCard title="Tipos de flujos">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="space-y-1 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Renovables</p>
              <p>
                Se pueden experimentar varias veces a lo largo de la existencia
                (matrimonio, migraci&oacute;n, maternidad...). Algunos pueden
                clasificarse jur&iacute;dicamente como no renovables (p.ej. primeras
                nupcias).
              </p>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">No renovables</p>
              <p>
                El hecho m&aacute;s ejemplificador es la muerte: solo puede ocurrir una
                vez.
              </p>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">
                Ineludibles o fatales
              </p>
              <p>
                No sabemos el momento en que ocurrir&aacute;, pero sabemos que
                ocurrir&aacute; (la muerte).
              </p>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Irreversibles</p>
              <p>
                Una vez que ocurre, no puede volver a darse. La maternidad es
                renovable pero irreversible (se causa con el primer hijo y se
                mantiene de por vida). La muerte es el hecho irreversible m&aacute;s
                evidente.
              </p>
            </div>
          </div>
        </ConceptCard>
      </section>

      {/* ============================================================
          AN&Aacute;LISIS LONGITUDINAL VS. TRANSVERSAL
          ============================================================ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          An&aacute;lisis longitudinal vs. transversal
        </h2>

        <p className="text-muted-foreground">
          Estos dos enfoques son las dos maneras b&aacute;sicas de &laquo;mirar&raquo;
          los datos demogr&aacute;ficos. Piensa en ello as&iacute;: el an&aacute;lisis{" "}
          <strong>transversal</strong> es como cortar una tarta horizontalmente
          (ves todas las capas de edad en un a&ntilde;o), mientras que el{" "}
          <strong>longitudinal</strong> es como seguir una sola capa a lo largo del
          tiempo.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <ConceptCard title="An&aacute;lisis longitudinal">
            <p className="text-sm text-muted-foreground">
              Estudia <strong>un fen&oacute;meno demogr&aacute;fico</strong> en{" "}
              <strong>una cohorte</strong> a lo largo del tiempo. Se requieren
              largas series de tiempo y, en ocasiones, esperar a que se agoten
              todas las l&iacute;neas de vida, lo que lo hace poco pr&aacute;ctico. Suele
              tomarse la informaci&oacute;n de forma retrospectiva.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Se corresponde con las superficies{" "}
              <strong>per&iacute;odo-cohorte</strong> y{" "}
              <strong>cohorte-edad</strong> del diagrama de Lexis.
            </p>
          </ConceptCard>

          <ConceptCard title="An&aacute;lisis transversal">
            <p className="text-sm text-muted-foreground">
              Estudia la ocurrencia de{" "}
              <strong>un fen&oacute;meno demogr&aacute;fico</strong> durante un
              per&iacute;odo de tiempo (por ejemplo un a&ntilde;o), involucrando al{" "}
              <strong>conjunto de cohortes</strong>.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Se corresponde con la superficie{" "}
              <strong>per&iacute;odo-edad</strong> (cuadrado) del diagrama de Lexis.
            </p>
          </ConceptCard>
        </div>

        <ConceptCard title="Cohorte / generaci&oacute;n ficticia">
          <p className="text-sm text-muted-foreground">
            Conjunto construido bajo el supuesto de comportamientos similares con
            datos de las distintas cohortes del an&aacute;lisis transversal. Esto
            permite que hagamos c&aacute;lculos de tipo longitudinal sin esperar a que
            el fen&oacute;meno se d&eacute; de forma completa.
          </p>
        </ConceptCard>

        <ConceptCard title="Intensidad de un fen&oacute;meno demogr&aacute;fico">
          <p className="text-sm text-muted-foreground">
            N&uacute;mero total de acontecimientos que afectan a una cohorte en
            relaci&oacute;n al colectivo inicial. Se suele tomar como la frecuencia
            relativa o n&uacute;mero medio de acontecimientos por individuo de la
            cohorte.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            La intensidad de la mortalidad es siempre{" "}
            <FormulaDisplay math="1" />, ya que todos los individuos de una
            generaci&oacute;n acaban muriendo.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Si la intensidad y el calendario de un fen&oacute;meno no var&iacute;an
            respecto del tiempo, se dice que el fen&oacute;meno es{" "}
            <strong>estacionario</strong>.
          </p>
        </ConceptCard>
      </section>

      {/* ============================================================
          CONEXI&Oacute;N CON EL SIGUIENTE TEMA
          ============================================================ */}
      <Card className="border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/10">
        <CardContent className="pt-5 pb-5 space-y-3">
          <div className="flex items-center gap-2">
            <ArrowRight className="h-5 w-5 text-emerald-500" />
            <p className="font-semibold text-emerald-800 dark:text-emerald-200">
              Lo que has aprendido y lo que viene
            </p>
          </div>
          <div className="text-sm text-emerald-900 dark:text-emerald-100 space-y-2">
            <p>
              <strong>En esta secci&oacute;n has aprendido</strong> las tres coordenadas
              temporales de la demograf&iacute;a (tiempo cronol&oacute;gico, duraci&oacute;n
              y cohorte), c&oacute;mo se relacionan con la identidad{" "}
              <FormulaDisplay math="c + d = t" />, qu&eacute; son las l&iacute;neas de
              vida, y la diferencia entre stocks (fotos) y flujos (pel&iacute;culas).
            </p>
            <p>
              <strong>En la siguiente secci&oacute;n</strong> ver&aacute;s el{" "}
              <a
                href="/tema-2/diagrama-lexis"
                className="font-medium underline underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-300"
              >
                Diagrama de Lexis
              </a>
              , la herramienta gr&aacute;fica que permite representar{" "}
              <em>todo lo anterior</em> en un solo dibujo: las tres dimensiones, las
              l&iacute;neas de vida, los stocks como l&iacute;neas y los flujos como
              superficies coloreadas.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
