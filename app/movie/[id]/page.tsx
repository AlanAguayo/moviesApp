import CastCard, { ICastCard } from "@/components/CastCard";
import MovieCard, { MovieCardInterface } from "@/components/MovieCard";
import { NO_IMAGE_URL, IMAGE_URL } from "@/config";
import dayjs from "dayjs";
import Image from "next/image";
import Dashboard from "@/components/Dashboard";

interface InterfaceParamsMovieDetails {
  params: {
    id: MovieCardInterface["id"];
  };
}

async function getMovieDetails(id: MovieCardInterface["id"]) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  );
  return res.json();
}

async function getMovieCasts(id: MovieCardInterface["id"]) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}&language=en-US`
  );
  return res.json();
}

const page = async ({ params }: InterfaceParamsMovieDetails) => {
  const { id } = params;
  const movie = await getMovieDetails(id);
  const movieCast = await getMovieCasts(id);

  const durationHours = Math.round(movie?.runtime / 60);
  const durationMinutes = Math.round(movie?.runtime % 60);

  return (
    <>
    <Dashboard></Dashboard>
      <div className="w-[1000px] mx-auto">
        <div className="mt-6">
          <div className="flex gap-7">
            <div>
              <div className="w-[270px] h-[400px] relative">
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
            </div>
            <div>
              <div className="flex gap-3">
                <h2 className="text-xl">{movie?.title}</h2>
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
              <div className="flex gap-4 items-center mt-4">
                <h5>
                  {dayjs(movie?.release_date).format("MMM DD YYYY")}
                </h5>
                <h5> | </h5>
                {movie?.runtime > 0 && (
                  <>
                    <h5>{`${durationHours}h ${durationMinutes}m`}</h5>
                    <h5> | </h5>
                  </>
                )}
                <h5>
                  {movie?.genres?.map((genre: any) => genre?.name).join(", ")}
                </h5>
              </div>
              <div className="mt-5">
                <p>{movie?.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1200px] mx-auto">
          <div className="mt-4">
            <h1 className="text-2xl">Cast</h1>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {movieCast?.cast?.slice(0, 8).map((cast: ICastCard) => (
              <CastCard key={cast?.id} cast={cast} />
            ))}
          </div>
        </div>
    </>
  );
};

export default page;
