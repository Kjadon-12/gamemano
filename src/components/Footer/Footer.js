import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const footerList = [
    "Privacy Notice" ,
    "Terms of Service" ,
    "Cookie Policy",
    "Company Information",
    "Cookie Preferences"
  ]  
  return (
    <div className='bg-[#13100A] mt-18 w-full'>
       <div className='border-[#FFFFFF4D] border-[0.5px] w-full'></div>
        <ul className='flex md:flex-row flex-col w-full bottom-0 px-6 md:px-18 lg:px-30 py-6 justify-between '>
        {footerList?.map((item , index) => (
          <Link  key={index} href="#"><li className='text-[#FFFFFFCC]  mb-3  text-xs md:text-md lg:text-lg font-light md:font-medium'>{item}</li></Link>
        ))}
        </ul>
        <div className='border-[#FFFFFF4D] border-[1px] w-full'></div>

        <div className='text-center text-sm md:text-md lg:text-lg  text-[#FFFFFFB2] py-5'>Copyright © GameQuest, Inc.  All rights reserved</div>

        <div className='flex justify-center pb-8'>
            <div className='flex justify-between gap-4'>
            <Image alt='social-icon' width={40} height={40} src='/images/social1.png'></Image>
            <Image alt='social-icon' width={40} height={40} src='/images/social2.png'></Image>
            <Image  alt='social-icon' width={40} height={40} src='/images/social3.png'></Image>
            </div>
        </div>
    </div>
  )
}

export default Footer