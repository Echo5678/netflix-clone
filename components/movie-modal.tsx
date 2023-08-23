"use client";

import { Movie } from "@/types/data";

import Popup from "reactjs-popup";
import { AiOutlineClose } from "react-icons/ai";
import { useMovieModal } from "@/hooks/use-movie-modal";
import PlayButton from "./ui/play-button";

const Modal = ({ movie }: { movie: Movie }) => {
  const modal = useMovieModal();

  return (
    <Popup
      open={modal.isOpen}
      onClose={modal.onClose}
      closeOnDocumentClick
      modal
    >
      <div className="bg-zinc-900 mx-2 p-3 rounded-md overflow-y-scroll no-scrollbar  relative">
        <button className="absolute top-1 right-1 bg-black/30 p-1 rounded-md">
          <AiOutlineClose
            className="h-5 sm:h-4 w-auto"
            onClick={() => modal.onClose()}
          />
        </button>
        <img
          src={movie.thumbnailUrl}
          alt={`${movie.title} Poster`}
          className="w-full  rounded-md"
        />
        <div className="flex space-x-2  items-center">
          <h2 className="text-2xl  font-medium mt-1">{movie.title}</h2>
          <span className="text-zinc-400 font-semibold text-end">
            {movie.duration}
          </span>
        </div>
        <span className="text-sm font-medium">{movie.genre}</span>
        <p className="text-sm">{movie.description}</p>
        <div className="flex mt-5">
          <p className="flex-grow"></p>
          <PlayButton id={movie._id} />
        </div>
      </div>
    </Popup>
  );
};

export default Modal;
