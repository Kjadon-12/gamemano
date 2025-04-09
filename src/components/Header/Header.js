"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { usePathname } from "next/navigation";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const headerList = ["Home", "Game Store", "Leaderboard"];
  const headerIconList = ["/images/notification.png", "/images/cart.png"];
  const pathname = usePathname()
 
  return (
    <div className={` flex`} >
     {pathname === "/" && <div className="w-[5%]"><Sidebar/></div>}
    <div className={`${pathname !== "/" ? "w-full" : "w-[95%]"} bg-[#13100A] py-4 px-6 flex items-center flex-wrap gap-[14rem]`}>
      {/* LEFT: Logo + Nav */}
      <div className="flex items-center gap-6 flex-wrap">
        {/* Logo */}
       {pathname !== "/" && <Image alt="logo" width={60} height={60} src="/images/GQ.png" />}

        {/* Navigation */}
        <ul className="flex gap-2 text-sm md:text-base text-[#FFFFFFB2]">
          {headerList.map((item, index) => (
            <Link href="#" key={index}>
              <li
                className={`px-4 ${
                  index !== 0
                    ? "border-l border-[#FFFFFF4D]"
                    : ""
                }`}
              >
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* RIGHT: Search + Icons */}
      <div className="flex items-center gap-4 flex-wrap  pl-6">
        {/* Search */}
        <div className="min-w-[200px] border-r border-[#FFFFFF4D] w-full md:w-[350px]">
          <SearchBar />
        </div>

        {/* Icons */}
        <ul className="flex gap-3">
          {headerIconList.map((icon, index) => (
            <li className={`px-3 ${
                index !== 0
                  ? "border-l border-[#FFFFFF4D]"
                  : ""
              } cursor-pointer `} key={index}>
              <Image alt="header-icon" width={30} height={30} src={icon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Header;
