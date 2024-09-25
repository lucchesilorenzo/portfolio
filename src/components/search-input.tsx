"use client";

import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useSearchQueryContext } from "@/lib/hooks";

export default function SearchInput() {
  const { searchQuery, handleChangeSearchQuery } = useSearchQueryContext();

  return (
    <div className="relative max-w-sm">
      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      <Input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => handleChangeSearchQuery(e.target.value)}
        className="px-8 py-6"
      />
      {searchQuery && (
        <button
          onClick={() => handleChangeSearchQuery("")}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
