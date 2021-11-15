import React from "react";
import Logo from "../../assets/img/logo.png";
import CartIcon from "../../assets/img/cart-icon.png";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
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
            <li>Home</li>
            <li>Artists</li>
            <li>
              <img src={CartIcon} alt="cart" />
            </li>
            <li>
              <input type="text" placeholder="search..." />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
