import React from 'react'
import defaultBannerImage from '../assets/Dashboard-Banner-Image.svg'

export default function Banner({ 
  title = "Welcome to your Dashboard",
  image = defaultBannerImage,
  imageAlt = "Dashboard banner"
}) {
  return (
    <div className='w-full h-[170px] overflow-hidden flex items-center justify-between px-8 shadow-sm'>
      <h1 className='text-4xl font-bold text-[#FF6B6B]'>{title}</h1>
      <img 
        src={image} 
        alt={imageAlt} 
        className='h-[100%] object-contain'
      />
    </div>
  )
}
