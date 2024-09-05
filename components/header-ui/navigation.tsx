"use client";

import React from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import MobileNavigation from "./mobile-navigation";

function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <ul className="hidden lg:flex lg:gap-2">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Button
              variant="ghost"
              className={`${pathname === link.href ? "active bg-accent font-semibold transition-all ease-in-out" : "transition-all ease-in-out hover:bg-transparent hover:text-muted-foreground"} `}
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

export default Navigation;
