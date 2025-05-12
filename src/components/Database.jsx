import React, { useState } from 'react'

export default function Database({ data }) {
  // Create grid columns string from header widths
  const gridColumns = data.headers.map(header => header.width).join(' ')

  // Search state
  const [searchTerm, setSearchTerm] = useState('');

  // Filter rows based on search term
  const filteredRows = data.rows.filter(row =>
    data.headers.some(header =>
      String(row[header.field] || '')
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <div className='w-[100%] h-[calc(100vh-200px)] flex flex-col justify-start items-center mx-auto my-[1rem] py-4'>
        {/* Search Bar */}
        <div className='w-[90%] mb-4'>
          <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className='w-full p-2 border border-[#E2E8F0] rounded-md text-[#1A1E3C] focus:outline-none focus:border-[#4CC9F0]'
          />
        </div>
        {/* Table Container */}
        <div className='w-[90%] overflow-auto border border-[#E2E8F0] '>
          {/* Header Row */}
          <div className="w-full h-auto bg-[#1A1E3C] grid m-0 sticky top-0" style={{ gridTemplateColumns: gridColumns }}>
            {data.headers.map((header, index) => (
              <div key={index} className='w-[100%] h-[100%] px-0.75 bg-[#1A1E3C]'>
                <h3 className='text-white mb-0 p-2'>{header.title}</h3>
              </div>
            ))}
          </div>

          {/* Data Rows */}
          {filteredRows.map((row, index) => (
            <div key={index} className="w-full h-auto bg-white grid m-0 border-b border-[#E2E8F0] last:border-b-0 last:rounded-b-lg" style={{ gridTemplateColumns: gridColumns }}>
              {data.headers.map((header, headerIndex) => (
                <div key={headerIndex} className='w-[100%] h-[100%] px-2 py-2 bg-white border-r border-[#E2E8F0] last:border-r-0'>
                  {row[header.field]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
