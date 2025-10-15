import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/components/ui/tabs";
import EmployeeStats from "./components/employee-stats";

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
      <TabsContent value={tabsList.employees}>
        <EmployeeStats />
      </TabsContent>
      <TabsContent value={tabsList.teams}>Teams</TabsContent>
    </Tabs>
  );
}
