import React, { use, useState } from 'react';
import logo from '../assets/images/logo-colored.png';
import profile from '../assets/images/Profile.png';
import message from '../assets/images/Message.png';
import order from '../assets/images/Orders.png';
import cart from '../assets/images/Cart.png';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import  LogOut  from '../assets/images/Logout.png';
import { logOut } from '../slices/auth-slice';
import { useDispatch } from 'react-redux';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const dispatch= useDispatch()
 const handleLogout = () => {
    dispatch(logOut()); 
    
    window.location.href = "/"; 
  };

  return (
    <header className="header flex items-center  justify-around px-4 py-3 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="brand-logo" className="h-10 w-auto" />
      </div>

      <div className="hidden lg:flex flex-grow justify-center max-w-lg">
        <SearchBar />
      </div>

      <div className="hidden md:flex items-center space-x-6 text-gray-700">
        <Link to="/profile">
          <img src={profile} alt="Profile" className="w-10 h-10 hover:opacity-80 transition" />
        </Link>
        <Link to="/message">
          <img src={message} alt="Message" className="w-10 h-10 hover:opacity-80 transition" />
        </Link>
        <Link to="/order">
          <img src={order} alt="Orders" className="w-10 h-10 hover:opacity-80 transition" />
        </Link>
        <Link to="/cart">
          <img src={cart} alt="Cart" className="w-10 h-10 hover:opacity-80 transition" />
        </Link>

        <button onClick={handleLogout}>
          <img src={LogOut} alt="Logout" className="w-10 h-10 hover:opacity-80 transition" />
        </button>
      </div>

      <button
        className="md:hidden flex flex-col justify-center items-center space-y-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="block w-6 h-[2px] bg-gray-700"></span>
        <span className="block w-6 h-[2px] bg-gray-700"></span>
        <span className="block w-6 h-[2px] bg-gray-700"></span>
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <SearchBar />

          <div className="flex items-center space-x-6">
            <Link to="/profile" onClick={() => setMenuOpen(false)}>
              <img src={profile} alt="Profile" className="w-6 h-6" />
            </Link>
            <Link to="/message" onClick={() => setMenuOpen(false)}>
              <img src={message} alt="Message" className="w-6 h-6" />
            </Link>
            <Link to="/order" onClick={() => setMenuOpen(false)}>
              <img src={order} alt="Orders" className="w-6 h-6" />
            </Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              <img src={cart} alt="Cart" className="w-6 h-6" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
