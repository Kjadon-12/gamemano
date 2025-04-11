"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { usePathname } from "next/navigation";
import { IoMdLogIn } from "react-icons/io";
import { IoNotificationsOutline, IoBagCheckOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const headerList = ["Home", "Products", "Leaderboard"];
  const pathname = usePathname();

  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div
      className={`fixed top-0 ${
        pathname === "/" ? "left-[4rem] hidden md:flex" : "left-0"
      } right-0 z-30 bg-[#13100A] py-4 px-6 flex items-center justify-between border-b border-[#FFFFFF4D]`}
    >
      {/* LEFT */}
      <div className="flex items-center gap-6">
        {pathname !== "/" && (
         <Link href={'/'}> <Image alt="logo" width={60} height={60} src="/images/GQ.png" /></Link>
        )}

        <ul className="flex gap-2 text-sm md:text-base text-[#FFFFFFB2]">
          {headerList.map((item, index) => (
            <Link
              className="hover:text-yellow"
              href={`${item === "Home" ? "/" : item === "Products" ? "/products" : "#"}`}
              key={index}
            >
              <li
                className={`hover:text-[#E58E27] px-4 ${
                  index !== 0 ? "border-l border-[#FFFFFF4D]" : ""
                } transition-colors duration-300 ease-in-out`}
              >
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 relative">
        <div className="min-w-[200px] border-r border-[#FFFFFF4D] w-full md:w-[350px]">
          <SearchBar />
        </div>

        <ul className="flex gap-3 text-white text-xl">
          {/* Notification Icon */}
          <li
            className="px-3 relative hover:text-[#E58E27] transition-colors duration-300 ease-in-out cursor-pointer"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <IoNotificationsOutline />
            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute top-10 right-0 bg-white text-black shadow-lg rounded-md p-4 w-64 z-50">
                <p className="text-sm font-medium mb-2">🔔 Notifications</p>
                <ul className="text-sm">
                  <li className="mb-1 border-b pb-1">Your game download is ready.</li>
                  <li className="mb-1">You’ve unlocked a new badge!</li>
                 <li className="my-4 text-center border-2 border-amber-500 rounded-full bg-amber-500 font-medium text-sm"><Link href={'/notifications'}>View All </Link></li> 
                </ul>
              </div>
            )}
          </li>

          {/* Cart Icon */}
          <li className="px-3 hover:text-[#E58E27] cursor-pointer border-l transition-colors duration-300 ease-in-out border-[#FFFFFF4D]">
            <IoBagCheckOutline />
          </li>

          {/* User Icon */}
          <li className="px-3  hover:text-[#E58E27] cursor-pointer border-l transition-colors duration-300 ease-in-out border-[#FFFFFF4D]">
          <Link href={'/login'}> <FaUserCircle /></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;




// // Header.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import SearchBar from "../SearchBar/SearchBar";
// import { usePathname } from "next/navigation";
// import { IoMdLogIn } from "react-icons/io";
// import { IoNotificationsCircleOutline } from "react-icons/io5";
// import { IoBagCheck } from "react-icons/io5";

// const Header = () => {
//   const headerList = ["Home", "Game Store", "Leaderboard"];
//   const headerIconList = ["/images/notification.png", "/images/cart.png" , <>];
//   const pathname = usePathname();

//   return (
//     <div
//       className={`fixed top-0 ${
//         pathname === "/" ? "left-[4rem] hidden md:flex" : "left-0"
//       } right-0 z-30 bg-[#13100A] py-4 px-6 flex items-center justify-between border-b border-[#FFFFFF4D]`}
//     >
//       {/* LEFT: Logo + Nav */}
//       <div className="flex items-center gap-6">
//         {pathname !== "/" && (
//           <Image alt="logo" width={60} height={60} src="/images/GQ.png" />
//         )}

//         <ul className="flex gap-2 text-sm md:text-base text-[#FFFFFFB2]">
//           {headerList.map((item, index) => (
//             <Link
//               className="hover:text-yellow"
//               href={`${item === "Home" ? "/" : "#"}`}
//               key={index}
//             >
//               <li
//                 className={`hover:text-[#E58E27] px-4 ${
//                   index !== 0 ? "border-l border-[#FFFFFF4D]" : ""
//                 }`}
//               >
//                 {item}
//               </li>
//             </Link>
//           ))}
//         </ul>
//       </div>

//       {/* RIGHT: Search + Icons */}
//       <div className="flex items-center gap-4">
//         <div className="min-w-[200px] border-r border-[#FFFFFF4D] w-full md:w-[350px]">
//           <SearchBar />
//         </div>

//         <ul className="flex gap-3">
//           {headerIconList.map((icon, index) => (
//             <li
//               key={index}
//               className={`px-3 ${
//                 index !== 0 ? "border-l border-[#FFFFFF4D]" : ""
//               } cursor-pointer`}
//             >
//               <Image alt="header-icon" width={30} height={30} src={icon} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;
