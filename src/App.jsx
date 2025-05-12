import './styles/App.css'
import './styles/typography.css'
import Header from './components/Header'
import DashboardPage from './pages/HomeDashboard/DashboardPage'
import StaffDirectory from './pages/StaffDirectory'
import Tickets from './pages/Tickets'
import ITRequest from './pages/ITRequest'
import ToDos from './pages/ToDos'
import { useState } from 'react'
import { ITRequestsProvider } from './context/ITRequestsContext'

function App() {
  const [activeView, setActiveView] = useState('main')

  const handleViewChange = (view) => {
    setActiveView(view)
  }

  return (
    <ITRequestsProvider>
      <div className='flex'>
        <Header onViewChange={handleViewChange} />
        {activeView === 'main' ? (
          <div className='w-[80%] ml-[20%] page-container'>
            <DashboardPage onViewChange={handleViewChange} />
          </div>
        ) : activeView === 'tickets' ? (
          <div className='w-[80%] ml-[20%] page-container'>
            <Tickets onViewChange={handleViewChange} />
          </div>
        ) : activeView === 'to-dos' ? (
          <div className='w-[80%] ml-[20%] page-container'>
            <ToDos onViewChange={handleViewChange} />
          </div>       
        ) : activeView === 'staff-directory' ? (
          <div className='w-[80%] ml-[20%] page-container'>
            <StaffDirectory onViewChange={handleViewChange} />
          </div>   
        )  : activeView === 'it-request' ? (
          <div className='w-[80%] ml-[20%] page-container '>
            <ITRequest onViewChange={handleViewChange} />
          </div>
        ) : null}
      </div>
    </ITRequestsProvider>
  )
}

export default App
