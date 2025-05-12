import React, { useState } from 'react'

export default function Checklist({ tasks, setTasks }) {
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
            className='p-2 border border-[#F0F2FA] rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-[#4CC9F0] text-[#1A1E3C]'
          />
          <button 
            type="submit"
            className='bg-[#FF6B6B] text-white py-2 px-4 rounded-md hover:bg-[#FF5252] hover:cursor-pointer transition-colors duration-200'
          >
            Add
          </button>
        </form>
        <button 
          onClick={handleDeleteAll}
          className='ml-4 bg-[#4A4E69] text-white py-2 px-4 rounded-md hover:bg-[#3A3E59] hover:cursor-pointer transition-colors duration-200'
        >
          Delete All
        </button>
      </div>
      <div>
        <ul className='space-y-2'>
          {tasks.map((task, index) => (
            <li 
              key={index}
              className='p-2 bg-[#F0F2FA] rounded-md flex items-center justify-between'
            >
              {editingTask === index ? (
                <form onSubmit={(e) => handleEditSubmit(e, index)} className='flex-grow flex gap-2'>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className='p-1 border border-[#F0F2FA] rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-[#4CC9F0] text-[#1A1E3C]'
                  />
                  <button 
                    type="submit"
                    className='bg-[#06D6A0] text-white py-1 px-3 rounded-md hover:bg-[#05C090] hover:cursor-pointer transition-colors duration-200'
                  >
                    Save
                  </button>
                  <button 
                    type="button"
                    onClick={() => setEditingTask(null)}
                    className='bg-[#4A4E69] text-white py-1 px-3 rounded-md hover:bg-[#3A3E59] hover:cursor-pointer transition-colors duration-200'
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  <span className={`flex-grow break-words max-w-[calc(100%-120px)] ${task.completed ? 'line-through text-[#4A4E69]' : 'text-[#1A1E3C]'}`}>
                    {task.text}
                  </span>
                  <div className='flex gap-2 shrink-0'>
                    <button
                      onClick={() => handleComplete(index)}
                      className='w-6 h-6 border border-[#4A4E69] rounded flex items-center justify-center hover:bg-[#F0F2FA] text-[#06D6A0] hover:cursor-pointer'
                    >
                      {task.completed && '✓'}
                    </button>
                    <button
                      onClick={() => handleEdit(index)}
                      className='text-[#4CC9F0] hover:text-[#3AB9E0] hover:cursor-pointer'
                    >
                      ✎
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className='text-[#FF6B6B] hover:text-[#FF5252] hover:cursor-pointer'
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
