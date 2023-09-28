import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export const Navbbar = () => {
  const [nav, setNav] = useState(false);
  const handlenav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="nav flex items-center justify-between mx-auto px-4">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">React..</h1>
        <ul className="hidden md:flex text-white ">
          <li className="p-4 hover:text-cyan-700">Home</li>
          <li className="p-4 hover:text-cyan-700">Componey</li>
          <li className="p-4 hover:text-cyan-700">About</li>
          <li className="p-4 hover:text-cyan-700">Countact</li>
        </ul>
        <div onClick={handlenav} className="text-white block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed top-0 left-0 h-full w-[60%] border-r border-gray-600 bg-slate-600 ease-out duration-700  "
              : "fixed left-[-100%]"
          }
        >
          <h1 className=" pt-5 w-full text-3xl font-bold text-[#00df9a]">
            React..
          </h1>

          <ul className="uppercase p-5">
            <li className="p-4 border-b border-gray-700 cursor-pointer">
              Home
            </li>
            <li className="p-4 border-b border-gray-700 cursor-pointer">
              Componey
            </li>
            <li className="p-4 border-b border-gray-700 cursor-pointer">
              About
            </li>
            <li className="p-4 border-b border-gray-700 cursor-pointer">
              Countact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
