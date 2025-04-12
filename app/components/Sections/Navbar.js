import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[rgba(0,0,0,0.7)] backdrop-blur-2xl">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between h-10 md:h-14">
        
        {/* Left Side: Logo + Links */}
        <div className="flex items-center gap-4 flex-wrap">
          <Link href="/" className="flex items-center gap-1">
            <img
              src="/xlogo.png"
              alt="Logo of the site"
              className="h-[20px] w-[20px] object-center object-cover"
            />
            <p className="font-semibold text-[17px]">Zenius</p>
          </Link>

          {/* Nav Links (visible only on medium and above) */}
          <div className="hidden md:flex gap-1">
            <Link href="/" className="hover:bg-zinc-900/90 py-1 px-3 rounded-lg">
              Products
            </Link>
            <Link href="/" className="hover:bg-zinc-900/90 py-1 px-3 rounded-lg">
              About
            </Link>
            <Link href="/" className="hover:bg-zinc-900/90 py-1 px-3 rounded-lg">
              Contact
            </Link>
            <Link href="/" className="hover:bg-zinc-900/90 py-1 px-3 rounded-lg">
              Blogs
            </Link>
          </div>
        </div>

        {/* Right Side: Auth Buttons */}
        <div className="flex items-center gap-2 mt-2 md:mt-0 flex-wrap">
          <button className="bg-black rounded-lg py-1 px-4 text-white border border-white/20 font-semibold text-sm md:text-base">
            Log in
          </button>
          <button className="bg-white rounded-lg py-1 px-4 text-black font-semibold text-sm md:text-base">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
