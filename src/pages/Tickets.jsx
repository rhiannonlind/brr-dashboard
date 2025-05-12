import React from 'react'
import Database from '../components/Database'
import Banner from '../components/Banner'
import ticketsData from '../data/tickets.json'
import ticketsBannerImage from '../assets/Tickets-Banner.svg'
export default function Tickets({ onViewChange }) {
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
