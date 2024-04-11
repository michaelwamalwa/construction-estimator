import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      return response?.data;
    } catch (error) {}
  }
);
const productsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state, action) => {
        //imme
        state.status = "pending";
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        //imme
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(productsFetch.rejected, (state, action) => {
        //imme 
        state.status = "rejected";
      });
  },
});

export default productsSlice.reducer;
