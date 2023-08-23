"use client";

import { useSession } from "next-auth/react";

import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

export default function SettingsPage() {
  const user = useSession();

  return (
    <>
      <div className="w-full max-w-[600px]">
        <div className="mt-[5vw] flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-2xl font-medium">
              {user.data?.user?.name}
            </span>
            <span className="text-sm text-gray-300">
              {user.data?.user?.email}
            </span>
          </div>
          <div className="button">
            {user?.data?.user?.image !== " " ? (
              <Image
                src={user?.data?.user?.image as string}
                height={50}
                width={50}
                alt="User Profile Picture"
                className="rounded-full h-[35px] w-[35px] md:h-[45px] md:w-[45px]"
              />
            ) : (
              <AiOutlineUser className="rounded-full h-[25px] w-[25px] md:h-[35px] md:w-[35px] bg-zinc-800 border border-zinc-500" />
            )}
          </div>
        </div>
        <hr className="border-0 h-0.5 bg-zinc-800 mt-2" />
        <span className="flex justify-center mt-2">To be continued...</span>
        <Link href="/" className="flex justify-end">
          <button className="px-2 py-1.5  rounded-md text-black bg-white flex items-center font-medium space-x-2 text-md hover:bg-gray-100">
            <AiOutlineHome className="h-full w-auto" />
            <span>Home</span>
          </button>
        </Link>
      </div>
    </>
  );
}
