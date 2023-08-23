import { Movie as movie } from "@/types/data";
import Movie from "@/models/Movie";

const getRandomMovie = async (): Promise<movie> => {
  const count = await Movie.count();
  const random = Math.floor(Math.random() * count);
  const movie: movie = await Movie.findOne({}).skip(random);

  return movie;
};

export default getRandomMovie;
