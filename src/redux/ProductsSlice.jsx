import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    filtered: [],
    loading: false,
    category: "All",
    searchTerm: "",
    selectedProduct: null,
  },
  reducers: {
    filterByCategory: (state, action) => {
      state.category = action.payload;
      state.filtered = state.items
        .filter((p) =>
          action.payload === "All"
            ? true
            : p.category.toLowerCase() === action.payload.toLowerCase()
        )
        .filter((p) =>
          p.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filtered = state.items.filter(
        (p) =>
          (state.category === "All"
            ? true
            : p.category.toLowerCase() === state.category.toLowerCase()) &&
          p.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.filtered = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {
  filterByCategory,
  setSearchTerm,
  selectProduct,
  clearSelectedProduct,
} = ProductsSlice.actions;

export default ProductsSlice.reducer;
