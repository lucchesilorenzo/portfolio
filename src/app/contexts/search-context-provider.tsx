"use client";

import React, { createContext, useState } from "react";

type SearchContextProviderProps = {
  children: React.ReactNode;
};

type TSearchContext = {
  searchQuery: string;
  handleChangeSearchQuery: (searchQuery: string) => void;
  handleClearSearchQuery: () => void;
};

export const SearchContext = createContext<TSearchContext | null>(null);

export default function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleChangeSearchQuery(searchQuery: string) {
    setSearchQuery(searchQuery);
  }

  function handleClearSearchQuery() {
    setSearchQuery("");
  }

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        handleChangeSearchQuery,
        handleClearSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
