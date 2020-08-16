import React, { useState } from "react";
import "../../styles/Search.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";

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
        <Select
          isMulti
          autoFocus
          name="colors"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Select intolerances"
          onChange={setIntolerances}
        />
      </fieldset>
    </form>
  );
};

export default SearchForm;
