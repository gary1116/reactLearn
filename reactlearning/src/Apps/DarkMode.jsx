import React, { useEffect, useState } from 'react'

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode]= useState(
        ()=>{
            return localStorage.getItem('theme')==='dark'
        }
    )

    useEffect(()=>{
        if(isDarkMode){

        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');

        }else{
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        }


    },[isDarkMode])
  return (
    <div className='p-4 bg-white min-h-screen dark:bg-gray-900 dark:text-white'>
      <h1 className='text-2xl'>Welcome to Dark mode App</h1>
      <p>this is an example of implementing dark modeusing tailwindCss</p>

      <button onClick={()=>setIsDarkMode(!isDarkMode)} className='p-2 dark:bg-gray-700 dark:text-white bg-gray-200 text-gray-800 rounded border border-black'>{isDarkMode ? 'Disable': 'Enable'} Dark Mode</button>
    </div>
  )
}

export default DarkMode


// const [isDarkMode, setIsDarkMode]= useState(
    //     ()=>{
    //         return localStorage.getItem('theme')==='dark'
    //     }
    // )

    // why we initialise it like this?

// This is called lazy initialization.

// Instead of:

// useState(localStorage.getItem('theme') === 'dark')

// we do:

// useState(()=>localStorage.getItem('theme') === 'dark')

// Reason:

// React will only run this once during first render, not on every render.


// ----document.documentElement----------

// This refers to the HTML root element.

// Example HTML:

// <html>
//   <body>
//      <div id="root"></div>
//   </body>
// </html>

// document.documentElement =

// <html>

// So this line:

// document.documentElement.classList.add('dark')

// becomes:

// <html class="dark">