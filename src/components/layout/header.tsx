"use client";

import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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

  return (
    <header className="sticky top-0 z-30 flex h-12 sm:h-14 shrink-0 items-center gap-2 px-3 sm:px-4 bg-background/50 backdrop-blur-2xl backdrop-saturate-[1.8] border-b border-white/[0.08] dark:border-white/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.02)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.2),0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-500">
      <SidebarTrigger className="-ml-1" />
      <div className="flex-1 min-w-0">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            {segments.map((segment, index) => {
              const href = "/" + segments.slice(0, index + 1).join("/");
              const label = routeLabels[segment] || segment;
              const isLast = index === segments.length - 1;

              return (
                <span key={href} className="flex items-center gap-1.5">
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </span>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <ThemeToggle />
    </header>
  );
}
