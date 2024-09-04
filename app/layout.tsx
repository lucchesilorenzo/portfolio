import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { Toaster } from "sonner";
import "./globals.css";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lorenzo Lucchesi",
  description:
    "Hi! My name is Lorenzo Lucchesi, and I'm a passionate developer from Italy with a strong focus on JavaScript/TypeScript, React, and Next.js. I'm currently pursuing a full-time course to become a full stack developer, where I am honing my skills in building modern, scalable web applications.",
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
          <Header />
          <main className="mx-auto flex flex-col items-center justify-center space-y-16 px-14 lg:max-w-2xl lg:px-4">
            {children}
            <Separator className="mx-auto my-16 w-full lg:max-w-2xl" />
          </main>
          <Footer />
        </ThemeProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
