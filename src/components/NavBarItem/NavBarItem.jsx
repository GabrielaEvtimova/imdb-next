"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function NavBarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-amber-100 dark:text-amber-100 hover:shadow-2xl dark:hover:text-neutral-800 font-semibold
        ${
          genre === param &&
          "underline underline-offset-8 decoration-2 decoration-neutral-800 hover:decoration-amber-100 dark:decoration-amber-100 dark:hover:decoration-neutral-800 rounded-xl"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
