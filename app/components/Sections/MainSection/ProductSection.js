import React from "react";
import Products from "../../UserInterface/Products";

const ProductSection = () => {
  const productData = [
    {
      title: "Portfolio website",
      imgSrc: "/Project/portfolio.png",
    },
    {
      title: "Redisigning",
      imgSrc: "/Project/redisigning.png",
    },
    {
      title: "Artificial intelligence",
      imgSrc: "/Project/ai.png",
    },
    {
      title: "Productivity app",
      imgSrc: "/Project/productivity.png",
    },
    {
      title: "Game arcade",
      imgSrc: "/Project/arcade.png",
    },
    {
      title: "Time management",
      imgSrc: "/Project/time.png",
    },
  ];
  return (
    <div className="flex flex-col justify-between items-center">
      <div className="flex flex-wrap justify-center gap-4 m-auto my-10">
        {productData.map((items, index) => (
          <Products key={index} productData={items} />
        ))}
      </div>
      <div>
        <button className="bg-white text-black font-semibold py-1 px-4 rounded-lg cursor-pointer hover:bg-white/90">
          See all products
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
