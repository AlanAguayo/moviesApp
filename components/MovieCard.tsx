import { NO_IMAGE_URL, IMAGE_URL } from "@/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface MovieCardInterface {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const MovieCard = ({ movie }: { movie: MovieCardInterface }) => {
  return (
    <Link href={`/movie/${movie?.id}`} className="w-full flex flex-col">
      <div className="h-[400px] relative">
        <Image
          src={
            movie?.poster_path
              ? `${IMAGE_URL}${movie?.poster_path}`
              : `${NO_IMAGE_URL}`
          }
          alt={movie?.title}
          fill={true}
        />
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-lg">{movie?.title}</h2>
        <span
          className={`p-2 rounded-md ${
            movie?.vote_average < 5
              ? `bg-red-700`
              : movie?.vote_average == 5
              ? `bg-orange-700`
              : `bg-green-700`
          }`}
        >
          {movie?.vote_average}
        </span>
      </div>
    </Link>
  );
};

export default MovieCard;
