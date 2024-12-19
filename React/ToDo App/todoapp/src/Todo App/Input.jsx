import React, { useState } from 'react'

export default function Input(props) {
  const [todo,settodo]=useState("")

  const changeInput=(event)=>{
    // console.log("---",event)
    console.log(event.target.value)
    settodo(event.target.value)//todo=go to school



  }

  const submitt=(event)=>{
    event.preventDefault()
    console.log("form submit fired")
    props.addTodo(todo)

    settodo("")
  }


  return (
    <div>
         <form class="row g-3" onSubmit={submitt}>
  <div class="col-10">
   
    <input 
    
    type="text" 
     className="form-control"
      placeholder="Enter todos..."
      value={todo}
      onChange={changeInput}


      
      />
  </div>
 
  <div className="col-2">
    <button type="submit" className="btn btn-primary mb-3">Add Todo</button>
  </div>
</form>
        
    </div>
  )
}
