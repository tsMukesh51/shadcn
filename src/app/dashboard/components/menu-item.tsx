"use client";

import { DrawerContext } from "@repo/components/ui/drawer";
import { cn } from "@repo/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

interface MenuItemProps {
  children: React.ReactNode;
  href: string;
}
export default function MenuItem({ children, href }: MenuItemProps) {
  const path = usePathname();
  const isActive = path === href;
  const { onClose } = useContext(DrawerContext);
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white dark:hover:bg-zinc-700",
          isActive &&
            "bg-primary text-primary-foreground hover:text-primary-foreground hover:bg-primary hover:dark:bg-primary",
        )}
        onClick={onClose}
      >
        {children}
      </Link>
    </li>
  );
}
