"use client";
import React, { useState } from "react";
import Container from "./Container";
import { StarIcon } from "lucide-react";

type Tab = {
  label: string;
  content: React.ReactNode | string;
};

const tabData: Tab[] = [
  {
    label: "Description",
    content: (
        <div className="text-shop_lighter_text"> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deserunt unde repellendus corporis fuga qui id impedit earum ratione asperiores ea quo, repellat aperiam nulla? Tempore ea voluptatibus magnam laudantium inventore officiis, consectetur harum temporibus nemo.</p>
            <br />
            <p>Laboriosam blanditiis corporis suscipit voluptatem iure enim dicta officiis laudantium! Dicta nostrum voluptas, voluptates laboriosam debitis fugit rem distinctio ullam. Obcaecati sunt ipsa excepturi earum sapiente dolorum voluptatum distinctio quas, vel fuga doloribus expedita reprehenderit corporis repudiandae doloremque in eum alias nihil reiciendis esse iusto.</p>
            <br />
            <p>Laudantium, voluptatibus maxime. Dignissimos ducimus doloremque perferendis iste consectetur eos corrupti hic dolorum amet reprehenderit. Ratione earum voluptas expedita!</p>
        </div>
    ),
  },
  {
    label: "Additional Information",
    content: (
      <div className="flex flex-col rounded-md">
        <div className="flex p-4 justify-between border-b border-gray-300">
          <p className="font-semibold text-shop_light_text w-1/2">Weight</p>
          <p className="text-shop_lighter_text w-1/2">190kg</p>
        </div>
        <div className="flex p-4 justify-between">
          <p className="font-semibold text-shop_light_text w-1/2">Dimensions</p>
          <p className="text-shop_lighter_text w-1/2">3 x 72 x 109 cm</p>
        </div>
      </div>
    ),
  },
  {
    label: "Reviews",
    content: (
      <div>
        <div className="flex flex-row gap-2 -ml-3 text-center items-center">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                size={12}
                className="text-shop_light_green"
                fill={"#3b9c3c"}
              />
            ))}
          </div>
            <p className="font-semibold text-shop_light_text">Duc Pharm</p>
            <p className="text-shop_lighter_text">* July 21, 2021</p>
        </div>
        <div className="flex p-4 justify-between">
          <p className="font-semibold text-shop_lighter_text -ml-6.5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquid cumque reprehenderit dolores sunt, libero minus sit sapiente fuga quam praesentium in odit doloremque, eligendi veniam voluptate quae quis vero et beatae suscipit aliquam totam. Delectus quibusdam libero aliquid nesciunt tempore atque totam officia magni nulla possimus id, quis, similique at labore recusandae reprehenderit unde?</p>
        </div>
      </div>
    ),
  },
];

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container className="w-2/3 rounded-md ml-0 pl-31 pb-10">
      <div className="flex w-full mb-4 bg-shop_light_bg rounded-md overflow-hidden">
        {tabData.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(idx)}
            className={`flex-1 px-4 py-2 focus:outline-none transition-colors duration-200 font-medium cursor-pointer
        ${
          activeTab === idx
            ? "border border-black rounded-md font-bold text-shop_light_green bg-white"
            : "text-shop_light_text bg-shop_light_bg font-normal border-none"
        }
      `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-3 bg-white rounded-md min-h-[60px]">
        {typeof tabData[activeTab].content === "string"
          ? tabData[activeTab].content.split("\n").map((line, index) => (
              <p key={index} className="mb-2">
                {line}
              </p>
            ))
          : tabData[activeTab].content}
      </div>
    </Container>
  );
};

export default ProductDescription;
