import './App.css'
import { useState } from 'react';

function App() {  

  const [count, setCount]=useState(0);
  const [step, setStep] =useState(1);

  if(count<0){
    alert(`count is less than 0 now you dumb fuck`);
  }

  return (
    <>
    <div className='App'>
     <h1>Counter Value: {count}</h1>

     <button className='buttonStyle' onClick={()=>{setCount(count+step)}}>Increment</button>
     <button className='buttonStyle' onClick={()=>{setCount(count-step)}}>Decrement</button>
    <input type="number" value={step}
    onChange={(e)=>{setStep(parseInt(e.target.value))}}/>
    </div>
    </>
  )
}

export default App
