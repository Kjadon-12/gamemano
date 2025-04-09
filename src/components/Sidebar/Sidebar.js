'use client';

import { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaEnvelope,
  FaStore,
  FaCreditCard,
  FaTrophy,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Image from "next/image";

const menuItems = [
  { icon: <FaHome />, label: "Home" },
  { icon: <FaEnvelope />, label: "Messages"},
  { icon: <FaStore />, label: "Game Store" },
  { icon: <FaCreditCard />, label: "Payments" },
  { icon: <FaTrophy />, label: "Leaderboard" },
];

const bottomItems = [
  { icon: <FaCog />, label: "Settings" },
  { icon: <FaSignOutAlt />, label: "Logout" },
];

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const renderNavItem = (item , index) => (
    <Link href="#" key={index}>
      <div className="flex items-center gap-3 px-3 py-2 hover:bg-[#1f1d18] rounded-lg relative">
        {item.icon}
        
        <span className="text-sm">{item.label}</span>
      </div>
    </Link>
  );

  return (
    <>
      {/* Mobile toggle button */}
      <div className="md:hidden  p-4 bg-[#13100A] text-white flex justify-between items-center">
        <img src="/images/GQ.png" alt="Logo" className="w-8 h-8" />
        <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-[#13100A] w-[5%] text-white h-screen flex flex-col justify-between fixed top-0 z-50 transition-all duration-300 ease-in-out
        ${
          isMobileOpen
            ? "w-52 left-0 md:relative md:flex"
            : "w-0 left-[-100%] md:w-16 md:left-0"
        }
        ${hovered && !isMobileOpen ? "md:w-48" : ""}
        `}
        onMouseEnter={() => !isMobileOpen && setHovered(true)}
        onMouseLeave={() => !isMobileOpen && setHovered(false)}
      >
        {/* Top */}
        <div className="px-3 py-4">
          <div className="mb-8 flex items-center gap-2 px-2">
            <Image src={hovered ? `/images/GameQuest.png` :`/images/GQ.png`} width={60} height={60}  alt="Logo"  />
            {/* {(hovered || isMobileOpen) && (
              <span className="text-lg font-bold">GameQuest</span>
            )} */}
          </div>
          <nav className="flex flex-col gap-2">
            {menuItems.map((item, i) =>
              (hovered || isMobileOpen) ? renderNavItem(item, i) : (
                <div
                  key={i}
                  className="flex items-center justify-center p-2 hover:bg-[#1f1d18] rounded-lg"
                >
                  {item.icon}
                 
                </div>
              )
            )}
          </nav>
        </div>

        {/* Bottom */}
        <div className="px-3 py-4 border-t border-[#FFFFFF33]">
          <nav className="flex flex-col gap-2">
            {bottomItems.map((item, i) =>
              (hovered || isMobileOpen) ? renderNavItem(item, i) : (
                <div
                  key={i}
                  className="flex items-center justify-center p-2 hover:bg-[#1f1d18] rounded-lg"
                >
                  {item.icon}
                </div>
              )
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;




// import Image from 'next/image'
// import React from 'react'

// const Sidebar = () => {
//   return (
//     <div className='w-[5%] hover:w-[10%] bg-[pink]'>
//         <Image alt="logo" width={60} height={60} src="/images/GQ.png" />
//         <div></div>
//         <div></div>
//     </div>
//   )
// }

// export default Sidebar