import React, { useState } from "react";
import Search from "./Search";
import SearchResultsCard from "./SearchResultsCard";

import "../../styles/SearchByIngredients.css";

const SearchByRecipe = () => {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div className="SearchByIngredients">
      <div className="TitleText">
        <h4>Search By Recipe</h4>
        <h6>Enter a recipe to get started!</h6>
      </div>
      <div data-testid="searchRecipeFormDiv">
        <Search setSearchResults={setSearchResults} />
        <SearchResultsCard searchResults={searchResults} />
      </div>
    </div>
  );
};
export default SearchByRecipe;
