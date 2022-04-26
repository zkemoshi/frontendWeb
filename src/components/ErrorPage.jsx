import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
  return (
    <>
      <div className='container'>
        <h1>Oops</h1>
        <p>We were unable to find the page you were looking for.</p>
        <Link to='/login' className='btn'>
          Go Back Home
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
