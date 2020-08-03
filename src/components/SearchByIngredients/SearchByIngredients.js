import React, { useState } from "react";
import Search from "./Search";
import SearchResultsCard from "./SearchResultsCard";
import SearchForm from "./SearchForm";

const SearchByIngredients = () => {
  const [searchResults, setSearchResults] = useState(null);

  return (
    <div className="SearchByIngredients">
      <h4>Search By Ingredients</h4>

      <Search setSearchResults={setSearchResults} />
      <SearchResultsCard searchResults={searchResults} />
    </div>
  );
};
export default SearchByIngredients;
