import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex justify-between px-4 fixed w-full text-[16px] h-10 bg-[rgb(0, 0, 0, 0.7)] backdrop-blur-2xl z-50">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-1">
          <img
            src="/xlogo.png"
            alt="Logo of the site"
            className="h-[20px] w-[20px] object-center object-cover "
          />
          <p className="font-semibold text-[17px]">Zenius</p>
        </Link>
        <div className="flex gap-1">
          <Link href="/" className="hover:bg-zinc-900/90 py-1 px-3 rounded-lg">Products</Link>
          <Link href="/" className="hover:bg-zinc-900/90 py-1 px-3 rounded-lg">About</Link>
          <Link href="/" className="hover:bg-zinc-900/90 py-1 px-3 rounded-lg">Contact</Link>
          <Link href="/" className="hover:bg-zinc-900/90 py-1 px-3 rounded-lg">Blogs</Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="bg-black rounded-lg py-1 px-4 cursor-pointer text-white border-1 border-white/20 font-semibold">
          Log in
        </button>
        <button className="bg-white rounded-lg py-1 px-4 cursor-pointer text-black font-semibold">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
