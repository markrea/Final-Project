import React, { useState } from "react";
// import Search from "../SearchByIngredients/Search";
import RandomSearch from "./RandomSearch";
import SearchResultsCard from "../SearchByIngredients/SearchResultsCard";
import "../../styles/SearchByIngredients.css";
import "../../styles/RandomRecipe.css";

const RandomRecipe = () => {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div className="SearchByIngredients">
      <div className="SearchByIngredientsText">
        <h2>Random Recipe</h2>
        <div className="FormText">
          <h6>Click the button to get a random recipe!</h6>
        </div>

        <RandomSearch setSearchResults={setSearchResults} />
        <SearchResultsCard className="randomResults" searchResults={searchResults} />
      </div>
    </div>
  );
};

export default RandomRecipe;
