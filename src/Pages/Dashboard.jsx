import React from 'react'
import SideNav from '../Components/SideNav'

const Dashboard = () => {
  return (
    <div>
      <SideNav/>
      <div className='ml-[21%] flex gap-6 pt-20'>
        <div className='bg-blue-500 w-[300px] h-[200px] text-center border-b-8 border-orange-500 ml-20 rounded-lg shadow-lg'>
          <h1 className='text-white pt-20 font-bold'>Total Complaints</h1>
          <p className='text-white text-2xl'>10+</p>
        </div>

        <div className='bg-blue-500 w-[300px] h-[200px] text-center border-b-8 border-orange-500 rounded-lg shadow-lg'>
          <h1 className='text-white pt-20 font-bold'>Total Complaints</h1>
          <p className='text-white text-2xl'>20+</p>
        </div>

        <div className='bg-blue-500 w-[300px] h-[200px] text-center border-b-8 border-orange-500 rounded-lg shadow-lg'>
          <h1 className='text-white pt-20 font-bold'>Total Complaints</h1>
          <p className='text-white text-2xl'>30+</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
