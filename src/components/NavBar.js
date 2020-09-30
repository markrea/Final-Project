import React, { useState } from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navBar" data-testid="navBar">
      <div className="logo" data-testid="logo">
        <h1 className="appName">Fridge Tracker</h1>
      </div>

      <Menu
        disableAutoFocus
        isOpen={open}
        onStateChange={({ isOpen }) => setOpen(isOpen)}
        right
      >
        <li className="navbar-links-item">
          <Link to="/" className="menu-item" />
        </li>
        <hr />
        <li className="navbar-links-item">
          <Link
            to="/search-by-ingredients"
            className="menu-item"
            onClick={setOpen}
          >
            Search by ingredients
          </Link>
        </li>
        <hr />
        <li className="navbar-links-item">
          <Link to="/search-by-recipe" className="menu-item" onClick={setOpen}>
            Search by recipe
          </Link>
        </li>
        <hr />
        <li className="navbar-links-item">
          <Link to="/get-random-recipe" className="menu-item" onClick={setOpen}>
            Get random recipe
          </Link>
        </li>
        <hr />
      </Menu>
    </div>
  );
};

export default NavBar;
