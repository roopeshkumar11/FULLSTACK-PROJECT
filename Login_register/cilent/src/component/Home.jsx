


import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <h1 className='text-center mt-5'>Welcome to Our Website</h1>
          <p className='text-center'>
            This is the home page of our website. You can navigate to other pages using the links below.
          </p>
          <div className='text-center mt-3'>
            <Link to='/login' className='btn btn-primary mr-2'>Log In</Link>
            <Link to='/register' className='btn btn-secondary'>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

