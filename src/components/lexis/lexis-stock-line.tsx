"use client";

import React from "react";
import type { LexisStockLine } from "@/types/lexis";

interface LexisStockLineProps {
  stockLines: LexisStockLine[];
  startYear: number;
  endYear: number;
  minAge: number;
  maxAge: number;
  cellSize?: number;
}

const PADDING_LEFT = 40;
const PADDING_TOP = 10;

export function LexisStockLineLayer({
  stockLines,
  startYear,
  endYear,
  minAge: _minAge,
  maxAge,
  cellSize = 60,
}: LexisStockLineProps) {
  void _minAge; // Available for future use

  /** Convert demographic (year, age) to SVG coordinates */
  const toSvgX = (year: number): number =>
    PADDING_LEFT + (year - startYear) * cellSize;
  const toSvgY = (age: number): number =>
    PADDING_TOP + (maxAge - age) * cellSize;

  return (
    <g className="lexis-stock-lines">
      {stockLines.map((sl, idx) => {
        let x1: number;
        let y1: number;
        let x2: number;
        let y2: number;

        switch (sl.type) {
          case "vertical": {
            // Vertical line at a specific year for a range of ages
            x1 = toSvgX(sl.year);
            y1 = toSvgY(sl.age);
            x2 = toSvgX(sl.year);
            y2 = toSvgY(sl.endAge ?? sl.age + 1);
            break;
          }
          case "horizontal": {
            // Horizontal line at a specific age for a range of years
            x1 = toSvgX(sl.year);
            y1 = toSvgY(sl.age);
            x2 = toSvgX(sl.endYear ?? sl.year + 1);
            y2 = toSvgY(sl.age);
            break;
          }
          case "diagonal": {
            // Diagonal segment along a lifeline
            x1 = toSvgX(sl.year);
            y1 = toSvgY(sl.age);
            x2 = toSvgX(sl.endYear ?? sl.year + 1);
            y2 = toSvgY(sl.endAge ?? sl.age + 1);
            break;
          }
          default:
            return null;
        }

        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;

        // Place label on the left if the line is in the right 30% of the diagram
        const svgRight = toSvgX(endYear);
        const nearRightEdge = midX > svgRight - (endYear - startYear) * cellSize * 0.3;
        const labelX = nearRightEdge ? midX - 6 : midX + 6;
        const textAnchor = nearRightEdge ? "end" : "start";

        return (
          <g key={`sl-${idx}`}>
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={sl.color}
              strokeWidth={sl.thickness ?? 3}
              strokeLinecap="round"
            />
            {sl.label && (
              <text
                x={labelX}
                y={midY - 4}
                fontSize={10}
                fill={sl.color}
                fontWeight="bold"
                textAnchor={textAnchor}
              >
                {sl.label}
              </text>
            )}
          </g>
        );
      })}
    </g>
  );
}
