import React from 'react'
import { useParams } from 'react-router-dom'
const S = () => {
    const {id}= useParams()
  return (
    <div>S , student with id {id} </div>
  )
}

export default S