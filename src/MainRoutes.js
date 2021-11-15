import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AuthContextProvider from "./context/AuthContext";


const MainRoutes = () => {
  return (
    <AuthContextProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />

      </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  );
};

export default MainRoutes;
