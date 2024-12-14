import React, { Children, Component } from 'react'
import Child2 from './Child2'

export default class Parent2 extends Component {
  render() {
    return (
      <div>
        hey parent 

      <Child2>
        <Children/>

      
      </Child2>
      </div>
    )
  }
}
