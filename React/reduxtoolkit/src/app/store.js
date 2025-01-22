import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/counterslice"
import category from "../features/categoryslice"
import user from "../features/userSlice"
export const store= configureStore({
    reducer: {
        counter,
        category,
        user
    }
})
