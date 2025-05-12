import React from 'react'
import Banner from '../../components/Banner'
import OpenTickets from './OpenTickets'
import PendingTasks from './PendingTasks'
import LatestUpdates from './LatestUpdates'
import '../../styles/HomeDashboard.css'

export default function DashboardPage() {
  return (
    <div className=''>
      <div>
        <Banner />
      </div>
      <div className='flex flex-col gap-4 p-4'>
        <div className='w-full bg-brand border border-brand card-shadow card-rounded'>
          <OpenTickets />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='bg-brand border border-brand card-shadow card-rounded'>
            <PendingTasks />
          </div>
          <div className='bg-brand border border-brand card-shadow card-rounded'>
            <LatestUpdates />
          </div>
        </div>
      </div>
    </div>
  )
}
