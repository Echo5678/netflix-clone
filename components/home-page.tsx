"use client";

import Billboard from "@/components/billboard";
import MovieList from "@/components/movie-list";

import { Movie } from "@/types/data";
import { usePage } from "@/hooks/use-page";

interface HomePageProps {
  movie: Movie;
  movies: Movie[];
}

const HomePage: React.FC<HomePageProps> = ({
  movie,
  movies,
}: HomePageProps) => {
  const page = usePage();

  let filteredMovies;

  if (page.search) {
    filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(page.search.toLowerCase())
    );
  } else {
    filteredMovies = null;
  }

  return (
    <>
      <Billboard movie={movie} show={page.page} />
      <MovieList
        title={page.page}
        movies={filteredMovies ? filteredMovies : movies}
      />
    </>
  );
};

export default HomePage;
