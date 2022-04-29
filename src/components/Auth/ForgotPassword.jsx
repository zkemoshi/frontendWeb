import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import authContext from '../../context/auth/authContext';

function ForgotPassword() {
  const { forgotPassword, error, clearErrors } = useContext(authContext);
  const [email, setEmail] = useState('');

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    forgotPassword({ email });
    setEmail('');
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }
  }, [error]);

  return (
    <div>
      <header className='forgotPasswordHeader'>
        <p className='forgotTitle'>Forgot Password</p>
        <Link className='forgotPasswordLink' to='/login'>
          Sign In
        </Link>
      </header>

      <main className='empty-container'>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            className='input-field'
            placeholder='Enter your Email'
            id='email'
            value={email}
            required
            onChange={onChange}
          />

          <button type='submit' className='btn-forgot'>
            Send Reset Link
          </button>
        </form>
      </main>
    </div>
  );
}

export default ForgotPassword;
