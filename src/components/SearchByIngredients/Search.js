import React, { useState } from "react";
import getRecipes from "../../requests/getRecipes";
import "../../styles/Search.css";
import SearchForm from "./SearchForm";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState("");
  const [diet, setDiet] = useState("");
  const [intolerances, setIntolerances] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault(); // stops browser reloading
    setSearchResults(await getRecipes(value, diet, intolerances));
  };

  const handleChange = async (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (e) => {
    setDiet(e.target.value);
  };

  return (
    <div className="searchFormDiv" data-testid="searchFormDiv">
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleSelect={handleSelect}
        query={value}
        diet={diet}
        setIntolerances={setIntolerances}
      />
    </div>
  );
};
export default Search;
//  <i className="fa fa-search" aria-hidden="true" />
