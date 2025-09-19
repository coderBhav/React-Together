import React from "react";
import { Logo } from "../utils/Logo";
import { Link } from "react-router-dom";
import Placeholder from "./Placeholder";
const Header = () => {
  const type="text";
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-img" src={Logo} alt="Bookstore Logo"/>
        <h1 className="heading">RefuGrow</h1>
      </div>
      
      <div className="search-container">
        <input className="Search" type={type} placeholder={Placeholder({type})} value=""/>
        <button className="search-btn">Search</button>
      </div>


        <ul className="links">
          <Link to="/Home"><li>Home</li></Link>
          <Link to="/Shop"><li>Shop</li></Link>
          <Link to="/New"><li>New Arrivals</li></Link>
          <Link to="/BestSeller"><li>Best Sellers</li></Link>
          <Link to="/About"><li>About Us</li></Link>
          <Link to="/Contact"><li>Contact</li></Link>
        </ul>
    </div>
  );
};

export default Header;
