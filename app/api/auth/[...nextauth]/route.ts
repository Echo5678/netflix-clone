import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb-promise";
import { db } from "@/lib/mongodb";

import { compare } from "bcryptjs";
import User from "@/models/User";

const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }

        await db();

        const user = await User.findOne({ email: credentials.email });

        if (!user || !user.password) {
          throw new Error("Email does not exist");
        }

        const isCorrectPassword = await compare(
          credentials.password,
          user.password
        );

        if (!isCorrectPassword) {
          throw new Error("Incorrect password");
        }

        return user;
      },
    }),
  ],
  secret: process.env.SECRET,

  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
  theme: {
    colorScheme: "dark",
    brandColor: "#FF0000",
    buttonText: "#000000",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
