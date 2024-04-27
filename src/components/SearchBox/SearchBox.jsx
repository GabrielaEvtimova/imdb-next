"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form
      className="flex justify-between px-5 max-w-6xl mt-6 mx-auto gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Start searching..."
        className="w-full h-14 rounded-lg placeholder-neutral-500 outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-500 dark:text-amber-600 px-5 h-15 text-3xl rounded-md cursor-pointer"
       
      >
        <FaSearch />
      </button>
    </form>
  );
}
