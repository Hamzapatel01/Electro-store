// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cartslice"; // Adjust the path if necessary

const store = configureStore({
  reducer: {
    cart: cartReducer, // Key should be 'cart' as used in `useSelector`
  },
});

export default store;
