import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full  flex flex-col items-center justify-center gap-6">
      <h1 className="text-7xl font-bold text-center ">Blogs</h1>
      <p>There are currently no blogs</p>
      <div className="relative p-[3px] rounded-xl overflow-hidden">
        <div className="absolute -inset-100 z-0 rounded-xl bg-[conic-gradient(from_0deg,red,orange,yellow,green,cyan,blue,violet,red)] animate-spin-slow" />

        <div className="relative z-10 bg-black rounded-xl py-6 px-10 text-white text-center">
          <h1 className="text-2xl font-bold mb-2">Interested in Writing?</h1>
          <p className="text-sm text-gray-300">
            Contact us through the contact section, email us, or message us on
            our social media handles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
