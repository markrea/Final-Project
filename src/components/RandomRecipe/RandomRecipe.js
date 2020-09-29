import React, { useState } from "react";
import RandomSearch from "./RandomSearch";
import SearchResultsCard from "./SearchResultsCard";
import "../../styles/SearchByIngredients.css";
import "../../styles/RandomRecipe.css";

const RandomRecipe = () => {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div className="SearchByIngredients" data-testid="SearchByIngredients">
      <div className="SearchByIngredientsText">
        <h2>Random Recipe</h2>
        <div className="FormText">
          <div className="mainText">
            <h4>Can&apos;t decide what to make? See a random recipe!</h4>
          </div>
        </div>

        <RandomSearch setSearchResults={setSearchResults} />
        <div className="randomResults">
          <SearchResultsCard searchResults={searchResults} />
        </div>
      </div>
    </div>
  );
};

export default RandomRecipe;
