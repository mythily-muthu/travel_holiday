import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [activeNav, setactiveNav] = useState("home");
  let navigate = useNavigate();
  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Packages",
      link: "/packages",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Pages",
      link: "/pages",
    },
    {
      title: "News",
      link: "/news",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="flex w-full h-16 justify-center items-center">
      <div
        className="w-[80%] flex  justify-between "
        // onClick={() => {
        //   navigate("/");
        // }}
      >
        <div>
          <p className="text-gray-700 font-bold text-3xl">Travel.</p>
        </div>
        <div className="flex gap-10">
          {navItems.map((item, index) => {
            return (
              <p
                className={`text-gray-700 text-base flex items-center cursor-pointer hover:text-[#047BAE] ${
                  activeNav === item.link && "underline"
                }`}
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setactiveNav(item.link);
                  navigate(item.link);
                }}
              >
                {item.title}
              </p>
            );
          })}
          <button className="rounded-full bg-[#047BAE] px-5 py-2 font-normal text-sm text-white">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
