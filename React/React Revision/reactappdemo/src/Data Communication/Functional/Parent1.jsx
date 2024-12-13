import React from 'react'
import Child1 from './Child1'

export default function Parent1() {
    var arr=[]
   const recieveData=(maal)=>{
        console.log("coming data from child-",maal)
        arr.push(maal)

    }
  return (
    <div>Parent1
        
  <Child1 recieveData={recieveData}/>
    </div>
  )
}
