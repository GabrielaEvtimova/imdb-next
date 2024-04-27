import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Suspense } from "react";

const API_KEY = process.env.API_KEY;

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  const movie = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return (
    <Suspense>
    <div className="w-full">
      <div className="flex flex-col p-4 lg:pt-8 lg:flex-row content-center max-w-6xl mx-auto lg:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={`${movie.title}`}
          width={500}
          height={300}
          className="rounded-lg group-hover:opacity-75 transition-opacity duration-300"
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
        <div className="p-2">
          <h2 className="text-2xl font-semibold mb-3">
            {movie.title || movie.original_name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview: </span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date released: </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Duration: </span>
            {movie.runtime} minutes
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating: </span>
            {movie.vote_count}
          </p>
          {movie.genres && (
            <p className="mb-3">
              <span className="font-semibold mr-1">Genre: </span>
              {movie.genres.map((g) => `${g.name}`).join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
    </Suspense>
  );
}
