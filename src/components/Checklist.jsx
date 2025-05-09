import React, { useState } from 'react'

export default function Checklist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([{ text: newTask, completed: false }, ...tasks]);
      setNewTask('');
    }
  };

  const handleEdit = (index) => {
    setEditingTask(index);
    setEditText(tasks[index].text);
  };

  const handleEditSubmit = (e, index) => {
    e.preventDefault();
    const newTasks = [...tasks];
    newTasks[index] = { ...newTasks[index], text: editText };
    setTasks(newTasks);
    setEditingTask(null);
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    const completedTask = newTasks.splice(index, 1)[0];
    completedTask.completed = true;
    newTasks.push(completedTask);
    setTasks(newTasks);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleDeleteAll = () => {
    setTasks([]);
  };

  return (
    <div className='p-4 max-w-2xl mx-auto'>
      <div className='flex justify-between items-center mb-4'>
        <form onSubmit={handleSubmit} className='flex gap-2 flex-grow'>
          <input 
            type="text" 
            placeholder="Add a task" 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className='p-2 border border-gray-300 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button 
            type="submit"
            className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 hover:cursor-pointer transition-colors duration-200'
          >
            Add
          </button>
        </form>
        <button 
          onClick={handleDeleteAll}
          className='ml-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 hover:cursor-pointer transition-colors duration-200'
        >
          Delete All
        </button>
      </div>
      <div>
        <ul className='space-y-2'>
          {tasks.map((task, index) => (
            <li 
              key={index}
              className='p-2 bg-gray-100 rounded-md flex items-center justify-between'
            >
              {editingTask === index ? (
                <form onSubmit={(e) => handleEditSubmit(e, index)} className='flex-grow flex gap-2'>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className='p-1 border border-gray-300 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                  <button 
                    type="submit"
                    className='bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 hover:cursor-pointer transition-colors duration-200'
                  >
                    Save
                  </button>
                  <button 
                    type="button"
                    onClick={() => setEditingTask(null)}
                    className='bg-gray-500 text-white py-1 px-3 rounded-md hover:bg-gray-600 hover:cursor-pointer transition-colors duration-200'
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  <span className={`flex-grow break-words max-w-[calc(100%-120px)] ${task.completed ? 'line-through text-gray-500' : ''}`}>
                    {task.text}
                  </span>
                  <div className='flex gap-2 shrink-0'>
                    <button
                      onClick={() => handleComplete(index)}
                      className='w-6 h-6 border border-gray-400 rounded flex items-center justify-center hover:bg-gray-200'
                    >
                      {task.completed && '✓'}
                    </button>
                    <button
                      onClick={() => handleEdit(index)}
                      className='text-blue-500 hover:text-blue-700'
                    >
                      ✎
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className='text-red-500 hover:text-red-700'
                    >
                      ×
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
