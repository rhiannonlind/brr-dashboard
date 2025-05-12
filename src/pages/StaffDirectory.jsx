import React from 'react'
import Database from '../components/Database'
import Banner from '../components/Banner'
import StaffDirectoryData from '../data/staffDirectory.json'
import '../styles/StaffDirectory.css'
import staffDirectoryBannerImage from '../assets/Staff-Directory-Banner.svg'

export default function StaffDirectory({ onViewChange }) {
  return (
    <div>
      <Banner
        title="Staff Directory"
        image={staffDirectoryBannerImage}
        imageAlt="Staff Directory banner"
      />
        <Database data={StaffDirectoryData} />

    </div>
  )
}
