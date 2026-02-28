import { useEffect, useState } from 'react'

const MouseTracker = () => {

    const[mousePosition,setMousePosition]=useState({x:0,y:0});

    useEffect(()=>{
        const handleMouseMove=(event)=>{
            setMousePosition({x:event.clientX,y:event.clientY});
        };
        window.addEventListener('mousemove',handleMouseMove);

        return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        };
    },[])

  return (
    <div>
      <h1>Mouse Position</h1>
<p>X:{mousePosition.x}, Y:{mousePosition.y}</p>

    </div>
  )
}

export default MouseTracker
