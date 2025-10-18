import { Avatar, AvatarFallback } from "@repo/components/ui/avatar";
import MenuItem from "./menu-item";
import MenuTitle from "./menu-title";
import Link from "next/link";
import { LightDarkToggle } from "@repo/components/ui/light-dark-toggle";
import { cn } from "@repo/lib/utils";

export default function MainMenu({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "flex flex-col h-screen md:bg-muted overflow-y-auto p-4",
        className,
      )}
    >
      <header className="pb-4 border-b border-b-zinc-300 hidden md:block dark:border-b-black">
        <MenuTitle />
      </header>
      <ul className="grow py-4">
        <MenuItem href="/dashboard">My Dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </ul>
      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            TS
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Logout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
}
