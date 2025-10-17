import { Card, CardHeader, CardTitle } from "@repo/components/ui/card";
import { LaptopIcon, ListCheckIcon } from "lucide-react";
import SupportTicketResolvedTrend from "./support-tickect-resolved-trend";

export default function TeamsGraph({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <ListCheckIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <SupportTicketResolvedTrend />
      </Card>
    </div>
  );
}
