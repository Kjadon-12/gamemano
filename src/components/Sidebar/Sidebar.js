"use client";
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
} from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { deleteFromCookie } from "@/utils/localStorage";

const menuItems = [
  { icon: <FaHome />, label: "Home" , link: "/" },
  { icon: <FaEnvelope />, label: "Messages" , link: "/messages" },
  { icon: <FaStore />, label: "Products"  , link: "/products"},
  { icon: <FaCreditCard />, label: "Payments"  , link: "/payments"},
  { icon: <FaTrophy />, label: "Leaderboard" , link: "/leaderboard" },
];

const bottomItems = [
  { icon: <FaCog />, label: "Settings" },
  { icon: <FaSignOutAlt />, label: "Logout" },
];

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter()
  const bottomLinkHandler = (label) => {
    
    if(label === "Logout"){
      console.log("deleting")
      deleteFromCookie();
      alert("Logout Successfully!")
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
    else{
      let val = label.toLowerCase()
      router.push(`/${val}`)
    }
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        fixed top-0 left-0 h-screen z-50 text-white
        flex flex-col justify-between
        transition-all duration-500 ease-in-out
        ${hovered ? "w-52" : "w-16"}
        ${hovered ? "backdrop-blur-[40px] bg-[#3D352A80] shadow-[0px_4px_24px_-1px_#00000033]" : "bg-[#13100A]"}
      `}
    >
      {/* Top */}
      <div className="px-3 py-4">
        <div className="mb-8 flex items-center gap-2 px-1">
        <Link href={'/'}>  <Image
            src={hovered ? `/images/GameQuest.png` : `/images/GQ.png`}
            width={hovered ? 200 : 90}
            height={hovered ? 100 : 90}
            alt="Logo"
          /> </Link>
        </div>

        <nav className="flex flex-col gap-2">
          {menuItems.map((item, i) => (
            <Link href={`${item.link}`} key={i}>
              <div className="flex items-center px-2 py-2 hover:text-[#E58E27] transition-colors duration-300 ease-in-out">
                <span className="text-lg w-6 flex-shrink-0">{item.icon}</span>
                <span
                  className={`text-sm ml-3 whitespace-nowrap overflow-hidden transition-opacity duration-300 ${
                    hovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom (Sticky) */}
      <div className="px-3 py-4 border-t border-[#FFFFFF33]">
        <nav className="flex flex-col gap-2">
          {bottomItems.map((item, i) => (
            <div onClick={() => bottomLinkHandler(item.label)} className="cursor-pointer" key={i}>
              <div className="flex items-center px-2 py-2 hover:text-[#E58E27] transition-colors duration-300 ease-in-out">
                <span className="text-lg w-6 flex-shrink-0">{item.icon}</span>
                <span
                  className={`text-sm ml-3 whitespace-nowrap overflow-hidden transition-opacity duration-300 ${
                    hovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
