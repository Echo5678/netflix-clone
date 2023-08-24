"use client";

import { usePage } from "@/hooks/use-page";

import { cn } from "@/lib/utils";
import Popup from "reactjs-popup";
import { RiArrowDropDownFill } from "react-icons/ri";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const page = usePage();

  const arrowStyle = { color: "#18181b" };

  const routes = [
    {
      label: "Home",
      active: page.page === ``,
    },
    {
      label: "TV Shows",
      active: page.page === `Shows`,
    },
    {
      label: "Movies",
      active: page.page === `Movies`,
    },
  ];

  return (
    <>
      <nav
        className={cn(
          "sm:flex items-center space-x-4 lg:space-x-6 hidden",
          className
        )}
      >
        {routes.map((route) => (
          <button
            key={route.label}
            onClick={() =>
              page.setPage(route.label !== "Home" ? route.label : "")
            }
            className={cn(
              "text-sm font-medium transition-colors hover:text-gray-300  text-gray-100",
              route.active
                ? "text-white font-black tracking-wide  hover:text-red-500 pointer-events-none"
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </button>
        ))}
      </nav>
      <div className="sm:hidden items-center flex">
        <Popup
          trigger={
            <button
              type="button"
              className="flex space-x-2 items-center rounded-3xl px-1.5 py-1.5"
            >
              Categories
              <RiArrowDropDownFill className="h-5 w-5" />
            </button>
          }
          {...{ arrowStyle }}
          position={"bottom center"}
          closeOnDocumentClick
        >
          <nav className="flex flex-col bg-zinc-900/70">
            {routes.map((route) => (
              <button
                key={route.label}
                onClick={() => page.setPage(route.label)}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-gray-300  text-gray-100  px-5 py-1 rounded-md",
                  route.active
                    ? "text-white font-black tracking-wide  hover:text-red-500 pointer-events-none"
                    : "text-muted-foreground"
                )}
              >
                {route.label}
              </button>
            ))}
          </nav>
        </Popup>
      </div>
    </>
  );
}
