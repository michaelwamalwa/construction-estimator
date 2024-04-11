import React from "react";
import ReactDOM from "react-dom/client";
//import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";
import App from "./App";
import productReducer, { productsFetch } from "./features/productSlice";
import {productsApi} from "./features/productsApi";
import cartReducer, { getTotals } from "./features/cartSlice";


const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware)
    
  
});
store.dispatch(productsFetch());
store.dispatch(getTotals());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
