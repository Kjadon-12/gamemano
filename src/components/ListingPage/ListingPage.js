"use client"
import React, { createContext, useEffect, useState } from 'react'
import ProductCard from '../Cards/ProductCard';
import SortButton from '../Buttons/SortButton';
import Filter from '../Filter/Filter';

export const ProductContext = createContext()
const ListingPage = ({products , total , limit}) => {
  const [allProducts , setAllProducts] = useState(products);
  const [filteredProducts , setFilteredProducts] = useState(products);
  const [filter , setFilters] = useState({
    category: [],
    rating: '',
    priceRange: [],
    brand: []

  })

  useEffect(() => {
    setAllProducts(products)
    setFilteredProducts(products)
  } , [])


  useEffect(() => {

  },[filter])



  return (
    <ProductContext.Provider value={{allProducts ,filteredProducts , setFilteredProducts , filter , setFilters}}>
    <div className='flex'>
        <div className='flex-1'><Filter/></div>
        <div className='w-[80%]'>
            <div className='flex items-center justify-between mb-4'>
         <div><h3>All Products</h3>
          <p>Showing {limit} of {total}</p>
          </div>
          <SortButton/>
          </div>
          <div className='grid z-10 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-x-1 gap-y-8'>{
            filteredProducts?.length > 0 && filteredProducts?.map((item ,index) => (
                <ProductCard product={item} key={index}/>
            ))
            }</div>
          
        </div>

    </div>
    </ProductContext.Provider>
  )
}

export default ListingPage