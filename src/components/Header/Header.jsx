import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <nav className="navbar">
      <NavLink to="/" activeClassName="active"><h3>My Shop</h3></NavLink>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products" activeClassName="active">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeClassName="active">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
