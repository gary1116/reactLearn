import './App.css'
import { useState } from 'react';

function App() {  

  const [count, setCount]=useState(0);

  if(count<0){
    alert(`count is less than 0 now you dumb fuck`);
  }

  return (
    <>
    <div className='App'>
     <h1>Counter Value: {count}</h1>
     <button className='buttonStyle' onClick={()=>{setCount(count+1)}}>Increment</button>
     <button className='buttonStyle' onClick={()=>{setCount(count-1)}}>Decrement</button>
    </div>
    </>
  )
}

export default App
