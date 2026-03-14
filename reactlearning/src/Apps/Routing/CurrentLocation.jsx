import React from 'react'
import { useLocation } from 'react-router-dom'

const CurrentLocation = () => {
    const location =useLocation();

  return (
    <div>
      <h1>currnt path:{location.pathname}</h1>
    </div>
  )
}

export default CurrentLocation
