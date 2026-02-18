"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface FertilityCurveData {
  edad: string;
  tefTotal: number;
  tefVarones: number;
  tefMujeres: number;
}

interface FertilityCurveChartProps {
  data: FertilityCurveData[];
  title?: string;
}

function formatTooltipValue(value: number) {
  return value.toFixed(2).replace(".", ",") + "\u2030";
}

export function FertilityCurveChart({
  data,
  title = "Curva de fecundidad por edad",
}: FertilityCurveChartProps) {
  return (
    <div className="space-y-2">
      <h4 className="text-center text-sm font-semibold">{title}</h4>
      <ResponsiveContainer width="100%" height={380}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="edad"
            label={{
              value: "Grupo de edad de la madre",
              position: "insideBottom",
              offset: -5,
            }}
          />
          <YAxis
            label={{
              value: "TEF (\u2030)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip
            formatter={(value, name) => [
              formatTooltipValue(Number(value)),
              String(name),
            ]}
          />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="tefTotal"
            name="TEF Total"
            stroke="#2563eb"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="tefVarones"
            name="TEF Varones"
            stroke="#16a34a"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="tefMujeres"
            name="TEF Mujeres"
            stroke="#dc2626"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
