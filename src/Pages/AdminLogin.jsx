import React from 'react';
import { Link } from 'react-router-dom';

const AdminLogin = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-indigo-500 flex items-center justify-center">
      <div className="bg-gray-900 text-white p-10 rounded-lg shadow-2xl w-full max-w-sm relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-300 hover:text-white transition duration-300"
        >
          x
        </button>
        <h2 className="text-4xl font-bold mb-8 text-center text-pink-300">Admin Login</h2>
        
        <input 
          type="text" 
          placeholder="Username" 
          className="bg-gray-800 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500 transition duration-300"
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          className="bg-gray-800 p-3 mb-6 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-500 transition duration-300"
        />
        <Link to='/dashboard'>
          <button 
            className="bg-pink-300 hover:bg-blue-500 text-gray-900 font-bold py-3 px-6 rounded-lg w-full transition duration-300 shadow-lg"
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminLogin;
