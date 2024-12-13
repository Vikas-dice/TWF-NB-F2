import React from 'react'
import Child from './Child';

export default function Parent() {
    let name="vikas"
    let age=27;
    let salary=10000;



  return (
    
    <div>Parent

        <Child naam={name} umar={age} tankhuwa={salary}/>
    </div>
  )
}
