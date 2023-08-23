"use client";

import { Movie } from "@/types/data";
import MovieCard from "./movie-card";

interface MovieListProps {
  title: string;
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({
  movies,
  title,
}: MovieListProps) => {
  return (
    <div className="mt-6 px-2 sm:px-4">
      <h1 className="text-xl font-bold mb-1">{title ? title : "Movies"}</h1>
      <ul className="grid  grid-cols-2 md:grid-cols-4 gap-2">
        {movies.map((movie: Movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
