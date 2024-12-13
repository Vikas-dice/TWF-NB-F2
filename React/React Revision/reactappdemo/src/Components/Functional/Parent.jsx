import Child from "./Child";



function Parent(){
    return(
        <div>
            <label>UserName</label>
            <input type="text" />
            <Child/>
        </div>
    )
}

export default Parent;