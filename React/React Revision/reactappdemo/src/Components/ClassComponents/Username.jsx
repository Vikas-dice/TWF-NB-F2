import { Component } from "react";
import Password from "./Password";
import Submit from "./Submit";



class Username extends Component{

    render(){
        return(
            <div>
                <label>Username</label>
                <input type="text" />
                <Password/>
                <Submit/>
            </div>
        )
    }



}

export default Username;