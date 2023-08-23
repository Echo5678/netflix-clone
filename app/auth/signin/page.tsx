"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

import { AiFillGoogleCircle } from "react-icons/ai";
import { PiSpinnerLight } from "react-icons/pi";

import { useCallback, useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(
    async (e: any) => {
      try {
        e.preventDefault();
        setLoading(true);

        await signIn("credentials", {
          email,
          password,
          redirect: true,
          callbackUrl: "/",
        });

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    },
    [email, password]
  );

  const register = useCallback(
    async (e: any) => {
      setLoading(true);

      try {
        const res = await fetch("/api/register", {
          method: "POST",
          body: JSON.stringify({ name, email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        setLoading(false);

        login(e);
      } catch (error) {
        console.error(error);
      }
    },
    [email, name, password, login]
  );

  return (
    <form
      onSubmit={variant === "login" ? (e) => login(e) : (e) => register(e)}
      className="w-full h-full max-md:bg-black from-transparent via-black/70 to-black/95 bg-gradient-radial flex items-center justify-center  text-white"
    >
      <div className="bg-black sm:rounded-2xl p-8 justify-center flex flex-col items-center">
        <Image height={100} width={100} alt="logo" src="/logo.jpeg" />
        <div className="flex">
          <div className="p-16 flex flex-col space-y-5">
            <h2 className="text-xl md:text-2xl font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            {variant === "register" && (
              <input
                id="name"
                type="text"
                placeholder="Username"
                onChange={(e) => setName(e.target.value)}
                className="signup-form-input"
                disabled={loading}
              />
            )}
            <input
              id="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="signup-form-input"
              disabled={loading}
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="signup-form-input"
              disabled={loading}
            />
            <button
              onClick={
                variant === "login" ? (e) => login(e) : (e) => register(e)
              }
              className="w-full bg-red-700 py-4  rounded-3xl font-semibold active:bg-red-700/90 flex justify-center"
              disabled={loading}
            >
              {loading ? (
                <PiSpinnerLight className="h-7 w-7 animate-spin-slow" />
              ) : variant === "login" ? (
                "Login"
              ) : (
                "Sign up"
              )}
            </button>
            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <span
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                aria-disabled={loading}
              >
                <AiFillGoogleCircle className="w-full h-full" />
              </span>
            </div>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
