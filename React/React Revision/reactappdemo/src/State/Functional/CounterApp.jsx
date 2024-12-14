
import React, { useState } from 'react'

export default function CounterApp() {

    // let count=useState(0)
   let [count,setcount]= useState(10)
    console.log("0----",count[0],count[1]);
    
    const increment=()=>{
        // count[1](++count[0])
        // count++;
        setcount(++count)
        console.log(count)
    }

    const decrement=()=>{
        
        // count[1]( --count[0])
        setcount(--count)
        console.log(count)
    }

    const reset=()=>{
        // count=0
    //    count[1](count[0]=0)
    setcount(count=0)
        console.log(count)
    }

  return (
    <div>CounterApp
        

        <h1>Count : {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

