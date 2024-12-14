

import React, { Component } from 'react'

export default class Child1 extends Component {

     sendData=()=>{
        this.props.recieveData("vikas")
        

    }
  render() {
 
    return (
      <div>

        <button onClick={this.sendData}>send data to parent</button>
      </div>
    )
  }
}
