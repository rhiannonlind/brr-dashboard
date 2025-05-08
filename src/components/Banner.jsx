import React from 'react'
import bannerImage from '../assets/spring-slider.jpg'
export default function Banner() {
  return (
    <div className='w-[100%] h-[200px] p-0'>
    <img src={bannerImage} alt='banner' className='w-[100%] h-[100%] object-cover'/>
  </div>
  )
}
