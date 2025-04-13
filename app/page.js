import React from "react";
import LandingPage from "./components/Sections/MainSection/LandingPage";
import ProductSection from "./components/Sections/MainSection/ProductSection";
import Advertisement from "./components/Sections/MainSection/Advertisement";
import SocialSection from "./components/Sections/MainSection/SocialSection";
import Partnership from "./components/Sections/MainSection/Partnership";
import AboutSection from "./components/Sections/MainSection/AboutSection";

const page = () => {
  return (
    <>
      {/* <div className="bg-pink-500/70 blur-[100px] h-30 w-100 rounded-full -rotate-45 absolute top-0 z-10 left-[40%] -translate-1/2  "/>
      <div className="bg-pink-500/70 blur-[100px] h-30 w-100 rounded-full rotate-20 absolute -top-10 z-10 left-[65%] -translate-1/2  "/> */}
      <LandingPage />
      {/* <div className="bg-pink-500/70 blur-[140px] h-50 w-50 rounded-full rotate-20 absolute top-[100%] z-0 right-[5%] -translate-1/2  "/> */}
      <ProductSection />
      <SocialSection />
      <AboutSection />
      <Partnership />
      <Advertisement />
    </>
  );
};

export default page;
