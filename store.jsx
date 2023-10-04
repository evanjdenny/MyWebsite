import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/account/accountSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
    reducer: {
        account: accountReducer,
        cart: cartReducer
    }
})