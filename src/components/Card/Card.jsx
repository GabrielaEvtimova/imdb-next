import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div
      className="p-4 group cursor-pointer sm:hover:shadow-neutral-700
    sm:shadow-md rounded-lg"
    >
      <Link href={`/movie/${result.id}`}>
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/original${
              result.backdrop_path || result.poster_path
            }`}
            alt={`${result.title}`}
            width={500}
            height={300}
            className="sm:rounded-t-lg w-full group-hover:opacity-75 transition-opacity duration-300"
          ></Image>
        </div>
      </Link>
      <div className="p-2">
        <h1 className="text-xl font-semibold truncate">
          {result.title || result.original_name}
        </h1>
        <p className="flex items-center text-sm">
          {result.release_date || result.first_air_date}
          <FiThumbsUp className="h-5 mr-1 ml-3" />
          {result.vote_count}
        </p>

        <p className="line-clamp-2 text-md mt-2">{result.overview}</p>
      </div>
    </div>
  );
}
