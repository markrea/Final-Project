import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <Link to="/">
        <li>HomePage</li>
      </Link>
      <Link to="/recipe-title">
        <li>Search by recipe</li>
      </Link>
      <Link to="/ingredient">
        <li>Search by ingredients</li>
      </Link>
      <Link to="/random-recipe">
        <li>Get random recipe</li>
      </Link>
    </div>
  );
};

export default SideBar;
