import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@repo/components/ui/drawer";
import MainMenu from "./components/main-menu";
import MenuTitle from "./components/menu-title";
import { HamburgerIcon, MenuIcon } from "lucide-react";
import { useMediaQuery } from "@hooks/use-media-query";
import MobileMainMenu from "./components/mobile-main-menu";

export default function DashboardLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div className="h-screen md:grid md:grid-cols-[250px_1fr]">
      <MainMenu className="hidden md:flex" />
      <MobileMainMenu />
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome Back!</h1>
        {children}
      </div>
    </div>
  );
}
