// import React, { Component } from 'react'
// import Child from './Child'

// export default class Parent extends Component {
    
//   render() {

//     let age=27;
//     return (
//       <div>Parent

//         <Child name="vikas" age={age}/>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    // getdatafromchild=(maal)=>{
    //     console.log(maal)
        
    // }
   

  render() {
//    function getdatafromchild(maal){
//     console.log(maal)

//    }

const getdatafromchild=(maal)=>{
    console.log(maal)

}

   
    return (
      <div>Parent

        <Child getdatafromchild={getdatafromchild}/>
       
      </div>
    )
  }
}

