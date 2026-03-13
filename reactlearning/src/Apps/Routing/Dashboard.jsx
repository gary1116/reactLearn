import React from 'react'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {

      const navigate =useNavigate();

  const handleLogout=()=>{
    navigate("/");
  }

  return (
    <div className='flex flex-col items-center justify-center'>

    <h2 className='text-6xl text-teal-700'>Welcome to dashboard</h2>
    <p className='text-2xl text-pink-600'>this page is dashboard page</p>
    <button className='text-blue-900 text-2xl cursor-pointer border-2 p-2 bg-blue-400 rounded-lg' onClick={()=>handleLogout()}>go to home</button>
    </div>
  )
}

export default Dashboard
