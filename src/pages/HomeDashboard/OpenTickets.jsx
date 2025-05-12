import React from 'react'
import { getTicketsData } from '../../utils/ticketUtils'
import Card from '../../components/Card'
import Carousel from '../../components/Carousel'
import itBannerImage from '../../assets/IT-Banner-Image.svg'
import '../../styles/HomeDashboard.css'

export default function OpenTickets({ onViewChange }) {
  // Get all tickets
  const ticketsData = getTicketsData();
  
  // Filter tickets for specific user and status (Open or Pending)
  const userTickets = ticketsData.rows.filter(ticket => 
    ticket.userId === 'rhiannon.lind' && 
    (ticket.status === 'Open' || ticket.status === 'Pending')
  );

  return (
    <div className="w-full p-5">
      <h2 className="text-2xl font-bold mb-4 text-brand">My Active Support Tickets</h2>
      {userTickets.length > 0 ? (
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
      ) : (
        <div className="flex flex-col items-center justify-center p-8">
          <img 
            src={itBannerImage} 
            alt="IT Support" 
            className="w-64 h-64 object-contain mb-4"
          />
          <p className="text-lg text-center text-gray-600">
            You currently have no active tickets, head to{' '}
            <button 
              onClick={() => onViewChange('it-request')}
              className="text-[#FF6B6B] hover:text-[#FF5252] underline bg-transparent border-none cursor-pointer"
            >
              IT Support Requests
            </button>
            {' '}to submit a ticket.
          </p>
        </div>
      )}
    </div>
  )
}