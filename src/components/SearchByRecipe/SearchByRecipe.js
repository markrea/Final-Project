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
      <Search setSearchResults={setSearchResults} />
      <SearchResultsCard searchResults={searchResults} />
    </div>
  );
};
export default SearchByRecipe;

/* import React, { useState } from "react";
/* import Search from "./Search";
import SearchResultsCard from "./SearchResultsCard";
import SearchForm from "./SearchForm"; 
import SearchForm from "../SearchByRecipe/SearchForm";
import SearchResults from "../SearchByRecipe/SearchResults";
import Search from "../SearchByRecipe/Search";
import SearchResultsCard from "../SearchByRecipe/SearchResultsCard";

import "../../styles/SearchByRecipe.css";

const SearchByRecipe = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [value, setValue] = useState("");

  const handleSubmit =(event) => {
    event.preventDefault(); // stops browser reloading
    //console.log(event);
    //setSearchResults(await getRecipes(value));
  };

  const handleChange =  (e) => {
    //setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="SearchByRecipe">
      <div className="SearchByRecipeText">
        <h4>Search By Recipe</h4>
        <h6>Enter a recipe to search</h6>
      </div>
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={value}
      />
      {/*
      <Search setSearchResults={setSearchResults} />
     <SearchResultsCard searchResults={searchResults} /> 
      <div data-testid="searchRecipeFormDiv">
        <SearchRecipeForm />
        {/*  <SearchResultsCard searchResults={searchResults} /> */}
      </div>
    </div>
  );
};
export default SearchByRecipe;
*/
