import React from "react";
import "../styles/inputForm.css";

const InputForm = ({ getRecipe }) => {
  return (
    <form type="text" className="input-form" onSubmit={getRecipe}>
      <fieldset>
        <input
          id="search"
          name="recipeName"
          type="text"
          placeholder="Enter ingredients"
        />
        <button type="submit" className="submit">
          Go!
        </button>
      </fieldset>
    </form>
  );
};
export default InputForm;
//  <i className="fa fa-search" aria-hidden="true" />
