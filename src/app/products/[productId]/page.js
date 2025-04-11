import React from 'react'

const ProductDetail = async ({params}) => {
  const id = await params?.productId;
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail