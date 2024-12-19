import List from "./List";
import Input from './Input'
import { useState } from "react";


function App() {
  const[todos,settodos]=useState(["breakfast","lunch","dinner","brunch"])
  console.log(todos)

  const addTodo=(maal)=>{
    console.log("data coming from input",maal)
    // todos.push(maal) //go to school
    //["breakfast","lunch","dinner","brunch","go to school"]

    settodos([...todos,maal])

    
    


  }

  return (
    <div className="container mt-5">
      <Input addTodo={addTodo}/>
      <List todos={todos}/>

    </div>
  );
}

export default App;
