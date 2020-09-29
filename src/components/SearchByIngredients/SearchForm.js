import React from "react";
import "../../styles/Search.css";
import Select from "react-select";
import Proptypes from "prop-types";

const SearchForm = ({
  handleSubmit,
  handleChange,
  handleSelect,
  query,
  diet,
  setIntolerances,
}) => {
  const options = [
    { value: "dairy", label: "Dairy" },
    { value: "egg", label: "Egg" },
    { value: "gluten", label: "Gluten" },
    { value: "peanut", label: "Peanut" },
    { value: "seafood", label: "Seafood" },
    { value: "sesame", label: "Sesame" },
    { value: "shellfish", label: "Shellfish" },
    { value: "soy", label: "Soy" },
    { value: "treenut", label: "Tree Nut" },
  ];

  return (
    <form
      type="text"
      className="input-form"
      onSubmit={handleSubmit}
      data-testid="searchForm"
    >
      <fieldset>
        <select
          id="diet"
          name="diet"
          size="1"
          value={diet}
          placeholder="Select Diet"
          onChange={handleSelect}
        >
          <option defaultValue="null">Select Diet</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="glutenfree">Gluten Free</option>
          <option value="pescatarian">Pescastarian</option>
        </select>
        <Select
          isMulti
          autoFocus
          name="colors"
          options={options}
          className="select-container"
          classNamePrefix="select"
          placeholder="Select intolerances"
          onChange={setIntolerances}
          theme={(theme) => ({
            ...theme,
            borderRadius: "10px",
            backgroundColor: "rgba(196, 208, 162, 1)",
          })}
        />
        <br />

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
      </fieldset>
    </form>
  );
};

SearchForm.propTypes = {
  handleSubmit: Proptypes.func.isRequired,
  handleChange: Proptypes.func.isRequired,
  handleSelect: Proptypes.func.isRequired,
  query: Proptypes.string.isRequired,
  diet: Proptypes.string.isRequired,
  setIntolerances: Proptypes.string.isRequired,
};

export default SearchForm;
