import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import updatesData from '../../data/updates.json'
import '../../styles/HomeDashboard.css'

export default function LatestUpdates() {
  const [updates] = useState(updatesData.updates);

  return (
    <div className='w-full h-[400px] flex flex-col p-5'>
      <h3 className='text-lg font-semibold text-brand mb-4'>Latest Updates</h3>
      <div className='flex-1 overflow-y-auto'>
        {updates.map((update) => (
          <div key={update.id} className='border-b border-brand last:border-0 p-4'>
            <div className='text-muted text-sm'>
              {new Date(update.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className='mt-1'>
              <h3 className='font-semibold text-brand'>{update.title}</h3>
              <p className='text-brand'>{update.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
