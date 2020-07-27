import React from "react";
import "../styles/inputForm.css";

const InputForm = () => {
  return (
    <div className="input-component">
      <form className="input-form">
        <i className="fa fa-search" aria-hidden="true" />

        <input
          id="search"
          name="search"
          type="text"
          placeholder="Enter ingredients"
        />
      </form>
    </div>
  );
};
export default InputForm;
