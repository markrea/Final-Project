import React, { useState } from "react";
// import Search from "../SearchByIngredients/Search";
import RandomSearch from "./RandomSearch";
import SearchResultsCard from "../SearchByIngredients/SearchResultsCard";
import "../../styles/SearchByIngredients.css";

const RandomRecipe = () => {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div className="SearchByIngredients">
      <div className="SearchByIngredientsText">
        <h4>Random Recipe</h4>
        <h6>Click the button to get a random recipe!</h6>
      </div>
      <RandomSearch setSearchResults={setSearchResults} />
      <SearchResultsCard searchResults={searchResults} />
    </div>
  );
};

export default RandomRecipe;
