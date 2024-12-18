

import React, { useEffect, useState } from 'react'

export default function App() {
    const [count,setcount]=useState(0)
    const[count1,setcount1]=useState(0)
    // console.log(count,setcount)

    // console.log("testing - functional component started")
//componentdidimount()
    useEffect(()=>{
        console.log("testing - running ")
        //code
    })
//componetn  did update with dependecy
    useEffect(()=>{
        console.log("testing - running ")
    },[])
//componentdid update  with dependecy
    useEffect(()=>{
        console.log("testing on some update")
    },[count1])

    const increment=()=>{
        setcount(count+1)
    }

    const increment1=()=>{
        setcount1(count1+1)
    }


  return (
    <div>learning lifecyle in functional component in react


        <h1>Counter1 : {count}</h1>
        <button onClick={increment}>Increment</button>
        <h1>Counter2 : {count1}</h1>
        <button onClick={increment1}>Increment</button>
        <h1>--------------------------</h1>
    </div>
  )
}
