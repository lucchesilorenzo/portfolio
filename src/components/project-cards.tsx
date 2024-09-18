"use client";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { projectsData } from "@/lib/data";
import { useSearchQueryContext } from "@/lib/hooks";
import SearchProjectForm from "./search-project-form";

export default function ProjectCards() {
  const { searchQuery } = useSearchQueryContext();

  const filteredProjects = projectsData.filter((project) =>
    project.tags.some((tag) =>
      tag.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );

  return (
    <>
      <SearchProjectForm />

      {filteredProjects.map((project) => (
        <Card key={project.title} className="w-full">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{project.description}</p>
          </CardContent>
          <CardFooter className="flex flex-wrap justify-between gap-2 md:flex-nowrap">
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-sm p-2 uppercase tracking-wide"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <ProjectCardIcons project={project} />
          </CardFooter>
        </Card>
      ))}
    </>
  );
}

function ProjectCardIcons({
  project,
}: {
  project: (typeof projectsData)[number];
}) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="active-none items-baseline p-2"
        asChild
      >
        <Link href={project.githubUrl} target="_blank">
          <FaGithub size={24} />
        </Link>
      </Button>
      {project.liveUrl && (
        <Button
          variant="outline"
          size="icon"
          className="active-none p-2"
          asChild
        >
          <Link href={project.liveUrl} target="_blank">
            <TbWorld size={24} />
          </Link>
        </Button>
      )}
    </div>
  );
}
