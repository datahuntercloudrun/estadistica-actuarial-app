"use client";

import React from "react";

interface LexisGridProps {
  startYear: number;
  endYear: number;
  minAge: number;
  maxAge: number;
  cellSize?: number;
  gridColor?: string;
  labelColor?: string;
}

const PADDING_LEFT = 40;
const PADDING_BOTTOM = 20;
const PADDING_TOP = 10;

export function LexisGrid({
  startYear,
  endYear,
  minAge,
  maxAge,
  cellSize = 60,
  gridColor,
  labelColor,
}: LexisGridProps) {
  const numYears = endYear - startYear;
  const numAges = maxAge - minAge;
  const gridWidth = numYears * cellSize;
  const gridHeight = numAges * cellSize;

  const verticalLines: React.ReactNode[] = [];
  const horizontalLines: React.ReactNode[] = [];
  const yearLabels: React.ReactNode[] = [];
  const ageLabels: React.ReactNode[] = [];

  // Vertical lines (one per year boundary)
  for (let i = 0; i <= numYears; i++) {
    const x = PADDING_LEFT + i * cellSize;
    verticalLines.push(
      <line
        key={`v-${i}`}
        x1={x}
        y1={PADDING_TOP}
        x2={x}
        y2={PADDING_TOP + gridHeight}
        className={gridColor ? undefined : "lexis-grid-line"}
        stroke={gridColor}
        strokeWidth={1}
      />
    );
  }

  // Horizontal lines (one per age boundary)
  for (let j = 0; j <= numAges; j++) {
    const y = PADDING_TOP + j * cellSize;
    horizontalLines.push(
      <line
        key={`h-${j}`}
        x1={PADDING_LEFT}
        y1={y}
        x2={PADDING_LEFT + gridWidth}
        y2={y}
        className={gridColor ? undefined : "lexis-grid-line"}
        stroke={gridColor}
        strokeWidth={1}
      />
    );
  }

  // Year labels on the X axis (bottom)
  for (let i = 0; i <= numYears; i++) {
    const x = PADDING_LEFT + i * cellSize;
    const y = PADDING_TOP + gridHeight + PADDING_BOTTOM - 4;
    yearLabels.push(
      <text
        key={`yl-${i}`}
        x={x}
        y={y}
        textAnchor="middle"
        fontSize={11}
        className={labelColor ? undefined : "lexis-label"}
        fill={labelColor}
      >
        {startYear + i}
      </text>
    );
  }

  // Age labels on the Y axis (left)
  for (let j = 0; j <= numAges; j++) {
    // j=0 corresponds to maxAge (top), j=numAges corresponds to minAge (bottom)
    const y = PADDING_TOP + j * cellSize;
    const age = maxAge - j;
    ageLabels.push(
      <text
        key={`al-${j}`}
        x={PADDING_LEFT - 6}
        y={y + 4}
        textAnchor="end"
        fontSize={11}
        className={labelColor ? undefined : "lexis-label"}
        fill={labelColor}
      >
        {age}
      </text>
    );
  }

  return (
    <g className="lexis-grid">
      {verticalLines}
      {horizontalLines}
      {yearLabels}
      {ageLabels}
    </g>
  );
}
