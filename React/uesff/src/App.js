// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import axios from 'axios';
// const App = () => {
//   const[count,setCount]=useState(0);
//   // useEffect(()=>{
//   //   console.log("my components is mounted")
//   // // try{
//   // const fetch=async()=>{
//   //   const res= await axios.get("https://dummyapi.online/api/movies");
//   //   console.log(res.data[0].id)

//   // // }\
//   // fetch()
//   // // }catch(error){
//   // //   console.log(error.message)
//   // //   console.log(error.data)
//   // //   console.log(error.status)
//   // // }


//   // },[])
// useEffect(()=>{
//   try{
//   const fetch=async()=>{
//    const res= await axios.get("https://dummyapi.online/api/movies");
//    console.log(res)
//    console.log("fetch function start")

//   }
//   fetch();
// }catch(error){
//   console.log(error.message)
// }
// },[])
//   useEffect(()=>{
//     console.log("counter value changed, so updated")
//   },[count])
//   return (
//     <div>App

//       <button onClick={()=>setCount(count+1)}>click to increment</button>
//     </div>
//   )
// }

// export default App

import React, { useRef, useState } from 'react'

const App = () => {
  const [value, setValue] = useState("")
  const [name, setName] = useState("")
  const ref=useRef(null)
  const formsubmit = (e) => {
    e.preventDefault();
    setName(ref.current.value)
   ref.current.value=""
  }
  return (
    <div>
      <h1>hi {name} </h1>
      <form onSubmit={formsubmit}>
        <input type="text" ref={ref} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App