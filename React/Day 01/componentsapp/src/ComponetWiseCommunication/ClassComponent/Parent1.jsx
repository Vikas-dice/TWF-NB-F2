import React, { Component } from 'react'
import Child1 from '../ClassComponent/Child1'

export default class Parent1 extends Component {
    getdata(value){
        console.log(value)

    }
  render() {
    return (
      <div>Parent1

        <Child1 getdata={this.getdata}/>
      </div>
    )
  }
}
