import { cn } from "@/lib/utils";
import Image from "next/image";

type ProjectImagesProps = {
  title: string;
  imageUrl: string;
};

export default function ProjectImages({ title, imageUrl }: ProjectImagesProps) {
  return (
    <Image
      src={imageUrl}
      alt={title}
      fill
      className={cn(
        "rounded-lg object-cover",
        title === "React Pizzeria" || title === "Contact Manager"
          ? "object-left"
          : "object-center",
      )}
    />
  );
}
