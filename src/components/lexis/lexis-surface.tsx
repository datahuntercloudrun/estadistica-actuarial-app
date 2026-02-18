"use client";

import React from "react";
import type { LexisSurface } from "@/types/lexis";

interface LexisSurfaceProps {
  surfaces: LexisSurface[];
  startYear: number;
  minAge: number;
  maxAge: number;
  cellSize?: number;
}

const PADDING_LEFT = 40;
const PADDING_TOP = 10;

export function LexisSurfaceLayer({
  surfaces,
  startYear,
  minAge: _minAge,
  maxAge,
  cellSize = 60,
}: LexisSurfaceProps) {
  void _minAge; // Available for future use

  /** Convert demographic (year, age) to SVG coordinates */
  const toSvgX = (year: number): number =>
    PADDING_LEFT + (year - startYear) * cellSize;
  const toSvgY = (age: number): number =>
    PADDING_TOP + (maxAge - age) * cellSize;

  /**
   * Compute polygon vertices for each surface type.
   * Returns an array of [svgX, svgY] tuples.
   */
  function getVertices(
    surface: LexisSurface
  ): Array<[number, number]> {
    const { type, year, age, cohort } = surface;

    switch (type) {
      case "edad-período": {
        // Square cell at (year, age)
        // Bottom-left: (year, age), Bottom-right: (year+1, age)
        // Top-right: (year+1, age+1), Top-left: (year, age+1)
        return [
          [toSvgX(year), toSvgY(age)],
          [toSvgX(year + 1), toSvgY(age)],
          [toSvgX(year + 1), toSvgY(age + 1)],
          [toSvgX(year), toSvgY(age + 1)],
        ];
      }

      case "período-cohorte": {
        // Parallelogram for cohort c in period y
        // Uses cohort if provided, otherwise derives: cohort = year - age
        const c = cohort ?? year - age;
        // The vertices in demographic coords:
        // (y, y-c), (y+1, y-c), (y+1, y+1-c), (y, y+1-c)
        // where first element is year and second is age
        const a1 = year - c;       // age at start of period for this cohort
        const a2 = year + 1 - c;   // age at end of period for this cohort
        return [
          [toSvgX(year), toSvgY(a1)],
          [toSvgX(year + 1), toSvgY(a1)],
          [toSvgX(year + 1), toSvgY(a2)],
          [toSvgX(year), toSvgY(a2)],
        ];
      }

      case "cohorte-edad": {
        // Parallelogram: cohort c at age a
        // Vertices: (c+a, a), (c+a+1, a), (c+a+1, a+1), (c+a, a+1)
        const c = cohort ?? year - age;
        return [
          [toSvgX(c + age), toSvgY(age)],
          [toSvgX(c + age + 1), toSvgY(age)],
          [toSvgX(c + age + 1), toSvgY(age + 1)],
          [toSvgX(c + age), toSvgY(age + 1)],
        ];
      }

      case "triangulo-sup": {
        // Upper triangle within the age-period square at (year, age)
        // Top-left, top-right, bottom-right of the square
        // In demographic terms: (year, age+1), (year+1, age+1), (year+1, age)
        return [
          [toSvgX(year), toSvgY(age + 1)],
          [toSvgX(year + 1), toSvgY(age + 1)],
          [toSvgX(year + 1), toSvgY(age)],
        ];
      }

      case "triangulo-inf": {
        // Lower triangle within the age-period square at (year, age)
        // Top-left, bottom-left, bottom-right of the square
        // In demographic terms: (year, age+1), (year, age), (year+1, age)
        return [
          [toSvgX(year), toSvgY(age + 1)],
          [toSvgX(year), toSvgY(age)],
          [toSvgX(year + 1), toSvgY(age)],
        ];
      }

      default:
        return [];
    }
  }

  /** Convert vertices array to SVG polygon points string */
  function toPointsString(vertices: Array<[number, number]>): string {
    return vertices.map(([x, y]) => `${x},${y}`).join(" ");
  }

  /** Compute the centroid of a set of vertices */
  function centroid(vertices: Array<[number, number]>): [number, number] {
    const n = vertices.length;
    if (n === 0) return [0, 0];
    const sumX = vertices.reduce((acc, v) => acc + v[0], 0);
    const sumY = vertices.reduce((acc, v) => acc + v[1], 0);
    return [sumX / n, sumY / n];
  }

  return (
    <g className="lexis-surfaces">
      {surfaces.map((surface, idx) => {
        const vertices = getVertices(surface);
        if (vertices.length === 0) return null;

        const points = toPointsString(vertices);
        const [cx, cy] = centroid(vertices);
        const opacity = surface.opacity ?? 0.4;

        return (
          <g key={`surf-${idx}`}>
            <polygon
              points={points}
              fill={surface.color}
              opacity={opacity}
              stroke={surface.color}
              strokeWidth={0.5}
              strokeOpacity={opacity}
            />
            {surface.label && (
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={12}
                fontWeight="bold"
                fill="#333"
              >
                {surface.label}
              </text>
            )}
          </g>
        );
      })}
    </g>
  );
}
