import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";


const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <h1 className="appName">Fridge Tracker</h1>
      </div>
      <Menu disableAutoFocus isOpen={false} right>
        <Link to="/" className="menu-item">
          <li>Home</li>
          <hr />
        </Link>
        <Link to="/recipe-title" className="menu-item">
          <li>Search by recipe</li>
          <hr />
        </Link>
        <Link to="/ingredient" className="menu-item">
          <li>Search by ingredients</li>
          <hr />

        </Link>
        <Link to="/random-recipe" className="menu-item">
          <li>Get random recipe</li>
          <hr />

        </Link>
      </Menu>
    </div>
  );
};

export default NavBar;
