import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  products: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: ProductState = {
  products: [],
  status: "idle",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
