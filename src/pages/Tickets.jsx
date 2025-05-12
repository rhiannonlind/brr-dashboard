import React, { useState, useEffect } from 'react'
import Database from '../components/Database'
import Banner from '../components/Banner'
import ticketsBannerImage from '../assets/Tickets-Banner.svg'
import { getTicketsData } from '../utils/ticketUtils'

export default function Tickets({ onViewChange }) {
  const [ticketsData, setTicketsData] = useState(getTicketsData());

  // Update tickets data when localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setTicketsData(getTicketsData());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  
  return (
    <div>
      <Banner 
        title="Active Tickets"
        image={ticketsBannerImage}
        imageAlt="Tickets banner"
      />
      <Database data={ticketsData} />
    </div>
  )
}
