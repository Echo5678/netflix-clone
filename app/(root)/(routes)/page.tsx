import getRandomMovie from "@/actions/get-random-movie";

import HomePage from "@/components/home-page";

import "@/lib/mongodb";
import Movie from "@/models/Movie";

export default async function Page() {
  const movie = await getRandomMovie();
  const movies = await Movie.find({});

  return (
    <>
      <HomePage movie={movie} movies={movies} />
    </>
  );
}
