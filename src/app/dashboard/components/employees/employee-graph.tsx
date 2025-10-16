import { Card, CardHeader, CardTitle } from "@repo/components/ui/card";
import { LaptopIcon } from "lucide-react";
import WorkLocationTrendsChart from "./work-location-trend-chart";

export default function EmployeeGraph({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <LaptopIcon />
            <span>Employee work location trends</span>
          </CardTitle>
        </CardHeader>
        <WorkLocationTrendsChart />
      </Card>
    </div>
  );
}
