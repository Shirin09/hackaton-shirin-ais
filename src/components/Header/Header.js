import React from "react";
import Logo from "../../assets/img/logo.png";
import CartIcon from "../../assets/img/cart-icon.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  console.log({ email });

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="navbar__logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <ul className="navbar__right">
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>Artists</li>
            <Link to="/add">
              <li>Add Painting</li>
            </Link>
            <li>
              <img src={CartIcon} alt="cart" />
            </li>
            <li>
              <input type="text" placeholder="search..." />
            </li>
            <li>
              {email ? (
                <Link to="/auth">
                  <button onClick={handleLogout}>Logout</button>
                </Link>
              ) : null}

              {email ? null : (
                <Link to="/auth">
                  <button>Login</button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
