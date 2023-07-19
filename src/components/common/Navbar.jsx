import React, { useEffect, useState } from "react";
import Image from "next/image";

import Logo from "../../images/logo/logo.svg";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar = () => {
  const [changeNavbar, setNavbar] = useState(false);
  const [mobNavbar, setMobNavbar] = useState(false);

  const mobileNavbarHandler = (action) => {
    setMobNavbar(action);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    <div
      className={`sticky z-50 ${
        changeNavbar ? "bg-white shadow-md" : "shadow-none bg-[#f9fbfc]"
      } top-0 flex justify-between items-center h-16 p-2 px-7 w-full border-0`}
    >
      <div id="logo" className="pt-4">
        <Image height={120} width={300} src={Logo} alt="logo" />
      </div>
      <MobileNavbar
        showMobNavbar={mobNavbar}
        mobNavbarHandler={mobileNavbarHandler}
      />
      <div className="hidden md:flex justify-between items-center">
        <a
          href="https://subinsk.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-purple-700 text-[16px] mx-2 hover:text-custom-purple-700">
            Blog
          </button>
        </a>
        <a
          href="https://gdsc.community.dev/college-of-technology-and-engineering/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-purple-700 text-[16px] mx-2 hover:text-custom-purple-700">
            Community
          </button>
        </a>
        <a href="#about">
          <button className="text-purple-700 text-[16px] mx-2 hover:text-custom-purple-700">
            About
          </button>
        </a>
        <a href="#experience">
          <button className="text-purple-700 text-[16px] mx-2 hover:text-custom-purple-700">
            Experience
          </button>
        </a>
        <a href="#projects">
          <button className="text-purple-700 text-[16px] mx-2 hover:text-custom-purple-700">
            Projects
          </button>
        </a>
        <a href="#accomplishments">
          <button className="text-purple-700 text-[16px] mx-2 hover:text-custom-purple-700">
            Accomplishments
          </button>
        </a>
      </div>
      <svg
        onClick={() => mobileNavbarHandler(true)}
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 block md:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
};
