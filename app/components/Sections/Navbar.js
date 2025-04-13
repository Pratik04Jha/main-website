"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[rgba(0,0,0,0.7)] backdrop-blur-2xl">
      <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10 md:h-14">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-1">
            <img
              src="/xlogo.png"
              alt="Logo of the site"
              className="h-[20px] w-[20px] object-center object-cover"
            />
            <p className="font-semibold text-[17px]">Zenius</p>
          </Link>

          <div className="hidden md:flex gap-1">
            {[
              { title: "Products", href: "/Links/Products" },
              { title: "About", href: "/Links/About" },
              { title: "Contact", href: "/Links/Contact" },
              { title: "Blogs", href: "/Links/Blogs" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="hover:bg-zinc-800 py-1 px-3 rounded-lg ease-in-out duration-200"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link href="/Links/SignUp">
            <button className="bg-black hover:bg-zinc-900 ease-in-out duration-200 rounded-lg py-1 cursor-pointer px-4 text-white border border-white/20 font-semibold text-sm md:text-base">
              Log in
            </button>
          </Link>

          <Link href="/Links/SignUp">
            <button className="bg-white hover:bg-white/90 ease-in-out duration-200 rounded-lg py-1 px-4 cursor-pointer text-black font-semibold text-sm md:text-base">
              Sign up
            </button>
          </Link>
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (Visible when state is true) */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full flex flex-col items-center bg-[rgba(0,0,0,0.7)] py-3">
          {["Products", "About", "Contact", "Blogs"].map((item) => (
            <Link
              key={item}
              href="/"
              className="py-2 px-3 text-white hover:bg-zinc-900/90 rounded-lg"
            >
              {item}
            </Link>
          ))}
          <div className="flex flex-col items-center gap-3 mt-4 ">
            <Link href="/Links/SignUp">
              <button className="bg-black rounded-lg py-1 px-4 text-white border cursor-pointer border-white/20 font-semibold text-sm">
                Log in
              </button>
            </Link>
            <Link href="/Links/SignUp">
              <button className="bg-white rounded-lg py-1 px-4 text-black font-semibold text-sm cursor-pointer">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
