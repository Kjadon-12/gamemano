"use client";
import React, { useContext } from "react";
import { StarRating } from "../Rating/StarRating";
import { ProductContext } from "../ListingPage/ListingPage";

const RatingFilter = ({ handleRating }) => {
  const ratingList = [4, 3, 2, 1];
  const { filter } = useContext(ProductContext);
  return (
    <div className="my-3">
      <h4 className="font-medium text-lg">Rating</h4>
      {ratingList?.map((rate, index) => (
        <div
          onClick={() => handleRating(rate)}
          key={index}
          className={`flex px-1 py-0.5 ${
            filter?.rating == rate && "bg-amber-900 rounded-sm"
          } cursor-pointer flex-wrap items-center my-1 gap-2`}
        >
          <StarRating rating={rate} /> <p>& UP</p>
        </div>
      ))}
    </div>
  );
};

export default RatingFilter;
