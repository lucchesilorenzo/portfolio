import { SearchContext } from "@/app/contexts/search-context-provider";
import { useContext } from "react";

export function useSearchQueryContext() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error(
      "useSearchQueryContext must be used within SearchContextProvider",
    );
  }

  return context;
}
