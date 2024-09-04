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

function MobileNavigation() {
  const [iconChange, seticonChange] = useState(false);

  return (
    <DropdownMenu open={iconChange} onOpenChange={seticonChange}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          {iconChange ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="font-medium">
              {link.name}
            </Link>
          ))}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MobileNavigation;
