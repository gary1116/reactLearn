import React from 'react'
import useCounter from './UseCounter'

const CustomHooks = () => {
    const {count,increment,decrement,reset} =useCounter(0);
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>

    </div>
  )
}

export default CustomHooks
