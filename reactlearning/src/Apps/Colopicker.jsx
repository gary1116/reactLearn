import React, { useState } from 'react'

const Colopicker = () => {
  
    const [backgroundColor, setBackgroundColor]=useState('#ffffff');

    const colors=['#F54927','#F5276C','#C27AFF','#27D3F5','#F5B027','#4927F5','#27F5B0'];

    const handleColorChange=(color)=>{
        setBackgroundColor(color)
    }

    return (
    <div style={{backgroundColor:backgroundColor,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"}}>
      <h1>Colo Picker</h1>
      <div className="color-pallete">
        {colors.map((color,index)=>(
            <div className="color-box" key={index} onClick={()=>handleColorChange(color)} style={{backgroundColor:color}}></div>
        ))}
      </div>
        <div className="custom-color-picker">
            <input type="color" name="" id="" value={backgroundColor} onChange={(e)=>handleColorChange(e.target.value)}/>
        </div>
    </div>
  )
}

export default Colopicker
