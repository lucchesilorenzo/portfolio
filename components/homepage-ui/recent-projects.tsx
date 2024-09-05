import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { Button } from "../ui/button";

function RecentProjects() {
  return (
    <section className="w-full space-y-8">
      <h2 className="text-2xl font-semibold tracking-tight">Recent projects</h2>
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {projectsData
            .filter((project) => project.imageUrl !== "")
            .map((project) => (
              <CarouselItem key={project.title}>
                <div className="relative h-[260px] sm:h-[340px] md:h-[380px] lg:h-[380px] xl:h-[420px]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className={`rounded-lg object-cover ${project.title === "Easy Car Rental" ? "object-center" : "object-left"}`}
                  />
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="p-2"
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
                        className="p-2"
                        asChild
                      >
                        <Link href={project.liveUrl} target="_blank">
                          <TbWorld size={24} />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Button variant="link" className="p-0 text-lg" asChild>
        <Link href="/projects">All projects</Link>
      </Button>
    </section>
  );
}

export default RecentProjects;
