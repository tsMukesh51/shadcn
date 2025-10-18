"use client";

import { useMediaQuery } from "@hooks/use-media-query";
import MenuTitle from "./menu-title";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@repo/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import MainMenu from "./main-menu";
import { useEffect, useState } from "react";

export default function MobileMainMenu() {
  const [isMobvileDrawerOpen, setIsMobvileDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(`(max-width:767px)`);
  useEffect(() => {
    if (!isMobile) setIsMobvileDrawerOpen(false);
  }, [isMobile]);
  return (
    <div className="flex justify-between md:hidden sticky top-0 left-0 p-4 bg-background border-border border-b">
      <MenuTitle />
      {isMobile && (
        <Drawer
          direction="right"
          open={isMobvileDrawerOpen}
          onOpenChange={(val) => setIsMobvileDrawerOpen(val)}
          onClose={() => setIsMobvileDrawerOpen(false)}
        >
          <DrawerTrigger>
            <MenuIcon />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle className="sr-only">Mobile Main Menu</DrawerTitle>
            <MainMenu />
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}
