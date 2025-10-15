import { Button } from "@repo/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/components/ui/card";
import { cn } from "@repo/lib/utils";
import {
  AlertTriangleIcon,
  BadgeAlertIcon,
  BadgeCheckIcon,
  BadgeXIcon,
  UserCheck2Icon,
  UserCheckIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

export default function EmployeeStats() {
  const totalEmployees = 120;
  const employeesPresent = 70;
  const employeesPresentPercent = (employeesPresent * 100) / totalEmployees;
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Card className="gap-2">
        <CardHeader>
          <CardTitle className="text-base">Total Employees</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          <div className="flex gap-2">
            <UserIcon />
            <div className="text-5xl font-bold">{totalEmployees}</div>
          </div>
          <Button className="uppercase" size={"xs"} asChild>
            <Link href={"/employees/view-all"}>View all</Link>
          </Button>
        </CardContent>
      </Card>
      <Card className="gap-2">
        <CardHeader>
          <CardTitle className="text-base">Employees Present</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          <div className="flex gap-2">
            <UserCheck2Icon />
            <div className="text-5xl font-bold">{employeesPresent}</div>
          </div>
        </CardContent>
        <CardFooter>
          <span
            className={cn(
              "flex gap-1 items-center text-xs",
              employeesPresentPercent > 75 ? "text-green-500" : "text-red-500",
            )}
          >
            {employeesPresentPercent > 75 ? (
              <BadgeCheckIcon />
            ) : (
              <>
                <AlertTriangleIcon /> Only{" "}
              </>
            )}
            {employeesPresentPercent.toFixed(2)}% of employees are present
          </span>
        </CardFooter>
      </Card>
      <Card className="border-pink-500 gap-2">
        <CardHeader>
          <CardTitle className="text-base">Employees Present</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
