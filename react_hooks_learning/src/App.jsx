import {useState} from 'react'
import './App.css'

function App() {

    const [counters,setCounters]=useState([{
        id:1,
        value:0
    }])
    const addCounters=()=>{
        setCounters([...counters,{id: counters.length + 1, value: 0}])
    }
    const incrementCounter=(id)=>{
        setCounters(counters.map(counter=>counter.id===id ? {...counter, value: counter.value + 1} : counter))
    }

  return (
 <>
 <div className="app-container">
    <button onClick={addCounters}>Add Counter</button>
    <ul>
        {counters.map((counter)=>(
            <li  key={counter.id}>
                Counter {counter.id}: {counter.value} 
                <button
                style={{margin:"10px", padding:"5px"}} 
                onClick={()=>incrementCounter(counter.id)}>
                Increment</button>

            </li>
        )
            
        )}
    </ul>
 </div>
 </>
  )

}

export default App
