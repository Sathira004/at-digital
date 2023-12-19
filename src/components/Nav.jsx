import React from "react";

import { Logo, hamburger } from "../assets";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="bg-[#6B3CC9] padding-x py-[22px] w-full">
      <nav className="flex justify-between items-center max-md:px-3 xl:px-10 lg:px-20 max-lg:px-10 xxl:px-[100px]">
        <a href="/">
          <img src={Logo} alt="logo" width={238} height={25} />
        </a>
        <ul className="flex flex-1 justify-end items-end gap-[28px] max-md:hidden max-md:px-[50px]">
          {navLinks.map((links) => (
            <li key={links.label}>
              <a
                href={links.href}
                className="font-inter font-medium text-white"
              >
                {links.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-md:block">
          <img 
          src={hamburger} 
          alt="hamburger"
          width={31}
          height={31}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
