import { useState,useEffect } from 'react'
import './App.css'

function App() {

  const [mousePosition,setMousePosition]=useState({x:0,y:0});


  useEffect(()=>{

    const handleMouseMove=(event)=>{
      setMousePosition({x:event.clientX,y:event.clientY})
    }
    window.addEventListener('mousemove',handleMouseMove)

    return ()=>{
      window.removeEventListener('mousemove',handleMouseMove)
    }

  },[])

  return (
    <>
    <h1 style={{padding:"30px", margin:"10px"}}>Mouse Tracker</h1>
    <p>X:{mousePosition.x}, Y:{mousePosition.y}</p>
    </>
  )
}

export default App
