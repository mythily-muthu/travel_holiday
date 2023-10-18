import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { PiDotsNineBold } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/home" className="hover:text-[#047BAE]">
        Home
      </NavLink>
      <NavLink to="/packages" className="hover:text-[#047BAE]">
        Packages
      </NavLink>
      <NavLink to="/shop" className="hover:text-[#047BAE]">
        Shop
      </NavLink>
      <NavLink to="/about" className="hover:text-[#047BAE]">
        About
      </NavLink>
      <NavLink to="/pages" className="hover:text-[#047BAE]">
        Pages
      </NavLink>
      <NavLink to="/news" className="hover:text-[#047BAE]">
        News
      </NavLink>
      <NavLink to="/contact" className="hover:text-[#047BAE]">
        Contact
      </NavLink>
    </>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showNavItems = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full h-14 bg-white items-center fixed ">
      <div className="flex w-[80%] mx-auto items-center">
        <div className="flex w-full justify-between">
          <p className=" flex text-gray-700 font-bold text-3xl w-[80%]">
            Travel.
          </p>
          <div className="hidden md:flex w-[80%] items-center md:gap-x-5 lg:gap-x-12 text-gray-400 text-sm">
            <NavLinks className="cursor-pointer" />
          </div>
          <button
            className="flex w-[80%] gap-x-10 items-center cursor-pointer md:hidden"
            onClick={showNavItems}
          >
            {!isOpen ? (
              <PiDotsNineBold className="text-gray-800 text-lg flex w-full cursor-pointer" />
            ) : (
              <AiOutlineClose className="text-gray-800 text-lg flex w-full cursor-pointer" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
