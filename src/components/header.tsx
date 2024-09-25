import React from "react";
import { ThemeToggle } from "./theme-toggle";
import Navigation from "./navigation";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 mb-10 py-6 backdrop-blur-lg">
      <nav className="mx-auto flex flex-row-reverse items-center justify-between px-6 lg:max-w-6xl lg:flex-row lg:px-4">
        <Logo />
        <div className="flex items-center gap-4">
          <Navigation />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
