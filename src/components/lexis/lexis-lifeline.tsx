"use client";

import React from "react";
import type { LexisLifeLine } from "@/types/lexis";

interface LexisLifelineProps {
  lifelines: LexisLifeLine[];
  startYear: number;
  minAge: number;
  maxAge: number;
  cellSize?: number;
}

const PADDING_LEFT = 40;
const PADDING_TOP = 10;

export function LexisLifeline({
  lifelines,
  startYear,
  minAge,
  maxAge,
  cellSize = 60,
}: LexisLifelineProps) {
  /** Convert demographic (year, age) to SVG coordinates */
  const toSvgX = (year: number): number =>
    PADDING_LEFT + (year - startYear) * cellSize;
  const toSvgY = (age: number): number =>
    PADDING_TOP + (maxAge - age) * cellSize;

  return (
    <g className="lexis-lifelines">
      {lifelines.map((line, idx) => {
        const sAge = line.startAge ?? minAge;
        const eAge = line.endAge ?? maxAge;

        // A lifeline at 45 degrees: year = cohort + age
        const x1 = toSvgX(line.cohort + sAge);
        const y1 = toSvgY(sAge);
        const x2 = toSvgX(line.cohort + eAge);
        const y2 = toSvgY(eAge);

        return (
          <line
            key={`ll-${idx}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={line.color}
            strokeWidth={1.5}
            strokeDasharray={line.dashed ? "6 4" : undefined}
          />
        );
      })}
    </g>
  );
}
