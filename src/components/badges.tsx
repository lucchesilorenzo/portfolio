"use client";

import { useSearchQueryContext } from "@/lib/hooks";
import Link from "next/link";
import { Badge } from "./ui/badge";

type BadgesProps = {
  tag: string;
};

export default function Badges({ tag }: BadgesProps) {
  const { handleChangeSearchQuery } = useSearchQueryContext();

  return (
    <Link href="/projects" onClick={() => handleChangeSearchQuery(tag)}>
      <Badge
        variant="secondary"
        className="rounded-sm p-2 uppercase tracking-wide"
      >
        {tag}
      </Badge>
    </Link>
  );
}
