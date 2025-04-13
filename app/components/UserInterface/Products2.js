"use client";
import React from "react";

const Products = ({ productData }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mb-10 bg-black">
      <div className="relative group w-full sm:w-fit border-1 border-white/20 rounded-lg cursor-pointer ">
        <div className="relative p-[1px] rounded-[10px] overflow-hidden flex h-140 flex-col  gap-10 items-center  justify-center">
          <div className="flex items-center justify-center w-full gap-4 z-10">
            <h1 className="text-xl font-bold text-white">
              {productData.title}
            </h1>
          </div>
          <div className="z-10 my-4 w-full flex justify-center">
            <img
              src={productData.imgSrc}
              alt=""
              className="rounded-xl w-full max-w-[500px]"
            />
          </div>
          <div className="z-10 text-white text-center px-2 w-[70%]">
            <p className="text-base sm:text-lg opacity-80 1/2 justify-center text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              nostrum ut id sint.
            </p>
          </div>
        </div>
      </div>
      <button className="py-2 px-5 rounded-lg bg-white/95 cursor-pointer font-semibold  my-2 text-black min-w-60">
        View details
      </button>
    </div>
  );
};

export default Products;
