

import React, { use, useEffect, useState } from 'react'

export default function App2() {
    const[count1,setcount1]=useState(0)
    const[count2,setcount2]=useState(0)

    //componentdidmount,unmount,setsncap- func-inbuilt 

    useEffect(()=>{
        console.log("running")
    })

    //componetwillupdate with dependecy
    // useEffect(()=>{
    //     console.log("tetsing - dependency with count 1")

    // },[count1])

    useEffect(()=>{
        console.log("testing-without dependecy count 1")
    },[])

    useEffect(()=>{
        console.log("testing-without dependecy count 2")
    },[])

    // useEffect(()=>{
    //     console.log("tetsing - dependency with count 2")

    // },[count2])

    const increment1=()=>{
        setcount1(count1+1)
    }
    const increment2=()=>{
        setcount2(count2+1)
    }


  return (
    <div>App2

        <h1>Counter1 : {count1}</h1>
        <button onClick={increment1}>increment1</button>

        <h1>------------</h1>
        <h1>Counter2 : {count2}</h1>
        <button onClick={increment2}>increment2</button>
    </div>
  )
}
