import React, { Component } from 'react'
import Child2 from './Child2'
import Children from './Children'

export default class Parent2 extends Component {
  render() {
    return (
      <div>Parent2
        <Child2>
          <Children/>
         


        </Child2>
      </div>
    )
  }
}
