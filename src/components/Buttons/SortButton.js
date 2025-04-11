"use client";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../ListingPage/ListingPage";
import { IoMdArrowDropdown } from "react-icons/io";

const SortButton = () => {
  const { allProducts, filteredProducts, setFilteredProducts } =
    useContext(ProductContext);
  const [show, setShow] = useState(false);
  const sortList = [
    {
      label: "Release date : Old to New",
      sort: "oldToNew",
    },
    {
      label: "Release date : New to Old",
      sort: "NewToOld",
    },
    {
      label: "Price : Low To High",
      sort: "lowToHigh",
    },
    { label: "Price: High To Low", sort: "highToLow" },
  ];
  const [sortedBy, setSortedBy] = useState(null);
  useEffect(() => {
    if (sortedBy?.sort === "lowToHigh") {
      let products = [...filteredProducts];
      const sortedResult = products.sort((a, b) => a?.price - b?.price);
      setFilteredProducts(sortedResult); 
    }
  
    if (sortedBy?.sort === "highToLow") {
      let products = [...filteredProducts];
      const sortedResult = products.sort((a, b) => b?.price - a?.price);
      setFilteredProducts(sortedResult); 
    }
  
    if (sortedBy?.sort === "oldToNew") {
      let products = [...filteredProducts];
      alert("Do not have Release Date")
    //   const sortedResult = products.sort(
    //     (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
    //   );
    //   setFilteredProducts(sortedResult); 
    }
  
    if (sortedBy?.sort === "NewToOld") {
      let products = [...filteredProducts];
      alert("Do not have Release Date")
    //   const sortedResult = products.sort(
    //     (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
    //   );
    //   setFilteredProducts(sortedResult); 
    }
  }, [sortedBy]);
  
  return (
    <div className="relative">
      <div
        onClick={() => setShow(!show)}
        className="flex items-center justify-between border-[1px] rounded-full px-4 py-2 cursor-pointer"
      >
        <p>Sort By </p>
        <IoMdArrowDropdown />
      </div>

      {show && (
        <div className="absolute w-max bg-gradient-to-t from-[#3D352A]/50 via-[#2B2417] to-[#2B2417] z-50 top-12 -left-[8rem] p-4 rounded-md">
          {sortList?.map((sort, index) => (
            <p
              type="button"
              key={index}
              className={`my-0.5 cursor-pointer p-2 rounded-full transition-all ease-in-out duration-300 ${
                sortedBy?.label === sort?.label
                  ? "bg-[#E58E27] text-white hover:bg-[#422400] font-medium"
                  : "hover:bg-[#3D352A]/30"
              }`}
              onClick={() => {
                setSortedBy(sort);
                setShow(false)
              }}
            >
              {sort?.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortButton;
