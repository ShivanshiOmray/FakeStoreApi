import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addProduct } = counterSlice.actions;

export default counterSlice.reducer;
