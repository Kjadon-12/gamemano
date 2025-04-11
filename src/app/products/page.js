import ListingPage from '@/components/ListingPage/ListingPage'
import { getAllCategory, getAllProducts } from '@/lib/axios'
import React from 'react'

const pages = async () => {
  const data =  await getAllProducts()
  const categories = await getAllCategory()
  return (
    <div className='my-4'>
   <ListingPage {...data} categories={categories}/>
   </div>
  )
}

export default pages