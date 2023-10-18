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
                className="flex flex-col bg-white w-full md:w-[200px] lg:w-[365px] lg:gap-y-14 rounded-lg border"
                key={index}
              >
                <div className="flex w-[254px] md:w-full lg:w-[365px] h-[100px] object-cover">
                  <img
                    src={item.img_url}
                    alt={item.title}
                    className="flex w-full h-full lg:h-[150px] object-cover rounded-t-lg"
                  />
                </div>
                <div className="flex flex-col w-full p-3 gap-y-3 ">
                  <div>
                    <p className="flex font-bold text-gray-700">{item.title}</p>
                  </div>
                  <div className="flex gap-x-1 items-center text-gray-400 text-xs ">
                    <span className="flex">
                      <MdOutlineLocationOn />
                    </span>
                    <p className="flex text-[10px]">{item.location}</p>
                  </div>

                  <div className="flex justify-between w-full items-center  ">
                    <p className="flex uppercase text-gray-400 text-xs">
                      cultural relax
                    </p>
                    <p className="flex text-base font-bold">{item.price}</p>
                  </div>
                  <div className="flex text-[10px] w-[100%] text-gray-400">
                    {item.description}
                  </div>
                  <div className="flex ">
                    <button className="flex rounded-full bg-[#0A99BD] text-xs font-semibold text-white px-5 py-1">
                      Details
                    </button>
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
