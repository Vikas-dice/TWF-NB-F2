import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/counterslice"
import category from "../features/categoryslice"
import user from "../features/userSlice"
import products from "../features/productSlice"
import cart from "../features/cartslice"
export const store= configureStore({
    reducer: {
        counter,
        category,
        user,
        products,
        cart
    }
})
