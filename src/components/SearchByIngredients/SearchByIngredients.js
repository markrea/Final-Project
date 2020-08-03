import React, { useState } from "react";
import Search from "./Search";
import SearchResultsCard from "./SearchResultsCard";

import "../../styles/SearchByIngredients.css";

const SearchByIngredients = () => {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div className="SearchByIngredients">
      <div className="SearchByIngredientsText">
        <h4>Search By Ingredients</h4>
        <h6>Enter your ingredients below to see what you can make!</h6>
      </div>
      <Search setSearchResults={setSearchResults} />
      <SearchResultsCard searchResults={searchResults} />
    </div>
  );
};
export default SearchByIngredients;
