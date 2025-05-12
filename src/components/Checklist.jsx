import React, { useState } from 'react'
import { useToast } from '../context/ToastContext'

export default function Checklist({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        const capitalizedText = newTask.charAt(0).toUpperCase() + newTask.slice(1);
        setTasks([{ text: capitalizedText, completed: false }, ...tasks]);
        setNewTask('');
        showToast('Task added successfully!', 'success');
      } catch (error) {
        showToast('Failed to add task', 'error');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleEdit = (index) => {
    setEditingTask(index);
    setEditText(tasks[index].text);
  };

  const handleEditSubmit = async (e, index) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      const newTasks = [...tasks];
      newTasks[index] = { ...newTasks[index], text: editText };
      setTasks(newTasks);
      setEditingTask(null);
      showToast('Task updated successfully!', 'success');
    } catch (error) {
      showToast('Failed to update task', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleComplete = async (index) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      const newTasks = [...tasks];
      newTasks[index] = { ...newTasks[index], completed: !newTasks[index].completed };
      setTasks(newTasks);
      showToast(`Task marked as ${newTasks[index].completed ? 'completed' : 'incomplete'}`, 'success');
    } catch (error) {
      showToast('Failed to update task status', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (index) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setTasks(tasks.filter((_, i) => i !== index));
      showToast('Task deleted successfully!', 'success');
    } catch (error) {
      showToast('Failed to delete task', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAll = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setTasks([]);
      showToast('All tasks deleted successfully!', 'success');
    } catch (error) {
      showToast('Failed to delete all tasks', 'error');
    } finally {
      setIsLoading(false);
    }
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
            disabled={isLoading}
          />
          <button 
            type="submit"
            className='bg-[#FF6B6B] text-white py-2 px-4 rounded-md hover:bg-[#FF5252] hover:cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={isLoading}
          >
            {isLoading ? 'Adding...' : 'Add'}
          </button>
        </form>
        <button 
          onClick={handleDeleteAll}
          className='ml-4 bg-[#4A4E69] text-white py-2 px-4 rounded-md hover:bg-[#3A3E59] hover:cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={isLoading || tasks.length === 0}
        >
          Delete All
        </button>
      </div>
      <div>
        {tasks.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p className="text-lg mb-2">No tasks yet</p>
            <p className="text-sm">Add a task to get started!</p>
          </div>
        ) : (
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
                      disabled={isLoading}
                    />
                    <button 
                      type="submit"
                      className='bg-[#06D6A0] text-white py-1 px-3 rounded-md hover:bg-[#05C090] hover:cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                      disabled={isLoading}
                    >
                      {isLoading ? 'Saving...' : 'Save'}
                    </button>
                    <button 
                      type="button"
                      onClick={() => setEditingTask(null)}
                      className='bg-[#4A4E69] text-white py-1 px-3 rounded-md hover:bg-[#3A3E59] hover:cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                      disabled={isLoading}
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
                        className={`w-6 h-6 border border-[#4A4E69] rounded flex items-center justify-center hover:bg-[#F0F2FA] ${task.completed ? 'text-[#06D6A0]' : 'text-[#4A4E69]'} hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                        disabled={isLoading}
                      >
                        {task.completed && '✓'}
                      </button>
                      <button
                        onClick={() => handleEdit(index)}
                        className='text-[#4CC9F0] hover:text-[#3AB9E0] hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                        disabled={isLoading}
                      >
                        ✎
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className='text-[#FF6B6B] hover:text-[#FF5252] hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                        disabled={isLoading}
                      >
                        ×
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
