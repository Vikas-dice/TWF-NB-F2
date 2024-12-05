import React from 'react'
import Child from './Child'

export default function Parent() {
    let a=100;
    let name="vikas";
    let age=27;
    let marks =[30,40,50]
  return (
    <div>
        <h1>I am Parent</h1>
        <Child a={a} naam={name} umar={age} marks={marks}/>
    </div>
  )
}
