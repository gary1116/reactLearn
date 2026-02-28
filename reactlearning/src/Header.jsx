import React from 'react'

const Header = ({name , profession}) => {


  return (
    <header className='header'>
      <h1>{name}</h1>
      <p>{profession}</p>
      <nav className='links'>
        <a href="#about">About</a>
        <a href='#project'>Project</a>
        <a href='#contact'>Contact</a>
      </nav>
      </header>
  )
}

export default Header
