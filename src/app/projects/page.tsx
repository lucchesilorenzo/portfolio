import React from "react";
import ProjectCards from "@/components/project-cards";

export default function Projects() {
  return (
    <section className="mb-20 flex flex-col items-center justify-center gap-10">
      <h1 className="text-3xl font-semibold tracking-tight lg:text-4xl">
        Projects
      </h1>
      <p className="text-muted-foreground">
        These are the projects I&apos;ve worked on since I started programming.
        They&apos;re personal projects that helped me develop and refine the
        skills I have now.
      </p>

      <ProjectCards />
    </section>
  );
}
