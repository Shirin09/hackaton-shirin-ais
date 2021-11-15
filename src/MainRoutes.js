import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AuthContextProvider from "./context/AuthContext";
import ProductsContextProvider from "./context/ProductContext";

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
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </ProductsContextProvider>
  );
};

export default MainRoutes;
