import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/components/ui/card";
import { DataTable } from "@repo/components/ui/data-table";
import {
  Skeleton,
  type Skeleton as SkeletonType,
} from "@repo/components/ui/skeleton";
import { columns, type Employee } from "./columns";

const employees: Employee[] = [
  {
    id: 0,
    firstName: "First Name",
    lastName: "Last Name",
    teamName: "Team",
    isTeamLeader: false,
    avatar: undefined,
    skeleton: true,
  },
  {
    id: 1,
    firstName: "First Name",
    lastName: "Last Name",
    teamName: "Team",
    isTeamLeader: false,
    avatar: undefined,
    skeleton: true,
  },
];

export default function LoadingEmployeesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      <CardContent className="">
        <DataTable columns={columns} data={employees} />
      </CardContent>
    </Card>
  );
}
