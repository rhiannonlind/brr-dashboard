import React from 'react'
import puppyImage from '../assets/puppy.jpeg'

export default function Header({ onViewChange }) {
  return (
    <div className='fixed top-0 left-0 flex flex-col w-[20%] h-screen bg-gray-400'>
      <div className='w-[100%]'>
        <img src={puppyImage} alt='puppy' />
      </div>
      <div className='w-[100%] pt-3.5 flex flex-col gap-2'>
        <button 
          onClick={() => onViewChange('main')}
          className='bg-blue-500 text-white p-2 rounded-md w-[100%] hover:cursor-pointer'
        >
          Dashboard
        </button>
        <button 
          onClick={() => onViewChange('tickets')}
          className='bg-blue-500 text-white p-2 rounded-md w-[100%] hover:cursor-pointer header-button tickets-button'
        >
          Tickets
        </button>
        <button className='bg-blue-500 text-white p-2 rounded-md w-[100%] hover:cursor-pointer header-button to-dos-button'>To-Do's</button>
        <button 
          onClick={() => onViewChange('staff-directory')}
          className='bg-blue-500 text-white p-2 rounded-md w-[100%] hover:cursor-pointer header-button staff-directory-button'
        >
          Staff Directory
        </button>
        <button className='bg-blue-500 text-white p-2 rounded-md w-[100%] hover:cursor-pointer header-button it-request-button'>IT Request</button>
      </div>
    </div>
  )
}
