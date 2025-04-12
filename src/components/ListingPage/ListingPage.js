"use client";
import React, { createContext, useEffect, useState } from "react";
import ProductCard from "../Cards/ProductCard";
import SortButton from "../Buttons/SortButton";
import Filter from "../Filter/Filter";
import { minMaxPrice } from "@/utils/minMaxPrice";
import { getAllProducts, getProductByCat } from "@/lib/axios";

export const ProductContext = createContext();
const ListingPage = ({ products, total, limit, categories }) => {
  const [allProducts, setAllProducts] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filter, setFilters] = useState({
    category: "",
    rating: null,
    priceRange: [1 , 1],
  });
  const [price , setPrice] = useState([])

  useEffect(() => {
    setAllProducts(products);
    setFilteredProducts(products);
    const {min , max} = minMaxPrice(products || [])
    setFilters({...filter , priceRange: [min , max]})
    setPrice([min , max])
  }, []);



const filterProducts = async () => {
    let productList = [...allProducts];
  
    // If category is selected, fetch products by category
    if (filter?.category !== "") {
      const data = await getProductByCat(filter?.category);
      productList = data?.products || [];
      setAllProducts(productList);
    }

      // If category not selected
      if (filter?.category === "") {
        const data = await getAllProducts();
        productList = data?.products || [];
        setAllProducts(productList);
      }


  
    // Apply rating filter
    if (filter?.rating) {
      productList = productList?.filter(
        (product) => product?.rating >= filter?.rating
      );
    }
  
    // Apply price range filter
    if (filter?.priceRange?.length === 2) {
      const [minPrice, maxPrice] = filter.priceRange;
      productList = productList?.filter(
        (product) => product?.price >= minPrice && product?.price <= maxPrice
      );
    }
  
    setFilteredProducts(productList);
  };
  

  return (
    <ProductContext.Provider
      value={{
        allProducts,
        filteredProducts,
        setFilteredProducts,
        filter,
        setFilters,
        categories,
        price,
        filterProducts
      }}
    >
      <div className="flex justify-between gap-3">
        <div className="flex-1 overflow-auto rounded-lg p-3 bg-[#2B241766]">
          <Filter />
        </div>
        <div className="xl:w-[80%] lg:w-[70%] md:[65%] w-[60%]">
          <div className="flex flex-wrap items-center justify-between gap-y-3 mb-4">
            <div>
              <h3>All Products</h3>
              <p>
                Showing {filteredProducts?.length || limit} of {total}
              </p>
            </div>
            <SortButton />
          </div>
          <div className="grid z-10 xl:grid-cols-3  lg:grid-cols-2 grid-cols-1 gap-x-1 gap-y-8">
            {filteredProducts?.length > 0 &&
              filteredProducts?.map((item, index) => (
                <ProductCard product={item} key={index} />
              ))}
          </div>
        </div>
      </div>
    </ProductContext.Provider>
  );
};

export default ListingPage;
