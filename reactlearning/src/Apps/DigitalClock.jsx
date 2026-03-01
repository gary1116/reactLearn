import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
    const [time,setTime]=useState(new Date());


    useEffect(()=>{

       const timerId= setInterval(()=>{
                        setTime(new Date())
                        },1000)

        return ()=>clearInterval(timerId);

    },[time]);

  return (
    <div className='parentDiv'>
        <div className="time">
        <p>{time.toLocaleTimeString()}</p>
        </div>
    </div>
  )
}

export default DigitalClock
