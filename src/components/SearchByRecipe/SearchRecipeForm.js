import React, { useState } from "react";
import "../../styles/Search.css";

const SearchRecipeForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // stops browser reloading
  };

  const handleChange = async (e) => {
    setValue(e.target.value);
  };

  return (
    <form
      type="text"
      className="input-form"
      onSubmit={handleSubmit}
      data-testid="searchRecipeForm"
    >
      <fieldset>
        <input
          id="search"
          name="recipeName"
          type="text"
          placeholder="Enter a recipe"
          onChange={handleChange}
          // value={query}
          data-testid="input-id"
        />
        <button type="submit" className="submit">
          Go!
        </button>
      </fieldset>
    </form>
  );
};

export default SearchRecipeForm;
