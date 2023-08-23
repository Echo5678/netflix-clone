import { Movie } from "@/types/data";
import Link from "next/link";

interface MovieCardProps {
  movie: Movie;
  key: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  key,
}: MovieCardProps) => {
  return (
    <li
      key={key}
      className="relative group h-[20vw] md:h-[12vw] hover:scale-110 transition  ease-in duration-300 hover:z-40"
    >
      <Link href={`/watch/${movie._id}`} className="group">
        <video
          poster={movie.thumbnailUrl}
          className="rounded-md hidden group-hover:block w-full h-full transition"
          disablePictureInPicture
          src={movie.videoUrl}
          onMouseOver={(event) => (event.target as HTMLVideoElement).play()}
          onMouseOut={(event) => (event.target as HTMLVideoElement).pause()}
        />
        <img
          src={movie.thumbnailUrl}
          alt={`${movie.title} thumbnail`}
          className="rounded-md block group-hover:hidden object-cover transition w-full h-[20vw] md:h-[12vw]"
          draggable={false}
        />
      </Link>
    </li>
  );
};

export default MovieCard;
