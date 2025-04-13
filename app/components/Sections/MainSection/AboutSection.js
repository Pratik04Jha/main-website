import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center gap-5 relative">
      <h1 className="text-6xl font-bold text-center w-[70%] sm:w-full">
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Learn
        </span>{" "}
        about me
      </h1>
      <p className="sm:w-1/2 text-center w-[80%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et incidunt
        culpa odit enim, illo, molestias non, quibusdam eum iste veniam
        temporibus neque ex velit? Nobis sunt beatae, officia numquam cum
        quibusdam iusto enim at est totam iste delectus ex quae debitis
        voluptatum ullam et, molestiae animi quisquam quam consectetur. Quia.
      </p>
      <button className="bg-white text-black font-semibold py-1 px-4 rounded-lg cursor-pointer hover:bg-white/90">
        Learn more
      </button>
      <div className="bg-pink-500/70 blur-[200px] h-50 w-50 rounded-full rotate-20 absolute top-[100%] z-0 right-[5%] -translate-1/2  " />

      <h1 className="sm:text-[100px] leading-14 sm:leading-25 font-semibold text-center sm:w-[50%] w-full mt-40 text-[60px]">
        We do what we are{" "}
        <em className="font-normal bg-gradient-to-r from-teal-500 via-violet-600 to-pink-500 bg-clip-text text-transparent">
          great
        </em>{" "}
        at
      </h1>
    </div>
  );
};

export default AboutSection;
