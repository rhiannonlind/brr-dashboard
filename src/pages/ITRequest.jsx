import React, { useState, useRef, useEffect } from 'react'
import Banner from '../components/Banner';
import itBannerImage from '../assets/IT-Banner-Image.svg';
import '../styles/ITRequest.css';
import { useITRequests } from '../context/ITRequestsContext';

export default function ITRequest() {
  const { addRequest } = useITRequests();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requestType: 'hardware',
    description: '',
    file: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const successMessageRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prevState => ({
        ...prevState,
        file: file
      }));
      setFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = {
      ...formData,
      id: Date.now(), // Add a unique ID
      status: 'pending',
      submittedAt: new Date().toISOString()
    };
    addRequest(requestData);
    console.log('Form submitted:', requestData);
    setIsSubmitted(true);
    // Reset form data
    setFormData({
      name: '',
      email: '',
      requestType: 'hardware',
      description: '',
      file: null
    });
    setFileName('');
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
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
              <label className='form-label'>
                Email
                <span className="tooltip-container">
                  <button type="button" className="tooltip-button">?</button>
                  <span className="tooltip-text">To see ticket requests in dashboard, enter "rhiannon.lind@gmail.com"</span>
                </span>
              </label>
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
          <div className='form-group'>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            {fileName && (
              <p className='file-name'>{fileName}</p>
            )}
          </div>
          <div className='button-group'>
            <button 
              type="button" 
              onClick={handleUploadClick}
              className='upload-button'
            >
              <svg 
                className="paperclip-icon" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.586 10.461l-10.05 10.075c-1.95 1.949-5.122 1.949-7.071 0s-1.95-5.122 0-7.072l10.628-10.585c1.17-1.17 3.073-1.17 4.243 0 1.169 1.17 1.17 3.072 0 4.242l-8.507 8.464c-.39.39-1.024.39-1.414 0s-.39-1.024 0-1.414l7.093-7.05-1.415-1.414-7.093 7.049c-1.172 1.172-1.171 3.073 0 4.244 1.17 1.17 3.071 1.172 4.242 0l8.507-8.464c2.34-2.34 2.34-6.142 0-8.485-2.34-2.343-6.142-2.342-8.485 0L3.05 12.293c-2.73 2.729-2.73 7.162 0 9.9 2.73 2.73 7.162 2.73 9.9 0l10.05-10.075-1.414-1.414z"/>
              </svg>
              Upload Document
            </button>
            <button 
              type="submit" 
              className='submit-button'
            >
              Submit Request
            </button>
          </div>
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
