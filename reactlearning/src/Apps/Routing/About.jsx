import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

const About = () => {
  const[searchParams, setSearchParams ]=useSearchParams();
  const topic = searchParams.get("topic") || "general";
  console.log(topic)
  console.log(searchParams);

  const handleTopic=(newTopic)=>{
    setSearchParams({topic:newTopic});
  }

  const urlParams=new URLSearchParams(window.location.search);
  const topicFromUrl= urlParams.get("topic");
  console.log(topicFromUrl);

  return (
    <div className='flex flex-col items-center justify-center'>

      <h2 className='text-6xl text-lime-400'>About Page</h2>
      <p className='text-orange-700 text-2xl'>this page is an About page you will get to know about us</p>
      <div className="flex gap-4">
        <Link className=' text-red-500 underline ' to={"team"}>Want to check our team?</Link>
        <Link className=' text-blue-500 underline' to={"/"}>Back to home?</Link>
      </div>

      <div className="mt-6">
        <h3 className='text-rose-500 text-xl font-mono'>Choose a Topic</h3>
        <div className="flex space-x-4 mt-4">
          <button onClick={()=>handleTopic("Team")} className='px-4 py-2 bg-blue-500 text-white rounded-lg'>
            Team
          </button>
          <button onClick={()=>handleTopic("Mission")} className='px-4 py-2 bg-blue-500 text-white rounded-lg'>
            Mission
          </button>
          <button onClick={()=>handleTopic("Vision")} className='px-4 py-2 bg-blue-500 text-white rounded-lg'>
            Vision
          </button>

        </div>
      </div>

      <div className="mt-8 text-lg text-gray-600">Current Topic is {topic}</div>
      <div className="mt-8 w-full max-w-4xl">
        <Outlet />
      </div>

    </div>
  )
}

export default About
