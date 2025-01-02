import React from 'react'
import { useParams } from 'react-router-dom'

const C = () => {
    const {id}=useParams()
  return (
    <div>C , {id}</div>
  )
}

export default C