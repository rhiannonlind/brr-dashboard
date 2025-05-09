import React, { useState, useRef, useEffect } from 'react'
import Banner from '../components/Banner';

export default function ITRequest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requestType: 'hardware',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const successMessageRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted && successMessageRef.current) {
      successMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isSubmitted]);

  return (
    <div>
      <Banner />
      <div className='bg-gray-200 w-[60%] mx-auto my-[3rem] flex justify-center items-center p-8 rounded-lg shadow-lg'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-[90%]'>
          <div className='flex flex-row gap-6 w-[100%]'>
            <div className='w-[50%] flex flex-col gap-2'>
              <label className='text-gray-700 font-medium'>Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              />
            </div>
            <div className='w-[50%] flex flex-col gap-2'>
              <label className='text-gray-700 font-medium'>Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              />
            </div>
          </div> 
          <div className='flex flex-col gap-2'>
            <label className='text-gray-700 font-medium'>Request Type</label>
            <select 
              name="requestType"
              value={formData.requestType}
              onChange={handleChange}
              className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value="hardware">Hardware</option>
              <option value="software">Software</option>
              <option value="network">Network</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-gray-700 font-medium'>Description</label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]'
              required
            />
          </div>
          <button 
            type="submit" 
            className='bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 hover:cursor-pointer transition-colors duration-200 font-medium'
          >
            Submit Request
          </button>
        </form>
      </div>
      {isSubmitted && (
        <div ref={successMessageRef} className='text-center my-0 mb-16'>
          <p className='text-green-600 font-medium mt-4'>
            Your ticket has been submitted, a member of the IT team will respond within 48 hours
          </p>
        </div>
      )}
    </div>
  )
}
