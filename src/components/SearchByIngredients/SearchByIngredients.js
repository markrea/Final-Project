import React, { useState } from "react";
import Search from "./Search";
import SearchResultsCard from "./SearchResultsCard";

import "../../styles/SearchByIngredients.css";

const SearchByIngredients = () => {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div className="SearchByIngredients">
      <div className="TitleText">
        <h2>Search By Ingredients</h2>
      </div>
      <div className="FormText">
        <h6>Enter your ingredients below to see what you can make!</h6>

        <Search setSearchResults={setSearchResults} />
        <SearchResultsCard searchResults={searchResults} />
      </div>
    </div>
  );
};
export default SearchByIngredients;
