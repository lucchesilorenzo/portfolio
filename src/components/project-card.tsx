import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import ProjectCardIcons from "./project-card-icons";
import Image from "next/image";
import { Separator } from "./ui/separator";

type ProjectCardProps = {
  type?: "projects";
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
};

export default function ProjectCard({
  type,
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <Card key={title} className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-justify text-muted-foreground">{description}</p>
        {imageUrl && (
          <div className="relative mt-4 h-[260px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[500px]">
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          </div>
        )}
        <Separator className="mt-4" />
      </CardContent>
      <CardFooter className="flex flex-wrap justify-between gap-2 md:flex-nowrap">
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-sm p-2 uppercase tracking-wide"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {type === "projects" && (
          <div className="flex items-center gap-2">
            <ProjectCardIcons githubUrl={githubUrl} liveUrl={liveUrl} />
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
