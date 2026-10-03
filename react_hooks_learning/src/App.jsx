import {useState} from 'react'
import './App.css'

function App() {

    const [count, setCount] = useState(0);

  return (
 <>
 <div className="app-container">
    <h1>Counter value:- {count}!</h1>
    <button onClick={()=>setCount(count+1)} style={{margin:'10px', padding:'10px',border:'1px solid #5feea7d3', borderRadius:'5px'}}>Increment</button>
    <button onClick={()=>setCount(count-1)} style={{margin:'10px', padding:'10px',border:'1px solid #5fe0eed3', borderRadius:'5px'}}>Decrement</button>
 </div>
 </>
  )

}

export default App
