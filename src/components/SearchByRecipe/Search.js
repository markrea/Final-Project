import React, { useState } from "react";
import getRecipes2 from "../../requests/getRecipes2";
import "../../styles/Search.css";
import SearchForm from "./SearchForm";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // stops browser reloading
    setSearchResults(await getRecipes2(value));
  };

  const handleChange = async (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="searchFormDiv" data-testid="searchFormDiv">
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={value}
      />
    </div>
  );
};
export default Search;