import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate =useNavigate();

  const handleLogin=()=>{
    navigate("/dashboard");
  }

  return (
    <div className='flex flex-col items-center justify-center'>

    <h2 className='text-5xl text-emerald-700 '>Home Page</h2>
    <p className='text-blue-900 text-2xl'>Welcome to the Home Page! Explore this site to learn more.</p>

    <button className='text-blue-900 text-2xl cursor-pointer border-2 p-2 bg-amber-500 rounded-lg' onClick={()=>handleLogin()}>login</button>


    </div>
  )
}

export default Home
