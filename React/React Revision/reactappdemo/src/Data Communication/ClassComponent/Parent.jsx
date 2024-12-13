import React, { Component } from 'react'
import Child from '../ClassComponent/Child'

export default class Parent extends Component {
  render() {
    let name="vikas"
    let age=27;
    return (
      <div>Parent

        <Child naam={name} umar={age}/>
      </div>
    )
  }
}
