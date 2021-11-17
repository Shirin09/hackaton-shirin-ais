import React, { useContext, useState } from "react";
import Logo from "../../assets/img/logo.png";
import CartIcon from "../../assets/img/cart-icon.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { authContext, useAuth } from "../../context/AuthContext";
import history from "../../helpers/history";
import { productsContext } from "../../context/ProductContext";

const Header = () => {
  const [cardValue, setCardValue ] = useState();

  //history
  const {getPaintings} =useContext(productsContext)

  const {
    handleLogout,
    user: { email },
    admin,
  } = useAuth();
  console.log({ email });
  console.log(admin);

  function handleValue(e){
    const search = new URLSearchParams(history.location.params)
    search.set("q", e.target.value)
    history.push(`${history.location.pathname}?${search.toString()}`)
    setCardValue(e.target.value)
    getPaintings(search.toString())
  }

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
            {admin ? (
              <Link to="/add">
                <li>Add Painting</li>
              </Link>
            ) : null}
            <li>
              <img src={CartIcon} alt="cart" />
            </li>
            <li>
              <input onChange={handleValue} type="text" placeholder="search..." />
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
