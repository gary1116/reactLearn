import React from 'react'

const Aboutsection = ({name , profession}) => {
  return (
    <div>
      <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>Hello! I am {name}, a passionate {profession}</p>
      </section>
    </div>
  )
}

export default Aboutsection
