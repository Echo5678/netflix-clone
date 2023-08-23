import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import User from "@/models/User";
import "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { email, name, password } = await req.json();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already in use." },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      email,
      name,
      password: hashedPassword,
      image: " ",
      emailVerified: new Date(),
    });

    await user.save();

    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: `Something went wrong: ${error}` },
      { status: 500 }
    );
  }
}
