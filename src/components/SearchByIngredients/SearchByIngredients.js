import React, { useState } from "react";
import Search from "./Search";
import SearchResultsCard from "./SearchResultsCard";

import "../../styles/SearchByIngredients.css";
import "../../styles/HomePage.css";

const SearchByIngredients = () => {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div className="SearchByIngredients">
      <div className="SearchByIngredientsText">
        <h2>Search By Ingredients</h2>
      </div>
      <div className="FormText">
        <div className="mainText">
          <h4>Enter your ingredients below to see what you can make.</h4>
        </div>

        <Search setSearchResults={setSearchResults} />
        <br />
        <br />
        <br />
        <SearchResultsCard searchResults={searchResults} />
      </div>
    </div>
  );
};
export default SearchByIngredients;
