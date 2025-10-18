"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { useTheme } from "next-themes";

export function LightDarkToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className={className} asChild>
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() =>
              setTheme(resolvedTheme === "light" ? "dark" : "light")
            }
            className="rounded-full"
          >
            <SunIcon className="dark:hidden" />
            <MoonIcon className="hidden dark:block" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span className="dark:hidden">Enable dark mode</span>
          <span className="hidden dark:inline">Enable light mode</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
