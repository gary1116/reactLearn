import { useState } from 'react'

import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5'];

  return (
    <>
      <div className="full-body"  style={{ backgroundColor }}>
        <h1 style={{ marginBottom: '20px', color: '#333' }}>Color Picker</h1>
        <div className="color-picker">
          {colors.map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color, width: '50px', height: '50px', border: '1px solid #ccc', margin: '5px', cursor: 'pointer', borderRadius: "10px" }}
              onClick={() => setBackgroundColor(color)}
            />
          ))}
        </div>
        <div className="color-display" style={{ marginTop: '20px', fontSize: '18px', color: '#333' }}>
          Selected Color: {backgroundColor}
        </div>

        <div>
          <input 
          className="custom-color-picker"
          type="color"
          value={backgroundColor}
          onChange={(e)=>setBackgroundColor(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}

export default App
