import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProjectCardIcons from "./project-card-icons";
import ProjectImages from "./project-images";
import Badges from "./badges";
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
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-justify text-muted-foreground">{description}</p>
        {imageUrl && (
          <div className="relative mt-4 h-[260px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px]">
            <ProjectImages title={title} imageUrl={imageUrl} />
          </div>
        )}
        <Separator className="mt-4" />
      </CardContent>
      <CardFooter className="flex flex-wrap justify-between gap-2 md:flex-nowrap">
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Badges key={tag} tag={tag} />
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
