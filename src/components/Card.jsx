import React from 'react'

export default function Card({ title, subtitle, meta, content, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-full">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      {subtitle && <p className="text-gray-600 mb-2">{subtitle}</p>}
      {meta && <p className="text-gray-600 mb-2">{meta}</p>}
      <p className="text-gray-700">{content}</p>
      {children}
    </div>
  )
}
