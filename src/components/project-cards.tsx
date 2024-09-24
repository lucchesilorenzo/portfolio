"use client";

import { projectsData } from "@/lib/data";
import { useSearchQueryContext } from "@/lib/hooks";
import ProjectCard from "./project-card";
import SearchInput from "./search-input";

export default function ProjectCards() {
  const { searchQuery } = useSearchQueryContext();

  const filteredProjects = projectsData.filter((project) =>
    project.tags.some((tag) =>
      tag.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );

  return (
    <>
      <SearchInput />

      {filteredProjects.map((project) => (
        <ProjectCard
          type="projects"
          key={project.title}
          title={project.title}
          description={project.description}
          tags={project.tags}
          imageUrl={project.imageUrl}
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
        />
      ))}
    </>
  );
}
