import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/counterslice"
import category from "../features/categoryslice"
export const store= configureStore({
    reducer: {
        counter,
        category
    }
})
