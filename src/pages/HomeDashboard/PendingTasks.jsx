import React, { useState, useEffect } from 'react'

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
    <div className='w-full h-[400px] flex flex-col'>
      <div className='bg-amber-200 p-4 rounded-t-lg'>
        <h3 className='text-lg font-semibold'>Pending Tasks</h3>
      </div>
      <div className='bg-white p-4 rounded-b-lg shadow-md flex-1 overflow-y-auto'>
        {tasks.length === 0 ? (
          <p className='text-gray-500 italic'>No pending tasks</p>
        ) : (
          <ul className='space-y-2'>
            {tasks.map((task, index) => (
              <li 
                key={index}
                className={`p-2 border-b border-gray-100 last:border-0 ${task.completed ? 'text-gray-400 line-through' : ''}`}
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
