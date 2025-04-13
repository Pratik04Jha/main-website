"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGithub, FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-10 w-[90%] max-w-md flex flex-col items-center gap-5 shadow-xl border border-white/20">
          <img
            src={session.user.image}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />
          <h2 className="text-2xl font-semibold">{session.user.name}</h2>
          <p className="text-sm opacity-80">{session.user.email}</p>
          <button
            onClick={() => signOut()}
            className="mt-5 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition duration-300"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <form className="w-[90%] max-w-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-xl p-10 flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-center tracking-wide">Sign Up</h1>

        <div className="flex gap-4">
          <button
            onClick={() => signIn("google")}
            type="button"
            className="hover:scale-110 transition-transform duration-300 cursor-pointer border border-white/40 p-3 rounded-lg"
          >
            <FaGoogle size={24} />
          </button>
          <button
            onClick={() => signIn("facebook")}
            type="button"
            className="hover:scale-110 transition-transform duration-300 cursor-pointer border border-white/40 p-3 rounded-lg"
          >
            <FaFacebook size={24} />
          </button>
          <button
            onClick={() => signIn("apple")}
            type="button"
            className="hover:scale-110 transition-transform duration-300 cursor-pointer border border-white/40 p-3 rounded-lg"
          >
            <FaApple size={24} />
          </button>
          <button
            onClick={() => signIn("github")}
            type="button"
            className="hover:scale-110 transition-transform duration-300 cursor-pointer border border-white/40 p-3 rounded-lg"
          >
            <FaGithub size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-5 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-white/10 border border-white/30 rounded-md py-2 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full bg-white/10 border border-white/30 rounded-md py-2 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <button
            type="submit"
            className="bg-white text-black font-semibold rounded-md py-2 px-4 hover:bg-gray-200 transition duration-300"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
