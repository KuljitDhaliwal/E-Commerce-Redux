import { configureStore } from "@reduxjs/toolkit";
import AllProductsReducer from "./Slices/AllProducts"
export const Store = configureStore({
    reducer: {
        products: AllProductsReducer
    }
})