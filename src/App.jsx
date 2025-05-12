import './styles/App.css'
import './styles/typography.css'
import Header from './components/Header'
import DashboardPage from './pages/HomeDashboard/DashboardPage'
import StaffDirectory from './pages/StaffDirectory'
import Tickets from './pages/Tickets'
import ITRequest from './pages/ITRequest'
import ToDos from './pages/ToDos'
import { ITRequestsProvider } from './context/ITRequestsContext'
import { ToastProvider } from './context/ToastContext'
import ErrorBoundary from './components/ErrorBoundary'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ToastProvider>
          <ITRequestsProvider>
            <div className='flex'>
              <Header />
              <div className='w-[80%] ml-[20%] page-container'>
                <Routes>
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/tickets" element={<Tickets />} />
                  <Route path="/to-dos" element={<ToDos />} />
                  <Route path="/staff-directory" element={<StaffDirectory />} />
                  <Route path="/it-request" element={<ITRequest />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </div>
            </div>
          </ITRequestsProvider>
        </ToastProvider>
      </Router>
    </ErrorBoundary>
  )
}

export default App
