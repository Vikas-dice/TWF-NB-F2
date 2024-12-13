import React from 'react'

export default function Child(props) {
    console.log("coming data from parent -",props)
    console.log(props.umar);
    console.log(props.tankhuwa);
    console.log(props.naam);
    
    
    
  return (
    <div>Child

        <h1>mera naam h - {props.naam}</h1>
        <h1>meri saklary h -{props.tankhuwa}</h1>
        <h1>meri umar h -{props.umar}</h1>
    </div>
  )
}
