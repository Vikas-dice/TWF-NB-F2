import React from 'react'

export default function Child1({receivedata}) {
    let x=1000;

    function senddata(){
        receivedata(100)
    }
  

  return (
    <div>Child1

        <button onClick={senddata()}>send data</button>
    </div>
  )
}
