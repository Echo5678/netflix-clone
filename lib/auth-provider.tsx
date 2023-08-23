"use client";

import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

export default function Provider({
  session,
  children,
}: {
  session: Session;
  children: React.ReactNode;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
