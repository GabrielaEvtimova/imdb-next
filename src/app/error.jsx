"use client";

import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <button
        className="hover:bg-amber-600 hover:text-amber-100 dark:text-amber-100 bg-amber-500 dark:bg-amber-600 dark:hover:bg-amber-500 dark:hover:text-neutral-800 p-2 py-1 m-2 rounded-lg uppercase"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
