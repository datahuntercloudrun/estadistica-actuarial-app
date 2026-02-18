"use client";

import React from "react";
import type { LexisConfig } from "@/types/lexis";
import { LexisGrid } from "./lexis-grid";
import { LexisLifeline } from "./lexis-lifeline";
import { LexisSurfaceLayer } from "./lexis-surface";
import { LexisStockLineLayer } from "./lexis-stock-line";

interface LexisDiagramProps {
  config: LexisConfig;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const PADDING_LEFT = 40;
const PADDING_BOTTOM = 40;
const PADDING_TOP = 10;
const PADDING_RIGHT = 10;

export function LexisDiagram({
  config,
  width = "100%",
  height,
  className,
}: LexisDiagramProps) {
  const {
    startYear,
    endYear,
    minAge,
    maxAge,
    cellSize = 60,
    lifelines,
    surfaces,
    stockLines,
    annotations,
    showGrid = true,
    showLifelines = true,
  } = config;

  const numYears = endYear - startYear;
  const numAges = maxAge - minAge;
  const gridWidth = numYears * cellSize;
  const gridHeight = numAges * cellSize;

  const viewBoxWidth = PADDING_LEFT + gridWidth + PADDING_RIGHT;
  const viewBoxHeight = PADDING_TOP + gridHeight + PADDING_BOTTOM;

  /** Convert demographic (year, age) to SVG coordinates — used for annotations */
  const toSvgX = (year: number): number =>
    PADDING_LEFT + (year - startYear) * cellSize;
  const toSvgY = (age: number): number =>
    PADDING_TOP + (maxAge - age) * cellSize;

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio="xMidYMid meet"
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Diagrama de Lexis"
    >
      {/* Grid */}
      {showGrid && (
        <LexisGrid
          startYear={startYear}
          endYear={endYear}
          minAge={minAge}
          maxAge={maxAge}
          cellSize={cellSize}
        />
      )}

      {/* Surfaces */}
      {surfaces && surfaces.length > 0 && (
        <LexisSurfaceLayer
          surfaces={surfaces}
          startYear={startYear}
          minAge={minAge}
          maxAge={maxAge}
          cellSize={cellSize}
        />
      )}

      {/* Lifelines */}
      {showLifelines && lifelines && lifelines.length > 0 && (
        <LexisLifeline
          lifelines={lifelines}
          startYear={startYear}
          minAge={minAge}
          maxAge={maxAge}
          cellSize={cellSize}
        />
      )}

      {/* Stock lines */}
      {stockLines && stockLines.length > 0 && (
        <LexisStockLineLayer
          stockLines={stockLines}
          startYear={startYear}
          endYear={endYear}
          minAge={minAge}
          maxAge={maxAge}
          cellSize={cellSize}
        />
      )}

      {/* Annotations */}
      {annotations &&
        annotations.map((ann, idx) => (
          <text
            key={`ann-${idx}`}
            x={toSvgX(ann.x)}
            y={toSvgY(ann.y)}
            fontSize={ann.fontSize ?? 12}
            className={ann.color ? undefined : "lexis-label"}
            fill={ann.color}
            textAnchor="middle"
            dominantBaseline="central"
          >
            {ann.text}
          </text>
        ))}
    </svg>
  );
}
