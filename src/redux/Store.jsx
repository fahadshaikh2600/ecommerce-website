import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./ProductsSlice";
import CartReducer from "./CartSlice";
import WishlistReducer from "./WishlistSlice";

const Store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: CartReducer,
    wishlist: WishlistReducer,
  },
});

export default Store;
