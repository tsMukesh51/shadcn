import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/components/ui/tabs";
import EmployeeOverviewStats from "./components/employees/employee-overview-stats";
import EmployeeGraph from "./components/employees/employee-graph";

const tabsList = {
  employees: "employees",
  teams: "teams",
};

export default function DashboardPage() {
  return (
    <Tabs defaultValue={tabsList.employees}>
      <TabsList className="mb-4">
        <TabsTrigger value={tabsList.employees}>Employees Stats</TabsTrigger>
        <TabsTrigger value={tabsList.teams}>Teams Stats</TabsTrigger>
      </TabsList>
      <TabsContent className="" value={tabsList.employees}>
        <EmployeeOverviewStats className="mb-4" />
        <EmployeeGraph className="mb-4" />
      </TabsContent>
      <TabsContent value={tabsList.teams}>Teams</TabsContent>
    </Tabs>
  );
}
