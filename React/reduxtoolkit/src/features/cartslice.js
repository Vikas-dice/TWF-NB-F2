import { createSlice } from "@reduxjs/toolkit";

const cart= createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
     
        addtocart:(state,action)=>{state.cart.push(action.payload)}

    }
})

export const {addtocart} = cart.actions

export default cart.reducer