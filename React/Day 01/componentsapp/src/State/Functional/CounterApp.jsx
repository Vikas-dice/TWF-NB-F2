
import React, { useState } from 'react'

export default function CounterApp() {
    // let count=0;
    let [count,setcount]=useState(10)
    // console.log("-----",count[1])

    const increment=()=>{
        // count[0]=count[0]+1;
        // count[1]( count[0]=count[0]+1)
        setcount(++count)
        console.log("increment",count)
    }

    const decrement=()=>{
        // count[0]=count[0]-1;
        // count[1]( count[0]=count[0]-1)
        setcount(--count)
        console.log("decrement",count)
    }

    const reset=()=>{
        count=0;
        setcount(count)
    }

  return (
    <div>Counter App
        <h1>Counter : {count}</h1>
        <button onClick={increment}>Incrememt</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>

    </div>
  )
}
