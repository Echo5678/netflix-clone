"use client";

import { AiOutlineSearch } from "react-icons/ai";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { usePage } from "@/hooks/use-page";

export default function SearchBar() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const page = usePage();

  const setSearch = (e: any) => {
    if (e.target.value) {
      page.setPage(`Showing results for: ${e.target.value}`);
      page.setSearch(e.target.value);
    } else {
      page.setPage("");
      page.setSearch("");
    }
  };

  return (
    <div
      className={cn(
        "flex items-center mr-2 px-3 py-1 md:px-2 md:py-0.5 text-sm border border-transparent h-10 xs:h-auto ml-2 xs:ml-0 space-x-2",
        showSearchBar &&
          "border search-bar border-zinc-400 rounded-3xl bg-black/50"
      )}
    >
      <input
        className={cn(
          "bg-transparent outline-none hidden w-[150px] md:w-auto placeholder:text-white/90",
          showSearchBar ? "block" : "text-muted-foreground"
        )}
        placeholder="Search Movies and TV"
        type="text"
        onChange={(e) => {
          setSearch(e);
        }}
      />
      <button onClick={() => setShowSearchBar(!showSearchBar)}>
        <AiOutlineSearch className="h-6 w-6 md:h-7 md:w-7" />
      </button>
    </div>
  );
}
