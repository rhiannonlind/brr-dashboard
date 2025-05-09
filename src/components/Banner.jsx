import React from 'react'
import bannerImage from '../assets/spring-slider.jpg'

export default function Banner() {
  return (
    <div className='w-full h-[200px] overflow-hidden'>
      <img 
        src={bannerImage} 
        alt='banner' 
        className='w-full h-full object-cover'
      />
    </div>
  )
}
