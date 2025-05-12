import React, { useState, useEffect } from 'react';
import Checklist from '../components/Checklist';
import Banner from '../components/Banner';
import toDoBannerImage from '../assets/ToDo-Banner.svg';
import '../styles/ToDos.css';

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
      <Banner 
        title="To-Do Tasklist"
        image={toDoBannerImage}
        imageAlt="To-Do Tasklist banner"
      />
      <div className='todos-container'>
        <h1 className='todos-title'>Tasklist</h1>
        <Checklist tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
};

export default ToDos;