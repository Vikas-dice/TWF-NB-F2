import React from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
export default function List(props) {
    console.log(props.todos) //array
  return (
    <div>
        <ul className="list-group">


            {
            props.todos.length>0 ? props.todos.map((value,index,arr)=>{
               return <li className="list-group-item" key={index}>{value}  <FontAwesomeIcon 
               onClick={() => { alert("deleting", index); }} 
               icon={faTrash}  // Use the imported icon here
             />
             <FontAwesomeIcon 
               onClick={() => { props.deleteToDo(index)}} 
               icon={faEdit}  // Use the imported icon here
             />
             <FontAwesomeIcon 
               onClick={() => { alert("deleting", index); }} 
               icon={faTrash}  // Use the imported icon here
             />
                </li>


            })
            :<li className="list-group-item">no todo</li>

            
            }
  
 
  
 
</ul>
    </div>
  )
}
