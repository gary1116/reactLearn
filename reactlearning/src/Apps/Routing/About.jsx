import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center'>

    <h2 className='text-6xl text-lime-400'>About Page</h2>
    <p className='text-orange-700 text-2xl'>this page is an About page you will get to know about us</p>
    <div className="flex gap-4">
    <Link className=' text-red-500 underline ' to={"team"}>Want to check our team?</Link>
    <Link className=' text-blue-500 underline' to={"/"}>Back to home?</Link>
    </div>


<div className="mt-8 w-full max-w-4xl">
<Outlet />
</div>

    </div>
  )
}

export default About
