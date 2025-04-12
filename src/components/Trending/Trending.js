"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import ProductCard from '../Cards/ProductCard';

const Trending = ({products}) => {
    const router = useRouter();
   
  return (
    <div className='my-8 px-8'>
    <div className='flex mb-6 flex-wrap gay-y-2 items-center justify-between'>
        <h3 className='uppercase text-4xl font-press-start'>Most trending</h3>
        <button type='button' className='cursor-pointer capitalize' onClick={() => router.push(`/products`)}>GO TO GAME STORE</button>

    </div>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
        {products?.length > 0 && products?.slice(0,3)?.map((item , index) => (
            <ProductCard key={index} product={item}/>
        ))}
    </div>
    </div>
  )
}

export default Trending