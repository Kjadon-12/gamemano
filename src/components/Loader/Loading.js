"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const Loading = () => {
    const pathname = usePathname()
  return (
    <div className="flex gap-6 p-6">
    {/* Sidebar Skeleton (Filters) */}
    <div className="flex-1 space-y-4 animate-pulse">
      <div className="h-6 w-3/4 bg-gray-300 rounded" />
      <div className="h-4 w-full bg-gray-300 rounded" />
      <div className="h-4 w-2/3 bg-gray-300 rounded" />
      <div className="h-4 w-1/2 bg-gray-300 rounded" />
      <div className="h-4 w-3/4 bg-gray-300 rounded" />
    </div>

    {/* Product Cards Skeleton */}
    <div className="flex-auto flex gap-6 flex-wrap">
      {[1, 2, 3 ].map((item) => (
        <div
          key={item}
          className="w-[304px] h-[400px] rounded-lg bg-white p-4 shadow animate-pulse space-y-4"
        >
          {/* <div className="h-40 bg-gray-300 rounded" />
          <div className="h-6 w-3/4 bg-gray-300 rounded" />
          <div className="h-4 w-1/2 bg-gray-300 rounded" /> */}
          <div className="h-4 w-2/3 bg-gray-300 rounded" />
          <div className="h-10 w-full bg-gray-300 rounded" />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Loading