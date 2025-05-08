import './styles/App.css'
import Header from './components/Header'
import StaffDirectory from './pages/StaffDirectory'
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
      ) : (
        <div className='w-[80%] ml-[20%]'>
          <StaffDirectory />
        </div>
      )}
    </div>
  )
}

export default App
