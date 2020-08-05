import React, { useState } from "react";
/* import Search from "./Search";
import SearchResultsCard from "./SearchResultsCard";
import SearchForm from "./SearchForm"; */
import SearchRecipeForm from "./SearchRecipeForm";
import "../../styles/SearchByIngredients.css";

const SearchByRecipe = () => {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div className="SearchByRecipe">
      <div className="SearchByRecipeText">
        <h4>Search By Recipe</h4>
        <h6>Enter a recipe to search</h6>
      </div>
      <div data-testid="searchRecipeFormDiv">
        <SearchRecipeForm />
        {/*  <SearchResultsCard searchResults={searchResults} /> */}
      </div>
    </div>
  );
};
export default SearchByRecipe;
