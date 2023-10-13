import React from "react";
import MovieCard, { MovieCardInterface } from "./MovieCard";

const PopularMovies = ({ popularMovies }: { popularMovies: any }) => {
  return (
      <div className="grid grid-cols-4 mt-8 gap-10">
        {popularMovies.results.map((movie: MovieCardInterface) => (
          <MovieCard key={movie?.id} movie={movie}/>
        ))}
      </div>
  );
};

export default PopularMovies;
