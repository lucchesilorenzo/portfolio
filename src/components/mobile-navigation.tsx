"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks } from "@/lib/data";
import { useSearchQueryContext } from "@/lib/hooks";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MobileNavigation() {
  const [iconChange, setIconChange] = useState(false);
  const { handleClearSearchQuery } = useSearchQueryContext();

  function handleIconToggleAndClear() {
    setIconChange(!iconChange);
    handleClearSearchQuery();
  }

  return (
    <DropdownMenu open={iconChange} onOpenChange={setIconChange}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-0">
          {iconChange ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-none bg-background/80 p-4 backdrop-blur-lg">
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleIconToggleAndClear}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
