"use client";

import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface DataItem {
  name: string;
  office: number;
  wfh: number;
}

const data: DataItem[] = [
  {
    name: "Jan",
    office: 82,
    wfh: 44,
  },
  {
    name: "Feb",
    office: 80,
    wfh: 40,
  },
  {
    name: "Mar",
    office: 83,
    wfh: 42,
  },
  {
    name: "Apr",
    office: 50,
    wfh: 50,
  },
  {
    name: "May",
    office: 40,
    wfh: 60,
  },
  {
    name: "Jun",
    office: 60,
    wfh: 40,
  },
  {
    name: "Jul",
    office: 55,
    wfh: 55,
  },
  {
    name: "Aug",
    office: 49,
    wfh: 61,
  },
  {
    name: "Sep",
    office: 44,
    wfh: 70,
  },
  {
    name: "Oct",
    office: 40,
    wfh: 40,
  },
  {
    name: "Nov",
    office: 50,
    wfh: 50,
  },
  {
    name: "Dec",
    office: 50,
    wfh: 50,
  },
];

export default function WorkLocationTrendsChart() {
  return (
    <ResponsiveContainer height={350} width={"100%"}>
      <BarChart data={data}>
        <XAxis dataKey={"name"} stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip />
        <Bar dataKey={"office"} stackId={1} fill="#EC4899" />
        <Bar dataKey={"wfh"} stackId={1} fill="#6B7280" radius={[4, 4, 0, 0]} />
        <Legend
          iconType="circle"
          formatter={(val) => {
            if (val === "office")
              return <span className="text-sm">Work from office</span>;
            else if (val === "wfh")
              return <span className="text-sm">Work from home</span>;
            else return <span></span>;
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
