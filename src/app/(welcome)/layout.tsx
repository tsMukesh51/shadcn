import React from "react";
import { LightDarkToggle } from "@repo/components/ui/light-dark-toggle";

export default function welcomeLayout({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed top-1/2 right-0" />
    </>
  );
}
