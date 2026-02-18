import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const calculadoras = [
  {
    title: "Ecuación Compensadora",
    description:
      "Calcula la población futura a partir de nacimientos, defunciones, inmigraciones y emigraciones. Resuelve para cualquier variable de la ecuación P(t+n) = P(t) + N - D + I - E.",
    href: "/calculadoras/ecuación-compensadora",
    badge: "Población",
    color: "bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Natalidad y Fecundidad",
    description:
      "Calcula TBN, TGF, TEF, ISF y TBR paso a paso. Incluye multiples métodos de cálculo y sustitucion de valores en las fórmulas.",
    href: "/calculadoras/natalidad-fecundidad",
    badge: "Tasas",
    color: "bg-green-500/10 border-green-500/20",
  },
  {
    title: "Migraciones",
    description:
      "Saldo migratorio, TBI, TBE, tasa neta de migración, razón de intercambio y matriz migratoria origen-destino.",
    href: "/calculadoras/migraciones",
    badge: "Flujos",
    color: "bg-purple-500/10 border-purple-500/20",
  },
];

export default function CalculadorasPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Calculadoras</h1>
        <p className="text-muted-foreground mt-2">
          Herramientas interactivas para calcular indicadores demográficos paso a
          paso. Introduce los datos y observa como se sustituyen en las fórmulas.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {calculadoras.map((calc) => (
          <Link key={calc.href} href={calc.href}>
            <Card
              className={`h-full transition-colors hover:bg-accent/50 ${calc.color}`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{calc.title}</CardTitle>
                </div>
                <Badge variant="outline" className="w-fit">
                  {calc.badge}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription>{calc.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
