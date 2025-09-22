import React, { useState } from "react";
import { Logo } from "../utils/Logo";
import { Link } from "react-router-dom";

import Search from "./Search";

const Header = () => {
 

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-img" src={Logo} alt="Bookstore Logo" />
        <h1 className="heading">RefuGrow</h1>
      </div>

      <Search/>

      <ul className="links">
        <Link to="/Home"><li>Home</li></Link>
        <Link to="/Shop"><li>Shop</li></Link>
        <Link to="/New"><li>Categories</li></Link>
        <Link to="/BestSeller"><li>Best Sellers</li></Link>
        <Link to="/About"><li>About Us</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
      </ul>
    </div>
  );
};

export default Header;
