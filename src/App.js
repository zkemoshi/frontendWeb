import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LandingPage from './screens/LandingPage';
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Navbar from './components/Layout/Navbar';
import Dashboard from './screens/Dashboard';

import AuthState from './context/auth/AuthState';

function App() {
  return (
    <>
      <AuthState>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route path='/login' element={<LandingPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Routes>
      </AuthState>
      <ToastContainer />
    </>
  );
}

export default App;
