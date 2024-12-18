

import React, { Component } from 'react'

export default class App2 extends Component {


    constructor(){
        super()

        console.log("cons called - pure lifecyle m m sabse phle and ek baar hi chalunga ")


        this.state={
            count:10
        }
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    componentDidMount(){
        console.log("component did mount called - m b hi ek baar hi chalunga ")
    }

    componentWillUnmount(){
        console.log("comp will unmount called - m bhi ek baar hi chalta hu ")
    }

    // shouldComponentUpdate(nextstate){

    //     //tabhi chalge ajab yha se tum kuch boolean true/false return krogr
       
    //     console.log("mext state -",nextstate)

    //     if(this.state.count!=nextstate.count){
    //         return true;

    //     }else{
    //         return false;
    //     }



    
      

       


    // }

    getSnapshotBeforeUpdate(){
        console.log("get snapshot before updated called")

        return this.state;


    }

    componentDidUpdate(prevstate,prevprops){
        console.log("componet did updated called")
        console.log(prevprops,prevstate)
    }
  render() {
    return (
      <div>
       <h1>counter : {this.state.count}</h1>
       <button onClick={this.increment}>increment</button>
      </div>
    )
  }
}
