import React from 'react'
import Database from '../components/Database'
import Header from '../components/Header'
import Banner from '../components/Banner'
import StaffDirectoryData from '../data/staffDirectory.json'

export default function StaffDirectory() {
  return (
    <div>
      <Header />
      <Banner />
      <div className='w-[80%] my-[4rem] mx-auto'>
        <h1 className='w-[90%]'>Staff Directory</h1>
      </div>
      <Database data={StaffDirectoryData} />
    </div>
  )
}
