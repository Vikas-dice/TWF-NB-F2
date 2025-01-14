import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/counterslice"
export const store= configureStore({
    reducer: {
        counter
    }
})
