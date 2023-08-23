"use client";

import { MainNav } from "./main-nav";
import UserProfile from "./user-profile";
import SearchBar from "./search-bar";

import { usePage } from "@/hooks/use-page";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const page = usePage();

  return (
    <header
      className={cn(
        "w-full z-40 flex justify-between px-2 md:px-4 pt-2 items-center bg-transparent",
        page.page === "" && "fixed"
      )}
    >
      <div className="flex space-x-2 md:space-x-4">
        <button
          onClick={() => page.setPage("")}
          className="font-bold text-4xl text-red-600"
        >
          N
        </button>
        <MainNav />
      </div>
      <div className="flex">
        <SearchBar />
        <UserProfile />
      </div>
    </header>
  );
}
