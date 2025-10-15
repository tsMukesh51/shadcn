"use client";

import { cn } from "@repo/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  children: React.ReactNode;
  href: string;
}
export default function MenuItem({ children, href }: MenuItemProps) {
  const path = usePathname();
  const isActive = path === href;
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white dark:hover:bg-zinc-700",
          isActive &&
            "bg-primary text-primary-foreground hover:text-primary-foreground hover:bg-primary hover:dark:bg-primary",
        )}
      >
        {children}
      </Link>
    </li>
  );
}
