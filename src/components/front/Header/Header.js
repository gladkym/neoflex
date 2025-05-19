import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ cartItems }) => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            QPICK
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/" className="fav">
              <img
                src={process.env.PUBLIC_URL + "/pics/fav-icon.svg"}
                alt="Избранное"
              />
            </Link>
          </li>
          <li>
            <Link to="/cart" className="cart-icon">
              <img
                src={process.env.PUBLIC_URL + "/pics/cart-icon.svg"}
                alt="Корзина"
              />
              {cartItems.length > 0 && (
                <span className="cart-length">{cartItems.length}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;