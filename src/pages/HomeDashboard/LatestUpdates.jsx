import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import updatesData from '../../data/updates.json'

export default function LatestUpdates() {
  const [updates] = useState(updatesData.updates);

  return (
    <div className='w-full h-[400px] flex flex-col'>
      <div className='bg-blue-200 p-4 rounded-t-lg'>
        <h3 className='text-lg font-semibold'>Latest Updates</h3>
      </div>
      <div className='bg-white rounded-b-lg shadow-md flex-1 overflow-y-auto'>
        {updates.map((update) => (
          <div key={update.id} className='border-b border-gray-100 last:border-0'>
            <Card
              title={update.title}
              subtitle={new Date(update.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
              content={update.description}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
