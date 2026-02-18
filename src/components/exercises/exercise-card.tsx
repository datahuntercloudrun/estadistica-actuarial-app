import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Exercise } from "@/types/exercise";

interface ExerciseCardProps {
  exercise: Exercise;
  href: string;
}

export function ExerciseCard({ exercise, href }: ExerciseCardProps) {
  return (
    <Link href={href} className="block">
      <Card className="transition-colors hover:bg-muted/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {exercise.number}
            </span>
            <CardTitle>
              <h3 className="text-base">{exercise.title}</h3>
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {exercise.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {exercise.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {exercise.enunciado}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
