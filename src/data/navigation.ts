import type { NavSection } from "@/types/navigation";

export const navigation: NavSection[] = [
  {
    title: "Teoría",
    items: [
      {
        label: "Tema 1: Intro Demografía",
        href: "/tema-1",
        icon: "BookOpen",
        children: [
          { label: "Conceptos y definiciones", href: "/tema-1/conceptos" },
          { label: "Fuentes de información", href: "/tema-1/fuentes" },
        ],
      },
      {
        label: "Tema 2: Tiempo y Lexis",
        href: "/tema-2",
        icon: "Clock",
        children: [
          { label: "Conceptos temporales", href: "/tema-2/conceptos" },
          { label: "Diagrama de Lexis", href: "/tema-2/diagrama-lexis" },
        ],
      },
      {
        label: "Tema 3: Natalidad y Migraciones",
        href: "/tema-3",
        icon: "Users",
        children: [
          { label: "Natalidad y Fecundidad", href: "/tema-3/natalidad" },
          { label: "Movimientos Migratorios", href: "/tema-3/migraciones" },
        ],
      },
    ],
  },
  {
    title: "Ejercicios",
    items: [
      {
        label: "T2-1: Lexis Básico",
        href: "/tema-2/ejercicios/t2-1",
        icon: "PenTool",
        badge: "4",
      },
      {
        label: "T2-2: Lexis Avanzado",
        href: "/tema-2/ejercicios/t2-2",
        icon: "PenTool",
        badge: "4",
      },
      {
        label: "T3-A: Natalidad",
        href: "/tema-3/ejercicios/t3-a",
        icon: "Baby",
        badge: "2",
      },
      {
        label: "T3-B: Migraciones",
        href: "/tema-3/ejercicios/t3-b",
        icon: "ArrowRightLeft",
        badge: "1",
      },
      {
        label: "T3-C: Migraciones 2",
        href: "/tema-3/ejercicios/t3-c",
        icon: "ArrowRightLeft",
        badge: "8",
      },
    ],
  },
  {
    title: "Herramientas",
    items: [
      {
        label: "Diagrama de Lexis",
        href: "/lexis",
        icon: "Grid3x3",
      },
      {
        label: "Calculadoras",
        href: "/calculadoras",
        icon: "Calculator",
        children: [
          { label: "Ecuación Compensadora", href: "/calculadoras/ecuacion-compensadora" },
          { label: "Natalidad y Fecundidad", href: "/calculadoras/natalidad-fecundidad" },
          { label: "Migraciones", href: "/calculadoras/migraciones" },
        ],
      },
    ],
  },
];
