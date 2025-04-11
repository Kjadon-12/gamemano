// Header.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { usePathname } from 'next/navigation';

const Header = () => {
  const headerList = ['Home', 'Game Store', 'Leaderboard'];
  const headerIconList = ['/images/notification.png', '/images/cart.png'];
  const pathname = usePathname();

  return (
    <div className={`fixed top-0 ${pathname === "/" ? "left-[4rem] hidden md:flex" : "left-0"} right-0 z-30 bg-[#13100A] py-4 px-6 flex items-center justify-between border-b border-[#FFFFFF4D]`}>
      {/* LEFT: Logo + Nav */}
      <div className="flex items-center gap-6">
        {pathname !== '/' && (
          <Image alt="logo" width={60} height={60} src="/images/GQ.png" />
        )}

        <ul className="flex gap-2 text-sm md:text-base text-[#FFFFFFB2]">
          {headerList.map((item, index) => (
            <Link className="hover:text-yellow" href="#" key={index}>
              <li
                className={`hover:text-[#E58E27] px-4 ${index !== 0 ? 'border-l border-[#FFFFFF4D]' : ''}`}
              >
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* RIGHT: Search + Icons */}
      <div className="flex items-center gap-4">
        <div className="min-w-[200px] border-r border-[#FFFFFF4D] w-full md:w-[350px]">
          <SearchBar />
        </div>

        <ul className="flex gap-3">
          {headerIconList.map((icon, index) => (
            <li
              key={index}
              className={`px-3 ${index !== 0 ? 'border-l border-[#FFFFFF4D]' : ''} cursor-pointer`}
            >
              <Image alt="header-icon" width={30} height={30} src={icon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
