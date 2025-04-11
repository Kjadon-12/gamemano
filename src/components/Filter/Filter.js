import React, { useContext, useEffect } from "react";
import { ProductContext } from "../ListingPage/ListingPage";
import RatingFilter from "./RatingFilter";
import PriceFilter from "./PriceFilter";

const Filter = () => {
  const {
    allProducts,
    filteredProducts,
    setFilteredProducts,
    filter,
    setFilters,
    categories,
    filterProducts
  } = useContext(ProductContext);

  const handleCategory = (cat) => {
    setFilters({ ...filter, category: cat });
  };
  const handleRating = (rating) => {
    setFilters({ ...filter, rating: rating });
  };
  const handlePrice = (price) => {
    setFilters({ ...filter, priceRange: price });
  };

 

  return (
    <div>
      <h4 className="mb-3 text-lg font-medium">Categories</h4>
      {categories?.length > 0 && (
        <>
          <div className="flex px-1 items-center gap-2">
            <input
              //   className="accent-[#8B4513]"
              checked={filter?.category === ""}
              value={filter?.category}
              onChange={() => handleCategory("")}
              type="checkbox"
            ></input>{" "}
            <label className="font-normal text-sm text-[#FFFFFFCC]">All</label>
          </div>
          {categories?.map((cat, index) => (
            <div key={index} className="flex px-1 items-center gap-2">
              <input
                //   className="accent-[#8B4513]"
                checked={filter?.category === cat?.slug}
                value={filter?.category}
                onChange={() => handleCategory(cat?.slug)}
                type="checkbox"
              ></input>{" "}
              <label className="font-normal text-sm text-[#FFFFFFCC]">
                {cat?.name}
              </label>
            </div>
          ))}
        </>
      )}

      <PriceFilter handlePrice={handlePrice} />

      <RatingFilter handleRating={handleRating} />

      <div className="text-center mt-8">
        {" "}
        <button type="button" onClick={filterProducts} className="text-center cursor-pointer rounded-full w-max px-4 py-2 bg-[#E58E27] text-white font-medium hover:bg-[#2b241c]">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
