import React from "react";
import SocialButtons from "@/app/components/UserInterface/SocialButtons";
import Link from "next/link";

const page = () => {
  const social = [
    { title: "Instagram", src: "https://www.instagram.com/poptale_artz" },
    {
      title: "Facebook",
      src: "https://www.facebook.com/profile.php?id=61574732885384",
    },
    { title: "Twitter(X)", src: "https://x.com/pratik04jha" },
    {
      title: "Linkedin",
      src: "https://www.linkedin.com/in/pratik-jha-380037301",
    },
    { title: "Github", src: "https://github.com/Pratik04Jha" },
    { title: "Quora", src: "https://www.quora.com/profile/Pratik-1703" },
  ];
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center gap-8">
        <h1 className="text-7xl font-bold text-center w-1/2">
          A company run by a{" "}
          <em className="bg-gradient-to-r font-semibold from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            single
          </em>{" "}
          person
        </h1>
        <p className="text-center w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          qui, minus sapiente nihil libero sequi quae voluptate non cupiditate
          veniam ex ab possimus numquam corrupti, aut soluta, ratione
          reprehenderit perferendis? Lorem ipsum dolor sit amet.
        </p>
        <div className="flex justify-center w-full gap-2">
          <button className="bg-white text-black rounded-lg text-semibold py-2 px-8 cursor-pointer ">
            Our tools
          </button>
          <button className="bg-black text-white border-1 border-white/20 rounded-lg text-semibold py-2 px-8 cursor-pointer">
            Contact us
          </button>
        </div>
      </div>
      <div>
        <div className="flex w-full justify-center items-center flex-col mb-20">
          <div className="relative group w-fit my-10 rounded-full">
            <div className="relative p-1 rounded-full overflow-hidden">
              <div className="absolute -inset-100 -z-10 rounded-[100px] bg-[conic-gradient(from_0deg,red,orange,yellow,green,cyan,blue,violet,red)] animate-spin-slow pointer-events-none" />

              <img
                src="/Professional image.jpg"
                alt="Image of the owner"
                className="rounded-full"
              />
            </div>
          </div>
          <h1 className="text-6xl font-semibold w-1/2 text-center">
            I create{" "}
            <em className="bg-gradient-to-r font-semibold from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              awesome
            </em>{" "}
            games, websites, and experiences
          </h1>
          <p className="text-center w-[65%] my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, saepe
            quas nobis odit eius aliquam. Aperiam quos quis suscipit ab soluta,
            magnam ipsum accusamus iusto eligendi incidunt voluptatum odit ipsam
            nisi ad voluptas rerum! Voluptas explicabo commodi magni. Voluptate
            aliquid libero animi exercitationem totam praesentium eum vel
            ducimus explicabo nostrum consequatur laborum et quo excepturi
            dolore, molestias non deleniti voluptatum esse. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Deleniti magnam nulla id
            aspernatur provident sit officia, nisi amet velit ex!
          </p>
        </div>

        <div className="flex items-center flex-col gap-5">
          <h2 className="love text-2xl md:text-5xl w-full md:w-1/2 text-center font-bold mt-40 pb-10 leading-relaxed">
            Made with 🤍 by a 16 year old boy from India
          </h2>
          <div className="flex flex-col md:flex-row w-full justify-center gap-5 items-center pb-40 ">
            <h1 className="text-lg sm:text-xl md:text-2xl text-center md:text-left">
              Read my journey –
            </h1>
            <Link href="/coming.png" target="_blank">
              <button className="changed relative overflow-hidden text-base sm:text-lg md:text-2xl py-5 px-18 sm:py-4 sm:px-40 md:py-10 md:px-32 cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out bg-amber-50 text-black rounded-[100px] flex items-center justify-center">
                <span className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 text-white mix-blend-difference whitespace-nowrap">
                  Blog post
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center mt-40 w-full gap-4">
          {social.map((items, index) => (
            <SocialButtons key={index} social={items} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
