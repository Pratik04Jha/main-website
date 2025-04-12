import React from "react";

const LandingPage = () => {
  return (
    <div className="relative flex justify-center items-center flex-col h-screen overflow-hidden bg-black text-white px-4 sm:px-6 md:px-12">
      {/* Grid SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-100 z-0"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          WebkitMaskImage: "radial-gradient( black, transparent )",
          maskImage: "linear-gradient(to bottom, transparent, black 50%)",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#ffffff22"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        <h1 className="masked text-4xl sm:text-5xl md:text-7xl font-bold">
          Zenius
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold py-4">
          Your complete platform for all your needs
        </h1>
        <h2 className="text-sm sm:text-base md:text-[20px] w-full sm:w-[90%] md:w-[70%] lg:w-[52%] px-2 sm:px-0">
          Zenius provides all the tools that you need on your day to day life,
          whether it’s productivity, automation, AI assistance or anything else.
        </h2>

        <div className="relative group w-fit my-10">
          <div className="relative p-[3px] sm:p-[4px] md:p-[5px] px-[6px] sm:px-[8px] md:px-[10px] rounded-[100px] overflow-hidden">
            <div className="absolute -inset-100 z-0 rounded-[100px] bg-[conic-gradient(from_0deg,red,orange,yellow,green,cyan,blue,violet,red)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow pointer-events-none" />

            <button className="changed relative overflow-hidden text-sm sm:text-base md:text-lg lg:text-2xl py-3 px-10 sm:py-4 sm:px-20 md:py-10 md:px-32 cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out bg-amber-50 text-black rounded-[100px] flex items-center justify-center z-20">
              <span className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-30 text-white mix-blend-difference whitespace-nowrap">
                Get started
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
