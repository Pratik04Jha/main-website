import React from "react";
import AdBox from "../../UserInterface/AdBox";

const Advertisement = () => {
  const data = [
    {
      imgSrc: "/",
    },
    {
      imgSrc: "/",
    },
    {
      imgSrc: "/",
    },
    {
      imgSrc: "/",
    },
    {
      imgSrc: "/",
    },
    {
      imgSrc: "/",
    },
  ];
  return (
    <div className="flex flex-col items-center my-10 gap-4 sm:h-[150vh] h-[260vh]">
      <h1 className="text-5xl sm:7xl font-bold">Advertisements</h1>
      <p className="text-center leading-6 text-xl">
        There is no advertisements yet, be the first one <br /> Contact us to get
        Advertise
      </p>
      <div className="w-full justify-center flex mt-5">
        <div className=" h-50  rounded-lg flex flex-wrap w-[80%] gap-2 justify-center">
          {data.map((items, index) => (
            <AdBox key={index} data={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
