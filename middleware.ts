import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path !== "/auth/signin") {
    try {
      const token = await getToken({ req, secret: process.env.SECRET });
      if (!token) {
        throw new Error("Please authenticate");
      }
    } catch (e) {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }
  } else {
    try {
      const token = await getToken({ req, secret: process.env.SECRET });
      if (token) {
        throw new Error("You are already logged in");
      }
    } catch (e) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = { matcher: ["/((?!api|_next|.*\\..*).*)"] };
