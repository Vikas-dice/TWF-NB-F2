
import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        console.log("cons called - sabse phle m hi chalta hu and M PURE LIFE CYCLE M SIRF EK BAAR HI CHALUNGA ")

        this.state={
            counter:0
        }



    }

    increment=()=>{
        this.setState({
            counter : this.state.counter+1
        })
    }

    componentDidMount(){
        console.log("comp did mount called - m bhi ek baar hi chalta hu ")
    }

    componentWillUnmount(){
        console.log("comp unmount called - m bhi ek baar hi chalta hu")
    }

    shouldComponentUpdate(nextState){
        
        // console.log(nextState)
        console.log("mere andrr kuch change hue h ab m chlnga , or m dekho baar baar chal rha hu")
        
        if(this.state.counter!=nextState.counter){
            return true;
        }else{
            return false;
        }

        
    }

    getSnapshotBeforeUpdate(){
        console.log("getsnap shot called")

        return this.state;

    }












    ``
    
    
    
    
    
    
    
    
    
    
    
    componentDidUpdate(){
        console.log("comp did updated called")
    }






  render() {
    return (
      <div>

        <h1>Counter : {this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
