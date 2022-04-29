import React from 'react';
import { Link } from 'react-router-dom';

function PasswordChanged() {
  return (
    <div className='passwordChanged'>
      <i className='fa-solid fa-check fa-5x check'></i>
      <p>
        password reset successfully, <Link to={'/login'} className='link-text'>Login</Link>
      </p>
    </div>
  );
}

export default PasswordChanged;
