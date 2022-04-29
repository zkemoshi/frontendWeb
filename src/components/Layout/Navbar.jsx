import './navbar.css';
import { Routes, Route, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default Navbar;
