"use client";
import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi"; // Feather icon for "explore"

const Products = ({ productData }) => {
  const [cursorPos, setCursorPos] = useState({ x: 100, y: 100 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y });
  };

  return (
    <div className="relative group w-fit ">
      <div className="relative p-[1px]  rounded-[10px] overflow-hidden">
        <div className="absolute -inset-100 z-0 rounded-[10px] bg-[conic-gradient(from_0deg,red,orange,yellow,green,cyan,blue,violet,red)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow pointer-events-none" />

        <div
          className="h-160 w-150 rounded-lg cursor-pointer group transition-all duration-500 ease-in-out "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="relative border border-white/15 py-8 px-8 rounded-2xl h-full w-full flex flex-col gap-15 items-center justify-center overflow-hidden bg-black"
            onMouseMove={handleMouseMove}
          >
            <div
              className={`absolute top-0 left-0 w-full h-full z-20 bg-black/70 backdrop-blur-[4px] flex items-center justify-center 
          transition-all duration-500 ease-in-out 
          ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            >
              <div
                className="absolute bg-white blur-[300px] opacity-50 rounded-full transition-all duration-100 pointer-events-none"
                style={{
                  top: `${cursorPos.y - 150}px`,
                  left: `${cursorPos.x - 150}px`,
                  width: "300px",
                  height: "300px",
                }}
              />
              <div className="flex flex-col items-center justify-center animate-fade-in-up">
                <FiExternalLink className="text-white text-5xl  drop-shadow-xl" />

                <p className="text-white text-lg mt-2 font-semibold tracking-wide">
                  Explore
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start w-full gap-4 z-10">
              <img src="icon.ico" alt="" className="h-10 w-10" />
              <h1 className="text-xl font-bold text-white">
                {productData.title}
              </h1>
            </div>
            <div className="z-10 my-4">
              <img src={productData.imgSrc} alt="" className="rounded-xl" />
            </div>
            <div className="z-10 text-white text-center px-2">
              <p className="text-xl opacity-80">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                nostrum ut id sint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
