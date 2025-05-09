import React from 'react'
import ticketsData from '../../data/tickets.json'
import Card from '../../components/Card'
import Carousel from '../../components/Carousel'

export default function OpenTickets() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Open Tickets</h2>
      <Carousel
        items={ticketsData.rows}
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