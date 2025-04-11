"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import ProductCard from '../Cards/ProductCard';

const Trending = ({products}) => {
    const router = useRouter();
    console.log(products ,"trending")
  return (
    <div className='my-8 px-8'>
    <div className='flex mb-6 items-center justify-between'>
        <h3 className='uppercase'>Most trending</h3>
        <button type='button' className='cursor-pointer capitalize' onClick={() => router.push(`/products`)}>GO TO GAME STORE</button>

    </div>
    <div className='grid  lg:grid-cols-3 md:grid-col-2 grid-col-1 gap-4'>
        {products?.length > 0 && products?.slice(0,3)?.map((item , index) => (
            <ProductCard key={index} product={item}/>
        ))}
    </div>
    </div>
  )
}

export default Trending