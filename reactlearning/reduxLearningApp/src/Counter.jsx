import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { increment,decrement } from './store/actions/action';

const Counter = () => {

    const count=useSelector((state=>state.counter.count));
    const dispatch=useDispatch();


  return (
    <div>
      <h1 className='text-4xl text-amber-400'>Count in Counter component:{count}</h1>
      <button className='m-4 bg-blue-600 rounded-lg p-1 text-cyan-200 cursor-pointer' onClick={()=>dispatch(increment())}>Increment</button>
      <button className='m-4 bg-red-600 rounded-lg p-1 text-orange-200 cursor-pointer' onClick={()=>dispatch(decrement())}>Decrement</button>

    </div>
  )
}

export default Counter
