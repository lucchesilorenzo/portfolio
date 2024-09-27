import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ProjectCardIcons from "./project-card-icons";
import ProjectCard from "./project-card";
import { projectsData } from "@/lib/data";
import ProjectImages from "./project-images";

export default function ProjectsCarousel() {
  return (
    <Carousel opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {projectsData
          .filter((project) => project.imageUrl !== "")
          .map((project) => (
            <CarouselItem key={project.title}>
              <div className="relative h-[260px] sm:h-[350px] md:h-[550px]">
                <ProjectImages
                  title={project.title}
                  imageUrl={project.imageUrl}
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
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
}
