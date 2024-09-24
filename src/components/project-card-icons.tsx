import Link from "next/link";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

type ProjectCardIconsProps = {
  githubUrl?: string;
  liveUrl?: string;
};

export default function ProjectCardIcons({
  githubUrl,
  liveUrl,
}: ProjectCardIconsProps) {
  return (
    <>
      {githubUrl && (
        <Button
          variant="outline"
          size="icon"
          className="items-baseline p-2"
          asChild
        >
          <Link href={githubUrl} target="_blank">
            <FaGithub size={24} />
          </Link>
        </Button>
      )}
      {liveUrl && (
        <Button variant="outline" size="icon" className="p-2" asChild>
          <Link href={liveUrl} target="_blank">
            <TbWorld size={24} />
          </Link>
        </Button>
      )}
    </>
  );
}
