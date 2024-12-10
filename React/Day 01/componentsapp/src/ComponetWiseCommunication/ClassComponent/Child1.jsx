import React, { Component } from 'react'

export default class Child1 extends Component {
 senddata(){
        this.props.getdata("vikas chaudhary")
    }
  render() {
    
    return (
        <div>
            <div>Child1</div>
            <button onClick={this.senddata.bind(this)}>send data</button>

        </div>
      
    )
  }
}
