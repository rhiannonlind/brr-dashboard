import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import toDoBannerImage from '../../assets/ToDo-Banner.svg'
import '../../styles/HomeDashboard.css'

export default function PendingTasks() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage when component mounts
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      // Filter out completed tasks
      const allTasks = JSON.parse(savedTasks);
      const pendingTasks = allTasks.filter(task => !task.completed);
      setTasks(pendingTasks);
    }
  }, []);

  // Listen for changes to localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        const allTasks = JSON.parse(savedTasks);
        const pendingTasks = allTasks.filter(task => !task.completed);
        setTasks(pendingTasks);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div className='w-full h-[400px] flex flex-col p-5'>
      <h3 className='text-lg font-semibold text-brand mb-4'>My To-Do List</h3>
      {tasks.length > 0 ? (
        <div className='flex-1 overflow-y-auto custom-scrollbar'>
          <ul className='space-y-2'>
            {tasks.map((task, index) => (
              <li 
                key={index}
                className='p-2 border-b border-brand last:border-0 text-brand'
              >
                {task.text}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center flex-1">
          <img 
            src={toDoBannerImage} 
            alt="To-Do List" 
            className="w-64 h-64 object-contain mb-4"
          />
          <p className="text-lg text-center text-gray-600">
            You currently have no To-Do's, head to{' '}
            <button 
              onClick={() => navigate('/to-dos')}
              className="text-[#FF6B6B] hover:text-[#FF5252] underline bg-transparent border-none cursor-pointer"
            >
              To-Do's
            </button>
            {' '}to create a tasklist.
          </p>
        </div>
      )}
    </div>
  )
}
