import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import logo from '../assets/img/barber.svg';
import registerimg from '../assets/img/barber.svg';
import authContext from '../context/auth/authContext';
import Loading from '../components/Loading';

function LandingPage() {
  const { loading, token } = useContext(authContext);
  const navigate = useNavigate();

  const [log, setLog] = useState(false);

  
  if (loading) {
    return (
      <>
        <div className='centerContainer'>
          <Loading />
        </div>
      </>
    );
  }

  return (
    <div className={`container ${log ? 'sign-up-mode' : ''}`}>
      <div className='forms-container'>
        <div className='signin-signup'>
          <Login />
          <Register />
        </div>
      </div>
      <div className='panels-container'>
        <div className='panel left-panel'>
          <div className='content'>
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className='btn transparent'
              id='sign-up-btn'
              onClick={() => setLog(true)}
            >
              Sign up
            </button>
          </div>
          <img src={logo} className='image' alt='' />
        </div>
        <div className='panel right-panel'>
          <div className='content'>
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className='btn transparent'
              id='sign-in-btn'
              onClick={() => setLog(false)}
            >
              Sign in
            </button>
          </div>
          <img src={registerimg} className='image' alt='' />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
