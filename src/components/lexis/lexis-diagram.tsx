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
const PADDING_RIGHT = 30;

const BIRTHS_ROW_HEIGHT = 24;

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
    births,
    showGrid = true,
    showLifelines = true,
  } = config;

  const numYears = endYear - startYear;
  const numAges = maxAge - minAge;
  const gridWidth = numYears * cellSize;
  const gridHeight = numAges * cellSize;

  const hasBirths = births && births.length > 0;
  const birthsExtra = hasBirths ? BIRTHS_ROW_HEIGHT : 0;

  const viewBoxWidth = PADDING_LEFT + gridWidth + PADDING_RIGHT;
  const viewBoxHeight = PADDING_TOP + gridHeight + birthsExtra + PADDING_BOTTOM;

  /** Convert demographic (year, age) to SVG coordinates — used for annotations */
  const toSvgX = (year: number): number =>
    PADDING_LEFT + (year - startYear) * cellSize;
  const toSvgY = (age: number): number =>
    PADDING_TOP + (maxAge - age) * cellSize;

  /* Births row: sits between grid bottom (age 0) and year labels */
  const gridBottomY = PADDING_TOP + gridHeight;
  const birthsRowTopY = gridBottomY;
  const birthsRowBottomY = gridBottomY + BIRTHS_ROW_HEIGHT;

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
      {/* Grid — pass birthsRowHeight so year labels shift down */}
      {showGrid && (
        <LexisGrid
          startYear={startYear}
          endYear={endYear}
          minAge={minAge}
          maxAge={maxAge}
          cellSize={cellSize}
          birthsRowHeight={birthsExtra}
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

      {/* Births row — between grid bottom and year labels, like textbook */}
      {hasBirths && (
        <g>
          {/* Background fill */}
          <rect
            x={PADDING_LEFT}
            y={birthsRowTopY}
            width={gridWidth}
            height={BIRTHS_ROW_HEIGHT}
            fill="#ef4444"
            opacity={0.1}
          />
          {/* Border lines */}
          <line
            x1={PADDING_LEFT}
            y1={birthsRowTopY}
            x2={PADDING_LEFT + gridWidth}
            y2={birthsRowTopY}
            stroke="#f87171"
            strokeWidth={1.5}
          />
          <line
            x1={PADDING_LEFT}
            y1={birthsRowBottomY}
            x2={PADDING_LEFT + gridWidth}
            y2={birthsRowBottomY}
            stroke="#f87171"
            strokeWidth={1.5}
          />

          {/* "Nacidos" label */}
          <text
            x={PADDING_LEFT - 4}
            y={birthsRowTopY + BIRTHS_ROW_HEIGHT / 2}
            fontSize={9}
            fill="#f87171"
            textAnchor="end"
            dominantBaseline="central"
            fontWeight="600"
          >
            Nacidos
          </text>

          {/* Birth values — centered in each year column */}
          {births!.map((b, idx) => {
            const cx =
              PADDING_LEFT + (b.year - startYear) * cellSize + cellSize / 2;
            return (
              <text
                key={`birth-${idx}`}
                x={cx}
                y={birthsRowTopY + BIRTHS_ROW_HEIGHT / 2}
                fontSize={10}
                fill={b.color ?? "#ef4444"}
                textAnchor="middle"
                dominantBaseline="central"
                fontWeight="600"
              >
                {b.value}
              </text>
            );
          })}
        </g>
      )}
    </svg>
  );
}
