"use client";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    delta: 40,
    alpha: 24,
    canary: 24,
  },
  {
    name: "Feb",
    delta: 30,
    alpha: 13,
    canary: 22,
  },
  {
    name: "Mar",
    delta: 20,
    alpha: 58,
    canary: 29,
  },
  {
    name: "Apr",
    delta: 14,
    alpha: 30,
    canary: 15,
  },
  {
    name: "May",
    delta: 29,
    alpha: 28,
    canary: 18,
  },
  {
    name: "Jun",
    delta: 19,
    alpha: 19,
    canary: 10,
  },
  {
    name: "Jul",
    delta: 34,
    alpha: 24,
    canary: 14,
  },
  {
    name: "Aug",
    delta: 21,
    alpha: 20,
    canary: 19,
  },
  {
    name: "Sep",
    delta: 49,
    alpha: 43,
    canary: 20,
  },
  {
    name: "Oct",
    delta: 43,
    alpha: 55,
    canary: 4,
  },
  {
    name: "Nov",
    delta: 39,
    alpha: 40,
    canary: 25,
  },
  {
    name: "Dec",
    delta: 34,
    alpha: 43,
    canary: 11,
  },
];

export default function SupportTicketResolvedTrend() {
  return (
    <div className="overflow-x-auto pr-4">
      <div className="min-w-xl">
        <ResponsiveContainer width={"100%"} height={350}>
          <LineChart data={data}>
            <XAxis dataKey={"name"} stroke="#888888" fontSize={12} />
            <YAxis stroke="#888888" fontSize={12} />
            <CartesianGrid strokeDasharray={"3 4"} />
            <Tooltip
              separator=": "
              labelClassName="font-bold"
              wrapperClassName="!text-sm rounded-md dark:!bg-black dark:!border-border"
            />
            <Line dataKey={"delta"} stroke="#84cc16" type="monotone" />
            <Line dataKey={"alpha"} stroke="#3b82f6" type="monotone" />
            <Line dataKey={"canary"} stroke="#f97316" type="monotone" />
            <Legend
              formatter={(val) => <span className="capitalize">{val}</span>}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
