import React from 'react'
import Database from '../components/Database'
import Banner from '../components/Banner'
import ticketsData from '../data/tickets.json'

export default function Tickets({ onViewChange }) {
  return (
    <div>
      <Banner />
      <div className='w-[80%] my-[4rem] mx-auto'>
        <h1 className='w-[90%]'>Tickets</h1>
      </div>
      <Database data={ticketsData} />
    </div>
  )
}
