import { Component } from "react";


export default class App extends Component{

    constructor(){
        super()


        this.state={
            counter:10
        }



    }

     increment=()=>{
        // this.setState({
       
        //     counter:this.state.counter+1
        // })

        this.setState((prevState)=>(
            {
                ...prevState,
                counter:prevState.counter+1
            }
        ))
        this.setState((prevState)=>(
            {
                ...prevState, //11
                counter:prevState.counter+2
            }
        ))
        this.setState((prevState)=>(
            {
                ...prevState, //13
                counter:prevState.counter+3
            }
        ))
        this.setState((prevState)=>(
            {
                ...prevState,//16
                counter:prevState.counter+4
            }
        ))




    
     }
    

    render(){
        return(
            <div>
                <h1>Counter : {this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button>
           
            </div>
        )
    }
}