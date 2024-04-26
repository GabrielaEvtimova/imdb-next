import React from "react";
import NavBarItem from "../NavBarItem/NavBarItem";

export default function NavBar() {
  return (
    <div className="flex max-w-6xl gap-8 mx-auto items-center justify-center bg-amber-500 rounded dark:bg-amber-600 p-4 lg:text-lg">
      <NavBarItem title="Trending" param="fetchTrending" />
      <NavBarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
