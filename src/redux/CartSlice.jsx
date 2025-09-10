import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateCartQty: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty = Math.max(1, action.payload.qty);
      }
    },
    clearCart: () => [],
  },
});

export const { addToCart, removeFromCart, updateCartQty, clearCart } =
  CartSlice.actions;
export default CartSlice.reducer;
