import React from "react";
import { items } from "../components/Items";
import { MdOutlineLocationOn } from "react-icons/md";
const Cards = () => {
  return (
    <div className="w-full h-full flex py-10">
      <div className="w-[80%] mx-auto flex flex-col gap-y-7">
        <h1 className="flex text-lg text-gray-500 font-bold">
          Most visited destinations
        </h1>
        <div className="flex w-full gap-10 flex-wrap  ">
          {items.map((item, index) => {
            return (
              <div
                className="flex flex-col bg-white rounded-lg border"
                key={index}
              >
                <div className="flex w-[200px] h-[100px] rounded-t-lg">
                  <img
                    src={item.img_url}
                    alt={item.title}
                    className="flex w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col w-full p-3 gap-y-3">
                  <div>
                    <p className="flex font-bold text-gray-700">{item.title}</p>
                  </div>
                  <div>
                    <span className="flex">
                      <MdOutlineLocationOn />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
