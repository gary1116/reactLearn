import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
    const count =useSelector((state)=>state.counter.count);
  return (
    <div>
      <p>current count :{count}</p>
    </div>
  )
}

export default Display
