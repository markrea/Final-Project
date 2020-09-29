import React, { useState } from "react";
import Proptypes from "prop-types";
import Loader from "react-loader-spinner";
import getRecipes2 from "../../requests/getRecipes2";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import "../../styles/Search.css";
// eslint-disable-next-line import/no-named-as-default-member
import SearchForm from "./SearchForm";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState("");
  const [diet, setDiet] = useState("");
  const [intolerances, setIntolerances] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    setLoading(true);

    event.preventDefault(); // stops browser reloading
    setSearchResults(await getRecipes2(value, diet, intolerances));
    setLoading(false);
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
      {loading && (
        <Loader
          className="loader"
          type="ThreeDots"
          color="green"
          height={60}
          width={60}
          timeout={3000}
        />
      )}
    </div>
  );
};

Search.propTypes = {
  setSearchResults: Proptypes.objectOf.isRequired,
};
export default Search;
