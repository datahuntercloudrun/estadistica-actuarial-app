export interface DataTable {
  headers: string[];
  rows: (string | number)[][];
  caption?: string;
}

export interface SubItem {
  label: string;
  text: string;
}

export interface Exercise {
  id: string;
  sheet: string;
  number: number;
  title: string;
  tags: string[];
  enunciado: string;
  hasLexisDiagram: boolean;
  hasDataTable: boolean;
  dataTable?: DataTable;
  additionalTables?: DataTable[];
  subItems?: SubItem[];
}

export interface SolutionStep {
  order: number;
  title: string;
  explanation: string;
  formula?: string;
  substitution?: string;
  result?: string;
  note?: string;
}

export interface SubItemSolution {
  label: string;
  steps: SolutionStep[];
  result: string;
  resultNote?: string;
}

export interface Solution {
  exerciseId: string;
  subItemSolutions?: SubItemSolution[];
  steps?: SolutionStep[];
  finalResult?: string;
}
