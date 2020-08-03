import React from "react";
import "../../styles/Search.css";

const SearchForm = ({ handleSubmit, handleChange, query }) => {
  return (
    <form
      type="text"
      className="input-form"
      onSubmit={handleSubmit}
      data-testid="searchForm"
    >
      <fieldset>
        <input
          id="search"
          name="recipeName"
          type="text"
          placeholder="Enter ingredients"
          onChange={handleChange}
          value={query}
          data-testid="input-id"
        />
        <button type="submit" className="submit">
          Go!
        </button>
      </fieldset>
    </form>
  );
};

export default SearchForm;
