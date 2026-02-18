"use client";

import katex from "katex";

interface FormulaDisplayProps {
  math: string;
  block?: boolean;
}

export function FormulaDisplay({ math, block = false }: FormulaDisplayProps) {
  const html = katex.renderToString(math, {
    throwOnError: false,
    displayMode: block,
  });

  if (block) {
    return (
      <div
        className="flex justify-center py-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
