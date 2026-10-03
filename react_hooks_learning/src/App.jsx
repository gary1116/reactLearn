import {useState} from 'react'
import './App.css'

function App() {

    const [count, setCount] = useState(0);
    const [step,setStep]=useState(1);

    const increment=()=>{
        setCount(count+step);
    }

    const stepChange=(e)=>{
        console.log(e);
        setStep(Number(e.target.value));
    }

  return (
 <>
 <div className="app-container">
    <h1>Counter value:- {count}!</h1>
    <input type="number"
    value={step}
    onChange={(e)=>stepChange(e)}
    style={{margin:"10px", padding:"10px", borderRadius:"10px", border:"none" }}/>
    <button onClick={()=>increment()} style={{margin:'10px', padding:'10px',border:'1px solid #5feea7d3', borderRadius:'5px'}}>Increment</button>
    <button onClick={()=>setCount(count-step)} style={{margin:'10px', padding:'10px',border:'1px solid #5fe0eed3', borderRadius:'5px'}}>Decrement</button>
 </div>
 </>
  )

}

export default App
