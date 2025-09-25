import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "./../assets/images/Logo.png";
import HeaderImage from "./../assets/images/HeaderImage.png";
import { ReactComponent as SearchIcon } from "./../assets/svgs/SearchIcon.svg";

import { HeaderLinks } from "../constant/data";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <header className="flex items-center justify-between py-[15px] px-[50px] bg-white">
        {/* Left Section - Logo */}
        <div>
          <img
            src={Logo}
            alt="Company Logo"
            className="2xl:w-[50px] w-[41px]"
          />
        </div>

        {/* Center Section - Navigation Links */}
        <nav>
          <ul className="inline-flex items-center gap-[25px] 2xl:gap-[30px]">
            {HeaderLinks.map(({ path, title }, index) => (
              <li key={index}>
                <Link
                  to={path}
                  className={`text-base hover:text-[#0154AA] transition-colors duration-200 ${
                    pathname === path
                      ? "text-[#0154AA] font-semibold"
                      : "text-[#737A91]"
                  }`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section - Search, Button, Profile */}
        <div className="flex items-center gap-[15px] 2xl:gap-[20px] pl-[20px]">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search" 
              className="w-full h-[39px] min-w-[261px] pl-[55px] pr-[20px] rounded-lg text-[12px] lg:text-[14px] text-sm bg-[#F6F9FF] text-[#737A91] placeholder:text-[#737A91] focus:outline-none"
            />
            <SearchIcon className="absolute left-[20px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#737A91] cursor-pointer" />
          </div>

          {/* Resume Builder Button */}
          <button className="bg-[#0154AA] text-white text-base py-[7.5px] px-[20px] rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Resume Builder
          </button>

          {/* User Profile Image */}
          <div>
            <img
              src={HeaderImage}
              alt="User Profile"
              className="h-[38px] w-[38px] 2xl:w-[42px] 2xl:h-[42px] rounded-full"
            />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
