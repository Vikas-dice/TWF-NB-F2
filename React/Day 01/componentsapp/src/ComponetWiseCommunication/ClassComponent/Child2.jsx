import React, { Children,Component } from 'react'

export default class Child2 extends Component {
  render() {
    return (
      <div>Child2
       {
        this.props.children
       }

        
      </div>
    )
  }
}
