import './App.css'
import { useState } from 'react';

function App() {  

  const [counters,setCounters]=useState([{id:1,value:0}]);
  const addCounters=()=>{
    setCounters(previousCounter=>[...previousCounter,{id:previousCounter.length+1,value:0}]);
  }

const incrementCounter = (id) => {
    setCounters(prev =>
      prev.map(counter =>
        counter.id === id
          ? { ...counter, value: counter.value + 1 }
          : counter
      )
    );
  };
  return (
    <>
    <div className='App'>
      <button className='buttonStyle' onClick={addCounters}>Add Counter</button>
      <ul>
        {counters.map(counter=>{
         return (
          <li key={counter.id}>
            Counter {counter.id}:{counter.value}
            <button className='buttonStyle' onClick={()=>incrementCounter(counter.id)}>Increment</button>
          </li>
          );
        })}
      </ul>
    </div>
    </>
  )
}

export default App
