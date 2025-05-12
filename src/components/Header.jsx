import React, { useState } from 'react'
import logoImage from '../assets/logo.svg'
import '../styles/header.css'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='header-container'>
      <div className='logo-container'>
        <Link to="/" className='cursor-pointer'>
          <img src={logoImage} alt='R logo' />
        </Link>
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
        <Link 
          to="/"
          className={`nav-button ${isActive('/') ? 'active' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          Dashboard
        </Link>
        <Link 
          to="/tickets"
          className={`nav-button ${isActive('/tickets') ? 'active' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          Tickets
        </Link>
        <Link 
          to="/to-dos"
          className={`nav-button ${isActive('/to-dos') ? 'active' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          To-Dos
        </Link>
        <Link 
          to="/staff-directory"
          className={`nav-button ${isActive('/staff-directory') ? 'active' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          Staff Directory
        </Link>
        <Link 
          to="/it-request"
          className={`nav-button ${isActive('/it-request') ? 'active' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          IT Request
        </Link>
      </div>
    </div>
  )
}
