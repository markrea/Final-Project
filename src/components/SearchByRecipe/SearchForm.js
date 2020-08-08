import React from "react";
import "../../styles/Search.css";

const SearchForm = ({
  handleSubmit,
  handleChange,
  handleSelect,
  query,
  diet,
}) => {
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
        <br />
        <label htmlFor="diet">Diet</label>
        <select
          id="diet"
          name="diet"
          size="1"
          value={diet}
          onChange={handleSelect}
        >
          <option defaultValue="null">None</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="glutenfree">Gluten Free</option>
          <option vaule="pescatarian">Pescastarian</option>
        </select>
      </fieldset>
    </form>
  );
};

export default SearchForm;
