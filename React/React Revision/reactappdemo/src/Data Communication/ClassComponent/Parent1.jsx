import { Component } from "react";
import Child1 from "./Child1";


export default class Parent1 extends Component {
    recieveData=(maal)=>{
        console.log("coming data from child-",maal)

    }


    render(){
        return(

            <div>

                <Child1 recieveData={this.recieveData}/>
               
            </div>
        )
    }
}