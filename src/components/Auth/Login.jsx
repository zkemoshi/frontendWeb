import SocialMedia from './SocialMedia';

import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import authContext from '../../context/auth/authContext';

function Login() {
  const { login, token, error, clearErrors } = useContext(authContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  // Input data collection
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // form submission
  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    login(userData);
    setFormData({
      email: '',
      password: '',
    });
  };

  // Loading component
  useEffect(() => {
    if (token) {
      navigate('/dashboard');
    }
    if (error) {
      toast.error(error);
      clearErrors();
    }
  }, [error, token]);

  return (
    <>
      <form className='sign-in-form' onSubmit={onSubmit}>
        <h2 className='title'>Sign in</h2>
        <div className='input-field'>
          <i className='fas fa-user'></i>
          <input
            type='email'
            placeholder='Username'
            value={email}
            name='email'
            required
            onChange={onChange}
          />
        </div>
        <div className='input-field'>
          <i className='fas fa-lock'></i>
          <input
            type='password'
            placeholder='Password'
            value={password}
            name='password'
            required
            onChange={onChange}
          />
        </div>
        <Link to={'/forgot-password'} className='forgot-password'>
          Forgot password ?
        </Link>
        <input type='submit' value='Login' className='btn solid' />
        <SocialMedia />
      </form>
    </>
  );
}

export default Login;
