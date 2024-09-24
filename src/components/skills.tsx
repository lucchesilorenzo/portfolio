"use client";

import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/lib/data";
import { useSearchQueryContext } from "@/lib/hooks";
import Link from "next/link";

export default function Skills() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
      <div className="space-y-4">
        <p className="text-justify text-muted-foreground">
          Here&apos;s a snapshot of the programming languages, libraries, and
          tools I&apos;ve gained experience with since I began my journey into
          programming.
        </p>
        <p className="text-justify text-muted-foreground">
          I&apos;ve developed a particular interest in Front-end development,
          especially in working with React and Next.js to create dynamic and
          responsive web applications.
        </p>
      </div>

      <SkillsData />
    </section>
  );
}

function SkillsData() {
  const { handleChangeSearchQuery } = useSearchQueryContext();

  return (
    <div className="space-y-6">
      {skillsData.map((skillSet) => (
        <div key={skillSet.title} className="space-y-4">
          <h3 className="font-semibold">{skillSet.title}</h3>
          <div className="flex flex-wrap items-center gap-3">
            {skillSet.skills.map((skill) => (
              <Link
                key={skill}
                href="/projects"
                onClick={() => handleChangeSearchQuery(skill)}
              >
                <Badge
                  variant="secondary"
                  className="cursor-pointer rounded-sm p-2 uppercase tracking-wide"
                >
                  {skill}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
