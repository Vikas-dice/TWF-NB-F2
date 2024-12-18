import React from 'react'

export default function Input() {
  return (
    <div>
         <form class="row g-3">
  <div class="col-10">
   
    <input type="text"  className="form-control" placeholder="Enter todos..."/>
  </div>
 
  <div className="col-2">
    <button type="submit" className="btn btn-primary mb-3">Add Todo</button>
  </div>
</form>
        
    </div>
  )
}
