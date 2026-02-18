"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

const routeLabels: Record<string, string> = {
  "tema-1": "Tema 1: Intro Demografía",
  "tema-2": "Tema 2: Tiempo y Lexis",
  "tema-3": "Tema 3: Natalidad y Migraciones",
  conceptos: "Conceptos",
  fuentes: "Fuentes de Información",
  "diagrama-lexis": "Diagrama de Lexis",
  natalidad: "Natalidad y Fecundidad",
  migraciones: "Migraciones",
  ejercicios: "Ejercicios",
  "t2-1": "Hoja T2-1",
  "t2-2": "Hoja T2-2",
  "t3-a": "T3-A Natalidad",
  "t3-b": "T3-B Migraciones",
  "t3-c": "T3-C Migraciones 2",
  "1": "Ejercicio 1",
  "2": "Ejercicio 2",
  "3": "Ejercicio 3",
  "4": "Ejercicio 4",
  "5": "Ejercicio 5",
  "6": "Ejercicio 6",
  "7": "Ejercicio 7",
  "8": "Ejercicio 8",
  calculadoras: "Calculadoras",
  "ecuacion-compensadora": "Ecuación Compensadora",
  "natalidad-fecundidad": "Natalidad y Fecundidad",
  lexis: "Diagrama de Lexis",
};

export function Header() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const currentLabel =
    segments.length > 0
      ? routeLabels[segments[segments.length - 1]] || segments[segments.length - 1]
      : "Inicio";

  const parentSegment = segments.length > 1 ? segments[segments.length - 2] : null;
  const parentLabel = parentSegment ? routeLabels[parentSegment] || parentSegment : null;
  const parentHref = parentSegment
    ? "/" + segments.slice(0, segments.length - 1).join("/")
    : null;

  return (
    <header className="sticky top-0 z-30 flex h-12 sm:h-14 shrink-0 items-center gap-2 px-3 sm:px-4 bg-background/50 backdrop-blur-2xl backdrop-saturate-[1.8] border-b border-white/[0.08] dark:border-white/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.02)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.2),0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-500">
      <SidebarTrigger className="-ml-1" />
      <div className="flex-1 min-w-0 flex items-center gap-1.5">
        {parentLabel && parentHref ? (
          <>
            <Link
              href={parentHref}
              className="hidden sm:block text-xs text-muted-foreground hover:text-foreground transition-colors truncate max-w-[140px]"
            >
              {parentLabel}
            </Link>
            <ChevronRight className="hidden sm:block h-3 w-3 shrink-0 text-muted-foreground/50" />
          </>
        ) : null}
        <span className="text-sm font-medium truncate">
          {currentLabel}
        </span>
      </div>
      <ThemeToggle />
    </header>
  );
}
