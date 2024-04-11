import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login.js";
import Navigate from "./components/Navigate.js";
import Register from "./components/Register.js";
import Dashboard from "./dashboard/Dashboard.js";
import UserDashboard from "./dashboard//UserDashboard.js";
import ManagerDashboard from "./dashboard/ManagerDashboard.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Contact from "./components/Contact.js";
import Team from "./components/Team.js";
import Cart from "./components/Cart.js";
import Store from "./components/Store.js";
import Products from "./components/Products.js";
import Checkout from "./components/Checkout.js";
import Notfound from "./components/Notfound.js";
import Payment from "./components/Payment.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Navigate />} />
          <Route path="userdash" element={<UserDashboard />} />
          <Route path="manager" element={<ManagerDashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/store" element={<Store />}>
            {/* Nested routes */}
            <Route path="cart" element={<Cart />} />
            <Route path="not-found" element={<Notfound />} />
            <Route path="products" element={<Products />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
