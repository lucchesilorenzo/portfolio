import React from "react";
import { Input } from "./ui/input";
import { useSearchQueryContext } from "@/lib/hooks";

export default function SearchProjectForm() {
  const { searchQuery, handleChangeSearchQuery } = useSearchQueryContext();

  return (
    <form>
      <Input
        value={searchQuery}
        onChange={(e) => handleChangeSearchQuery(e.target.value)}
        placeholder="Search projects..."
        className="p-6"
      />
    </form>
  );
}
