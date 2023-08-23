import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import type { Session } from "next-auth";
import Provider from "@/lib/auth-provider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "NextFlix",
  description: "Movies, Shows",
};

export default function RootLayout({
  session,
  children,
}: {
  session: Session;
  children: React.ReactNode;
}) {
  return (
    <Provider session={session}>
      <html lang="en" className="bg-black/95 text-white">
        <body className={cn(inter.className, "flex flex-col min-h-screen")}>
          {children}
        </body>
      </html>
    </Provider>
  );
}
