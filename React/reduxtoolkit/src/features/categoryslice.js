import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCategory=createAsyncThunk("category/fetchCategory",async()=>{
       const res = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      console.log(res)
      return res.data;
}
)
const category= createSlice({
    name:'category',
    initialState:{
        category: [],
        loading:null,
        error:null
    },
    reducers:{
        get:(state,action) => {state.category=action.payload},
      

    },
    extraReducers:(builder)=>{
 builder.addCase(fetchCategory.pending,(state)=>{
    state.loading="loading"
 });
 builder.addCase(fetchCategory.fulfilled,(state,action)=>{
    state.category=action.payload
    state.loading=null
    state.error=null
 });
 builder.addCase(fetchCategory.rejected,(state,action)=>{
    state.error=action.error.message
    state.loading=null
 });
    }
})

export const {get} = category.actions

export default category.reducer