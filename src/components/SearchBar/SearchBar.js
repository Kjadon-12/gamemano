"use client";
import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  return (
    <div className="w-full max-w-md mx-auto px-4">
      <div className="relative">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full text-white pl-10 pr-4 py-1 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition text-xs  sm:text-base"
        />
        <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
      </div>
    </div>
  );
}
