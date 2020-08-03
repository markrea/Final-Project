import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const NavBar = () => {
  return (
    <div className="navBar" data-testid="navBar">
      <div className="logo">
        <h1 className="appName">Fridge Tracker</h1>
      </div>

      <Menu disableAutoFocus isOpen={false} right>
        <li className="navbar-links-item">
          <Link to="/" className="menu-item">
            Home
          </Link>
        </li>
        <hr />
        <li className="navbar-links-item">
          <Link to="/search-by-ingredients" className="menu-item">
            Search by ingredients
          </Link>
        </li>
        <hr />
        <li className="navbar-links-item">
          <Link to="/search-by-recipe" className="menu-item">
            Search by recipe
          </Link>
        </li>
        <hr />
        <li className="navbar-links-item">
          <Link to="/get-random-recipe" className="menu-item">
            Get random recipe
          </Link>
        </li>
        <hr />
      </Menu>

    </div>
  );
};

export default NavBar;
