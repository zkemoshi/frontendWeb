import SocialMedia from './SocialMedia';

import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import authContext from '../../context/auth/authContext';

function Register() {
  const { register, token, error, clearErrors } = useContext(authContext);
  const navigate = useNavigate();

  const [eye, setEye] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const { name, phone, email, password } = formData;

  // Input data collection
  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  // submit form data
  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      phone,
    };
    register(userData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
    });
  };
  // Component Load
  useEffect(() => {
    if (token) {
      navigate('/dashboard');
    }
    if (error) {
      toast.error(error);
      clearErrors();
    }
  }, [token, error]);

  return (
    <>
      <form className='sign-up-form' onSubmit={onSubmit}>
        <h2 className='title'>Sign up</h2>
        <div className='input-field'>
          <i className='fas fa-user'></i>
          <input
            type='text'
            placeholder='Name'
            name='name'
            required
            value={name}
            onChange={onChange}
          />
        </div>
        <div className='input-field'>
          <i className='fas fa-envelope'></i>
          <input
            type='email'
            placeholder='Email'
            required
            name='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className='input-field'>
          <i className='fa-solid fa-phone'></i>
          <input
            type='phone'
            required
            placeholder='Mobile'
            name='phone'
            value={phone}
            onChange={onChange}
          />
        </div>
        <div className='input-field'>
          <i className='fas fa-lock'></i>
          <input
            type={`${eye ? 'password' : 'text'}`}
            placeholder='Password'
            name='password'
            required
            value={password}
            onChange={onChange}
          />
          <i
            className={`fa-solid ${eye ? 'fa-eye-slash' : 'fa-eye'}`}
            onClick={() => setEye(!eye)}
          ></i>
        </div>
        <input type='submit' className='btn' value='Sign up' />
        <SocialMedia />
      </form>
    </>
  );
}

export default Register;
