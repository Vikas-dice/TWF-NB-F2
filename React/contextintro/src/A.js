import React from 'react'
import "./stylecomp.css"
import { Link } from 'react-router-dom'
const A = () => {
  
  return (
    <div className='mt-5'>A my marks are 90
      <p id="para1">i am para 1</p>
      <p className='cls2'>i am para 2</p>
      <Link to="/b">click me to get to b</Link>
    </div>
   
  )
}

export default A