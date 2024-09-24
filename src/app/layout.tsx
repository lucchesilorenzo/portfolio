import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Separator } from "@/components/ui/separator";
import SearchContextProvider from "./contexts/search-context-provider";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lorenzo Lucchesi",
  description:
    "Hi! My name is Lorenzo Lucchesi, and I'm a passionate developer from Italy with a strong focus on React and Next.js. I'm currently pursuing a full-time course to become a Web Developer, where I am honing my skills in building modern, scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SearchContextProvider>
            <Header />

            <main className="mx-auto flex flex-col items-center justify-center space-y-20 px-5 lg:max-w-6xl lg:px-4">
              {children}
              <Separator className="mx-auto my-16 w-full lg:max-w-6xl" />
            </main>

            <Footer />
          </SearchContextProvider>
        </ThemeProvider>
      </body>

      <Toaster position="top-right" />
    </html>
  );
}
