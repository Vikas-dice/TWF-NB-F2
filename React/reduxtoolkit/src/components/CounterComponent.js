import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../features/counterslice'
const CounterComponent = () => {
    const count=useSelector((state)=> state.counter.value)
    const dispatch=useDispatch()
  return (
    <div>
{count}
<button onClick={()=>{dispatch(increment())}}>increment state by 1</button>
    </div>
  )
}

export default CounterComponent