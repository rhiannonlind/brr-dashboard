import React, { useState, useEffect } from 'react';
import Checklist from '../components/Checklist';
import Banner from '../components/Banner';

const ToDos = () => {
  const [tasks, setTasks] = useState(() => {
    // Initialize tasks from localStorage if available
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Banner />
      <div className='w-[80%] m-auto justify-center text-center mt-4'>
        <h1 className='text-2xl font-bold mb-4'>To-Do Tasklist</h1>
      </div>
      <Checklist tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default ToDos;