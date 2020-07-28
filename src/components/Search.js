import React, { useState } from "react";
import getRecipes from '../requests/getRecipes.js';
import "../styles/inputForm.css";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
   
    event.preventDefault(); // stops browser reloading
    setSearchResults(await getRecipes(value));
  };

  return (
    <form type="text" className="input-form" onSubmit={handleSubmit}>
      <fieldset>
        <input
          id="search"
          name="recipeName"
          type="text"
          placeholder="Enter ingredients"
          onChange={(e)=>setValue(e.target.value)}
        />
        <button type="submit" className="submit">
          Go!
        </button>
      </fieldset>
    </form>
  );
};
export default Search;
//  <i className="fa fa-search" aria-hidden="true" />
