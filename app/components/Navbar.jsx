"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
const Navbar = ({isDarkMode, setIsDarkMode}) => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image alt="" src={assets.header_bg_color} className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""
        }`}
      >
        <a href="#top">
          <Image
            alt=""
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className='w-28 alt="" cursor-pointer mr-14'
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
        ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}
        >
          <li className="font-Ovo">
            <a href="#top">Home</a>
          </li>
          <li className="font-Ovo">
            <a href="#about">About Me</a>
          </li>
          <li className="font-Ovo">
            <a href="#services">Services</a>
          </li>
          <li className="font-Ovo">
            <a href="#work">My Work</a>
          </li>
          <li className="font-Ovo">
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <button onClick={() => {setIsDarkMode(prev =>!prev)}}>
            <Image className="w-6" src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-6 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact <Image alt="" src={ isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image className="w-6" src={ isDarkMode ? assets.menu_white : assets.menu_black} alt="" />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0
        w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:text-white  dark:bg-darkHover"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              className="w-5 cursor-pointer"
              src={ isDarkMode ? assets.close_white : assets.close_black}
              alt=""
            />
          </div>

          <li onClick={closeMenu} className="font-Ovo">
            <a href="#top">Home</a>
          </li>
          <li onClick={closeMenu} className="font-Ovo">
            <a href="#about">About Me</a>
          </li>
          <li onClick={closeMenu} className="font-Ovo">
            <a href="#services">Services</a>
          </li>
          <li onClick={closeMenu} className="font-Ovo">
            <a href="#work">My Work</a>
          </li>
          <li onClick={closeMenu} className="font-Ovo">
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
