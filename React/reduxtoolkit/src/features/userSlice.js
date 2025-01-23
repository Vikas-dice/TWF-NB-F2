import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUser=createAsyncThunk("user/fetchUser",async()=>{
       const res = await axios.get(
        "https://fakestoreapi.com/users"
      );
      console.log(res.data)
      return res.data;
}
)
const user= createSlice({
    name:'user',
    initialState:{
        user: [],
        loading:null,
        error:null,
        currentEmail:'',
        currentPassword:'',
        isLogin:"false",
        errorMessage:null
    },
    reducers:{
        setEmail:(state,action) => {state.currentEmail=action.payload},
        setPassword:(state,action) => {state.currentPassword=action.payload},
        logout:(state)=>{state.isLogin="false"}
       
    },
    extraReducers:(builder)=>{
 builder.addCase(fetchUser.pending,(state)=>{
    state.loading="loading"
 });
 builder.addCase(fetchUser.fulfilled,(state,action)=>{
    // let allUsers=action.payload
    // // let myUser=allUsers.filter((item)=> {return item.email==state.currentEmail && item.password== state.currentPassword})
    // let myuser=[]
    // for(let i=0;i<allUsers.length;i++){
    //     console.log(i.email)
    // }
    // console.log(allUsers, state.currentEmail,state.currentPassword)
    // if(myuser.length){
    //     state.isLogin="true";
    // }
    console.log(action.payload, "in builder.addcase fulfilled")
    console.log(state.currentEmail,state.currentPassword)
    for(let i=0;i<action.payload.length;i++){
        if(action.payload[i].email == state.currentEmail && action.payload[i].password == state.currentPassword ){
           state.isLogin="true" 
        //    console.log("true hogya")
        }
        // console.log(action.payload[i].email===state.currentEmail,action.payload[i])
    }

    state.loading=null
    state.error=null
    if(state.isLogin==="false"){
        state.error="user not found"
    }
 });
 builder.addCase(fetchUser.rejected,(state,action)=>{
    state.error="error calling api"
    state.loading=null
 });
    }
})

export const {setEmail,setPassword, logout} = user.actions

export default user.reducer