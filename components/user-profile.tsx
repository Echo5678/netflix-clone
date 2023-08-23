"use client";

import { useSession } from "next-auth/react";
import type { Session } from "next-auth";

import { AiOutlineUser } from "react-icons/ai";

import Image from "next/image";
import Popup from "reactjs-popup";
import UserProfileDropdown from "./user-profile-dropdown";

export default function UserProfile() {
  const { data: session } = useSession();

  const arrowStyle = { color: "#18181b" };

  return (
    <div className="tooltipBoundary  hidden xs:block">
      <Popup
        trigger={
          <button type="button" className="button">
            {session?.user?.image !== " " ? (
              <Image
                src={session?.user?.image as string}
                height={50}
                width={50}
                alt="User Profile Picture"
                className="rounded-full h-[35px] w-[35px] md:h-[45px] md:w-[45px]"
              />
            ) : (
              <AiOutlineUser className="rounded-full h-[25px] w-[25px] md:h-[35px] md:w-[35px] bg-zinc-800 border border-zinc-500" />
            )}
          </button>
        }
        {...{ arrowStyle }}
        position={"bottom right"}
        closeOnDocumentClick
      >
        <UserProfileDropdown session={session as Session} />
      </Popup>
    </div>
  );
}
