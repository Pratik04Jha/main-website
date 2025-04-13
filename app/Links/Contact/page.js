"use client";
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
    { icon: <FaInstagram size={30} />, src: "/", title: "Instagram" },
    { icon: <FaGithub size={30} />, src: "/", title: "Github" },
    { icon: <FaTwitter size={30} />, src: "/", title: "Twitter" },
    { icon: <FaFacebook size={30} />, src: "/", title: "Facebook" },
    { icon: <FaLinkedin size={30} />, src: "/", title: "LinkedIn" },
    { icon: <FaQuora size={30} />, src: "/", title: "Quora" },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const message = e.target.message.value;

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });

    const result = await res.json();
    if (result.success) {
      alert("Email sent 🎉");
    } else {
      alert("Email failed 😢");
    }
  };

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col justify-center items-center relative overflow-hidden px-4">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
        Contact Me
      </h1>

      <form
        className="mt-10 backdrop-blur-md bg-white/5 border border-white/20 shadow-xl rounded-2xl p-10 w-full max-w-xl flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          required
          name="email"
          placeholder="Your email"
          className="bg-transparent border border-white/30 rounded-xl px-4 py-3 outline-none text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 transition-all duration-300"
        />
        <textarea
          placeholder="Write your message..."
          required
          name="message"
          className="bg-transparent border border-white/30 rounded-xl px-4 py-3 h-40 outline-none text-white placeholder-white/60 resize-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
        ></textarea>
        <button
          type="submit"
          className="bg-white cursor-pointer text-black font-bold px-6 py-3 rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-md"
        >
          Send Message
        </button>
      </form>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex gap-5">
          {data.map((item, index) => (
            <SocialIcons key={index} data={item} />
          ))}
        </div>
      </div>

      <div className="absolute top-10 left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
    </div>
  );
};

export default page;
