import { contactsData, footerLinks } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className="my-20 flex flex-col items-center space-y-6">
      <div className="flex flex-wrap items-center justify-center">
        {footerLinks.map((link) => (
          <React.Fragment key={link.name}>
            <Button variant="link" className="active-none space-x-2" asChild>
              <Link href={link.href}>
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            </Button>
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {contactsData.map((contact) => (
          <React.Fragment key={contact.name}>
            <Button variant="ghost" size="icon" className="active-none" asChild>
              <Link href={contact.url} target="_blank">
                {contact.icon}
              </Link>
            </Button>
          </React.Fragment>
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
