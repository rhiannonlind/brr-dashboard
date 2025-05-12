import React, { useState, useRef, useEffect } from 'react'
import Banner from '../components/Banner';
import itBannerImage from '../assets/IT-Banner-Image.svg';
import '../styles/ITRequest.css';

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
    // Reset form data
    setFormData({
      name: '',
      email: '',
      requestType: 'hardware',
      description: ''
    });
  };

  useEffect(() => {
    if (isSubmitted && successMessageRef.current) {
      successMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isSubmitted]);

  return (
    <div>
      <Banner 
        title="IT Support Request"
        image={itBannerImage}
        imageAlt="IT Support banner"
      />
      <div className='flex flex-col items-center justify-center mt-10 p-2'>
        <h5 className='text-brand-secondary mb-0 italic'>Please fill out the form below to submit a request to the IT department</h5>
      </div>
      <div className='it-request-container flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='it-request-form'>
          <div className='form-row'>
            <div className='form-group'>
              <label className='form-label'>Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className='form-input'
                required
              />
            </div>
            <div className='form-group'>
              <label className='form-label'>Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='form-input'
                required
              />
            </div>
          </div> 
          <div className='form-group'>
            <label className='form-label'>Request Type</label>
            <select 
              name="requestType"
              value={formData.requestType}
              onChange={handleChange}
              className='form-select'
            >
              <option value="hardware">Hardware</option>
              <option value="software">Software</option>
              <option value="network">Network</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className='form-group'>
            <label className='form-label'>Description</label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              className='form-textarea'
              required
            />
          </div>
          <button 
            type="submit" 
            className='submit-button'
          >
            Submit Request
          </button>
        </form>
      </div>
      {isSubmitted && (
        <div ref={successMessageRef} className='success-message'>
          <p className='success-text'>
            Your ticket has been submitted, a member of the IT team will respond within 48 hours
          </p>
        </div>
      )}
    </div>
  )
}
