import ProductDetails from '@/components/ProductDetail/ProductDetails';
import { getProductDetails } from '@/lib/axios';
import React from 'react'

const ProductDetail = async ({params}) => {
  const {productId}= await params
  const productDetail = await getProductDetails(productId);
 
  return (
    <ProductDetails productDetail={productDetail}/>
  )
}

export default ProductDetail