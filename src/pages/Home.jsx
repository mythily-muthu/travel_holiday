import React from "react";
import sea from "../assets/sea.mp4";
import Cards from "../components/Cards";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

const Home = () => {
  return (
    <div className="w-full h-full items-center flex flex-col">
      <div className="w-full h-full flex ">
        <video
        src={sea}
        autoPlay
        loop
        muted
        className=" flex w-[100%] h-full object-cover "
        />
      </div>
      
      <div className="flex w-[100%] justify-center items-center h-full mx-auto ">
        <div className="flex w-[80%] mx-auto">
        <div className=" w-[80%] mx-auto flex flex-col gap-y-1 absolute top-[30%]">
          <div className=" w-full flex flex-col">
            <p className="uppercase text-xs md:text-sm font-semibold text-white">
              our packages
            </p>
            <p className="uppercase text-xl md:text-3xl font-bold text-white">
              Search your {""}
              <span className="text-white underline decoration-[#047bae] py-1">
                Holiday
              </span>
            </p>
          </div>
        </div>
        </div>
        <div className="w-full h-max flex  absolute justify-center top-[45%] flex-col gap-y-4">
          <div className="flex w-full ">
          <div className="bg-white flex flex-col items-center justify-center gap-y-5 md:flex-row w-[80%] mx-auto rounded-xl md:gap-x-3 md:p-5 py-10 md:h-32 lg:h-36 ">
            <div className="flex flex-col gap-y-3">
              <p className="text-gray-500 text-sm flex w-full justify-center">Search your destination:</p>
              <input
                className="bg-[#F0EEF0] p-1 w-[200px] md:w-[160px] lg:w-[300px] rounded-full pl-3"
                placeholder="Enter name here.."
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="text-gray-500 text-sm flex w-full justify-center">Search your date:</p>
              <input
                className="bg-[#F0EEF0] p-1 w-[200px] md:w-[160px] lg:w-[300px] rounded-full pl-3"
                type="date"
              />
            </div>
            <div className="flex flex-col items-center w-full gap-y-3">
              <div className=" flex w-full justify-between">
                <p className="flex justify-center w-full md:items-center text-gray-500 text-sm cursor-pointer ">
                  Max price:
                </p>
                <p className="hidden md:flex text-gray-800 text-sm font-semibold">$ 5000</p>
              </div>
              <input type="range" className="bg-[#F0EEF0] p-1 w-[200px] md:w-[160px] lg:w-[300px] rounded-full pl-3" />
            </div>
            <button className="rounded-full bg-[#047BAE] px-5 py-2 font-normal text-sm text-white absolute left-[45%] top-[85%]">
              MORE FILTERS..
            </button>
          </div>
          </div>
        </div>
        <div className="flex gap-x-5 top-[70%] text-xs md:text-sm w-[80%] py-3 absolute text-white">
          <FaFacebookF />
          <FiTwitter />
          <BsInstagram />
        </div>
      </div>
      {/* cards */}
      <Cards/>
    </div>
  );
};

export default Home;
