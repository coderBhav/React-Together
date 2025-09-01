import React from "react";
import { Logo } from "../utils/Logo";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-img" src={Logo} alt="Bookstore Logo"/>
        <h1 className="heading">Book Store</h1>
      </div>
      <div className="search-container">
        <input className="Search" type="text" placeholder="Search for books"/>
        <button className="search-btn">Search</button>
      </div>
        <ul className="links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">New Arrivals</a></li>
          <li><a href="#">Best Sellers</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
    </div>
  );
};

export default Header;
