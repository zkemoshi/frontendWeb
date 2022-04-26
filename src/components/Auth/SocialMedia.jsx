import React from 'react';
import { Link } from 'react-router-dom';
import googleicon from '../../assets/img/icons8-google.svg';

function SocialMedia() {
  return (
    <>
      <p className='social-text'>Or Sign in with social platforms</p>
      <div className='social-media'>
        <Link to='#' className='social-icon'>
          <i className='fab fa-facebook-f'></i>
        </Link>
        <Link to='#' className='social-icon'>
          <i className='fab fa-twitter'></i>
        </Link>
        <Link to='#' className='social-icon'>
          <i className='fab fa-google'></i>
          {/* <img src={googleicon} alt='googlecion' /> */}
        </Link>
        <Link to='#' className='social-icon'>
          <i className='fab fa-linkedin-in'></i>
        </Link>
      </div>
    </>
  );
}

export default SocialMedia;
