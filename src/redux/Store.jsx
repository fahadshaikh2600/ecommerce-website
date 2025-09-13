import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import WishlistReducer from "./WishlistSlice";
import productsReducer from "./ProductsSlice";
import toastReducer from "./ToastSlice";

import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: CartReducer,
    wishlist: WishlistReducer,
    toast: toastReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
    wishlist: store.getState().wishlist,
  });
});

export default store;
