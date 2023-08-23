import Link from "next/link";
import { HiMiniPlay } from "react-icons/hi2";

export default function PlayButton({ id }: { id: string }) {
  return (
    <>
      <Link
        href={`/watch/${id}`}
        className="flex items-center bg-white text-black font-medium py-1 px-5 rounded-md hover:bg-zinc-200"
      >
        <HiMiniPlay className="h-full w-auto text-black mr-2" />
        Play
      </Link>
    </>
  );
}
