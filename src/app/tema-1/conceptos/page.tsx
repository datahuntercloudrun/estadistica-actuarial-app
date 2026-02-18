import { ConceptCard } from "@/components/theory/concept-card";
import { DefinitionBlock } from "@/components/theory/definition-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Lightbulb,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Camera,
  Video,
  Ship,
  Layers,
  Eye,
} from "lucide-react";

export default function Tema1ConceptosPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* ===== HERO ===== */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-sky-950/30 border border-white/50 dark:border-white/5 p-6 sm:p-8">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-300/20 dark:bg-blue-700/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-indigo-300/20 dark:bg-indigo-700/10 rounded-full blur-3xl" />
        <div className="relative space-y-3">
          <Badge className="bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs backdrop-blur-sm">
            Tema 1 &middot; Secci&oacute;n 1
          </Badge>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-sm shadow-sm">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-blue-300 dark:via-indigo-300 dark:to-sky-300 bg-clip-text text-transparent">
              1.1 Conceptos y Definiciones
            </h1>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            Fundamentos de la demograf&iacute;a: qu&eacute; estudia, tipos de poblaciones,
            grupos demogr&aacute;ficos y formas de an&aacute;lisis.
          </p>
        </div>
      </div>

      {/* ===== ANTES DE EMPEZAR ===== */}
      <Card className="bg-amber-50/50 dark:bg-amber-950/10 border-amber-200 dark:border-amber-800">
        <CardContent className="p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 mt-0.5">
              <BookOpen className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-amber-800 dark:text-amber-200 text-sm">
                Antes de empezar
              </p>
              <p className="text-sm text-muted-foreground">
                No necesitas ning&uacute;n conocimiento previo de demograf&iacute;a. Solo necesitas
                curiosidad y una idea b&aacute;sica de qu&eacute; es la estad&iacute;stica
                (recoger datos, organizarlos, analizarlos). Si has llegado hasta aqu&iacute;,
                ya tienes todo lo que hace falta.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ===== QUE PREGUNTA RESPONDE ===== */}
      <Card className="bg-blue-50/50 dark:bg-blue-950/10 border-blue-200 dark:border-blue-800">
        <CardContent className="p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40 mt-0.5">
              <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-blue-800 dark:text-blue-200 text-sm">
                &iquest;Qu&eacute; pregunta responde esta secci&oacute;n?
              </p>
              <p className="text-blue-800 dark:text-blue-200 font-medium text-center text-base sm:text-lg py-1">
                &laquo;&iquest;Qu&eacute; es una poblaci&oacute;n, c&oacute;mo se clasifica
                y desde qu&eacute; perspectivas se puede estudiar?&raquo;
              </p>
              <p className="text-sm text-muted-foreground">
                En otras palabras: antes de medir nada, necesitamos definir con precisi&oacute;n{" "}
                <strong>qu&eacute;</strong> vamos a medir y <strong>c&oacute;mo</strong> lo vamos
                a mirar.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ===== ANALOGIA INTRODUCTORIA ===== */}
      <Card className="bg-blue-50/30 dark:bg-blue-950/5 border-blue-100 dark:border-blue-900">
        <CardContent className="p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40 mt-0.5">
              <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-medium text-blue-800 dark:text-blue-200">
                Piensa en esto...
              </p>
              <p className="text-muted-foreground">
                Imagina que te nombran alcalde de un pueblo. Lo primero que necesitas es saber
                cu&aacute;nta gente vive all&iacute;. Pero... &iquest;a qui&eacute;n cuentas?
                &iquest;Solo a los que duermen en tu pueblo, o tambi&eacute;n a los que trabajan
                all&iacute; pero viven fuera? &iquest;Cuentas a los beb&eacute;s que nacieron
                ayer? &iquest;Y al abuelo que se acaba de mudar a otra ciudad?
              </p>
              <p className="text-muted-foreground">
                Esa es exactamente la pregunta que resuelve la demograf&iacute;a: definir con
                precisi&oacute;n <strong>qu&eacute; es una poblaci&oacute;n</strong>, c&oacute;mo
                se agrupa y c&oacute;mo cambia con el tiempo. Vamos a verlo paso a paso.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* -------- Qu&eacute; es la demograf&iacute;a -------- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          &iquest;Qu&eacute; es la demograf&iacute;a?
        </h2>

        <DefinitionBlock term="Demograf&iacute;a">
          <p>
            Del griego <em>demos</em> (pueblo) y <em>graphein</em> (describir).
            La demograf&iacute;a es la ciencia que estudia las poblaciones humanas: c&oacute;mo
            se forman, c&oacute;mo se desarrollan, qu&eacute; estructura tienen y c&oacute;mo
            desaparecen.
          </p>
        </DefinitionBlock>

        <ConceptCard title="Objeto de estudio">
          <p className="text-sm text-muted-foreground">
            La demograf&iacute;a analiza los siguientes aspectos de las poblaciones:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
            <li className="text-muted-foreground">C&oacute;mo se forman las poblaciones</li>
            <li className="text-muted-foreground">C&oacute;mo se desarrollan a lo largo del tiempo</li>
            <li className="text-muted-foreground">Qu&eacute; estructura presentan (por edad, sexo, etc.)</li>
            <li className="text-muted-foreground">C&oacute;mo desaparecen o se transforman</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-3 italic">
            F&iacute;jate en que la demograf&iacute;a no se limita a &laquo;contar personas&raquo;.
            Tambi&eacute;n quiere entender <strong>por qu&eacute;</strong> cambian las poblaciones
            y <strong>c&oacute;mo</strong> se estructuran.
          </p>
        </ConceptCard>
      </section>

      {/* -------- Concepto de poblaci&oacute;n -------- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Concepto de poblaci&oacute;n</h2>

        <p className="text-sm text-muted-foreground">
          La palabra &laquo;poblaci&oacute;n&raquo; tiene un significado diferente en
          estad&iacute;stica general y en demograf&iacute;a. Vamos a ver ambos:
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <ConceptCard title="Concepto estad&iacute;stico">
            <p className="text-sm text-muted-foreground">
              Conjunto de elementos sobre el que realizamos una serie de
              observaciones. Este colectivo debe tener, al menos, una
              caracter&iacute;stica com&uacute;n y en su estudio debe observarse cierta
              homogeneidad.
            </p>
          </ConceptCard>

          <ConceptCard title="Concepto demogr&aacute;fico">
            <p className="text-sm text-muted-foreground">
              En demograf&iacute;a, poblaci&oacute;n es el conjunto de individuos que:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>
                Est&aacute; constituido de forma estable o permanente en el tiempo (no
                es un grupo ocasional)
              </li>
              <li>
                Sus elementos est&aacute;n ligados por v&iacute;nculos reproductivos
              </li>
              <li>
                Queda identificado dentro de un &aacute;mbito espacial (territorio) y
                temporal
              </li>
              <li>
                Posee caracter&iacute;sticas de &iacute;ndole social que lo diferencian de
                otras poblaciones (religi&oacute;n, etnia, cultura, etc.)
              </li>
            </ul>
          </ConceptCard>
        </div>

        <Card className="bg-amber-50/50 dark:bg-amber-950/10 border-amber-200 dark:border-amber-800">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                  Cuidado con esta confusi&oacute;n
                </p>
                <p className="text-sm text-muted-foreground">
                  En estad&iacute;stica general, &laquo;poblaci&oacute;n&raquo; puede ser cualquier
                  conjunto (coches, tornillos, temperaturas...). En demograf&iacute;a, siempre nos
                  referimos a <strong>personas</strong> ligadas por v&iacute;nculos reproductivos
                  y un territorio com&uacute;n. No confundas ambos conceptos en el examen.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-4">
            <p className="text-sm">
              <strong>Nota actuarial:</strong> Los grupos ocasionales (como el
              colectivo asegurado en una cartera de seguros de hogar) no son
              objeto de estudio de la demograf&iacute;a, pero s&iacute; lo son de la
              estad&iacute;stica actuarial.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* -------- Poblaciones cerradas vs abiertas -------- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Poblaciones cerradas y abiertas
        </h2>

        <Card className="bg-blue-50/30 dark:bg-blue-950/5 border-blue-100 dark:border-blue-900">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40 mt-0.5">
                <Ship className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-blue-800 dark:text-blue-200">
                  Piensa en una isla sin barcos ni aviones
                </p>
                <p className="text-muted-foreground">
                  Si nadie puede entrar ni salir, la &uacute;nica forma en que cambia la
                  poblaci&oacute;n es por nacimientos y muertes. Eso es una{" "}
                  <strong>poblaci&oacute;n cerrada</strong>. Ahora imagina que construyen un
                  puerto: la gente empieza a llegar y a irse. Eso la convierte en{" "}
                  <strong>poblaci&oacute;n abierta</strong>. En la vida real, casi todas las
                  poblaciones son abiertas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <DefinitionBlock term="Poblaci&oacute;n cerrada">
            <p>
              Solo se modifica por nacimientos y defunciones. No existen
              movimientos migratorios. Es un modelo te&oacute;rico &uacute;til para simplificar
              el an&aacute;lisis.
            </p>
          </DefinitionBlock>

          <DefinitionBlock term="Poblaci&oacute;n abierta">
            <p>
              Adem&aacute;s de nacimientos y defunciones, se ve afectada por
              inmigraciones y emigraciones. Es el caso habitual de las
              poblaciones reales.
            </p>
          </DefinitionBlock>
        </div>
      </section>

      {/* -------- Grupos demogr&aacute;ficos -------- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Grupos demogr&aacute;ficos</h2>

        <p className="text-sm text-muted-foreground">
          No podemos estudiar a cada persona de forma individual (ser&iacute;an millones de datos).
          Por eso agrupamos a los individuos seg&uacute;n caracter&iacute;sticas compartidas.
          Piensa en ello como organizar los libros de una biblioteca por g&eacute;nero
          y autor, en lugar de tenerlos todos apilados sin orden.
        </p>

        <ConceptCard title="Unidades b&aacute;sicas y complejas">
          <p className="text-sm text-muted-foreground">
            La poblaci&oacute;n est&aacute; integrada por <strong>unidades b&aacute;sicas</strong>{" "}
            (individuos). Dichas unidades b&aacute;sicas forman{" "}
            <strong>unidades complejas</strong>:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>Comunidad</li>
            <li>N&uacute;cleo familiar</li>
            <li>Familia</li>
            <li>Pareja</li>
          </ul>
        </ConceptCard>

        <DefinitionBlock term="Grupo demogr&aacute;fico">
          <p>
            Conjunto de unidades (b&aacute;sicas o complejas) que comparten una o varias
            caracter&iacute;sticas comunes y que sirven de elemento diferenciador
            respecto de otros grupos. Se estudian a nivel de grupo porque resulta
            imposible conocer individualmente todas las caracter&iacute;sticas de la
            poblaci&oacute;n.
          </p>
        </DefinitionBlock>

        <ConceptCard title="Caracter&iacute;sticas principales">
          <p className="text-sm text-muted-foreground">
            Generalmente estudiamos la poblaci&oacute;n por <strong>edad</strong> o
            grupos de edades y por <strong>sexo</strong>. Son las estructuras
            esenciales para el dem&oacute;grafo y el actuario.
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>
              Fen&oacute;menos como la fecundidad y la mortalidad vienen ligados a la
              edad
            </li>
            <li>La fecundidad viene ligada al sexo</li>
            <li>
              Los fen&oacute;menos migratorios pueden ir ligados a la cultura, edad,
              sexo y momento temporal
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-3 italic">
            En otras palabras: si quieres predecir cu&aacute;ntos beb&eacute;s nacer&aacute;n el
            a&ntilde;o que viene, necesitas saber cu&aacute;ntas mujeres en edad f&eacute;rtil
            hay. La edad y el sexo son las dos variables m&aacute;s potentes en demograf&iacute;a.
          </p>
        </ConceptCard>
      </section>

      {/* -------- Stocks vs Flujos -------- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Stocks y flujos</h2>

        <p className="text-muted-foreground">
          La poblaci&oacute;n puede estudiarse desde dos perspectivas complementarias:
          una forma est&aacute;tica (stocks) y una forma din&aacute;mica (flujos).
        </p>

        <Card className="bg-blue-50/30 dark:bg-blue-950/5 border-blue-100 dark:border-blue-900">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40 mt-0.5">
                <Camera className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-blue-800 dark:text-blue-200">
                  Foto vs. v&iacute;deo
                </p>
                <p className="text-muted-foreground">
                  Piensa en un <strong>stock</strong> como sacar una <strong>foto</strong>:
                  abres la c&aacute;mara, capturas un instante y ves cu&aacute;nta gente hay en ese
                  momento exacto. Un <strong>flujo</strong> es como grabar un{" "}
                  <strong>v&iacute;deo</strong>: dejas la c&aacute;mara grabando durante un per&iacute;odo
                  (un a&ntilde;o, por ejemplo) y observas qu&eacute; cambia &mdash; qui&eacute;n nace,
                  qui&eacute;n muere, qui&eacute;n llega, qui&eacute;n se va.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>
                <h3 className="text-lg flex items-center gap-2">
                  <Camera className="h-4 w-4 text-blue-500" />
                  Stocks (forma est&aacute;tica)
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Recuentos de efectivos en un{" "}
                <strong>momento temporal concreto</strong>: un corte transversal
                en el devenir continuo de una poblaci&oacute;n. Dan una imagen est&aacute;tica,
                una &laquo;fotograf&iacute;a&raquo; de la poblaci&oacute;n.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Ejemplo:</strong> el censo, recuento de una poblaci&oacute;n con
                fecha perfectamente definida.
              </p>
              <p className="text-sm text-muted-foreground">
                Se estudian: forma, distribuci&oacute;n y estructura (por edades, sexo,
                n&uacute;mero de hijos, n&uacute;mero de matrimonios, inmigrantes/emigrantes,
                etc.).
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>
                <h3 className="text-lg flex items-center gap-2">
                  <Video className="h-4 w-4 text-green-500" />
                  Flujos (forma din&aacute;mica)
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Los cambios que experimenta una poblaci&oacute;n al estudiarla en{" "}
                <strong>dos instantes de tiempo distintos</strong> (por ejemplo,
                entre dos censos consecutivos). Afectan siempre a un{" "}
                <strong>per&iacute;odo de tiempo</strong> y no a una fecha concreta.
              </p>
              <p className="text-sm text-muted-foreground">
                Su evoluci&oacute;n depende del saldo vegetativo (nacimientos menos
                defunciones) y del saldo migratorio (inmigraciones menos
                emigraciones).
              </p>
              <p className="text-sm text-muted-foreground">
                Condicionados por: guerras, baby-boom, pol&iacute;ticas de natalidad,
                factores culturales o religiosos, etc.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-amber-50/50 dark:bg-amber-950/10 border-amber-200 dark:border-amber-800">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                  Cuidado con confundir stocks y flujos
                </p>
                <p className="text-sm text-muted-foreground">
                  Un error t&iacute;pico de examen: &laquo;la poblaci&oacute;n de Espa&ntilde;a en
                  2023&raquo; es un <strong>stock</strong> (una fecha). &laquo;Los nacimientos
                  en Espa&ntilde;a durante 2023&raquo; es un <strong>flujo</strong> (un per&iacute;odo).
                  F&iacute;jate en la pista: si dice &laquo;en un momento&raquo; o &laquo;a fecha
                  de...&raquo;, es stock. Si dice &laquo;durante&raquo; o &laquo;entre... y...&raquo;,
                  es flujo.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* -------- An&aacute;lisis transversal vs longitudinal -------- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          An&aacute;lisis transversal vs. longitudinal
        </h2>

        <Card className="bg-blue-50/30 dark:bg-blue-950/5 border-blue-100 dark:border-blue-900">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40 mt-0.5">
                <Layers className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-blue-800 dark:text-blue-200">
                  Tarta vs. documental
                </p>
                <p className="text-muted-foreground">
                  Imagina una tarta de varias capas. El <strong>an&aacute;lisis transversal</strong>{" "}
                  es como cortar la tarta horizontalmente y ver todas las capas a la vez en un
                  solo corte: observas todas las edades en un mismo a&ntilde;o.
                  El <strong>an&aacute;lisis longitudinal</strong> es como seguir a un grupo de
                  amigos durante 30 a&ntilde;os y ver c&oacute;mo les va: sigues a una misma cohorte
                  a lo largo del tiempo.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <ConceptCard title="An&aacute;lisis transversal">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs">
                El m&aacute;s habitual
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Estudia la ocurrencia de un fen&oacute;meno demogr&aacute;fico durante un{" "}
              <strong>per&iacute;odo de tiempo</strong> (por ejemplo un a&ntilde;o),
              involucrando al conjunto de cohortes. Se corresponde con la
              observaci&oacute;n <strong>per&iacute;odo-edad</strong> en el diagrama de Lexis.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Es el enfoque m&aacute;s habitual al disponer de datos de un a&ntilde;o concreto
              para todas las edades.
            </p>
          </ConceptCard>

          <ConceptCard title="An&aacute;lisis longitudinal">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs">
                Requiere m&aacute;s datos
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Estudia un fen&oacute;meno demogr&aacute;fico en{" "}
              <strong>una cohorte</strong> a lo largo del tiempo. Requiere largas
              series de datos y, en ocasiones, esperar a que se agoten todas las
              l&iacute;neas de vida, lo que lo hace poco pr&aacute;ctico. Suele realizarse de
              forma retrospectiva.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Se corresponde con las observaciones{" "}
              <strong>per&iacute;odo-cohorte</strong> y <strong>cohorte-edad</strong> en
              el diagrama de Lexis.
            </p>
          </ConceptCard>
        </div>

        <Card className="bg-amber-50/50 dark:bg-amber-950/10 border-amber-200 dark:border-amber-800">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                  Cuidado con la intuici&oacute;n
                </p>
                <p className="text-sm text-muted-foreground">
                  &laquo;Transversal&raquo; suena a &laquo;cruzar&raquo;, pero aqu&iacute; significa
                  &laquo;cortar a trav&eacute;s de todas las edades en un momento dado&raquo;.
                  &laquo;Longitudinal&raquo; no significa &laquo;largo&raquo; en el sentido
                  espacial, sino que <strong>sigue el paso del tiempo</strong> para un grupo
                  concreto. Ambos conceptos se ver&aacute;n mucho m&aacute;s claros cuando
                  trabajes con el diagrama de Lexis en el Tema 2.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ===== CONEXION FINAL ===== */}
      <Card className="bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-800">
        <CardContent className="p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 mt-0.5">
              <ArrowRight className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-emerald-800 dark:text-emerald-200 text-sm">
                Lo que has aprendido
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                <li>
                  Qu&eacute; es la demograf&iacute;a y cu&aacute;l es su objeto de estudio
                </li>
                <li>
                  La diferencia entre el concepto estad&iacute;stico y demogr&aacute;fico de poblaci&oacute;n
                </li>
                <li>
                  Poblaciones cerradas (modelo te&oacute;rico) vs. abiertas (realidad)
                </li>
                <li>
                  C&oacute;mo se agrupan los individuos en grupos demogr&aacute;ficos
                </li>
                <li>
                  Stocks (foto fija) vs. flujos (v&iacute;deo / cambio en el tiempo)
                </li>
                <li>
                  An&aacute;lisis transversal (todas las edades, un momento) vs. longitudinal (una cohorte, todo el tiempo)
                </li>
              </ul>
              <div className="pt-1 border-t border-emerald-200 dark:border-emerald-800">
                <p className="text-sm text-emerald-700 dark:text-emerald-300 font-medium flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  En la siguiente secci&oacute;n ver&aacute;s...
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Ahora que sabes qu&eacute; es una poblaci&oacute;n y c&oacute;mo se clasifica,
                  la pregunta natural es: <strong>&iquest;de d&oacute;nde sacamos los datos?</strong>{" "}
                  En la secci&oacute;n 1.2 descubrir&aacute;s las tres fuentes principales de
                  informaci&oacute;n demogr&aacute;fica en Espa&ntilde;a: el Padr&oacute;n, los Censos
                  y el Movimiento Natural de la Poblaci&oacute;n.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
