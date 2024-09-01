// Cartslice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  carts: [],
};

const cartSlice = createSlice({
  name: "cart", // Name should match the key in the store
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.carts.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.carts.push({ ...item, quantity: 1 });
      }
    },
    removecart: (state, action) => {
      const data = state.carts.filter((d) => d.id !== action.payload);
      state.carts = data;
    },
    decrementitems: (state, action) => {
      const item = action.payload;
      const existingItemdec = state.carts.find((cartItem) => cartItem.id === item.id);

      if (existingItemdec.quantity > 1) {
        existingItemdec.quantity -= 1;
      } else {
        state.carts = state.carts.filter((ite) => ite.id !== item.id);
      }
    }
  },
});

export const { addToCart, removecart, decrementitems } = cartSlice.actions;
export default cartSlice.reducer;
