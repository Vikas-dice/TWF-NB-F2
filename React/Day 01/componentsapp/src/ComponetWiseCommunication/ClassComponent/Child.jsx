// import React, { Component } from 'react'

// export default class Child extends Component {
//     componentDidMount(){
//         console.log(this.props)
//         console.log(this.props.name)

//     }


//   render() {
//     return (
//       <div>Child

//         <h1>{this.props.name}</h1>
//         <h1>age : {this.props.age}</h1>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'

export default class Child extends Component {
    // senddata=()=>{
    //     this.props.getdatafromchild("vikas chaudhary")
        
    // }
  render() {
//    function senddata(){
//     this.props.getdatafromchild("vikas chaudhary")
//    }

const senddata=()=>{
    this.props.getdatafromchild("vikas chaudhary")
}
  
    return (
        <div>
             <button onClick={senddata}>click me to senddata</button>
             <div>Child</div>

        </div>
       
    )
  }
}

