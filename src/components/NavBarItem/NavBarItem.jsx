"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function NavBarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Suspense>
      <div>
        <Link
          className={`hover:text-amber-100 dark:text-amber-100 hover:shadow-2xl dark:hover:text-neutral-900 font-semibold
        ${
          genre === param &&
          "underline underline-offset-8 decoration-2 decoration-neutral-900 hover:decoration-amber-100 dark:decoration-amber-100 dark:hover:decoration-neutral-800 rounded-xl"
        }`}
          href={`/?genre=${param}`}
        >
          {title}
        </Link>
      </div>
    </Suspense>
  );
}
