"use client";

import { Movie } from "@/types/data";

import { AiOutlineInfoCircle } from "react-icons/ai";

import { useMovieModal } from "@/hooks/use-movie-modal";
import Modal from "./movie-modal";
import { cn } from "@/lib/utils";
import PlayButton from "./ui/play-button";

interface BillboardProps {
  movie: Movie;
  show: string;
}

const Billboard: React.FC<BillboardProps> = ({
  movie,
  show,
}: BillboardProps) => {
  const modal = useMovieModal();

  return (
    <div className={cn("relative h-[55vw]", show ? "hidden" : "block")}>
      <video
        poster={movie?.thumbnailUrl}
        className="w-full h-[55vw] object-cover brightness-[60%] transition duration-500 pointer-events-none"
        disablePictureInPicture
        autoPlay
        muted
        loop
        src={movie?.videoUrl}
      ></video>
      <div className="absolute top-[35%] md:top[40%] lg:top-[60%] ml-4 md:ml-14 space-y-3 md:space-y-4">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
          {movie?.title}
        </h1>
        <p className="w-[75%] text-xs md:text-sm description">
          {movie?.description}
        </p>
        <div className="flex space-x-3 w-full">
          <PlayButton id={movie._id} />
          <button
            className="flex items-center bg-gray-600 bg-opacity-60 text-white font-semibold py-1 px-3 rounded-md  w-[130px] hover:bg-opacity-40"
            onClick={modal.onOpen}
          >
            <AiOutlineInfoCircle className="h-full w-auto mr-2" />
            More Info
          </button>
          <Modal movie={movie} />
        </div>
      </div>
      <span className="absolute top-[70%] -right-0 bg-gray-500/40 py-1.5 pr-6 pl-2 border-l-4 border-gray-400 text-sm">
        {movie?.genre}
      </span>
    </div>
  );
};

export default Billboard;
