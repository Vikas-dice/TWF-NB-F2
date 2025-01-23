import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchproducts=createAsyncThunk("category/fetchproducts",async()=>{
       const res = await axios.get(
        "https://fakestoreapi.com/products"
      );
      console.log(res)
      return res.data;
}
)
const products= createSlice({
    name:'products',
    initialState:{
        products: [],
        loading:null,
        error:null
    },
    reducers:{
        get:(state,action) => {state.products=action.payload},
      

    },
    extraReducers:(builder)=>{
 builder.addCase(fetchproducts.pending,(state)=>{
    state.loading="loading"
 });
 builder.addCase(fetchproducts.fulfilled,(state,action)=>{
    state.products=action.payload
    state.loading=null
    state.error=null
 });
 builder.addCase(fetchproducts.rejected,(state,action)=>{
    state.error=action.error.message
    state.loading=null
 });
    }
})

export const {get} = products.actions

export default products.reducer