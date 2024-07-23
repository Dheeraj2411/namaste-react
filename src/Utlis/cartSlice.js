import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    //mutating the state over here
    addToCart: (state, action) => {
      state.items.push(action.payload); //[inside add after an previous items]
    },
    removeToCart: (state, action) => {
      state.items.pop(); //last on remove
    },
    deleteToCart: (state, action) => {
      state.items.length = 0; // []
    },
  },
});

export const { addToCart, removeToCart, deleteToCart } = cartSlice.actions;

export default cartSlice.reducer;
