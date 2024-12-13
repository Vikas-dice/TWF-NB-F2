import React, { Component } from 'react'

export default class Child extends Component {
    componentDidMount(){
        console.log(this.props.umar)
        console.log(this.props.naam)

    }
   
  render() {
   


    return (
      <div>Child

        <h1>{this.props.umar}</h1>
        <h1>{this.props.naam}</h1>
      </div>
    )
  }
}


