import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-pink-300 text-white-400 py-8">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold">Online Complaint System</h1>
        <nav className="space-x-8">
          <Link to="/" className="hover:text-white-300 text-2xl">Home</Link>
          <Link to="/about" className="hover:text-white-300 text-2xl">About</Link>
          <Link to="/login" className="hover:text-red-500 text-2xl bg-white shadow-lg py-2 px-4 rounded-full transition duration-300">
            Admin
          </Link>
        </nav> 
      </div>
    </header>
  );
};

export default Header;
