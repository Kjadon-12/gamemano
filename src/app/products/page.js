import ListingPage from '@/components/ListingPage/ListingPage'
import { getAllProducts } from '@/lib/axios'
import React from 'react'

const pages = async () => {
  const data =  await getAllProducts()
  return (
   <ListingPage {...data}/>
  )
}

export default pages