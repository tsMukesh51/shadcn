"use client";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Delta",
    value: 55,
    color: "#84cc16",
  },
  {
    name: "Alpha",
    value: 34,
    color: "#3b82f6",
  },
  {
    name: "Canary",
    value: 11,
    color: "#f97316",
  },
];

export default function TeamsDistributionChart() {
  return (
    <ResponsiveContainer width={"100%"} height={150}>
      <PieChart>
        <Tooltip
          separator=": "
          labelClassName="font-bold"
          wrapperClassName="!text-sm rounded-md [&_.recharts-tooltip-item]:dark:!text-zinc-200 dark:!bg-black dark:!border-border"
        />
        <Pie data={data} dataKey="value" nameKey="name">
          {data.map((d, i) => {
            return <Cell key={i} fill={d.color} />;
          })}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
