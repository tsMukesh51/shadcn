import { setTimeout } from "timers/promises";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/components/ui/card";
import { DataTable } from "@repo/components/ui/data-table";
import { columns, Employee } from "./columns";
import cmImg from "@public/cm.jpg";
import rlImg from "@public/rl.jpg";
import tfImg from "@public/tf.jpg";

const employees: Employee[] = [
  {
    id: 1,
    firstName: "Colin",
    lastName: "Murray",
    teamName: "alpha",
    isTeamLeader: true,
    avatar: cmImg,
  },
  {
    id: 2,
    firstName: "Tom",
    lastName: "Phillips",
    teamName: "alpha",
    isTeamLeader: false,
  },
  {
    id: 3,
    firstName: "Liam",
    lastName: "Fuentes",
    teamName: "alpha",
    isTeamLeader: false,
  },
  {
    id: 4,
    firstName: "Tina",
    lastName: "Fey",
    teamName: "canary",
    isTeamLeader: true,
    avatar: tfImg,
  },
  {
    id: 5,
    firstName: "Katie",
    lastName: "Johnson",
    teamName: "canary",
    isTeamLeader: false,
  },
  {
    id: 6,
    firstName: "Tina",
    lastName: "Jones",
    teamName: "canary",
    isTeamLeader: false,
  },
  {
    id: 7,
    firstName: "Amy",
    lastName: "Adams",
    teamName: "delta",
    isTeamLeader: true,
  },
  {
    id: 8,
    firstName: "Ryan",
    lastName: "Lopez",
    teamName: "delta",
    isTeamLeader: false,
    avatar: rlImg,
  },
  {
    id: 9,
    firstName: "Jenny",
    lastName: "Jones",
    teamName: "delta",
    isTeamLeader: false,
  },
];

export default async function EmployeesPage() {
  await setTimeout(50000);
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
