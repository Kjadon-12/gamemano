import React from 'react'
import DetailBanner from './DetailBanner'
import Image from 'next/image'
import { ImageSwiper } from './Swiper'

const ProductDetails = ({productDetail}) => {

  return (
    <div className='xl:px-3 md:px-10 px-5'>
      <DetailBanner productDetail={productDetail}/>
      <h1 className='text-amber-700 text-center mt-5 font-medium text-3xl'>{productDetail?.title}</h1>
      {
        productDetail?.images?.length > 1 ? <ImageSwiper images={productDetail?.images}/> :
        <div className='flex justify-center'> <Image alt="product-img" src={productDetail?.images?.[0]} width={400} height={400} /></div>}
      
      <p>{productDetail?.description}</p>
    </div>
  )
}

export default ProductDetails