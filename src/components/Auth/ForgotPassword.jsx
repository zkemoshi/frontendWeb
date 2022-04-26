import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import authContext from '../../context/auth/authContext';

function ForgotPassword() {
  // const { forgotPassword, error, clearErrors } = useContext(authContext);
  const [email, setEmail] = useState('');

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    // forgotPassword({ email });
    setEmail('');
  };

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     clearErrors();
  //   }
  // }, [error]);

  return (
    <div className='container'>
      <header className='forgotPasswordHeader'>
        <p className='forgotTitle'>Forgot Password</p>
        <Link className='forgotPasswordLink' to='/login'>
          Sign In
        </Link>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            className='input-field'
            placeholder='Email'
            id='email'
            value={email}
            required
            onChange={onChange}
          />

          <div className='signInBar'>
            <button type='submit' className='btn'>
              Send Reset Link
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ForgotPassword;
