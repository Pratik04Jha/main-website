import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaQuora,
} from "react-icons/fa";
import SocialIcons from "@/app/components/UserInterface/SocialIcons";

const page = () => {
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
    <div className="h-screen w-full flex flex-col justify-center items-center gap-10">
      <h1 className="text-7xl font-bold text-center ">Contact me</h1>
      <form className="flex flex-col items-center justify-center w-1/2 gap-4">
        <input
          type="email"
          placeholder="Enter your email..."
          className="w-1/2 h-10 outline-none px-4 py-2 border-1 border-white/70 rounded-lg"
        />
        <textarea
          name=""
          placeholder="Write your message here..."
          id=""
          className="resize-none  w-1/2 h-40 py-2 px-4 outline-none border-1 rounded-lg border-white/70"
        ></textarea>
        <button className="py-1 px-10 bg-white text-black rounded-lg font-semibold cursor-pointer">
          Send
        </button>
      </form>
      <div className="flex justify-center lg:justify-cennter absolute -translate-1/2 -bottom-10 left-[50%] ">
        <div className="flex justify-center lg:justify-end gap-6 my-10">
          {data.map((items, index) => (
            <SocialIcons key={index} data={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
