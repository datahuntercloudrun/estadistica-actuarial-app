import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FormulaDisplay } from "@/components/theory/formula-display";

interface Variable {
  symbol: string;
  meaning: string;
}

interface FormulaCardProps {
  name: string;
  abbreviation: string;
  fórmula: string;
  description: string;
  variables?: Variable[];
}

export function FormulaCard({
  name,
  abbreviation,
  fórmula,
  description,
  variables,
}: FormulaCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <CardTitle>
            <h3 className="text-lg">{name}</h3>
          </CardTitle>
          <Badge variant="secondary">{abbreviation}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <FormulaDisplay math={fórmula} block />
        <p className="text-sm text-muted-foreground">{description}</p>
        {variables && variables.length > 0 && (
          <ul className="space-y-1 text-sm">
            {variables.map((v) => (
              <li key={v.symbol} className="flex items-baseline gap-2">
                <FormulaDisplay math={v.symbol} />
                <span className="text-muted-foreground">— {v.meaning}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
