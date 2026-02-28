import { useEffect, useState } from 'react';
import './App.css'
import Colopicker from './Colopicker';

function App() {  

  const [count,setCount]=useState(0);

  useEffect(()=>{
        document.title=`Count:${count+1}`;
  },[count])

  const incrementCount=()=>{
    setCount(count+1);
  }

  return (
    <>
    <div className='App'>
    <h1>UseEffect Hook</h1>
    <button onClick={incrementCount}>Increment</button>
    </div>
    </>
  )
}

export default App
