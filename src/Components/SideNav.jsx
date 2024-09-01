import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='bg-gray-800 h-screen w-[20%] text-white fixed flex flex-col'>
      <h1 className='font-bold text-4xl underline pt-5 text-center text-white'>Complaints</h1>
      <ul className='flex flex-col gap-8 mt-10 mx-5'>

        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => 
            `flex items-center text-xl ${isActive ? 'bg-blue-400 text-gray-900 rounded-lg' : ''} hover:bg-white hover:text-gray-900 p-3 transition-all duration-300 ease-in-out`
          }
        >
          <i className="fa-brands fa-windows mr-3"></i> Dashboard
        </NavLink>

        <NavLink 
          to="/admin" 
          className={({ isActive }) => 
            `flex items-center text-xl ${isActive ? 'bg-blue-400 text-gray-900 rounded-lg' : ''} hover:bg-white hover:text-gray-900 p-3 transition-all duration-300 ease-in-out`
          }
        >
          <i className="fa-solid fa-book m-3"></i> Complaints
        </NavLink>

        <NavLink 
          to="/user" 
          className={({ isActive }) => 
            `flex items-center text-xl ${isActive ? 'bg-blue-400 text-gray-900 rounded-lg' : ''} hover:bg-white hover:text-gray-900 p-3 transition-all duration-300 ease-in-out`
          }
        >
          <i className="fa-solid fa-gear m-3"></i> Logout
        </NavLink>
      </ul>
    </div>
  )
}

export default SideNav
