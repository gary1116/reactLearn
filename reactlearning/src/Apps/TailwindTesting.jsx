import React from 'react'

const TailwindTesting = () => {
  return (
<div className="bg-gray-100 p-4">
  <ul className="list-none md:flex md:gap-2">
    <li className='bg-blue-500 text-white p-2 m-2 rounded-lg  md:px-4'>Item 1</li>
    <li className="bg-blue-500 text-white p-2 m-2 rounded-lg md:px-4">Item 2</li>
    <li className="bg-blue-500 text-white p-2 m-2 rounded-lg md:px-4">Item 3</li>
  </ul>
</div>
  )
}

export default TailwindTesting
