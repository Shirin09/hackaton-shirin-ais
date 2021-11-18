import React from "react";
import { useAuth } from "../../context/AuthContext";
import Home from "../Home/Home";
import Login from "./Login";

const Auth = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default Auth;
