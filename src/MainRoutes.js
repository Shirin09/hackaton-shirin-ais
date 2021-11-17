import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AdminPanel/AddProduct/AddProduct";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Products/ProductDetails";
import AuthContextProvider from "./context/AuthContext";
import ProductsContextProvider from "./context/ProductContext";
import EditProducts from "./components/AdminPanel/EditProducts/EditProducts"
import Cart from "./components/Cart/Cart";

const MainRoutes = () => {
  return (
    <ProductsContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/edit" element={<EditProducts />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </ProductsContextProvider>
  );
};

export default MainRoutes;
