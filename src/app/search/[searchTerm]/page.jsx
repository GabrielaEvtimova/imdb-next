import Results from "@/components/Results/Results";
import React from "react";

const API_KEY = process.env.API_KEY;

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  console.log(params);

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const movies = data.results;
  return (
    <div>
      {movies && movies.length === 0 && (
        <h1 className="text-center pt-6">No results found.</h1>
      )}
      {movies && <Results results={movies} />}
    </div>
  );
}