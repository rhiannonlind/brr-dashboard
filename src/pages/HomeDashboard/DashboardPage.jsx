import React from 'react'
import Banner from '../../components/Banner'
import OpenTickets from './OpenTickets'
import PendingTasks from './PendingTasks'
import LatestUpdates from './LatestUpdates'


export default function DashboardPage() {
  return (
    <div>
        <div>
        <Banner />
        </div>
        <p className='font-bold text-4xl'>Welcome to your Dashboard</p>
        <div className='flex flex-col gap-4 p-4'>
            <div className='w-full'>
                <OpenTickets />
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <PendingTasks />
                </div>
                <div>
                    <LatestUpdates />
                </div>
            </div>
        </div>
    </div>
  )
}
