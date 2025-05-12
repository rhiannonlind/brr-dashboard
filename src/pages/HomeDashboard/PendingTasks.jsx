import React, { useState, useEffect } from 'react'
import '../../styles/HomeDashboard.css'

export default function PendingTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage when component mounts
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  return (
    <div className='w-full h-[400px] flex flex-col p-5'>
      <h3 className='text-lg font-semibold text-brand mb-4'>Pending Tasks</h3>
      <div className='flex-1 overflow-y-auto custom-scrollbar'>
        {tasks.length === 0 ? (
          <p className='text-muted italic'>No pending tasks</p>
        ) : (
          <ul className='space-y-2'>
            {tasks.map((task, index) => (
              <li 
                key={index}
                className={`p-2 border-b border-brand last:border-0 ${task.completed ? 'text-completed' : 'text-brand'}`}
              >
                {task.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
