"use client";

import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavigation from "./mobile-navigation";
import { Button } from "./ui/button";
import { useSearchQueryContext } from "@/lib/hooks";

export default function Navigation() {
  const { handleClearSearchQuery } = useSearchQueryContext();
  const pathname = usePathname();

  return (
    <>
      <ul className="hidden lg:flex lg:gap-2">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Button
              onClick={handleClearSearchQuery}
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
