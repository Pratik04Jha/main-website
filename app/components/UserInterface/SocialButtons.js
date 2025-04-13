import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const SocialButtons = ({ social, variants }) => {
  return (
    <div variants={variants} className="w-full">
      <Link
        className="py-10 w-full border-t-1 border-white/10 relative overflow-hidden cursor-pointer hover:scale-[1.05] duration-300 ease-in-out block"
        href={social.src}
        target="_blank"
      >
        <div className="text-2xl flex w-full justify-between px-20  ">
          {social.title}
          <MdArrowOutward />
        </div>
      </Link>
    </div>
  );
};

export default SocialButtons;