import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import PasswordChanged from '../PasswordChanged';

import authContext from '../../context/auth/authContext';

// Get Query Params
const queryParams = new URLSearchParams(window.location.search);
const resetLink = queryParams.get('resetLink');

function ResetPassword() {
  const navigate = useNavigate();
  const { resetPassword, error, clearErrors } = useContext(authContext);
  const [formData, setFormData] = useState({
    newPassword: '',
    verifyPassword: '',
    resetLink,
  });

  const [check, setCheck] = useState(true);

  const { newPassword, verifyPassword } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== verifyPassword) {
      toast.error('Password do not Match');
      setFormData((prevState) => ({
        ...prevState,
        newPassword: '',
        verifyPassword: '',
      }));
    } else {
      resetPassword(formData);
      setFormData({
        newPassword: '',
        verifyPassword: '',
      });
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      if (error === 'Your password has been Changed') {
        setCheck(false);
        setTimeout(() => {
          clearErrors();
          navigate('/login');
        }, 5000);
      }
      clearErrors();
    }
  }, [error]);

  return (
    <div>
      <header className='forgotPasswordHeader'>
        <p className='forgotTitle'>Reset Password</p>
        <Link className='forgotPasswordLink' to='/login'>
          Sign In
        </Link>
      </header>

      {check ? (
        <main className='empty-container'>
          <form onSubmit={onSubmit}>
            <input
              type='password'
              className='input-field'
              placeholder='Enter newPassword'
              id='newPassword'
              value={newPassword}
              name='newPassword'
              required
              onChange={onChange}
            />

            <input
              type='password'
              className='input-field'
              placeholder='Confirm newPassword'
              id='verifyPassword'
              name='verifyPassword'
              required
              value={verifyPassword}
              onChange={onChange}
            />

            <button type='submit' className='btn-forgot'>
              Create New Password
            </button>
          </form>
        </main>
      ) : (
        <PasswordChanged />
      )}
    </div>
  );
}

export default ResetPassword;
