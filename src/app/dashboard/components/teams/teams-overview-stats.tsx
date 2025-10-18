import { Avatar, AvatarFallback } from "@repo/components/ui/avatar";
import { Button } from "@repo/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/components/ui/card";
import {
  PieChartIcon,
  StarIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import cmImg from "@public/cm.jpg";
import rlImg from "@public/rl.jpg";
import tfImg from "@public/tf.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/components/ui/tooltip";
import TeamsDistributionChart from "./teams-distribution-chart";

const teamLeaders = [
  {
    firstName: "Colin",
    lastName: "Murray",
    avatar: cmImg,
  },
  {
    firstName: "Tom",
    lastName: "Phillips",
  },
  {
    firstName: "Liam",
    lastName: "Fuentes",
  },
  {
    firstName: "Tina",
    lastName: "Fey",
    avatar: tfImg,
  },
  {
    firstName: "Katie",
    lastName: "Johnson",
  },
  {
    firstName: "Tina",
    lastName: "Jones",
  },
  {
    firstName: "Amy",
    lastName: "Adams",
  },
  {
    firstName: "Ryan",
    lastName: "Lopez",
    avatar: rlImg,
  },
  {
    firstName: "Jenny",
    lastName: "Jones",
  },
];

export default function TeamsOverviewStats({
  className,
}: {
  className?: string;
}) {
  const totalTeams = 8;
  return (
    <div className={`grid gap-4 lg:grid-cols-3 ${className}`}>
      <Card className="gap-2">
        <CardHeader>
          <CardTitle className="text-base">Total Teams</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          <div className="flex gap-2">
            <UsersIcon />
            <div className="text-5xl font-bold">{totalTeams}</div>
          </div>
          <Button className="uppercase" size={"xs"} asChild>
            <Link href={"/teams/view-all"}>View all</Link>
          </Button>
        </CardContent>
      </Card>
      <Card className="gap-2">
        <CardHeader>
          <CardTitle className="flex justify-between items-center text-base">
            <span>Team Leaders</span>
            <StarIcon className="text-yellow-500" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2 mr-8">
          {teamLeaders.map((l) => (
            <TooltipProvider key={`${l.firstName} ${l.lastName}`}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar>
                    {!!l.avatar && (
                      <Image
                        src={l.avatar}
                        alt={`${l.firstName} ${l.lastName} avatar`}
                      />
                    )}
                    <AvatarFallback>
                      {l.firstName[0]}
                      {l.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  {l.firstName} {l.lastName}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </CardContent>
      </Card>
      <Card className="pb-0">
        <CardHeader>
          <CardTitle className="flex justify-between items-center text-base">
            <span>Teams Distribution</span>
            <PieChartIcon />
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          <TeamsDistributionChart />
        </CardContent>
      </Card>
    </div>
  );
}
