import Movie from "@/models/Movie";
import Link from "next/link";

import { AiOutlineArrowLeft } from "react-icons/ai";

interface WatchPageProps {
  params: {
    movieId: string;
  };
}

const WatchPage: React.FC<WatchPageProps> = async ({ params }) => {
  const movie = await Movie.findById(params.movieId);

  return (
    <main className="h-screen w-screen items-center justify-center relative">
      <div className="absolute top-5 left-5 z-40 flex items-center space-x-2">
        <Link
          href="/"
          className=" hover:bg-gray-600/50 p-3 rounded-full w-auto"
        >
          <AiOutlineArrowLeft className="text-2xl" />
        </Link>
        <h1 className="text-2xl font-semibold">{movie.title}</h1>
      </div>
      <video
        autoPlay
        controls
        src={movie.videoUrl}
        className="w-full h-full"
      ></video>
    </main>
  );
};

export default WatchPage;
