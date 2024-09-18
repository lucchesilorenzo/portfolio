"use client";

import React from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import MobileNavigation from "./mobile-navigation";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <ul className="hidden lg:flex lg:gap-2">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Button
              variant="ghost"
              className={cn(
                "transition-all ease-in-out",
                pathname === link.href
                  ? "bg-accent font-semibold"
                  : "hover:bg-transparent hover:text-muted-foreground",
              )}
              asChild
            >
              <Link href={link.href}>{link.name}</Link>
            </Button>
          </li>
        ))}
      </ul>

      <div className="lg:hidden">
        <MobileNavigation />
      </div>
    </>
  );
}
