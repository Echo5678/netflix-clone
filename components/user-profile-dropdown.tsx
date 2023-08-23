import Link from "next/link";

import type { Session } from "next-auth";

import { AiOutlineSetting } from "react-icons/ai";
import { PiSignOutFill } from "react-icons/pi";

export default function UserProfileDropdown({ session }: { session: Session }) {
  return (
    <div className="bg-zinc-900 text-xs font-medium md:text-sm rounded-lg mr-1 sm:mr-0">
      <div className="px-3 py-2.5">
        Signed in as <span className="font-bold">{session?.user?.email}</span>
      </div>
      <ul className="w-full border-zinc-700 border-t">
        <li className="py-1.5 px-3  hover:bg-zinc-800">
          <Link href="/settings" className="flex items-center">
            <AiOutlineSetting className="h-5 w-5 mr-2" />
            Settings
          </Link>
        </li>
        <li className="py-1.5 text-red-500 hover:bg-zinc-800 px-3 rounded-b-lg">
          <Link href="/api/auth/signout" className="flex items-center">
            <PiSignOutFill className="h-5 w-5 mr-2" />
            Signout
          </Link>
        </li>
      </ul>
    </div>
  );
}
