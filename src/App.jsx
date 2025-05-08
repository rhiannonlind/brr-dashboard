import './styles/App.css'
import Header from './components/Header'
import StaffDirectory from './pages/StaffDirectory'
import Tickets from './pages/Tickets'
import { useState } from 'react'

function App() {
  const [activeView, setActiveView] = useState('main')

  const handleViewChange = (view) => {
    setActiveView(view)
  }

  return (
    <div className='flex'>
      <Header onViewChange={handleViewChange} />
      {activeView === 'main' ? (
        <div className='w-[80%] ml-[20%]'>
          <p className='font-bold text-4xl'>Hello</p>
        </div>
      ) : activeView === 'staff-directory' ? (
        <div className='w-[80%] ml-[20%]'>
          <StaffDirectory onViewChange={handleViewChange} />
        </div>
      ) : activeView === 'tickets' ? (
        <div className='w-[80%] ml-[20%]'>
          <Tickets onViewChange={handleViewChange} />
        </div>
      ) : null}
    </div>
  )
}

export default App
