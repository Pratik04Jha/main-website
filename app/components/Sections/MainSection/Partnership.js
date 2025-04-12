import React from "react";

const Partnership = () => {
  return (
    <div className="flex items-center flex-col gap-5 w-full my-60">
      <h1 className="text-5xl sm:text-7xl font-bold">Partnerships</h1>
      <p>There are currently no partners</p>
      <div className="relative p-[3px] rounded-xl overflow-hidden">
        <div className="absolute -inset-100 z-0 rounded-xl bg-[conic-gradient(from_0deg,red,orange,yellow,green,cyan,blue,violet,red)] animate-spin-slow" />

        <div className="relative z-10 bg-black rounded-xl py-6 px-10 text-white text-center">
          <h1 className="text-2xl font-bold mb-2">Interested in partnering?</h1>
          <p className="text-sm text-gray-300">
            Contact us through the contact section, email us, or message us on
            our social media handles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
