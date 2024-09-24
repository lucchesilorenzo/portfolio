import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import ProjectCardIcons from "./project-card-icons";
import ProjectCard from "./project-card";
import { cn } from "@/lib/utils";
import { projectsData } from "@/lib/data";

export default function ProjectsCarousel() {
  return (
    <Carousel opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {projectsData
          .filter((project) => project.imageUrl !== "")
          .map((project) => (
            <CarouselItem key={project.title}>
              <div className="relative h-[260px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[500px]">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className={cn(
                    "rounded-lg object-cover",
                    project.title === "Easy Car Rental" ||
                      project.title === "PetCare Solutions"
                      ? "object-center"
                      : "object-left",
                  )}
                />
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <ProjectCardIcons
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                  />
                </div>
              </div>
              <div className="mt-4">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                />
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
