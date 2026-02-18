"use client";

import katex from "katex";

interface FormulaDisplayProps {
  math: string;
  block?: boolean;
}

export function FormulaDisplay({ math, block = false }: FormulaDisplayProps) {
  // Normalize double-escaped backslashes from JSX string attributes
  // (JSX attrs don't process JS escape sequences, so "\\frac" arrives as \\frac)
  const normalized = math.replace(/\\\\/g, "\\");
  const html = katex.renderToString(normalized, {
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
