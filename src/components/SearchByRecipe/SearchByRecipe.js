import React, { useState } from "react";
import Search from "./Search";
import SearchResultsCard from "./SearchResultsCard";

import "../../styles/SearchByIngredients.css";

const SearchByRecipe = () => {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div className="SearchByIngredients">
      <div className="SearchByIngredientsText">
        <h2>Search By Recipe</h2>
      </div>
      <div className="FormText">
        <div className="mainText">
          <h4>Enter a recipe to get started.</h4>
        </div>

        <Search setSearchResults={setSearchResults} />
        <SearchResultsCard searchResults={searchResults} />
      </div>
    </div>
  );
};
export default SearchByRecipe;
