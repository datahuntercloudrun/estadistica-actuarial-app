export type SurfaceType =
  | "edad-período"
  | "período-cohorte"
  | "cohorte-edad"
  | "triangulo-sup"
  | "triangulo-inf";

export interface LexisSurface {
  type: SurfaceType;
  year: number;
  age: number;
  cohort?: number;
  color: string;
  label?: string;
  opacity?: number;
}

export interface LexisLifeLine {
  cohort: number;
  color: string;
  dashed?: boolean;
  startAge?: number;
  endAge?: number;
}

export interface LexisStockLine {
  type: "vertical" | "horizontal" | "diagonal";
  year: number;
  age: number;
  endYear?: number;
  endAge?: number;
  color: string;
  label?: string;
  thickness?: number;
}

export interface LexisAnnotation {
  x: number;
  y: number;
  text: string;
  fontSize?: number;
  color?: string;
}

export interface LexisConfig {
  startYear: number;
  endYear: number;
  minAge: number;
  maxAge: number;
  cellSize?: number;
  lifelines?: LexisLifeLine[];
  surfaces?: LexisSurface[];
  stockLines?: LexisStockLine[];
  annotations?: LexisAnnotation[];
  showGrid?: boolean;
  showLifelines?: boolean;
}
