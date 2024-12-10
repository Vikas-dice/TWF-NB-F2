
import React  from 'react'

export default function App() {

    let [count,setcount]=React.useState(1000)
    // console.log("------",count[0],count[1])
    const increment=()=>{
        // count[0]++;

        // count[1](count[0]+1)
        // console.log(count)

        // setvalue(valuee+1);

        setcount(count+1)//count=1000,1001
    }


  return (

   
    <div>

        <h1>Counter :{count}</h1>
        <button onClick={increment} >Increment</button>


    </div>
  )
}
