import React from 'react'
import logoImage from '../assets/logo.svg'
import '../styles/header.css'

export default function Header({ onViewChange }) {
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <button 
          onClick={() => onViewChange('main')}
          className='cursor-pointer'
        >
          <img src={logoImage} alt='R logo' />
        </button>
      </div>
      <div className='nav-buttons'>
        <button 
          onClick={() => onViewChange('main')}
          className='nav-button'
        >
          Dashboard
        </button>
        <button 
          onClick={() => onViewChange('tickets')}
          className='nav-button'
        >
          Tickets
        </button>
        <button 
          onClick={() => onViewChange('to-dos')}
          className='nav-button'
        >
          To-Do's
        </button>
        <button 
          onClick={() => onViewChange('staff-directory')}
          className='nav-button'
        >
          Staff Directory
        </button>
        <button 
          onClick={() => onViewChange('it-request')}
          className='nav-button'
        >
          IT Request
        </button>
      </div>
    </div>
  )
}
