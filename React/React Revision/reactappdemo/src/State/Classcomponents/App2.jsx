const { Component } = require("react");


class App2 extends Component{

    constructor(){
        super()

       this.state={
        count:100
       }



    }
    increment=()=>{

        // this.setState({
        //     count:this.state.count+1
        // })

        this.setState((prevstate)=>({
            ...prevstate,

            count:prevstate.count+1 //101
        }))
        this.setState((prevstate)=>({
            ...prevstate, //101

            count:prevstate.count+2 //103
        }))
        this.setState((prevstate)=>({
            ...prevstate, //103

            count:prevstate.count+3 //106
        }))
        this.setState((prevstate)=>({
            ...prevstate,//106

            count:prevstate.count+4//110
        }))


   
        // console.log(this.state.count++);
        
    }

    render(){

        return(
            <div>

               <h1>Counter : {this.state.count}</h1>
               <button onClick={this.increment}>Increment</button>
            </div>
        )
     
    }

}

export default App2;

