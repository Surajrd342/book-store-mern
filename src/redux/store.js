import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/feature/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});