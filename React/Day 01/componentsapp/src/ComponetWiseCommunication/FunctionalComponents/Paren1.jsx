import React from 'react'
import Child1 from './Child1'

export default function Paren1() {
    receivedata=(x)=>{
        console.log("******",x)

    }
  
  return (
    <div>Paren1


        <Child1 receivedata={receivedata} />
    </div>
  )
}
