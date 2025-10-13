import MainMenu from "./components/main-menu";

export default function DashboardLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <MainMenu />
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome Back!</h1>
        {children}
      </div>
    </div>
  );
}
