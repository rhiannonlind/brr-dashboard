import React, { useState } from 'react'
import logoImage from '../assets/logo.svg'
import '../styles/header.css'

export default function Header({ onViewChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='header-container'>
      <div className='logo-container'>
        <button 
          onClick={() => onViewChange('main')}
          className='cursor-pointer'
        >
          <img src={logoImage} alt='R logo' />
        </button>
        {/* Burger Menu Button */}
        <button 
          className='burger-menu-button'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          <div className={`burger-bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`burger-bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`burger-bar ${isOpen ? 'open' : ''}`}></div>
        </button>
      </div>
      <div className={`nav-buttons ${isOpen ? 'open' : ''}`}>
        <button 
          onClick={() => {
            onViewChange('main');
            setIsOpen(false);
          }}
          className='nav-button'
        >
          Dashboard
        </button>
        <button 
          onClick={() => {
            onViewChange('tickets');
            setIsOpen(false);
          }}
          className='nav-button'
        >
          Tickets
        </button>
        <button 
          onClick={() => {
            onViewChange('to-dos');
            setIsOpen(false);
          }}
          className='nav-button'
        >
          To-Do's
        </button>
        <button 
          onClick={() => {
            onViewChange('staff-directory');
            setIsOpen(false);
          }}
          className='nav-button'
        >
          Staff Directory
        </button>
        <button 
          onClick={() => {
            onViewChange('it-request');
            setIsOpen(false);
          }}
          className='nav-button'
        >
          IT Support Request
        </button>
      </div>
    </div>
  )
}
