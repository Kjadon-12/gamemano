import React, { useContext } from 'react'
import { ProductContext } from '../ListingPage/ListingPage';

const PriceFilter = ({handlePrice}) => {
     const {
       
        filter,
      
        price
       
      } = useContext(ProductContext);
    
  return (
    <div className='my-3'>
         <h4 className=" mb-3 text-lg font-medium">Price</h4>
        <input onChange={(e)=>{
            let val = [(e.target?.value) , filter?.priceRange[1]]
            handlePrice(val)
        }} value={filter?.priceRange[0]} className='border-amber-600 border-1 rounded-sm w-20 mr-2 focus:border-amber-700 outline-0 p-1'  type='number' min={price[0]}></input>
        {}
        <input onChange={(e)=>{
            let val = [filter?.priceRange[0] , (e.target?.value)]
            handlePrice(val)
        }} value={filter?.priceRange[1]} className='border-amber-600 border-1 rounded-sm w-20 focus:border-amber-700 outline-0 p-1' type='number' max={price[1]}></input>
    </div>
  )
}

export default PriceFilter