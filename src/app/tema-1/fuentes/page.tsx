import { ConceptCard } from "@/components/theory/concept-card";
import { DefinitionBlock } from "@/components/theory/definition-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Database,
  Lightbulb,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Building2,
  Globe,
  Users,
  FileText,
  ClipboardList,
  Camera,
  CalendarClock,
  Baby,
  Heart,
  Plane,
  Eye,
} from "lucide-react";

export default function Tema1FuentesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* ===== HERO ===== */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-sky-950/30 border border-white/50 dark:border-white/5 p-6 sm:p-8">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-300/20 dark:bg-blue-700/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-indigo-300/20 dark:bg-indigo-700/10 rounded-full blur-3xl" />
        <div className="relative space-y-3">
          <Badge className="bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs backdrop-blur-sm">
            Tema 1 &middot; Secci&oacute;n 2
          </Badge>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-sm shadow-sm">
              <Database className="h-6 w-6 text-blue-500" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-blue-300 dark:via-indigo-300 dark:to-sky-300 bg-clip-text text-transparent">
              1.2 Fuentes de Informaci&oacute;n
            </h1>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            Principales fuentes de datos demogr&aacute;ficos en Espa&ntilde;a: INEbase, el
            Padr&oacute;n Continuo Municipal, los Censos de poblaci&oacute;n y el registro de
            fen&oacute;menos demogr&aacute;ficos (Movimiento Natural de la Poblaci&oacute;n).
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
                Para sacarle partido a esta secci&oacute;n, conviene haber le&iacute;do la secci&oacute;n
                1.1 (Conceptos y Definiciones). All&iacute; definimos qu&eacute; es una poblaci&oacute;n,
                la diferencia entre stocks y flujos, y los tipos de an&aacute;lisis. Ahora
                veremos <strong>de d&oacute;nde salen los datos</strong> que alimentan todo ese
                an&aacute;lisis.
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
                &laquo;&iquest;De d&oacute;nde sacamos los datos sobre la poblaci&oacute;n
                espa&ntilde;ola y qu&eacute; nos dice cada fuente?&raquo;
              </p>
              <p className="text-sm text-muted-foreground">
                En otras palabras: ya sabemos qu&eacute; queremos medir. Ahora necesitamos
                saber <strong>d&oacute;nde buscar la informaci&oacute;n</strong> y qu&eacute;
                limitaciones tiene cada fuente.
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
              <Building2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-medium text-blue-800 dark:text-blue-200">
                Piensa en esto...
              </p>
              <p className="text-muted-foreground">
                Ahora que sabes qu&eacute; es una poblaci&oacute;n, &iquest;de d&oacute;nde sacamos los
                datos? Es como si tu ayuntamiento tuviera <strong>tres cajones
                principales</strong> donde guarda la informaci&oacute;n de sus vecinos:
              </p>
              <ul className="text-muted-foreground space-y-2 mt-1">
                <li className="flex items-start gap-2">
                  <ClipboardList className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>
                    <strong>El Padr&oacute;n</strong> &mdash; como la lista actualizada del
                    colegio: se actualiza cada a&ntilde;o y sabe qui&eacute;n est&aacute; matriculado.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Camera className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>
                    <strong>El Censo</strong> &mdash; como la foto de familia: cada 10 a&ntilde;os,
                    todo el mundo se pone delante de la c&aacute;mara.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                  <span>
                    <strong>El MNP</strong> &mdash; como el parte diario: registra continuamente
                    cada nacimiento, cada defunci&oacute;n, cada boda.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* -------- INEbase -------- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Globe className="h-5 w-5 text-blue-500" />
          INEbase
        </h2>

        <DefinitionBlock term="INEbase">
          <p>
            Sistema de difusi&oacute;n de informaci&oacute;n estad&iacute;stica del Instituto Nacional
            de Estad&iacute;stica (INE). Dentro del &aacute;rea{" "}
            <strong>Demograf&iacute;a y poblaci&oacute;n</strong> se encuentran las tres
            fuentes principales de datos demogr&aacute;ficos:
          </p>
        </DefinitionBlock>

        <p className="text-sm text-muted-foreground italic">
          F&iacute;jate en que el INE no &laquo;inventa&raquo; datos: los recoge, coordina y
          publica. Es el intermediario oficial entre los registros municipales y los
          investigadores (o estudiantes como nosotros).
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-t-4 border-t-blue-500">
            <CardHeader>
              <CardTitle>
                <h3 className="text-base flex items-center gap-2">
                  <ClipboardList className="h-4 w-4 text-blue-500" />
                  Padr&oacute;n
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Poblaci&oacute;n y sus caracter&iacute;sticas a nivel municipal.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-green-500">
            <CardHeader>
              <CardTitle>
                <h3 className="text-base flex items-center gap-2">
                  <Camera className="h-4 w-4 text-green-500" />
                  Censo
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cifras de poblaci&oacute;n y censos demogr&aacute;ficos cada 10 a&ntilde;os.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-orange-500">
            <CardHeader>
              <CardTitle>
                <h3 className="text-base flex items-center gap-2">
                  <FileText className="h-4 w-4 text-orange-500" />
                  Fen&oacute;menos demogr&aacute;ficos
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Nacimientos, defunciones, matrimonios y migraciones.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Resumen comparativo */}
        <Card>
          <CardHeader>
            <CardTitle>
              <h3 className="text-lg">Resumen comparativo</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 pr-4 text-left font-semibold">
                      Fuente
                    </th>
                    <th className="py-2 pr-4 text-left font-semibold">
                      Estudia
                    </th>
                    <th className="py-2 pr-4 text-left font-semibold">
                      Frecuencia
                    </th>
                    <th className="py-2 text-left font-semibold">
                      Limitaciones
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium text-foreground">
                      Padr&oacute;n
                    </td>
                    <td className="py-2 pr-4">
                      Poblaci&oacute;n y sus caracter&iacute;sticas
                    </td>
                    <td className="py-2 pr-4">Anual (1 de enero)</td>
                    <td className="py-2">Algunos gaps de informaci&oacute;n</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium text-foreground">
                      Censo
                    </td>
                    <td className="py-2 pr-4">
                      Poblaci&oacute;n y sus caracter&iacute;sticas
                    </td>
                    <td className="py-2 pr-4">Cada 10 a&ntilde;os</td>
                    <td className="py-2">Periodicidad larga</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-foreground">
                      MNP
                    </td>
                    <td className="py-2 pr-4">
                      Nacimientos, defunciones, matrimonios, migraciones
                    </td>
                    <td className="py-2 pr-4">Continuo (mensual)</td>
                    <td className="py-2">&mdash;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-amber-50/50 dark:bg-amber-950/10 border-amber-200 dark:border-amber-800">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                  Cuidado con confundir Padr&oacute;n y Censo
                </p>
                <p className="text-sm text-muted-foreground">
                  Ambos miden &laquo;poblaci&oacute;n y sus caracter&iacute;sticas&raquo;, pero son
                  muy diferentes. El <strong>Padr&oacute;n</strong> es un registro administrativo
                  continuo (se actualiza constantemente). El <strong>Censo</strong> es una
                  operaci&oacute;n estad&iacute;stica puntual cada 10 a&ntilde;os, mucho m&aacute;s
                  detallada pero menos frecuente.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* -------- Padr&oacute;n Continuo Municipal -------- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-blue-500" />
          Padr&oacute;n Continuo Municipal
        </h2>

        <Card className="bg-blue-50/30 dark:bg-blue-950/5 border-blue-100 dark:border-blue-900">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40 mt-0.5">
                <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-sm text-muted-foreground">
                Piensa en el padr&oacute;n como <strong>la lista actualizada del colegio</strong>.
                Cada vez que un alumno nuevo se matricula (alta), se apunta. Cada vez que uno se
                va (baja), se borra. Y una vez al a&ntilde;o, el 1 de enero, se saca una
                &laquo;foto oficial&raquo; de cu&aacute;ntos hay y qui&eacute;nes son.
              </p>
            </div>
          </CardContent>
        </Card>

        <DefinitionBlock term="Padr&oacute;n Continuo">
          <p>
            Registro administrativo que coordina el INE, resultado de un conjunto
            de procesos sobre los padrones de cada municipio (desde 1996). Supone
            una gesti&oacute;n continua e informatizada de los padrones municipales.
          </p>
        </DefinitionBlock>

        <ConceptCard title="Padrones municipales">
          <p className="text-sm text-muted-foreground">
            Registro administrativo de los vecinos de cada municipio, as&iacute; como de
            su actualizaci&oacute;n, que se obtiene cada <strong>1 de enero</strong>{" "}
            fruto de la revisi&oacute;n del padr&oacute;n municipal, aprobada por el Gobierno a
            propuesta del INE y tras un informe favorable del Consejo de
            Empadronamiento.
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>
              <strong>Altas, bajas y modificaciones</strong> de vecinos
            </li>
            <li>
              <strong>Altas por omisi&oacute;n:</strong> inmigrante del que desconocemos
              su origen
            </li>
            <li>
              <strong>Bajas por inclusi&oacute;n indebida:</strong> emigrante del que
              desconocemos su destino
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-3 italic">
            En otras palabras: si alguien aparece viviendo aqu&iacute; pero no sabemos de
            d&oacute;nde vino, es un &laquo;alta por omisi&oacute;n&raquo;. Si alguien
            figuraba en el padr&oacute;n pero resulta que ya no vive en el municipio, es
            una &laquo;baja por inclusi&oacute;n indebida&raquo;.
          </p>
        </ConceptCard>

        <ConceptCard title="&iquest;Qu&eacute; permite saber el padr&oacute;n?">
          <p className="text-sm text-muted-foreground">
            Operaciones estad&iacute;sticas peri&oacute;dicas del INE basadas en el padr&oacute;n:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>
              Cifras oficiales de poblaci&oacute;n de los municipios espa&ntilde;oles:
              Revisi&oacute;n del Padr&oacute;n Municipal
            </li>
            <li>
              Nomencl&aacute;tor: Poblaci&oacute;n del Padr&oacute;n Continuo por unidad poblacional
            </li>
            <li>Relaci&oacute;n de municipios y sus c&oacute;digos por provincias</li>
            <li>
              Estad&iacute;stica del Padr&oacute;n de espa&ntilde;oles residentes en el extranjero
            </li>
            <li>Apellidos y nombres m&aacute;s frecuentes</li>
          </ul>
        </ConceptCard>
      </section>

      {/* -------- Censos de poblaci&oacute;n -------- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Camera className="h-5 w-5 text-blue-500" />
          Censos de poblaci&oacute;n
        </h2>

        <Card className="bg-blue-50/30 dark:bg-blue-950/5 border-blue-100 dark:border-blue-900">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40 mt-0.5">
                <Camera className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-sm text-muted-foreground">
                Si el padr&oacute;n es la lista del colegio, el censo es la{" "}
                <strong>foto de familia</strong>: cada 10 a&ntilde;os, todo el mundo se coloca
                delante de la c&aacute;mara. Es mucho m&aacute;s detallada que la lista diaria,
                pero solo se hace de vez en cuando.
              </p>
            </div>
          </CardContent>
        </Card>

        <DefinitionBlock term="Censo">
          <p>
            Los Censos se hacen cada 10 a&ntilde;os. Tradicionalmente se preguntaba a
            toda la poblaci&oacute;n. Desde el Censo de 2011 la encuesta se realiza a
            una muestra del 12% (5,7 M de habitantes y 3 M de hogares),
            combinando los datos con los que obran en el padr&oacute;n continuo de
            habitantes.
          </p>
        </DefinitionBlock>

        <ConceptCard title="Caracter&iacute;sticas del censo">
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>
              El Censo de edificios se hace con referencia de coordenadas GPS
              (geolocalizaci&oacute;n), independizando la identificaci&oacute;n de cambios en
              la direcci&oacute;n postal
            </li>
            <li>
              La elaboraci&oacute;n del Censo es obligatoria por: Ley de Funci&oacute;n
              P&uacute;blica Estad&iacute;stica (1989), Plan Estad&iacute;stico Nacional y Reglamento
              763/2008 de la UE
            </li>
            <li>
              Su utilidad se da en materia educativa, social y en la toma de
              decisiones pol&iacute;ticas
            </li>
          </ul>
        </ConceptCard>

        <ConceptCard title="Operaciones estad&iacute;sticas del censo">
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>Estad&iacute;stica continua de poblaci&oacute;n</li>
            <li>Proyecciones de poblaci&oacute;n</li>
            <li>Proyecci&oacute;n de hogares</li>
            <li>Censos de Poblaci&oacute;n y Viviendas</li>
            <li>
              Encuesta de Caracter&iacute;sticas Esenciales de la Poblaci&oacute;n y las
              Viviendas
            </li>
            <li>
              Alteraciones de los municipios en los Censos de Poblaci&oacute;n desde
              1842
            </li>
          </ul>
        </ConceptCard>

        <Card className="bg-amber-50/50 dark:bg-amber-950/10 border-amber-200 dark:border-amber-800">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                  Cuidado con el Censo de 2011
                </p>
                <p className="text-sm text-muted-foreground">
                  Desde 2011, el Censo ya <strong>no pregunta a toda la poblaci&oacute;n</strong>.
                  Se encuesta al 12% y se complementa con datos del padr&oacute;n. Es un cambio
                  metodol&oacute;gico importante: reduce costes pero introduce muestreo, lo que
                  puede afectar a la precisi&oacute;n en municipios peque&ntilde;os.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* -------- Registro de fen&oacute;menos demogr&aacute;ficos -------- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <FileText className="h-5 w-5 text-blue-500" />
          Registro de fen&oacute;menos demogr&aacute;ficos
        </h2>

        <Card className="bg-blue-50/30 dark:bg-blue-950/5 border-blue-100 dark:border-blue-900">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/40 mt-0.5">
                <CalendarClock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-sm text-muted-foreground">
                Si el padr&oacute;n es la lista y el censo es la foto de familia, el registro de
                fen&oacute;menos demogr&aacute;ficos es <strong>el parte diario</strong>: cada vez que
                alguien nace, muere o se casa, se apunta. Es un registro continuo, no
                peri&oacute;dico.
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="text-muted-foreground">
          La estad&iacute;stica de fen&oacute;menos demogr&aacute;ficos se nutre de los registros
          civiles, que env&iacute;an de forma <strong>mensual</strong> tres boletines a
          las secciones territoriales del INE: nacimientos, defunciones y
          matrimonios.
        </p>

        {/* Nacimientos y partos */}
        <ConceptCard title="Estad&iacute;stica de nacimientos, MFT y partos">
          <div className="flex items-center gap-2 mb-2">
            <Baby className="h-4 w-4 text-blue-500" />
            <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs">
              Desde 1858
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Se informa de todos los nacidos, tanto el que supera las 24 horas
            (nacido vivo) como la &laquo;criatura abortiva&raquo; que ha sido
            expulsada o extra&iacute;da con vida aunque muera antes de las 24h (desde
            1975). Se considera <strong>muerte fetal tard&iacute;a (MFT)</strong> a la
            criatura con m&aacute;s de 180 d&iacute;as de gestaci&oacute;n que es muerta antes de su
            completa extracci&oacute;n. Es obligatorio su registro.
          </p>
          <div className="mt-3 space-y-2">
            <p className="text-sm text-muted-foreground">
              <strong>Nacimientos</strong> clasificados por: sexo, edad de los
              padres, tiempo de gestaci&oacute;n, peso del nacido, orden del nacimiento,
              profesi&oacute;n, nacionalidad y lugar de residencia.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Partos</strong> clasificados por: edad de los padres,
              multiplicidad, maturidad, normalidad, residencia de la madre,
              vitalidad, asistencia sanitaria.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Muertes fetales tard&iacute;as</strong> clasificadas por: edad de
              los padres, tiempo de gestaci&oacute;n, peso, orden del nacimiento,
              profesi&oacute;n y nacionalidad.
            </p>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Se realiza desde 1858. Disponible desde 1941.
          </p>
        </ConceptCard>

        {/* Defunciones */}
        <ConceptCard title="Estad&iacute;stica de defunciones">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs">
              Desde 1858
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Se nutre de la estad&iacute;stica de MFT y del bolet&iacute;n de defunci&oacute;n.
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>
              <strong>Objetivo:</strong> proporcionar informaci&oacute;n sobre
              defunciones ocurridas en el territorio espa&ntilde;ol
            </li>
            <li>
              <strong>Variables:</strong> sexo, edad, estado civil, profesi&oacute;n,
              lugar del fallecimiento y lugar de residencia
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-2">
            Se realiza desde 1858. Disponible desde 1941.
          </p>
        </ConceptCard>

        {/* Matrimonios */}
        <ConceptCard title="Estad&iacute;stica de matrimonios">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="h-4 w-4 text-blue-500" />
            <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs">
              Desde 1858
            </Badge>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>
              <strong>Objetivo:</strong> proporcionar informaci&oacute;n sobre
              matrimonios ocurridos en el territorio espa&ntilde;ol
            </li>
            <li>
              <strong>Variables:</strong> sexo, edad de los c&oacute;nyuges, estado
              civil anterior, profesi&oacute;n, forma de celebraci&oacute;n, nacionalidad y
              lugar de residencia
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-2">
            Se realiza desde 1858. Disponible desde 1941.
          </p>
        </ConceptCard>

        {/* Migraciones */}
        <ConceptCard title="Estad&iacute;stica de migraciones">
          <div className="flex items-center gap-2 mb-2">
            <Plane className="h-4 w-4 text-blue-500" />
          </div>
          <p className="text-sm text-muted-foreground">
            Objetivo: cuantificar y describir las principales caracter&iacute;sticas
            demogr&aacute;ficas de los flujos migratorios, tanto exteriores como
            interiores.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Variables estudiadas:
          </p>
          <ul className="mt-1 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>Inmigraciones procedentes del extranjero</li>
            <li>Emigraciones con destino al extranjero</li>
            <li>Migraciones interprovinciales e interauton&oacute;micas</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-2">
            Clasificadas por sexo, a&ntilde;o de nacimiento, edad, nacionalidad, pa&iacute;s
            de nacimiento y origen/destino de la migraci&oacute;n.
          </p>
        </ConceptCard>

        {/* Otros */}
        <ConceptCard title="Otras fuentes relacionadas">
          <div className="space-y-3 text-sm text-muted-foreground">
            <div>
              <p className="font-medium text-foreground">
                Estad&iacute;stica de Migraciones (EPA)
              </p>
              <p>
                Se realiza en el mismo proceso que la Encuesta de Poblaci&oacute;n
                Activa (EPA), reduciendo costes. Sin embargo, la simultaneidad
                puede subestimar el n&uacute;mero de migrantes y extranjeros, dado que
                la EPA va dirigida al mercado de trabajo.
              </p>
            </div>
            <div>
              <p className="font-medium text-foreground">
                Estad&iacute;sticas de variaci&oacute;n residencial
              </p>
              <p>
                Se obtienen flujos migratorios anuales a partir de datos de los
                padrones municipales (fuente primaria). Desde 2003 se incluyen
                las altas por omisi&oacute;n y bajas por inclusi&oacute;n indebida. Se toma el
                n&uacute;mero de migraciones (no de migrantes). Los datos se publican de
                forma agregada a nivel intermunicipal.
              </p>
            </div>
          </div>
        </ConceptCard>

        <Card className="bg-amber-50/50 dark:bg-amber-950/10 border-amber-200 dark:border-amber-800">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                  Cuidado: migraciones vs. migrantes
                </p>
                <p className="text-sm text-muted-foreground">
                  Las estad&iacute;sticas de variaci&oacute;n residencial cuentan{" "}
                  <strong>migraciones</strong>, no <strong>migrantes</strong>. Una misma persona
                  que se mude dos veces en un a&ntilde;o cuenta como dos migraciones. No confundas
                  ambas cifras en los ejercicios.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* -------- Movimiento Natural de la Poblaci&oacute;n (MNP) -------- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Database className="h-5 w-5 text-blue-500" />
          Movimiento Natural de la Poblaci&oacute;n (MNP)
        </h2>

        <DefinitionBlock term="Movimiento Natural de la Poblaci&oacute;n">
          <p>
            Conjunto de estad&iacute;sticas del INE que engloban los fen&oacute;menos
            demogr&aacute;ficos b&aacute;sicos: nacimientos, defunciones y matrimonios. La
            fuente primaria son los registros civiles, que env&iacute;an mensualmente
            los tres boletines correspondientes a las secciones territoriales del
            INE.
          </p>
        </DefinitionBlock>

        <p className="text-sm text-muted-foreground italic">
          F&iacute;jate en el nombre: &laquo;natural&raquo; porque se refiere a los eventos que
          ocurren de forma natural en una poblaci&oacute;n (nacer, morir, casarse), sin
          contar las migraciones. Es el &laquo;metabolismo&raquo; propio de la
          poblaci&oacute;n.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>
              <h3 className="text-lg">
                Operaciones estad&iacute;sticas del MNP
              </h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Estad&iacute;stica de Migraciones y Cambios de Residencia</li>
              <li>
                Estad&iacute;stica de matrimonios (Movimiento natural de la poblaci&oacute;n)
              </li>
              <li>
                Estad&iacute;stica de nacimientos (Movimiento natural de la poblaci&oacute;n)
              </li>
              <li>
                Estad&iacute;stica de defunciones (Movimiento natural de la poblaci&oacute;n)
              </li>
              <li>
                Estad&iacute;stica de adquisiciones de nacionalidad espa&ntilde;ola de
                residentes
              </li>
              <li>Indicadores demogr&aacute;ficos b&aacute;sicos</li>
              <li>Tablas de mortalidad</li>
              <li>Estimaci&oacute;n del n&uacute;mero de defunciones semanales</li>
              <li>Encuesta de fecundidad</li>
              <li>Estimaci&oacute;n mensual de nacimientos</li>
            </ul>
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
                  INEbase es el portal del INE que centraliza todas las fuentes demogr&aacute;ficas
                </li>
                <li>
                  El <strong>Padr&oacute;n</strong> (lista actualizada): registro administrativo
                  anual de vecinos por municipio
                </li>
                <li>
                  El <strong>Censo</strong> (foto de familia): operaci&oacute;n cada 10 a&ntilde;os,
                  muy detallada, desde 2011 muestral
                </li>
                <li>
                  El <strong>MNP</strong> (parte diario): registro continuo de nacimientos,
                  defunciones y matrimonios
                </li>
                <li>
                  Las estad&iacute;sticas de migraciones se obtienen tanto del MNP como de la
                  EPA y las variaciones residenciales
                </li>
              </ul>
              <div className="pt-1 border-t border-emerald-200 dark:border-emerald-800">
                <p className="text-sm text-emerald-700 dark:text-emerald-300 font-medium flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  En el siguiente tema ver&aacute;s...
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Ya tienes los conceptos y las fuentes. En el <strong>Tema 2</strong>{" "}
                  aprender&aacute;s la herramienta visual m&aacute;s potente de la demograf&iacute;a:{" "}
                  <strong>el Diagrama de Lexis</strong>. Es un gr&aacute;fico que permite
                  representar el tiempo, la edad y las cohortes simult&aacute;neamente. Con &eacute;l
                  podr&aacute;s visualizar todos los conceptos que has aprendido aqu&iacute;: stocks,
                  flujos, an&aacute;lisis transversal y longitudinal.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
