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
        // Parallelogram: intersection of a period band and a cohort band
        // Bounded by vertical lines (period) and diagonal lines (cohort)
        const c = cohort ?? year - age;
        const a = year - c; // age of oldest in cohort at start of period
        // Vertices (demographic coords):
        //   (year, a-1)   youngest at start of period
        //   (year, a)     oldest at start of period
        //   (year+1, a+1) oldest at end of period
        //   (year+1, a)   youngest at end of period
        return [
          [toSvgX(year), toSvgY(a - 1)],
          [toSvgX(year), toSvgY(a)],
          [toSvgX(year + 1), toSvgY(a + 1)],
          [toSvgX(year + 1), toSvgY(a)],
        ];
      }

      case "cohorte-edad": {
        // Parallelogram: intersection of a cohort band and an age band
        // Bounded by horizontal lines (age) and diagonal lines (cohort)
        const c = cohort ?? year - age;
        // Vertices (demographic coords):
        //   (c+age, age)     oldest reaches age
        //   (c+age+1, age)   youngest reaches age
        //   (c+age+2, age+1) youngest reaches age+1
        //   (c+age+1, age+1) oldest reaches age+1
        return [
          [toSvgX(c + age), toSvgY(age)],
          [toSvgX(c + age + 1), toSvgY(age)],
          [toSvgX(c + age + 2), toSvgY(age + 1)],
          [toSvgX(c + age + 1), toSvgY(age + 1)],
        ];
      }

      case "triangulo-sup": {
        // Upper triangle: ABOVE the Lexis diagonal (BL→TR)
        // Contains events for the older cohort (c = year - age - 1)
        // Vertices: BL, TL, TR
        return [
          [toSvgX(year), toSvgY(age)],
          [toSvgX(year), toSvgY(age + 1)],
          [toSvgX(year + 1), toSvgY(age + 1)],
        ];
      }

      case "triangulo-inf": {
        // Lower triangle: BELOW the Lexis diagonal (BL→TR)
        // Contains events for the younger cohort (c = year - age)
        // Vertices: BL, BR, TR
        return [
          [toSvgX(year), toSvgY(age)],
          [toSvgX(year + 1), toSvgY(age)],
          [toSvgX(year + 1), toSvgY(age + 1)],
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
                fill="#9ca3af"
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
