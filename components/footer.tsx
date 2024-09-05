import React from "react";
import Link from "next/link";
import { contactsData, footerLinks } from "@/lib/data";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className="my-20 flex flex-col items-center space-y-6">
      <div className="grid grid-cols-2 items-center sm:flex sm:flex-wrap">
        {footerLinks.map((link) => (
          <Button key={link.name} variant="link" className="space-x-2" asChild>
            <Link href={link.href}>
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {contactsData.map((contact) => (
          <Button key={contact.name} variant="ghost" size="icon" asChild>
            <Link href={contact.url} target="_blank">
              {contact.icon}
            </Link>
          </Button>
        ))}
      </div>
      <div>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Lorenzo Lucchesi. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
