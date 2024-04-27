import Results from "@/components/Results/Results";
import React, { Suspense } from "react";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 43_200_000 } } // revalidate every 12 hours
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const results = data.results;

  // console.log(results);
  return (
    <Suspense>
      <div>
        <Results results={results} />
      </div>
    </Suspense>
  );
}
