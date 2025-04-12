import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaQuora,
} from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import SocialIcons from "../../UserInterface/SocialIcons";

const SocialSection = () => {
  const data = [
    {
      icon: <FaInstagram className="text-white" size={30} />,
      src: "/",
      title: "Instagram",
    },
    {
      icon: <FaGithub className="text-white" size={30} />,
      src: "/",
      title: "Github",
    },
    {
      icon: <FaTwitter className="text-white" size={30} />,
      src: "/",
      title: "Twitter",
    },
    {
      icon: <FaFacebook className="text-white" size={30} />,
      src: "/",
      title: "Facebook",
    },
    {
      icon: <FaLinkedin className="text-white" size={30} />,
      src: "/",
      title: "LinkedIn",
    },
    {
      icon: <FaQuora className="text-white" size={30} />,
      src: "/",
      title: "Quora",
    },
  ];
  return (
    <>

      <div className="flex flex-col items-center my-40 gap-5 relative">
      <div className="bg-pink-500/70 blur-[140px] h-50 w-50 rounded-full rotate-20 absolute -top-[00%] z-0 left-[10%] -translate-1/2  " />
        <svg
          className="absolute inset-0 -top-50 w-full h-full opacity-100 -z-1"
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

        <div className="flex flex-col items-center w-full">
          <FaDiscord size={100} className="text-white" />
          <h1 className="text-6xl font-bold text-center w-1/2">
            Ready to join our friendly{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              community?
            </span>
          </h1>
        </div>
        <p className="text-xl w-1/2 text-center">
          Join our vibrant Discord community! Connect, share, and grow with
          like-minded enthusiasts. Click to dive in!
        </p>
        <div className="relative group w-fit mx-auto my-4 rounded-[100px]">
          <div className="relative p-[5px] px-[10px] rounded-[100px] overflow-hidden">
            <div className="absolute -inset-100 z-0 rounded-[100px] bg-[conic-gradient(from_0deg,red,orange,yellow,green,cyan,blue,violet,red)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow pointer-events-none" />
            <button className="changed relative overflow-hidden text-base sm:text-lg md:text-2xl py-5 px-18 sm:py-4 sm:px-40 md:py-10 md:px-32 cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out bg-amber-50 text-black rounded-[100px] flex items-center justify-center z-20">
              <span className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-30 text-white mix-blend-difference whitespace-nowrap">
                I am ready
              </span>
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-center lg:justify-end gap-8 my-10">
            {data.map((items, index) => (
              <SocialIcons key={index} data={items} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialSection;
