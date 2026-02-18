"use client";

import React from "react";

export interface LexisLegendItem {
  color: string;
  label: string;
  type: "surface" | "line" | "lifeline";
}

interface LexisLegendProps {
  items: LexisLegendItem[];
}

export function LexisLegend({ items }: LexisLegendProps) {
  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-4 mt-3 px-2">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          {item.type === "surface" ? (
            <span
              className="inline-block w-4 h-4 rounded-sm border border-gray-300 dark:border-gray-600"
              style={{ backgroundColor: item.color, opacity: 0.6 }}
            />
          ) : item.type === "lifeline" ? (
            <svg width={20} height={14} aria-hidden="true">
              <line
                x1={0}
                y1={12}
                x2={20}
                y2={2}
                stroke={item.color}
                strokeWidth={2}
                strokeDasharray="4 2"
              />
            </svg>
          ) : (
            <svg width={20} height={14} aria-hidden="true">
              <line
                x1={0}
                y1={7}
                x2={20}
                y2={7}
                stroke={item.color}
                strokeWidth={3}
                strokeLinecap="round"
              />
            </svg>
          )}
          <span className="text-sm text-gray-700 dark:text-gray-300">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
