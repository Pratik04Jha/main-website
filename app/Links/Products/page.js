import ProductSection from "@/app/components/Sections/MainSection/ProductSection";
import Products from "@/app/components/UserInterface/Products2";
import React from "react";
import { IoMdArrowDown } from "react-icons/io";

const page = () => {
  const productData = [
    { title: "Portfolio website", imgSrc: "/Project/portfolio.png" },
    { title: "Redisigning", imgSrc: "/Project/redisigning.png" },
    { title: "Artificial intelligence", imgSrc: "/Project/ai.png" },
    { title: "Productivity app", imgSrc: "/Project/productivity.png" },
    { title: "Game arcade", imgSrc: "/Project/arcade.png" },
    { title: "Time management", imgSrc: "/Project/time.png" },
  ];
  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center flex-col gap-8 relative">
        {/* <div className="bg-pink-500/50 blur-[100px] h-30 w-100 rounded-full -rotate-45 absolute top-0 z-10000000000000 left-[40%] -translate-1/2 pointer-events-none " />
        <div className="bg-pink-500/50 blur-[100px] h-30 w-100 rounded-full rotate-20 absolute -top-10 z-10000000000000 left-[65%] -translate-1/2  " /> */}

        <h1 className="text-7xl text-bold text-center w-1/2">
          We are not a{" "}
          <em className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Tool
          </em>{" "}
          factory, we focus on what{" "}
          <em className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            really
          </em>{" "}
          helps
        </h1>
        {/* <div className="bg-pink-500/70 blur-[140px] h-50 w-50 rounded-full rotate-20 absolute top-[100%] z-0 right-[5%] -translate-1/2  " /> */}

        <div className="relative group w-fit mx-auto my-4 rounded-[100px]">
          <div className="relative p-[5px] px-[10px] rounded-[100px] overflow-hidden">
            <div className="absolute -inset-100 z-0 rounded-[100px] bg-[conic-gradient(from_0deg,red,orange,yellow,green,cyan,blue,violet,red)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow pointer-events-none" />
            <button className="changed relative overflow-hidden text-base sm:text-lg md:text-2xl py-6 px-16 sm:py-4 sm:px-40 md:py-10 md:px-32 cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out bg-amber-50 text-black rounded-[100px] flex items-center justify-center z-20">
              <span className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-30 text-white mix-blend-difference whitespace-nowrap">
                Check our work
              </span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 -translate-1/2 left-[50%] flex items-center justify-center gap-2 h-10">
          <IoMdArrowDown size={30} />
          <h1 className="text-2xl ">Tools which do work </h1>
          <IoMdArrowDown size={30} />
        </div>
      </div>
      <div className="flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 my-10">
          {productData.map((items, index) => (
            <Products key={index} productData={items} />
          ))}
        </div>{" "}
      </div>
    </>
  );
};

export default page;
