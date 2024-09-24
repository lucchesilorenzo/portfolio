import React from "react";
import { ThemeToggle } from "./theme-toggle";
import Navigation from "./navigation";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 mb-10 py-6 backdrop-blur-lg">
      <nav className="mx-auto flex items-center justify-between px-8 lg:max-w-6xl lg:px-4">
        <Logo />
        <div className="flex items-center justify-between gap-4 lg:flex-row-reverse">
          <ThemeToggle />
          <Navigation />
        </div>
      </nav>
    </header>
  );
}
