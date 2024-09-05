"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { projectsData } from "@/lib/data";

function ProjectCards() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProjects =
    searchQuery.length > 0
      ? projectsData.filter((project) =>
          project.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        )
      : projectsData;

  return (
    <>
      <div>
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search projects..."
          className="p-6"
        />
      </div>

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
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="items-baseline p-2"
                asChild
              >
                <Link href={project.githubUrl} target="_blank">
                  <FaGithub size={24} />
                </Link>
              </Button>
              {project.liveUrl && (
                <Button variant="ghost" size="icon" className="p-2" asChild>
                  <Link href={project.liveUrl} target="_blank">
                    <TbWorld size={24} />
                  </Link>
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}

export default ProjectCards;
