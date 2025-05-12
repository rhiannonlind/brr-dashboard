import React from 'react'
import { getTicketsData } from '../../utils/ticketUtils'
import Card from '../../components/Card'
import Carousel from '../../components/Carousel'
import '../../styles/HomeDashboard.css'

export default function OpenTickets() {
  // Get all tickets
  const ticketsData = getTicketsData();
  
  // Filter tickets for specific user (rhiannon.lind)
  const userTickets = ticketsData.rows.filter(ticket => 
    ticket.userId === 'rhiannon.lind'
  );

  return (
    <div className="w-full p-5">
      <h2 className="text-2xl font-bold mb-4 text-brand">My Open Tickets</h2>
      <Carousel
        items={userTickets}
        cardsPerView={4}
        renderItem={(ticket, index) => (
          <Card
            key={index}
            title={ticket.type}
            subtitle={`Status: ${ticket.status}`}
            meta={`Date: ${ticket.dateSubmitted}`}
            content={ticket.description}
          />
        )}
      />
    </div>
  )
}