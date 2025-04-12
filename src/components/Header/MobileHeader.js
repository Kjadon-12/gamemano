import React, { useState } from 'react'
import { IoNotificationsOutline, IoBagCheckOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';

const MobileHeader = () => {
      const [showNotifications, setShowNotifications] = useState(false);
  return (
    <>
    <ul className="flex w-full justify-end gap-3 text-white text-xl">
          {/* Notification Icon */}
          <li
            className="px-3 relative hover:text-[#E58E27] transition-colors duration-300 ease-in-out cursor-pointer"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <IoNotificationsOutline />
            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute -left-24 top-10 right-0 bg-white text-black shadow-lg rounded-md p-4 w-64 z-50">
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
    </>
  )
}

export default MobileHeader