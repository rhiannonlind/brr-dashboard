import React from 'react';
import Checklist from '../components/Checklist';
import Banner from '../components/Banner';
const ToDos = () => {
  return (
  <>
  <Banner />
  <div className='w-[80%] m-auto justify-center text-center mt-4'>
  <h1 className='text-2xl font-bold mb-4'>To-Do Tasklist</h1>
  </div>

  <Checklist />
  </>
  )
};

export default ToDos;