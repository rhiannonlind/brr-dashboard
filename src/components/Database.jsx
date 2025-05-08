import React from 'react'

export default function Database({ data }) {
  // Create grid columns string from header widths
  const gridColumns = data.headers.map(header => header.width).join('_')

  return (
    <>
      <div className='w-[80%] h-[calc(100vh-200px)] flex flex-col justify-start items-center bg-gray-400 mx-auto my-[1rem] py-4'>
        {/* Table Container */}
        <div className='w-[90%] overflow-auto px-2'>
          {/* Header Row */}
          <div className={`w-full h-auto bg-gray-200 grid grid-cols-[${gridColumns}] m-0 sticky top-0`}>
            {data.headers.map((header, index) => (
              <div key={index} className='w-[100%] h-[100%] bg-gray-300 border-1 border-black px-0.75'>
                <h3>{header.title}</h3>
              </div>
            ))}
          </div>

          {/* Data Rows */}
          {data.rows.map((row, index) => (
            <div key={index} className={`w-full h-auto bg-white grid grid-cols-[${gridColumns}] m-0 border-b border-gray-200`}>
              {data.headers.map((header, headerIndex) => (
                <div key={headerIndex} className='w-[100%] h-[100%] px-0.75 py-2 bg-white'>
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
