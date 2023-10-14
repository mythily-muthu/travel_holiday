import React from "react";
import sea from "../assets/sea.mp4";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
const Home = () => {
  return (
    <div className="w-full h-full flex flex-col ">
      <video
        src={sea}
        autoPlay
        loop
        muted
        className="w-full h-full object-contain "
      />
      <div className="w-[80%] mx-auto">
        <div className=" w-full flex flex-col gap-y-1 absolute top-[30%]">
          <div className=" w-full flex flex-col">
            <p className="uppercase text-sm  font-semibold text-white">
              our packages
            </p>
            <p className="uppercase text-3xl font-bold text-white">
              Search your{" "}
              <span className="text-white underline decoration-[#047bae] py-1">
                Holiday
              </span>
            </p>
          </div>
        </div>
        <div className="w-full flex absolute justify-center top-[45%] right-[12px] flex-col gap-y-4">
          <div className="bg-white flex w-[80%] mx-auto rounded-xl gap-x-[20px] py-10 px-8">
            <div className="flex flex-col gap-y-3 w-full">
              <p className="text-gray-500 text-sm">Search your destination:</p>
              <input
                className="bg-[#F0EEF0] p-1 w-[300px] rounded-full"
                placeholder="Enter name here.."
              />
            </div>
            <div className="flex flex-col gap-y-3 w-full">
              <p className="text-gray-500 text-sm">Search your date:</p>
              <input
                className="bg-[#F0EEF0] p-1 w-[300px] rounded-full"
                type="date"
              />
            </div>
            <div className="flex flex-col items-center w-full gap-y-3">
              <div className=" flex w-full justify-between">
                <p className="text-gray-500 text-sm cursor-pointer">
                  Max price:
                </p>
                <p className="text-gray-800 text-sm font-semibold">$ 5000</p>
              </div>
              <input className="bg-[#F0EEF0] p-1 w-[300px] rounded-full" />
            </div>
            <button className="rounded-full bg-[#047BAE] px-5 py-2 font-normal text-sm text-white absolute left-[45%] top-[85%]">
              MORE FILTERS..
            </button>
          </div>
        </div>
        <div className="flex gap-x-5 top-[70%] w-full absolute text-white ">
          <FaFacebookF />
          <FiTwitter />
          <BsInstagram />
        </div>
      </div>
    </div>
  );
};

export default Home;
