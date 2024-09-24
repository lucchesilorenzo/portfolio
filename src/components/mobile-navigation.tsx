"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RxHamburgerMenu } from "react-icons/rx";
import { navLinks } from "@/lib/data";
import { IoMdClose } from "react-icons/io";

export default function MobileNavigation() {
  const [iconChange, setIconChange] = useState(false);

  return (
    <DropdownMenu open={iconChange} onOpenChange={setIconChange}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          {iconChange ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-none bg-background/80 p-4 backdrop-blur-lg">
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium"
              onClick={() => setIconChange(!iconChange)}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
