import MovieCard, { MovieCardInterface } from "@/components/MovieCard";
import React from "react";
import Dashboard from "@/components/Dashboard";
import Paginate from "@/components/Paginate";

type Props = {
  searchParams?: {
    page?: number;
  };
};

async function getPopularMovies(page: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );
  return res.json();
}

const page = async ({ searchParams }: Props) => {
    const page = searchParams?.page || 1;

    const popularMovies = await getPopularMovies(page);

  return (
    <>
    <Dashboard></Dashboard>
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium">Popular Movies</h1>
        </div>
        <div className="grid grid-cols-4 mt-4 gap-4">
          {popularMovies.results.map((movie: MovieCardInterface) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
        <Paginate
          currentPage={page < 1 || page > popularMovies.total_pages ? 1 : page}
          totalPages={popularMovies.total_pages}
        />
        </div>
    </main>
    </>
  );
};

export default page;
