import { useState, useEffect } from 'react'
import './App.css'

/*
The useEffect hook in react lets you run code automatically when something changes
or when a component loads

its more like setting a task to happen after screen updates or when certain data is ready


syntax=>
useEffect(()=>{
  //code to run
  },[dependency])

  variations->
  useEffect(()=>{}); //run on every render
  useEffect(()=>{},[]); //run only on first render or initial render
  useEffect(()=>{},[dependency]); //run when dependency changes

*/

function App() {

  const [count,setCount]=useState(0);

  useEffect(()=>{

    document.title=`Count: ${count}`;

  },[count])

  const increment=()=>{
    setCount(count+1)
  }

  return (
    <>
    <h1>Hello, useEffect!</h1>
    <h2>Count: {count}</h2>
    <button onClick={increment}>Increment</button>
    </>
  )
}

export default App
