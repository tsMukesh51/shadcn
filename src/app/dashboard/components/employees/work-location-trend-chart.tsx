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

const DataItemKeys = {
  name: "name",
  office: "office",
  wfh: "wfh",
};

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
      <BarChart
        data={data}
        className="[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800"
      >
        <XAxis dataKey={DataItemKeys.name} stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip
          formatter={(val, name) => {
            if (name === DataItemKeys.office) return [val, "Work from office"];
            else if (name === DataItemKeys.wfh) return [val, "Work from home"];
            else return [val, ""];
          }}
          separator=": "
          labelClassName="font-bold"
          wrapperClassName="!text-sm rounded-md dark:!bg-black dark:!border-border"
        />
        <Bar dataKey={DataItemKeys.office} stackId={1} fill="#EC4899" />
        <Bar
          dataKey={DataItemKeys.wfh}
          stackId={1}
          fill="#6B7280"
          radius={[4, 4, 0, 0]}
        />
        <Legend
          iconType="circle"
          formatter={(val) => {
            if (val === DataItemKeys.office)
              return <span className="text-sm">Work from office</span>;
            else if (val === DataItemKeys.wfh)
              return <span className="text-sm">Work from home</span>;
            else return <span></span>;
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
