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
        children: [
          { label: "Ej. 1: Líneas y áreas en Lexis", href: "/tema-2/ejercicios/t2-1/1" },
          { label: "Ej. 2: Stocks y flujos", href: "/tema-2/ejercicios/t2-1/2" },
          { label: "Ej. 3: Diagrama con datos reales", href: "/tema-2/ejercicios/t2-1/3" },
          { label: "Ej. 4: Clasificación de indicadores", href: "/tema-2/ejercicios/t2-1/4" },
        ],
      },
      {
        label: "T2-2: Lexis Avanzado",
        href: "/tema-2/ejercicios/t2-2",
        icon: "PenTool",
        badge: "4",
        children: [
          { label: "Ej. 1: 14 conceptos demográficos", href: "/tema-2/ejercicios/t2-2/1" },
          { label: "Ej. 2: Stocks y flujos numéricos", href: "/tema-2/ejercicios/t2-2/2" },
          { label: "Ej. 3: Datos censales (edad 75)", href: "/tema-2/ejercicios/t2-2/3" },
          { label: "Ej. 4: Emigración y cálculos", href: "/tema-2/ejercicios/t2-2/4" },
        ],
      },
      {
        label: "T3-A: Natalidad",
        href: "/tema-3/ejercicios/t3-a",
        icon: "Baby",
        badge: "2",
        children: [
          { label: "Ej. 1: Natalidad España 1999", href: "/tema-3/ejercicios/t3-a/1" },
          { label: "Ej. 2: Indicadores 2021-2022", href: "/tema-3/ejercicios/t3-a/2" },
        ],
      },
      {
        label: "T3-B: Migraciones",
        href: "/tema-3/ejercicios/t3-b",
        icon: "ArrowRightLeft",
        badge: "1",
        children: [
          { label: "Ej. 1: Migraciones España 2000-2004", href: "/tema-3/ejercicios/t3-b/1" },
        ],
      },
      {
        label: "T3-C: Migraciones 2",
        href: "/tema-3/ejercicios/t3-c",
        icon: "ArrowRightLeft",
        badge: "8",
        children: [
          { label: "Ej. 1: Saldo migratorio simple", href: "/tema-3/ejercicios/t3-c/1" },
          { label: "Ej. 2: Tasas brutas I/E", href: "/tema-3/ejercicios/t3-c/2" },
          { label: "Ej. 3: Ec. compensadora inversa", href: "/tema-3/ejercicios/t3-c/3" },
          { label: "Ej. 4: Matriz migratoria 3x3", href: "/tema-3/ejercicios/t3-c/4" },
          { label: "Ej. 5: Saldo acumulado", href: "/tema-3/ejercicios/t3-c/5" },
          { label: "Ej. 6: Tasas medias anuales", href: "/tema-3/ejercicios/t3-c/6" },
          { label: "Ej. 7: Saldo intercensal", href: "/tema-3/ejercicios/t3-c/7" },
          { label: "Ej. 8: ISM por edad", href: "/tema-3/ejercicios/t3-c/8" },
        ],
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
