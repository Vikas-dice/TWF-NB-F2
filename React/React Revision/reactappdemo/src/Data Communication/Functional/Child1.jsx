import React from 'react'

export default function Child1(props) {
    console.log("coming props-",props)
    let dt={
        name:"vikas",
        age:27
    }

   const sendData=()=>{
        props.recieveData(dt)

    }
  return (
    <div>Child1

        <button onClick={sendData}>send data to parent</button>


    </div>
  )
}


