import List from "./List";
import Input from './Input'
import { useState } from "react";


function App() {
  const[todos,settodos]=useState(["breakfast","lunch","dinner","brunch"])
  console.log(todos)

  return (
    <div className="container mt-5">
      <Input/>
      <List todos={todos}/>

    </div>
  );
}

export default App;
